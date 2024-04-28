<template>
  <div>
    <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true" v-if="isOpen">
      <div class="fixed inset-0 bg-gray-200"></div>
      <div class="fixed inset-0 flex">
        <div class="relative mr-16 flex w-full max-w-xs flex-1">
          <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
            <button @click="isOpen = false" type="button" class="-m-2.5 p-2.5">
              <span class="sr-only">Close sidebar</span>
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
            <div class="flex h-16 shrink-0 items-center">
              <img class="h-8 w-auto" src="@/assets/img/logo.png" alt="Your Company" />
            </div>
            <nav class="flex flex-1 flex-col">
              <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" class="-mx-2 space-y-1">
                    <li>
                      <nuxt-link to="/dashboard/organization" @click="isOpen = false"
                        class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.00084 8.70317C7.94764 8.70233 7.89692 8.68049 7.85974 8.64241C7.82257 8.60434 7.80195 8.55311 7.80237 8.4999C7.80237 8.38786 7.89201 8.29663 8.00084 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M4.55545 8.69677C4.52939 8.69656 4.50362 8.69122 4.47963 8.68105C4.45563 8.67088 4.43386 8.65609 4.41558 8.63751C4.3973 8.61893 4.38286 8.59693 4.37308 8.57277C4.3633 8.54861 4.35838 8.52276 4.35859 8.4967C4.35859 8.38626 4.44662 8.29663 4.55545 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M11.4486 8.69677C11.4226 8.69656 11.3968 8.69122 11.3728 8.68105C11.3488 8.67088 11.3271 8.65609 11.3088 8.63751C11.2905 8.61893 11.276 8.59693 11.2663 8.57277C11.2565 8.54861 11.2516 8.52276 11.2518 8.4967C11.2518 8.38626 11.3398 8.29663 11.4486 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M8.00555 8.70317C8.03204 8.70296 8.05822 8.69754 8.08261 8.68721C8.107 8.67688 8.12911 8.66185 8.14769 8.64297C8.16627 8.6241 8.18095 8.60175 8.19089 8.5772C8.20083 8.55265 8.20583 8.52638 8.20562 8.4999C8.20583 8.47342 8.20083 8.44715 8.19089 8.4226C8.18095 8.39805 8.16627 8.3757 8.14769 8.35683C8.12911 8.33795 8.107 8.32292 8.08261 8.31259C8.05822 8.30226 8.03204 8.29684 8.00555 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M4.55652 8.69677C4.58258 8.69656 4.60835 8.69122 4.63235 8.68105C4.65635 8.67088 4.67811 8.65609 4.69639 8.63751C4.71467 8.61893 4.72911 8.59693 4.73889 8.57277C4.74867 8.54861 4.7536 8.52276 4.75339 8.4967C4.7536 8.47064 4.74867 8.44479 4.73889 8.42063C4.72911 8.39647 4.71467 8.37447 4.69639 8.35589C4.67811 8.33731 4.65635 8.32252 4.63235 8.31235C4.60835 8.30218 4.58258 8.29684 4.55652 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M11.4494 8.69677C11.4755 8.69656 11.5012 8.69122 11.5252 8.68105C11.5492 8.67088 11.571 8.65609 11.5893 8.63751C11.6076 8.61893 11.622 8.59693 11.6318 8.57277C11.6416 8.54861 11.6465 8.52276 11.6463 8.4967C11.6465 8.47064 11.6416 8.44479 11.6318 8.42063C11.622 8.39647 11.6076 8.37447 11.5893 8.35589C11.571 8.33731 11.5492 8.32252 11.5252 8.31235C11.5012 8.30218 11.4755 8.29684 11.4494 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M8.00271 1.29761C6.69294 1.29805 5.40801 1.65508 4.28576 2.3304C3.16351 3.00573 2.24631 3.97385 1.63254 5.13091C1.0208 6.28766 0.736954 7.58966 0.811711 8.89607C0.886468 10.2025 1.31698 11.4636 2.05669 12.543L0.800261 15.7025L4.1614 14.5693C5.10603 15.1618 6.17518 15.5273 7.28486 15.6369C8.39454 15.7465 9.51452 15.5973 10.5568 15.201C11.5991 14.8047 12.5353 14.1721 13.2918 13.353C14.0484 12.5338 14.6047 11.5504 14.9171 10.4799C15.2269 9.40976 15.2831 8.28214 15.0815 7.18644C14.8798 6.09075 14.4256 5.05708 13.7551 4.16738C13.0842 3.27604 12.2153 2.55282 11.217 2.05479C10.2187 1.55675 9.11833 1.29754 8.00271 1.29761Z"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Organizations
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/dashboard/workflow" @click="isOpen = false"
                        class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.24335 13.5195V3.86671C1.24335 2.58791 2.27812 1.55005 3.55692 1.55005H13.9912C14.4174 1.55005 14.7572 1.896 14.7572 2.32227V10.8167C14.7572 11.0215 14.6759 11.2179 14.531 11.3628C14.3862 11.5076 14.1898 11.5889 13.985 11.5889H3.1739C2.10823 11.5889 1.24335 12.4538 1.24335 13.5195ZM1.24335 13.5195C1.24335 14.5851 2.10823 15.45 3.1739 15.45H14.7572M12.8269 11.589V15.4501"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Workflows
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/dashboard/document" @click="isOpen = false"
                        class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.72246 7.08531C4.47963 7.08531 5.20579 6.78452 5.74119 6.24912C6.27659 5.71373 6.57737 4.98757 6.57737 4.2304C6.57737 3.47323 6.27659 2.74707 5.74119 2.21167C5.20579 1.67627 4.47963 1.37549 3.72246 1.37549C2.96529 1.37549 2.23914 1.67627 1.70374 2.21167C1.16834 2.74707 0.867554 3.47323 0.867554 4.2304C0.867554 4.98757 1.16834 5.71373 1.70374 6.24912C2.23914 6.78452 2.96529 7.08531 3.72246 7.08531Z"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M12.2774 7.08533C13.0346 7.08533 13.7608 6.78454 14.2962 6.24914C14.8316 5.71375 15.1324 4.98759 15.1324 4.23042C15.1324 3.47325 14.8316 2.74709 14.2962 2.21169C13.7608 1.67629 13.0346 1.37551 12.2774 1.37551C11.5203 1.37551 10.7941 1.67629 10.2587 2.21169C9.72332 2.74709 9.42254 3.47325 9.42254 4.23042C9.42254 4.98759 9.72332 5.71375 10.2587 6.24914C10.7941 6.78454 11.5203 7.08533 12.2774 7.08533Z"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M3.72246 15.6245C4.09738 15.6245 4.46862 15.5507 4.81499 15.4072C5.16136 15.2637 5.47609 15.0534 5.74119 14.7883C6.00629 14.5232 6.21658 14.2085 6.36006 13.8621C6.50353 13.5158 6.57737 13.1445 6.57737 12.7696C6.57737 12.3947 6.50353 12.0235 6.36006 11.6771C6.21658 11.3307 6.00629 11.016 5.74119 10.7509C5.47609 10.4858 5.16136 10.2755 4.81499 10.132C4.46862 9.98854 4.09738 9.9147 3.72246 9.9147C2.96529 9.9147 2.23914 10.2155 1.70374 10.7509C1.16834 11.2863 0.867554 12.0124 0.867554 12.7696C0.867554 13.5268 1.16834 14.2529 1.70374 14.7883C2.23914 15.3237 2.96529 15.6245 3.72246 15.6245Z"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M12.2774 15.6245C12.6524 15.6245 13.0236 15.5507 13.37 15.4072C13.7163 15.2637 14.0311 15.0534 14.2962 14.7883C14.5613 14.5232 14.7716 14.2085 14.915 13.8621C15.0585 13.5158 15.1324 13.1445 15.1324 12.7696C15.1324 12.3947 15.0585 12.0235 14.915 11.6771C14.7716 11.3307 14.5613 11.016 14.2962 10.7509C14.0311 10.4858 13.7163 10.2755 13.37 10.132C13.0236 9.98854 12.6524 9.9147 12.2774 9.9147C11.5203 9.9147 10.7941 10.2155 10.2587 10.7509C9.72332 11.2863 9.42254 12.0124 9.42254 12.7696C9.42254 13.5268 9.72332 14.2529 10.2587 14.7883C10.7941 15.3237 11.5203 15.6245 12.2774 15.6245Z"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Documents
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li class="mt-auto w-full">
                  <div class="w-full">
                    <button @click="logOut"
                      class="group -mx-2 flex justify-center items-center gap-x-3 rounded-md p-2.5 px-20 text-sm font-semibold bg-red-500 leading-6 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                        stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                      </svg>
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-100 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-8 w-auto" src="@/assets/img/logo.png" alt="Your Company" />
        </div>
        <div class="relative w-full">
          <input placeholder="Search for applications..."
            class="border-[0.6px] border-gray-300 w-full pl-10 py-2.5 rounded-md px-3 text-sm font-light shadow" />
          <svg class="absolute top-4 left-4" width="13" height="12" viewBox="0 0 13 12" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.7 11.2L9.01039 8.51039M1.30005 5.28281C1.30005 2.80705 3.30705 0.800049 5.78281 0.800049C8.25858 0.800049 10.2656 2.80705 10.2656 5.28281C10.2656 7.75858 8.25858 9.76557 5.78281 9.76557C3.30705 9.76557 1.30005 7.75858 1.30005 5.28281Z"
              stroke="#666F8D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in sidebarItems" :key="item.name">
                  <NuxtLink :to="item.route" :class="getNavItemClass(item.route)"
                    class="group flex gap-x-3 rounded-md p-2.5 text-sm leading-6 font-semibold">
                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="mt-auto w-full">
              <div class="w-full">
                <button @click="logOut"
                  class="group -mx-2 flex justify-center items-center gap-x-3 rounded-md p-2.5 px-20 text-sm font-semibold bg-red-500 leading-6 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                  </svg>
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">

      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <div class="flex justify-end items-end md:hidden">
          <button @click="isOpen = true" type="button" class="-m-2.5 p-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none"
              stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="flex items-center justify-between w-full">
          <h2 class="font-semibold text-sm lg:text-base">Welcome {{ user || '' }}</h2>
          <div class="flex justify-center items-center gap-x-6">
            <div>
            </div>
            <div class="lg:flex justify-center items-center gap-x-4 hidden">
              <img src="@/assets/img/user.png" alt="user" />

            </div>
          </div>
        </div>
      </div>
      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLogin } from '@/composables/auth/login'
const { logOut, localstorageData } = useLogin()
const isOpen = ref(false)
const route = useRoute()

function getNavItemClass(itemRoute: any) {
  return route.path === itemRoute ? 'active' : '';
}

const user = computed(() => {
  return `${localstorageData.user.value.firstName} ${localstorageData.user.value.lastName}`
})

</script>

<style>
/* Define your styles here */
.sidebar ul {
  /* Sidebar styling */
}

.sidebar ul li {
  /* List item styling */
}

.active {
  @apply bg-blue-500 text-white;
  /* Tailwind CSS class for active items */
}
</style>