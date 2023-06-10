<template>
  <div class="py-12 px-6 max-h-[500px] overflow-auto">
    <div class="flex flex-col items-center">
      <div class="flex items-center gap-6">
        <img src="/vatsal-gajjar.jpg" alt="" class="rounded-lg" />
        <h1 class="text-8xl font-bold font-display">Vatsal Gajjar</h1>
      </div>
      <div class="pt-12 pb-10">
        <p class="text-2xl font-body text-center">
          Hey there! 👋 I'm Flutter developer with a Python superpower 💪. In
          just 6 months, I've rocked the coding world with my skills. But hold
          on, there's more to me than lines of code! I'm also a video editing
          maestro. With a dash of humor and a sprinkle of happiness, I'm here to
          code 👨‍💻, create, and make your day brighter. Join me on this tech
          adventure and lets redefine what's possible together! 🤝
        </p>
      </div>
      <div class="flex flex-col items-center gap-4">
        <h2 class="font-display text-4xl font-semibold">My Skills</h2>
        <div class="flex items-center gap-6">
          <img
            v-for="(skill, index) in skills"
            :key="index"
            :src="`/${skill.image}.svg`"
            :alt="skill.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    image: "flutter_language",
    alt: "Flutter Language",
  },
  {
    image: "firebase_language",
    alt: "Firebase Language",
  },
  {
    image: "c++_language",
    alt: "C++ Language",
  },
  {
    image: "dart_language",
    alt: "Dart Language",
  },
  {
    image: "c_language",
    alt: "C Language",
  },
  {
    image: "python_language",
    alt: "Python Language",
  },
];
</script>
