<template>
  <div class="hidden md:block bg-[#252526] w-48 font-body">
    <div>
      <div class="py-3 px-5">
        <p class="uppercase">Explorer</p>
      </div>

      <div>
        <div class="bg-[#3c3c3c] py-2 px-5 uppercase text-sm">My Portfolio</div>
        <ul class="sub-sidebar px-6 py-2 space-y-2">
          <li v-for="(item, index) in items" :key="index">
            <Items :item="item">
              <template #default>
                <router-link :to="item.link" class="flex items-center gap-2">
                  <Image :url="`${item.icon}.svg`" :alt="item.name" />
                  <p class="text-xs">{{ item.name }}</p>
                </router-link>
              </template>
            </Items>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    icon: "projects",
  },
  {
    name: "contact.txt",
    link: "/contact",
    icon: "contact",
  },
];
</script>
