<script setup>
import Marquee from '../components/Marquee.vue';
import Menu from '../components/Menu.vue';

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
    <div class="grid grid-cols-12 grid-rows-2 h-full border-y-2 border-gray-950">

        <div className="col-span-12 border-b-2 border-gray-950 flex justify-center items-center">
            <Marquee />
        </div>

        <div className="col-span-8 row-start-2  border-r-2 border-gray-950">
        </div>

        <div className="col-span-3 col-start-9 row-start-2 border-r-2 border-gray-950">
            <Menu />
        </div>

        <div className="col-start-12 row-start-2">
            <div class="flex justify-center items-center h-full">
                <div class="rotate-90 text-2xl tracking-wide whitespace-nowrap">samayam: <span class="block text-5xl font-medium">{{ currentTime }}</span></div>
            </div>
        </div>

    </div>
</template>