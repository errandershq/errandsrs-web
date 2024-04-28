<template>
  <main class="">
    <LandingHeroSection></LandingHeroSection>
    <LandingMealsCarousel id="meals"></LandingMealsCarousel>
    <section class="max-w-screen-2xl mx-auto space-y-10">
      <div class="flex justify-center items-center flex-col gap-y-2 container px-6 py-6 mx-auto">
        <img src="@/assets/img/location_unserviceable.png" class="h-60 w-60" data-aos="fade-up" />
        <h1 class="text-2xl font-semibold" data-aos="fade-up"> Location Unserviceable</h1>
        <p class="text-center text-gray-600" data-aos="fade-up">We don’t have any services here till now. Try changing location.</p>
      </div>
      <div class="container px-6 py-6 mx-auto">
        <h1 class="font-semibold text-xl font-serif" data-aos="fade-up">Order from popular places like</h1>
        <fieldset class="space-y-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <legend class="sr-only" data-aos="fade-up">Delivery</legend>
          <div v-for="place, idx in popularPlaces" :key="idx" @click="handleSelectedLocation(place)" data-aos="fade-up">
            <label :for="place.value"
              class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
              <div>
                <p class="text-gray-700 text-lg">{{ place.text }}</p>
              </div>

              <input type="radio" name="places" :value="place.value" :id="place.value"
                class="size-5 border-gray-300 text-blue-500" />
            </label>
          </div>
        </fieldset>
      </div>
    </section>
    <LandingExternalErrands id="market"></LandingExternalErrands>
    <LandingSupportSection></LandingSupportSection>
    <LandingAffliators></LandingAffliators>
    <LandingTestimonials></LandingTestimonials>
    <LandingNewsLetter></LandingNewsLetter>
    <CoreFooterSection></CoreFooterSection>
  </main>
</template>
<script setup lang="ts">
const router = useRouter()
const route = useRoute()
import { usePopularPlaces } from '@/composables/cities'
const { popularPlaces } = usePopularPlaces()
// onMounted(() => {
//   const router = useRouter()
//   router.push('/login');
// });
const handleSelectedLocation = (place: any) => {
  router.push({path: '/resturant', query: { type: place.value}})
  // router.push({ path: route.path, query: { location: place.value } })
}
</script>