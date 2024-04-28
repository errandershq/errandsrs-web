<template>
    <main class="space-y-6 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="flex justify-between items-center">
            <div class="">
                <h1 class="text-2xl font-semibold">Table d'hôte from {{ route.query.type }}</h1>
            </div>
            <div class="flex justify-center items-center gap-x-4">
                <button title="left arrow" data-aos="fade-up" @click="prevSlide"
                    class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <!-- <button @click="nextSlide" class=""> <img src="@/assets/icons/testimonial-greater.svg"
                            class="w-10 h-10" alt="" /></button> -->
                <button title="right arrow" data-aos="fade-up" @click="nextSlide"
                    class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="relative flex items-center justify-center ">
            <!-- Navigation Buttons -->
            <div class="flex overflow-hidden">
                <div class="flex transition-transform ease-in-out duration-500 gap-x-10"
                    :style="{ 'transform': `translateX(-${currentIndex * 100 / pairs.length}%)` }">
                    <div @click="addToCart(pair)" v-for="(pair, index) in pairs" :key="index"
                        class="flex gap-x-10 justify-center min-w-full">
                        <div class="group relative testimonial-card" v-for="(pair, index) in pairs" :key="index">
                            <div
                                class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                                <img src="@/assets/img/pasta4.jpg" alt="Hand stitched, orange leather long wallet."
                                    class="h-full w-full object-cover object-center">
                            </div>
                            <h3 class="mt-4 text-lg text-gray-900">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    <!-- {{ pair }} -->
                                    Jollof Rice with Chicken
                                </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500"> A classic Nigerian dish of seasoned rice cooked in a
                                rich tomato and pepper sauce, served with grilled chicken.</p>
                            <p class="mt-1 text-sm font-medium text-gray-900">₦1,500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script setup lang="ts">
const route = useRoute()
const testimonials = ref([]) as any
const currentIndex = ref(0) as any
const pairs = computed(() => {
    let result = [] as any;
    for (let i = 0; i < testimonials.value.length; i += 6) {
        result.push(testimonials.value.slice(i, i + 3));
    }
    return result;
})

const loadTestimonials = () => {
    import('@/static/testimonials.json')
        .then((res) => {
            testimonials.value = res.default;
        })
        .catch((err) => console.error("Failed to load testimonials:", err));
}
const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % pairs.value.length;
}
const prevSlide = () => {
    currentIndex.value = currentIndex.value - 1 < 0 ? pairs.value.length - 1 : currentIndex.value - 1;
}

onMounted(() => {
    loadTestimonials();
    setInterval(nextSlide, 3000); // Change slides every 3 seconds
})
const router = useRouter()
const addToCart = (itm) => {
    console.log(itm)
    router.push('/resturant/product')
}
</script>

<style scoped>
.carousel-container {
    max-width: 70%;
    margin: auto;
}

.testimonial-card {
    width: calc(50% - 1rem);
    /* Adjust based on your needs */
}

.bg-light-shade {
    background-color: #f7fafc;
    /* Tailwind CSS light shade */
}
</style>