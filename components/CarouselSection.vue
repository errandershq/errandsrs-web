<template>
    <div class="relative flex items-center">
      <button @click="prev" :disabled="currentIndex === 0" class="absolute left-0 z-10">
        Prev
      </button>
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="card in displayedCards" :key="card.id" class="w-full flex-none">
            <div class="p-4">
              <img :src="card.image" alt="" class="h-40 mx-auto">
              <h3 class="text-lg font-bold">{{ card.meal }}</h3>
              <p>{{ card.description }}</p>
              <p class="text-lg font-semibold">{{ card.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <button @click="next" :disabled="currentIndex >= maxIndex" class="absolute right-0 z-10">
        Next
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import hero5 from '@/assets/img/hero5.png'
  import { ref, computed } from 'vue';
  
  interface Card {
    id: number;
    meal: string;
    description: string;
    price: string;
    image: string;
  }

  const cards = ref([
    {
    id: 1,
    meal: 'Meal 1',
    description: 'Meal 1 Test',
    price: '60,0000',
    image: hero5
  },
  {
    id: 1,
    meal: 'Meal 1',
    description: 'Meal 1 Test',
    price: '60,0000',
    image: hero5
  },
  {
    id: 1,
    meal: 'Meal 1',
    description: 'Meal 1 Test',
    price: '60,0000',
    image: hero5
  },
  {
    id: 1,
    meal: 'Meal 1',
    description: 'Meal 1 Test',
    price: '60,0000',
    image: hero5
  },
  {
    id: 1,
    meal: 'Meal 1',
    description: 'Meal 1 Test',
    price: '60,0000',
    image: hero5
  },
  {
    id: 1,
    meal: 'Meal 1',
    description: 'Meal 1 Test',
    price: '60,0000',
    image: hero5
  },
  {
    id: 1,
    meal: 'Meal 1',
    description: 'Meal 1 Test',
    price: '60,0000',
    image: hero5
  },
  {
    id: 1,
    meal: 'Meal 1',
    description: 'Meal 1 Test',
    price: '60,0000',
    image: hero5
  },
  {
    id: 1,
    meal: 'Meal 1',
    description: 'Meal 1 Test',
    price: '60,0000',
    image: hero5
  },
  {
    id: 1,
    meal: 'Meal 1',
    description: 'Meal 1 Test',
    price: '60,0000',
    image: hero5
  }
  ])
  
  
//   const props = defineProps<{
//     cards: Card[];
//   }>();
  
  const currentIndex = ref(0);
  const cardsPerFrame = 4;
  const maxIndex = computed(() => Math.ceil(cards.value.length / cardsPerFrame) - 1);
  
  const displayedCards = computed(() => cards.value.slice(currentIndex.value * cardsPerFrame, (currentIndex.value + 1) * cardsPerFrame));
  
  function next() {
    if (currentIndex.value < maxIndex.value) {
      currentIndex.value++;
    }
  }
  
  function prev() {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  }
  </script>
  
  <style scoped>
  button {
    all: unset;
    padding: 1rem;
    cursor: pointer;
  }
  </style>
  