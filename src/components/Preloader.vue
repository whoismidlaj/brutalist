<template>
    <div class="preloader absolute top-0 left-0 h-[100dvh] w-[100dvw] flex justify-end items-end p-10 bg-black z-50">
      <div class="text-8xl md:text-[15rem] leading-none">{{ loadingPercentage }}%</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const loadingPercentage = ref(0);
  
  const simulateLoading = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      loadingPercentage.value = Math.min(progress, 100);
  
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 20);
  };
  
  onMounted(() => {
    simulateLoading();
  });
  </script>