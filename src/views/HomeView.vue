<template>
  <div class="p-4 lg:p-16 max-h-[600px] overflow-auto">
    <img
      src="/vatsal-gajjar.jpg"
      alt="vatsal-gajjar"
      class="mx-auto rounded-lg lg:mx-0"
    />
    <div class="text-center pt-10 space-y-7 lg:text-left">
      <h1 class="text-4xl lg:text-7xl font-light">Vatsal Gajjar</h1>
      <p class="text-sm lg:text-base font-body text-[#BDBDBD]">
        Hey there! I’m a developer with Flutter and Python superpower. In just 6
        months, I’ve rocked the coding world with my skills. But hold on,
        there’s more to me than lines of code! I’m also a video editing maestro.
        With a dash of humor and a sprinkle of happiness, I’m here to code,
        create and make your day brighter. Join me on this tech adventure and
        lets redefine what’s possible together!
      </p>
    </div>

    <div class="pt-6 md:pt-16">
      <div class="flex flex-col items-center gap-8 lg:flex-row">
        <p class="text-2xl lg:text-3xl font-medium">My Skills</p>
        <div class="flex items-center gap-4 lg:gap-5">
          <Image
            v-for="(skill, index) in skills"
            :key="index"
            :url="skill.icon"
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
    icon: "flutter_language.svg",
    alt: "flutter_language",
  },
  {
    icon: "firebase_language.svg",
    alt: "firebase_language",
  },
  {
    icon: "c++_language.svg",
    alt: "c++_language",
  },
  {
    icon: "dart_language.svg",
    alt: "dart_language",
  },
  {
    icon: "c_language.svg",
    alt: "c_language",
  },
  {
    icon: "python_language.svg",
    alt: "python_language",
  },
];
</script>
