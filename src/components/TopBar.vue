<template>
  <div class="top-bar font-body">
    <ul class="flex overflow-auto">
      <li v-for="(item, index) in items" :key="index">
        <router-link :to="item.link">
          <p class="text-xs md:text-base px-8 md:px-16 py-2">
            {{ item.name }}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
