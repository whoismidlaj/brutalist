<script setup>
import { ref, onMounted } from 'vue';

const jsonData = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('../src/data/data.json');
    jsonData.value = await response.json();
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
});
</script>

<template>
    <div className="col-span-8 row-start-2 border-r-2 border-white">
        <Vue3Marquee class="h-full" :duration="20" :clone="true">
            <div class="relative aspect-square h-full" v-for="item in jsonData" :key="item.id">
                <img class="h-full" :src="item.image" />
                <div class="absolute top-0 left-0 w-full h-full flex items-end p-5 bg-black bg-opacity-50">
                    <h3 class="text-2xl">{{ item.title }}</h3>
                </div>
            </div>
        </Vue3Marquee>
    </div>
</template>