<script setup>
import { ref, onMounted } from 'vue';
import { createClient } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

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

const selectedProject = ref(1);
const selectProject = (projectId) => {
  selectedProject.value = projectId;
};
</script>

<template>
    <div class="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-full border-y-2 border-white">
        <div class="border-b-2 md:border-b-2 md:border-r-2 overflow-hidden">
            <img :class="{ 'hidden': selectedProject !== project.fields.id }" v-bind:class="project.fields.id" :key="project.fields.id" v-for="project in projects" :src="project.fields.image.fields.file.url" class="h-full object-cover" />
        </div>
        <div class="overflow-y-auto">
            <a :key="project.fields.id" :class="{ 'bg-white text-black': selectedProject === project.fields.id }" :id="project.fields.id" href="#" @click="selectProject(project.fields.id)" v-for="project in projects" class="flex p-6 md:p-8 justify-center items-center text-3xl md:text-5xl hover:bg-white hover:text-black border-b-2 border-white">{{ project.fields.title }}</a>
        </div>
    </div>
</template>