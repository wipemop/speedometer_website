<template>
  <div
      class="bg-orange-600 bg-opacity-90  min-h-screen flex flex-col bg-cover bg-center"
      style="background-image: url('assets/image.png')"
  >
    <!-- Header Section -->
    <!-- Main Content -->
    <main class="flex-grow container mx-auto px-4 py-12 space-y-12">
      <!-- Speed Insights Section -->
      <div class="bg-orange-600 text-yellow-300 font-bold">
        <div class="container mx-auto px-4 py-12 text-center">
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-green-700 p-6 rounded-xl shadow-xl border-4 border-green-700">
              <h2 class="text-3xl">Track Your Speed</h2>
              <p class="mt-2">Analyze your movement and improve your times in races, puzzles, and flight challenges.</p>
            </div>

            <div class="bg-green-700 p-6 rounded-xl shadow-xl border-4 border-green-700">
              <h2 class="text-3xl">Custom Tracks</h2>
              <p class="mt-2">Define start & endpoints, set checkpoints, and measure your best runs!</p>
            </div>
          </div>

          <div class="mt-12">
            <a href="https://github.com/wipemop/simple_speedometer" class="px-8 py-4 bg-red-600 text-white text-xl rounded-lg shadow-lg hover:bg-red-700">Download Now</a>
          </div>
        </div>
      </div>

      <!-- Online Configuration Tool Section -->
      <section class="bg-orange-700 bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-yellow-300 mb-4">Custom Track Configuration</h2>
        <p class="text-yellow-300 mb-4">
          Easily set up your custom tracks by defining start and endpoint locations, plus all the essential checkpoints you must hit.
          Visualize your checkpoints with an in-game overlay look to maximize your training.
        </p>
        <div class="mt-6">
          <!-- Visual Overlay Simulation -->
          <div class="relative w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
            <img
                src="assets/image.png"
                alt="Checkpoint Overlay Visual"
                class="object-cover w-full h-full opacity-75"
            />
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span class="bg-red-600 text-white px-4 py-2 rounded-lg text-xl font-bold shadow-lg">
                In-Game Overlay
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Installation Section -->
      <section class="text-center">
        <div class="bg-orange-700 bg-opacity-90 p-8 rounded-lg shadow-lg inline-block">
          <h2 class="text-3xl font-bold text-yellow-300 mb-4">Easy Installation</h2>
          <p class="text-yellow-300 mb-4">
            Install quickly via the Nexus Plugin Loader and get racing in minutes.
          </p>
          <a class="bg-red-600 text-yellow-300 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
          href="https://github.com/wipemop/simple_speedometer">
            Get Started Now
          </a>
        </div>
      </section>
    </main>
  </div>
</template>
