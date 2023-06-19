<template>
  <div class="top-bar font-body">
    <ul class="flex overflow-auto">
      <li v-for="(item, index) in items" :key="index">
        <Items>
          <template #default>
            <router-link :to="item.link">
              <p class="text-base px-16 py-2">
                {{ item.name }}
              </p>
            </router-link>
          </template>
        </Items>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Items from "@/components/Items.vue";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
