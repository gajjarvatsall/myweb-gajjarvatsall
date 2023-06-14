<template>
  <h2 class="text-4xl font-semibold">{{ title }}</h2>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
