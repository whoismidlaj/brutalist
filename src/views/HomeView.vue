<script setup>
import { ref } from "vue";
import Marquee from "../components/Marquee.vue";
import Clock from "../components/Clock.vue";
import Menu from "../components/Menu.vue";

import Works from "../components/HomeComponents/Works.vue";
import About from "../components/HomeComponents/About.vue";
import Contact from "../components/HomeComponents/Contact.vue";
</script>

<template>
    <div class="grid grid-cols-12 grid-rows-3 md:grid-rows-2 h-full border-y-2 border-white">
        <Marquee />
        <div
            className="col-span-12 md:col-span-8 row-start-2 border-b-2 md:border-b-0 md:border-r-2 border-white h-full overflow-y-auto">
            <Works />
        </div>
        <Menu />
    <Clock />
</div>
</template>