<template>
  <div class="flex">
    <div class="bg-[#3c3c3c] w-fit">
      <div v-for="(link, index) in links" :key="index">
        <router-link :to="link.link" v-if="link.link">
          <img
            class="px-2 md:px-4 py-5 hover:scale-110"
            :src="`/${link.icon}.svg`"
            :alt="link.icon"
          />
        </router-link>
        <a v-else :href="link.anchor">
          <img
            class="px-2 md:px-4 py-5 hover:scale-110"
            :src="`/${link.icon}.svg`"
            :alt="link.icon"
          />
        </a>
      </div>
    </div>

    <!-- Sub Sidebar -->
    <SubSidebar />
  </div>
</template>

<script setup>
import SubSidebar from "@/components/sidebar/sub.vue";

const links = [
  {
    icon: "home",
    link: "/",
  },
  {
    icon: "github",
    anchor: "/",
  },
  {
    icon: "linkedin",
    anchor: "/",
  },
  {
    icon: "twitter",
    anchor: "/",
  },
  {
    icon: "instagram",
    anchor: "/",
  },
];
</script>
