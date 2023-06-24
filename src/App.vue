<template>
  <main class="bg-image p-4 md:p-6">
    <div class="bg-[#1e1e1e] rounded-2xl h-full overflow-hidden text-white">
      <div
        class="w-full flex items-center justify-center lg:justify-between text-center py-2 uppercase font-body bg-[#3c3c3c]"
      >
        <div class="hidden md:flex items-center gap-2 px-5">
          <div
            v-for="(color, index) in colors"
            :key="index"
            class="w-2 h-2 rounded-full"
            :class="`${color.color}`"
          />
        </div>
        <p>My Portfolio</p>
        <div class="hidden md:block"></div>
      </div>
      <div class="flex">
        <!-- Sidebar -->
        <Sidebar />

        <div class="w-[300px] md:w-full">
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
  {
    name: "contact.txt",
    link: "/contact",
    icon: "contact",
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
