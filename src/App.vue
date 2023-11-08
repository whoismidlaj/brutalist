<script setup>
import { RouterLink, RouterView } from "vue-router";
import Marquee from "./components/Marquee.vue";
import Menu from "./components/Menu.vue";
import Clock from "./components/Clock.vue";

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
  <div
    v-if="!loading"
    class="grid grid-cols-12 grid-rows-3 md:grid-rows-2 h-full border-y-2 border-white"
  >
    <Marquee />
    <div
      className="col-span-12 md:col-span-8 row-start-2 border-b-2 md:border-b-0 md:border-r-2 border-white overflow-y-auto"
    >
      <RouterView />
    </div>
    <Menu />
    <Clock />
  </div>
</template>
