<template>
  <div
    v-if="skill"
    class="flex flex-col items-center gap-7 bg-[#424242] p-4 lg:p-6 rounded-2xl lg:flex-row"
  >
    <div class="w-1/2 lg:flex-[0_0_25%]">
      <Image
        class="w-full lg:w-4/5 mx-auto"
        :url="skill.image"
        :alt="skill.alt"
      />
    </div>
    <div>
      <h4 class="text-2xl lg:text-4xl font-medium pb-4">{{ skill.name }}</h4>
      <p
        class="text-base lg:text-lg border-b border-[#757575] pb-2 lg:pb-4 text-[#E0E0E0]"
      >
        {{ skill.level }} Level
      </p>
      <p class="pt-2 lg:pt-4 font-light text-sm lg:text-base text-[#BDBDBD]">
        {{ skill.content }}
      </p>
    </div>
  </div>

  <div
    v-if="experience"
    class="flex flex-col bg-[#424242] rounded-2xl overflow-hidden lg:flex-row"
  >
    <div class="space-y-4 flex-[0_0_60%] p-5">
      <h4 class="text-xl lg:text-3xl font-medium">{{ experience.text }}</h4>
      <p class="text-sm text-[#BDBDBD] font-light">
        {{ experience.content }}
      </p>
    </div>
    <div class="relative w-full">
      <Image
        class="w-full h-full"
        :url="experience.image"
        :alt="experience.alt"
      />
      <Image
        class="absolute -bottom-6 -right-4 rounded-full border-8 border-black w-40"
        :url="experience.image2"
        :alt="experience.alt"
      />
    </div>
  </div>

  <div
    v-if="project"
    class="flex flex-col bg-[#424242] rounded-2xl overflow-hidden lg:flex-row"
  >
    <div class="space-y-4 flex-[0_0_60%] p-5 rounded-tl-2xl rounded-bl-2xl">
      <h4 class="text-xl lg:text-3xl font-medium">{{ project.title }}</h4>
      <p class="text-sm text-[#BDBDBD]">
        GitHub Link:
        <a
          class="font-medium hover:underline"
          :href="project.link"
          target="_blank"
          >{{ project.text }}</a
        >
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
