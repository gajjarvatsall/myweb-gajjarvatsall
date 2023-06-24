<template>
  <div class="top-bar font-body">
    <ul class="grid grid-cols-2 gap-1 p-2 md:p-0 md:flex md:gap-0">
      <li v-for="(item, index) in items" :key="index" class="text-center">
        <router-link :to="item.link">
          <p
            class="text-xs md:text-base px-8 md:px-16 py-2 rounded-md md:rounded-none"
          >
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
