<template>
  <div
    v-if="skill"
    class="flex items-center gap-7 bg-[#424242] p-6 rounded-2xl"
  >
    <div class="flex-[0_0_25%]">
      <Image class="w-4/5 mx-auto" :url="skill.image" :alt="skill.alt" />
    </div>
    <div>
      <h4 class="text-4xl font-medium pb-4">{{ skill.name }}</h4>
      <p class="text-lg border-b border-[#757575] pb-4 text-[#E0E0E0]">
        {{ skill.level }} Level
      </p>
      <p class="pt-4 font-light text-base text-[#BDBDBD]">
        {{ skill.content }}
      </p>
    </div>
  </div>

  <div v-if="experience" class="flex">
    <div
      class="space-y-4 flex-[0_0_60%] bg-[#424242] p-5 rounded-tl-2xl rounded-bl-2xl"
    >
      <h4 class="text-3xl font-medium">{{ experience.text }}</h4>
      <p class="text-base text-[#BDBDBD] font-light">
        {{ experience.content }}
      </p>
    </div>
    <div class="relative w-full">
      <Image
        class="w-full h-full rounded-tr-2xl rounded-br-2xl"
        :url="experience.image"
        :alt="experience.alt"
      />
      <Image
        class="absolute -bottom-8 -right-4 rounded-full border-8 border-black w-40"
        :url="experience.image2"
        :alt="experience.alt"
      />
    </div>
  </div>

  <div v-if="project" class="flex">
    <div
      class="space-y-4 flex-[0_0_60%] bg-[#424242] p-5 rounded-tl-2xl rounded-bl-2xl"
    >
      <h4 class="text-3xl font-medium">{{ project.title }}</h4>
      <p class="text-sm text-[#BDBDBD] font-medium">
        {{ project.text }}
      </p>
      <p
        class="border-t border-[#757575] pt-4 text-base text-[#BDBDBD] font-light"
      >
        {{ project.content }}
      </p>
    </div>
    <div class="relative w-full">
      <Image
        class="w-full h-full rounded-tr-2xl rounded-br-2xl"
        :url="project.image"
        :alt="project.alt"
      />
      <Image
        class="absolute -bottom-6 -right-4 rounded-full border-8 border-black w-40"
        :url="project.image2"
        :alt="project.alt"
      />
    </div>
  </div>
</template>

<script setup>
import Image from "@/components/Image.vue";

defineProps({
  skill: {
    type: Object,
    default: () => {},
  },
  experience: {
    type: Object,
    default: () => {},
  },
  project: {
    type: Object,
    default: () => {},
  },
});
</script>
