<template>
  <div
      class="min-h-screen flex flex-col bg-cover bg-center"
  >
    <header class="bg-black bg-opacity-90 p-4 text-orange-600 text-center shadow-2xl">
      <h1 class="text-4xl font-normal">Simple Speedometer</h1>
      <sub>by Toxxa</sub>
      <a class="absolute right-5 top-5"
        href="https://github.com/wipemop/simple_speedometer">
          <img src="assets/github-mark.svg" class="max-h-[40px]">
      </a>
    </header>
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <footer class="bg-black bg-opacity-90 p-4 text-orange-600 text-center pb-20">
      <p class="text-sm font-extralight">&copy; 2025 Toxxa</p>
    </footer>
  </div>
</template>

<script setup>
useHead({
  link: [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {rel: "preconnect", href: "https://fonts.googleapis.com", crossorigin: true},
    {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bangers&display=swap"},
  ]
})
</script>

<style>

/* If your Tailwind config does not already include the Bangers font, add a custom class */
body {
  font-family: "Bangers", system-ui;
  letter-spacing: 0.10em;
}
</style>
