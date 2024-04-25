<template>
  <main class="bg-white dark:bg-gray-900">
    <section class="container px-6 py-10  mx-auto space-y-8">
      <div class="text-center pt-10">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white" data-aos="flip-left">
          Special Meals of the day!</h1>

        <p class="max-w-lg mx-auto mt-4 text-gray-500" data-aos="flip-left">
          Check our specials of the day and get discounts on all our meals and swift delivery to what ever location
          within CMUL (College Of Medicine, Idi-araba).
        </p>
      </div>

      <div class="carousel-container overflow-hidden relative">
        <div class="carousel-track flex gap-x-5" :style="{ transform: `translateX(-${offset}px)` }">
          <div class="image-item flex-none w-full relative" v-for="(image, index) in allImages" :key="index">
            <img :src="image.imgUrl"
              class="h-full w-full object-cover rounded-xl object-center" alt="">
            <div class="w-64 -mt-10 overflow-hidden rounded-tr-lg shadow-lg md:w-64 dark:bg-gray-800 absolute bottom-0">
              <h3 class="py-2.5 font-medium tracking-wide text-center text-sm text-gray-800 uppercase dark:text-white">
                {{ image.name
                }}
              </h3>

              <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-medium text-gray-800 dark:text-gray-200">{{ image.price }}</span>
                <button
                  class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add
                  to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import pasta1 from '@/assets/img/pasta1.jpg'
import pasta2 from '@/assets/img/pasta2.jpg'
import pasta3 from '@/assets/img/pasta3.jpg'
import pasta4 from '@/assets/img/pasta4.jpg'
import meal1 from '@/assets/img/meal1.jpg'
import meal2 from '@/assets/img/meal2.jpg'
import meal3 from '@/assets/img/meal3.jpg'
const images = ref([{
  imgUrl: pasta1,
  name: 'Pata and pepper sauce',
  price: '5,000'
}, {
  imgUrl: pasta2,
  name: 'Pasta Tomatoes',
  price: '5,000'
},
{
  imgUrl: pasta3,
  name: 'Jellof pasta',
  price: '5,000'
},
{
  imgUrl: pasta4,
  name: 'Hot smoking pasta',
  price: '5,000'
},
{
  imgUrl: meal1,
  name: 'Sausage',
  price: '5,000'
},
{
  imgUrl: meal2,
  name: 'Burger sauce',
  price: '5,000'
},
{
  imgUrl: meal3,
  name: 'Chicken Suya',
  price: '5,000'
}
])
const offset = ref(0)
const itemWidth = ref(300)
const scrollSpeed = ref(1)
const interval = ref(null) as any

const allImages = computed(() => {
  return [...images.value, ...images.value]
})

const startScrolling = () => {
  interval.value = window.setInterval(() => {
    if (offset.value >= itemWidth.value * images.value.length) {
      offset.value = 0; // Reset to start when end is reached
    } else {
      offset.value += scrollSpeed.value;
    }
  }, 20);
}

onMounted(() => {
  startScrolling();
})

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
})
</script>

<style scoped>
.carousel-container {
  width: 100%;
  height: 400px;
  /* Adjust as needed */
}

.carousel-track {
  will-change: transform;
  min-width: max-content;
}

.image-item {
  width: 300px;
  /* Ensure this matches `itemWidth` in script */
  flex-shrink: 0;
}
</style>
