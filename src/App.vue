<template>
  <main class="bg-image p-4 md:p-10">
    <div class="bg-[#1e1e1e] rounded-lg overflow-hidden h-screen text-white">
      <div class="w-full text-center py-2 uppercase font-body bg-[#3c3c3c]">
        My Portfolio
      </div>
      <div class="flex h-full">
        <Sidebar />
        <div class="w-full">
          <div class="top-bar font-body">
            <ul class="flex overflow-auto">
              <li v-for="(item, index) in items" :key="index">
                <Items>
                  <template #default>
                    <router-link :to="item.link">
                      <p class="text-xs md:text-sm px-4 md:px-6 py-2">
                        {{ item.name }}
                      </p>
                    </router-link>
                  </template>
                </Items>
              </li>
            </ul>
          </div>
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Sidebar from "@/components/sidebar/Index.vue";
import Items from "@/components/Items.vue";

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
  background: url("../public/bg-image.jpg") no-repeat center center;
}
</style>
