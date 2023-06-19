<template>
  <div class="flex items-center gap-5">
    <img src="/title-icon.svg" alt="title-icon" />
    <h2 class="text-5xl font-semibold">
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
