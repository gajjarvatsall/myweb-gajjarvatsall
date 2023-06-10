<template>
  <div class="py-12 px-6 overflow-auto">
    <div class="font-display space-y-5">
      <h2 class="text-4xl font-semibold">Education</h2>
      <div class="experience flex items-center gap-24">
        <div
          class="p-3 bg-[#3C3C3C] rounded-lg w-fit z-10"
          v-for="(edu, index) in education"
          :key="index"
        >
          <div class="flex items-center justify-between">
            <p>{{ edu.year }}</p>
            <img src="/check.svg" alt="check-mark" />
          </div>
          <div class="space-y-1">
            <h4 class="font-body">{{ edu.place }}</h4>
            <p>{{ edu.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const education = [
  {
    year: "2007-2020",
    place: "TERF English School",
    location: "Ahmedabad",
  },
  {
    year: "2020-2023",
    place: "Silver Oak University",
    location: "Ahmedabad",
  },
];
</script>
