<script setup>
import { RouterLink, RouterView } from "vue-router";

import Preloader from "./components/Preloader.vue";
import { ref, onMounted } from "vue";

const loading = ref(true);

// Simulate loading progress or replace with actual loading logic
onMounted(() => {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    if (progress >= 100) {
      clearInterval(interval);
      // Loading is complete, hide the preloader
      loading.value = false;
    }
  }, 20);
});
</script>

<template>
  <Preloader v-if="loading" />
  <RouterView v-if="!loading" />
</template>
