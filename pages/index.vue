<template>
  <div
      class="bg-black bg-opacity-90  min-h-screen flex flex-col bg-cover bg-center"
      style="background-image: url('assets/image.png')"
  >
    <!-- Header Section -->
    <!-- Main Content -->
    <main class="flex-grow container mx-auto px-4 py-12 space-y-12">
      <!-- Speed Insights Section -->
      <div class="bg-black text-orange-600 font-bold">
        <div class="container mx-auto px-4 py-12 text-center">
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-neutral-950 p-6 rounded-xl shadow-xl border-4 border-neutral-950">
              <h2 class="text-3xl">Measure Your Speed</h2>
              <p class="mt-2">Display your velocity live in-game using one of three different units on a fancy, lightly customizeable dial.</p>
            </div>

            <div class="bg-neutral-950 p-6 rounded-xl shadow-xl border-4 border-neutral-950">
              <h2 class="text-3xl">Choose Your Timer</h2>
              <p class="mt-2">Run off into the sunset with no clear end, define start and finish on the fly or choose a Coordinate Set and hunt your best time!</p>
            </div>
          </div>

          <!-- <div class="mt-12">
            <a href="https://github.com/wipemop/simple_speedometer" class="px-8 py-4 bg-red-600 text-white text-xl rounded-lg shadow-lg hover:bg-red-700">Download Now</a>
          </div> -->
        </div>
      </div>

      <!-- Online Configuration Tool Section -->
      <section class="bg-neutral-950 bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-orange-600 mb-4">Setup and share your own Coordinate Sets</h2>
        <p class="text-orange-600 mb-4">
          Make your own Coordinate Sets by defining start, checkpoint and finish coordinates and storing them online. Share your Sets with others and compete for best times!
          Display your selected Set ingame accurate to perspective as an overlay.
        </p>
        <div class="mt-6">
          <!-- Visual Overlay Simulation -->
          <div class="relative w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
            <img
                src="assets/speedometer_example.jpg"
                alt="Checkpoint Overlay Visual"
                class="object-cover w-full h-full opacity-100"
            />
            <!-- <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span class="bg-neutral-950 text-orange-600 px-4 py-2 rounded-lg text-xl font-bold shadow-lg">
                In-Game Overlay
              </span>
            </div> -->
          </div>
        </div>
      </section>

      <!-- Installation Section -->
      <section class="text-center">
        <div class="bg-neutral-950 bg-opacity-90 p-8 rounded-lg shadow-lg inline-block">
          <h2 class="text-3xl font-bold text-orange-600 mb-4">Easy Installation</h2>
          <p class="text-orange-600 mb-4">
            Get the Simple Speedometer directly in-game via the Nexus AddOn Library or download it manually from my GitHub-Repository.
          </p>
          <a class="bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
          href="https://github.com/wipemop/simple_speedometer">
            Simple Speedometer on GitHub
          </a>
        </div>
      </section>
    </main>
  </div>
</template>
