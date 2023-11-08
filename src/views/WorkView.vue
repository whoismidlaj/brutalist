<!-- <script setup>
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
</script> -->

<template>
        <Vue3Marquee class="h-full" :duration="20" :clone="true">
            <div class="relative aspect-square h-full" v-for="project in projects">
                <img class="h-full object-cover" :src="project.fields.image.fields.file.url" />
                <div class="absolute top-0 left-0 w-full h-full flex items-end p-5 bg-black bg-opacity-50">
                    <h3 class="text-2xl">{{ project.fields.title }}</h3>
                </div>
            </div>
        </Vue3Marquee>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { createClient } from 'contentful';

const spaceId = import.meta.env.VUE_APP_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN;

const projects = ref([]);
const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

onMounted(async () => {
  try {
    const response = await client.getEntries({
      content_type: 'project',
    });
    projects.value = response.items;
  } catch (error) {
    console.error(error);
  }
});
</script>


