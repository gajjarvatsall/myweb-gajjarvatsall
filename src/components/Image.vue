<template>
  <img :src="`/${url}`" />
</template>

<script setup>
defineProps({
  url: {
    type: String,
    default: () => {},
  },
});
</script>
