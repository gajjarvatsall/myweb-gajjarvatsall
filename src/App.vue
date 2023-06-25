<template>
  <main class="bg-image p-4 md:p-6">
    <div
      class="bg-[#1e1e1e] rounded-2xl md:h-screen overflow-hidden text-white"
    >
      <div
        class="w-full flex items-center justify-between text-center p-2 uppercase font-body bg-[#3c3c3c]"
      >
        <div class="flex items-center gap-1 md:gap-2 md:px-5">
          <div
            v-for="(color, index) in colors"
            :key="index"
            class="w-2 h-2 rounded-full"
            :class="`${color.color}`"
          />
        </div>
        <p>My Portfolio</p>
        <div></div>
        <!-- <div class="relative md:hidden">
          <span
            ><IconArrowDown
              @click="openDropdown()"
              :class="{ 'border border-white rounded-full': isOpen }"
          /></span>
          <div v-show="isOpen" class="absolute right-0 top-5">
            <div
              class="bg-white text-black font-medium text-sm py-2 px-4 rounded-2xl"
            >
              <ul class="space-y-2">
                <li v-for="(link, index) in links" :key="index">
                  <a
                    :href="link.link"
                    target="_blank"
                    class="flex items-center gap-2"
                  >
                    <span>{{ link.text }}</span>
                    <IconArrowUpRight />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
      <div class="flex h-full">
        <!-- Sidebar -->
        <Sidebar />

        <div class="w-11/12 md:w-full">
          <!-- TopBar -->
          <TopBar :items="items" />

          <RouterView v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Sidebar from "@/components/sidebar/Index.vue";
import TopBar from "@/components/TopBar.vue";
import IconArrowDown from "@/components/Icon/ArrowDown.vue";
import IconArrowUpRight from "@/components/Icon/ArrowUpRight.vue";
import { ref } from "vue";

const items = [
  {
    name: "README.md",
    link: "/",
    icon: "readme",
  },
  {
    name: "main.dart",
    link: "/experience",
    icon: "dart",
  },
  {
    name: "projects.py",
    link: "/projects",
    icon: "python",
  },
  

];

const colors = [
  {
    color: "bg-[#F85B5A]",
  },
  {
    color: "bg-[#F8B92C]",
  },
  {
    color: "bg-[#2CC93C]",
  },
];

const links = [
  {
    text: "GitHub",
    link: "https://github.com/gajjarvatsall",
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/gajjarvatsall/",
  },
  {
    text: "Twitter",
    link: "https://twitter.com/gajjarvatsall",
  },
  {
    text: "Instagram",
    link: "https://www.instagram.com/gajjarvatsall/",
  },
];

const isOpen = ref(false);

const openDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss">
.bg-image {
  background: url("../bg-image.jpg") no-repeat center center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
