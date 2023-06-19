<template>
  <div class="p-16 max-h-[500px] overflow-auto">
    <div class="">
      <img src="/vatsal-gajjar.jpg" alt="" class="rounded-lg" />
      <div class="pt-10 space-y-7">
        <h1 class="text-7xl font-light">Vatsal Gajjar</h1>
        <p class="text-base font-body text-[#BDBDBD]">
          Hey there! I’m Flutter developer with a Python superpower. In just 6
          months, I’ve rocked the coding world with my skills. But hold on,
          there’s more to me than lines of code! I’m also a video editing
          maestro. With a dash of humor and a sprinkle of happiness, I’m here to
          code, create and make your day brighter. Join me on this tech
          adventure and lets redefine what’s possible together!
        </p>
      </div>

      <div class="pt-16">
        <div class="flex items-center gap-8">
          <p class="text-3xl font-medium">My Skills</p>
          <div class="flex items-center gap-5">
            <img
              v-for="(skill, index) in skills"
              :key="index"
              :src="`/${skill.icon}.svg`"
              :alt="skill.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    icon: "flutter_language",
    alt: "flutter_language",
  },
  {
    icon: "firebase_language",
    alt: "firebase_language",
  },
  {
    icon: "c++_language",
    alt: "c++_language",
  },
  {
    icon: "dart_language",
    alt: "dart_language",
  },
  {
    icon: "c_language",
    alt: "c_language",
  },
  {
    icon: "python_language",
    alt: "python_language",
  },
];
</script>
