<template>
    <main>
        <ChartsActivitiesChart>
            <template v-slot:title>
                <div class="md:flex space-y-4 md:space-y-0 justify-between items-center">
                    <p class="text-[#777e7c] text-sm md:text-lg font-medium">
                        Revenue Analytics
                    </p>
                    <div class="flex items-center gap-x-3">
                        <select class="text-sm outline-none font-medium bg-gray-100 rounded-md px-2.5 py-2 w-full">
                            <option>online</option>
                            <option>offline</option>
                        </select>
                        <select class="text-sm outline-none font-medium bg-gray-100 rounded-md px-2.5 py-2 w-full">
                            <option>Daily</option>
                            <option>Monthly</option>
                        </select>
                    </div>
                </div>
                <div class="text-3xl font-semibold">
                    2,001<span class="text-xs align-baseline ml-1 text-gray-600">users</span>
                </div>tics
            </template>
        </ChartsActivitiesChart>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'customer-dashboard',
    middleware: 'auth'
})
</script>