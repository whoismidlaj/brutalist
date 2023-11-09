<template>
    <div className="col-span-9 md:col-span-3 col-start-1 md:col-start-9 row-start-3 md:row-start-2 border-r-2 border-white">
        <div class="grid grid-rows-3 h-full">
            <RouterLink class="flex justify-center items-center text-3xl md:text-5xl hover:bg-white hover:text-black border-b-2 border-white" :class="{ 'bg-white text-black': $route.path === '/' }" to="/">Works</RouterLink>
            <RouterLink class="flex justify-center items-center text-3xl md:text-5xl hover:bg-white hover:text-black border-b-2 border-white" :class="{ 'bg-white text-black': $route.path === '/about' }" to="/about">About</RouterLink>
            <RouterLink class="flex justify-center items-center text-3xl md:text-5xl hover:bg-white hover:text-black" :class="{ 'bg-white text-black': $route.path === '/contact' }" to="/contact">Contact</RouterLink>
        </div>
    </div>
</template>