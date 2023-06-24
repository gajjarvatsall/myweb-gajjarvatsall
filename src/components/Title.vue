<template>
  <div class="flex items-center gap-3 lg:gap-5">
    <Image class="w-10 lg:w-auto" url="title-icon.svg" alt="title-icon" />
    <h2 class="text-3xl lg:text-5xl font-semibold">
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
