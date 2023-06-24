<template>
  <div class="flex">
    <div
      class="flex flex-col items-center h-full bg-[#3c3c3c] w-11 px-1 lg:w-16"
    >
      <Image
        class="px-2 md:px-4 py-5 cursor-pointer hover:scale-110"
        url="home.svg"
        alt="home"
        @click="showSidebar()"
      />
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.anchor"
        target="_blank"
      >
        <Image
          class="px-2 md:px-4 py-5 hover:scale-110"
          :url="link.icon"
          :alt="link.icon"
        />
      </a>
    </div>

    <!-- Sub Sidebar -->
    <SubSidebar v-show="isSidebar" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SubSidebar from "@/components/sidebar/sub.vue";

const links = [
  {
    icon: "github.svg",
    anchor: "https://github.com/gajjarvatsall",
  },
  {
    icon: "linkedin.svg",
    anchor: "https://www.linkedin.com/in/gajjarvatsall/",
  },
  {
    icon: "twitter.svg",
    anchor: "https://twitter.com/gajjarvatsall",
  },
  {
    icon: "instagram.svg",
    anchor: "https://www.instagram.com/gajjarvatsall/",
  },
];

const isSidebar = ref(true);

const showSidebar = () => {
  isSidebar.value = !isSidebar.value;
};
</script>
