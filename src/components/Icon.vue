<template>
  <component class="icon" :is="`${name}`" />
</template>

<script setup>
defineProps({
  props: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
.icon {
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
