<template>
  <main class="bg-image px-4 py-6 md:px-6">
    <div class="bg-[#1e1e1e] rounded-2xl overflow-hidden text-white">
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
      </div>
      <div class="flex">
        <!-- Sidebar -->
        <Sidebar />

        <div class="w-11/12 md:w-full h-screen overflow-auto lg:h-auto">
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
