<template>
  <div class="min-h-screen text-white bg-black">
    <div v-if="loading">
      Loading
    </div>
    <div v-for="(set, setName) in config.Sets" :key="setName" class="" v-else>
      <div class="flex items-center justify-between border-b-2 border-neutral-700 bg-neutral-950 px-20">
        <input @input="updateSetName(setName, $event.target.value)" class="text-xl font-semibold border-b w-full m-2 p-2 text-white bg-orange-700 max-w-[500px]" :value="setName"
        placeholder="Set name">
        <div>
          <button @click="removeSet(setName)" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 mr-2">🗑</button>
          <button @click="expanded=set" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400" v-if="expanded != set"> ⮟ </button>
          <button @click="expanded=''" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400" v-else> ⮝ </button>
        </div>
      </div>

      <div v-if="expanded === set" class="bg-gray-900 p-5">
        <h3 class="mt-4 font-semibold text-lg">Map</h3>
        <input type="text" v-model="mapSearch" placeholder="Maps filtern..." class="border-b-2 px-2 py-1 w-full mb-2 bg-orange-700">
        <select class="border-b px-2 py-1 w-full bg-orange-700" type="number" v-model.number="set.MapID" @change="mapSearch=''">
          <option v-for="(map,i) in filteredMaps" :value="parseInt(i)">{{i}}: {{map}}</option>
        </select>

        <h3 class="mt-4 font-semibold text-lg">Start</h3>
        <div class="grid grid-cols-4 gap-2">
          <label>X: <input type="number" v-model.number="set.Start.x" class="border-b px-2 py-1 w-full bg-orange-700"></label>
          <label>Y: <input type="number" v-model.number="set.Start.y" class="border-b px-2 py-1 w-full bg-orange-700"></label>
          <label>Z: <input type="number" v-model.number="set.Start.z" class="border-b px-2 py-1 w-full bg-orange-700"></label>
          <label>Radius: <input type="number" v-model.number="set.Startradius" class="border-b px-2 py-1 w-full bg-orange-700"></label>
        </div>

        <h3 class="mt-4 font-semibold text-lg">Ende</h3>
        <div class="grid grid-cols-4 gap-2">
          <label>X: <input type="number" v-model.number="set.End.x" class="border-b px-2 py-1 w-full bg-orange-700"></label>
          <label>Y: <input type="number" v-model.number="set.End.y" class="border-b px-2 py-1 w-full bg-orange-700"></label>
          <label>Z: <input type="number" v-model.number="set.End.z" class="border-b px-2 py-1 w-full bg-orange-700"></label>
          <label>Radius: <input type="number" v-model.number="set.Endradius" class="border-b px-2 py-1 w-full bg-orange-700"></label>
        </div>
        <h3 class="mt-4 font-semibold text-lg">Checkpoints</h3>
        <div @dragover.prevent @drop="dropCheckpoint(setName, $event)">
          <div v-for="(checkpoint, index) in set.Checkpoints" :key="index"
              class="mt-2 p-3 rounded-lg shadow-md grid grid-cols-4 gap-2 cursor-move border-2 border-orange-700 relative"
              draggable="true"
              @dragstart="dragCheckpoint(setName, index, $event)">
            <label class="py-2">X: <input type="number" v-model.number="checkpoint.Position.x" class="border-b px-2 py-2 w-full bg-orange-700"></label>
            <label class="py-2">Y: <input type="number" v-model.number="checkpoint.Position.y" class="border-b px-2 py-2 w-full bg-orange-700"></label>
            <label class="py-2">Z: <input type="number" v-model.number="checkpoint.Position.z" class="border-b px-2 py-2 w-full bg-orange-700"></label>
            <label class="py-2">Radius: <input type="number" v-model.number="checkpoint.Radius" class="border-b px-2 py-2 w-full bg-orange-700"></label>
            <button @click="removeCheckpoint(setName, index)" class="bg-red-400 text-white px-3 py-1 rounded absolute top-2 right-3">x</button>
          </div>
        </div>
        <div class="text-center">
          <button @click="addCheckpoint(setName)" class="bg-green-700 text-white px-3 py-1 rounded mt-2">Add checkpoint</button>
        </div>
      </div>
    </div>

    <div class="fixed w-full bottom-0 p-5 bg-orange-800 text-center">
      <button @click="addSet" class="bg-green-700 text-white px-4 py-2 rounded mr-3">Add another set</button>
      <button @click="saveConfig" class="bg-orange-500 text-white px-4 py-2 rounded">Save Config</button>
    </div>
  </div>
  <div class="fixed top-4 right-4 bg-orange-900 text-white px-4 py-2 rounded shadow-lg max-w-1/3" v-if="toast"
    :class="{
      'border-b-4 border-green-200': toast.type === 'SUCCESS',
      'border-b-4 border-red-200': toast.type === 'ERROR',
    }">
    <h1>{{toast.title}}</h1>
    {{ toast.message }}
  </div>
</template>

<script setup>
import maps from '~/maps.js'

const route = useRoute()

const config = ref(null);
const loading = ref(true);
const error = ref(null);

const toast = ref(null)

const dragData = ref(null);
const expanded = ref(null);
const mapSearch = ref("");


const setToast = (title, text, type) => {

  toast.value = {
    "type": type,
    "title":title,
    "message": text,
  }

  setTimeout(() => {
    toast.value = null
  }, 5000)
}

const fetchConfig = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch(`/api/config/${route.params.id}`);
    if (!response.ok) {
      setToast("Error saving config", `Error loading config: ${response.status}: ${response.statusText}`, "ERROR")
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    config.value = await response.json();
    setToast("Configuration loaded", `Loaded the latest version of configuration`, "SUCCESS")
  } catch (err) {
    setToast("Error saving config", `Error loading config: ${err.message}`, "ERROR")
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const addSet = () => {
  const setName = prompt("Neuer Set-Name:");
  if (setName) {
    config.value.Sets[setName] = { Checkpoints: [], Start: { x: 0, y: 0, z: 0 }, End: { x: 0, y: 0, z: 0 }, Startradius: 100, Endradius: 100, MapID: 0 };
  }
}

const removeSet = (name) => {
  delete config.value.Sets[name]
}


const dragCheckpoint = (name) => {
  dragData.value = { setName, index };
}


const dropCheckpoint = (setName, event) => {
  if (dragData.value && dragData.value.setName === setName) {
    const checkpoints = config.value.Sets[setName].Checkpoints;
    const draggedItem = checkpoints.splice(dragData.value.index, 1)[0];
    checkpoints.push(draggedItem);
  }
  dragData.value = null;
}

const addCheckpoint = (setName) => {
    config.value.Sets[setName].Checkpoints.push({ Position: { x: 0, y: 0, z: 0 }, Radius: 50 });
}
const removeCheckpoint = (setName, index) =>{
  config.value.Sets[setName].Checkpoints.splice(index, 1);
}


const filteredMaps = computed(() => {
  const search = mapSearch.value.toLowerCase();
  return Object.fromEntries(
      Object.entries(maps).filter(([id, name]) =>
          id.includes(search) || name.toLowerCase().includes(search)
      )
  );
})


const saveConfig = async() => {
  if (!config.value) return;
  error.value = null;

  try {
    const response = await fetch(`/api/config/${route.params.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config.value)
    });

    if (!response.ok) {
      setToast("Error saving config", `Error saving config: ${response.status}: ${response.statusText}`, "ERROR")
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    setToast("Configuration saved", `Configuration was saved successfully, reload it within simple_speedometer`, "SUCCESS")

  } catch (err) {
    setToast("Error saving config", `Error saving config: ${err.message}`, "ERROR")
    error.value = err.message;
  }
}

onMounted(fetchConfig);
watch(() => route.params.id, fetchConfig);

</script>
