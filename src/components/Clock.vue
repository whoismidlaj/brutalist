<script setup>
import { ref, onMounted } from 'vue';

const currentTime = ref('');

onMounted(() => {
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
});

const updateCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12Format = hours % 12 || 12;

  const timeString = `${hour12Format}:${String(minutes).padStart(2, '0')} ${ampm}`;
  currentTime.value = timeString;
};
</script>

<template>
      <div className="col-start-12 md:col-start-12 col-span-3 md:col-span-1 row-start-3 md:row-start-2">
    <div class="flex justify-center items-center h-full">
        <div class="rotate-90 text-xl md:text-2xl tracking-wide whitespace-nowrap">samayam<span class="block text-4xl md:text-5xl font-medium">{{ currentTime }}</span></div>
    </div></div>
</template>