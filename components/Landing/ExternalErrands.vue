<template>
  <main>
    <div class="bg-white">
      <div class="overflow-hidden lg:pt-32 sm:pt-14">
        <div class="bg-gray-800 pb-44">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="relative pb-16 pt-48 sm:pb-24">
              <div class="pb-20 lg:pb-0">
                <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-white md:text-5xl"
                  data-aos="fade-up">
                  Focus on
                  <br>
                  what matters.
                </h2>
                <p class="mt-4  text-white max-w-sm" data-aos="fade-up">Lets run your errands to local markets around,
                  so you can
                  focus on
                  what matters. Currently we support errands to <span class="text-white font-semibold"> Mushiin Market
                    Only</span></p>
                <div class="mt-6 text-base" data-aos="fade-up">
                  <button @click="showModal = true" class="font-semibold text-white" data-aos="fade-up">Send us an
                    errand
                    <span aria-hidden="true"> &rarr;</span></button>
                  <!-- <a href="/track.html" class="font-semibold text-white">
                    Track Location of delivery agent
                    <span aria-hidden="true"> &rarr;</span>
                  </a> -->
                </div>
              </div>

              <div class="lg:absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                <div class="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                  <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div class="flex-shrink-0">
                      <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="@/assets/img/market1.jpg"
                        data-aos="fade-up" loading="lazy" alt="">
                    </div>

                    <div class="mt-6 flex-shrink-0 sm:mt-0">
                      <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="@/assets/img/market2.jpg"
                        data-aos="fade-up" loading="lazy" alt="">
                    </div>
                  </div>
                  <div class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div class="flex-shrink-0">
                      <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="@/assets/img/market3.jpg"
                        data-aos="fade-up" loading="lazy" alt="">
                    </div>

                    <div class="mt-6 flex-shrink-0 sm:mt-0">
                      <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="@/assets/img/market4.jpg"
                        data-aos="fade-up" loading="lazy" alt="">
                    </div>
                  </div>
                  <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div class="flex-shrink-0">
                      <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="@/assets/img/market5.jpg"
                        data-aos="fade-up" loading="lazy" alt="">
                    </div>

                    <div class="mt-6 flex-shrink-0 sm:mt-0">
                      <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="@/assets/img/market6.jpg"
                        data-aos="fade-up" loading="lazy" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalsPurchaseModal :isVisible="showModal" @close="showModal = false" />
  </main>
</template>

<script setup lang="ts">
const showModal = ref(false)
</script>
