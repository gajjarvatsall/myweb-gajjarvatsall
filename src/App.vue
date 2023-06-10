<template>
  <main class="bg-image p-4 md:p-6 h-screen">
    <div class="bg-[#1e1e1e] rounded-lg overflow-hidden text-white">
      <div class="w-full text-center py-2 uppercase font-body bg-[#3c3c3c]">
        My Portfolio
      </div>
      <div class="flex">
        <!-- Sidebar -->
        <Sidebar />

        <div class="w-full">
          <!-- TopBar -->
          <TopBar :items="items" />

          <RouterView />
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
</script>

<style lang="scss">
.bg-image {
  background: url("../bg-image.jpg") no-repeat center center;
}
</style>
