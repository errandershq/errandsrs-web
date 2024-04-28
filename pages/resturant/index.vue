<template>
  <main>
    <div class="relative isolate overflow-hidden bg-gray-900 py-56 sm:py-56">
      <img src="@/assets/img/eatery.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-center">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
      <div class="max-w-7xl mx-auto">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-10 lg:pt-0 absolute z-50">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-black tracking-tight text-white sm:text-6xl z-50">{{ route.query.type }}.</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300 z-50 font-semibold">Order Food Online from {{ route.query.type }} in
              College of
              Medicine.</p>
          </div>
        </div>
      </div>
    </div>
    <TestimonialCarousel></TestimonialCarousel>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="md:flex md:items-center md:justify-between">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">What's on your mind?</h2>
          <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          <div class="group relative" v-for="itm in 4" :key="itm">
            <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg"
                alt="Hand stitched, orange leather long wallet." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              <a href="#">
                <span class="absolute inset-0"></span>
                Leather Long Wallet
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Natural</p>
            <p class="mt-1 text-sm font-medium text-gray-900">$75</p>
          </div>

          <!-- More products... -->
        </div>

        <div class="mt-8 text-sm md:hidden">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>

    <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
    <div class="bg-white">
      <!--
    Mobile filter dialog

    Off-canvas filters for mobile, show/hide based on off-canvas filters state.
  -->
      <div v-if="filters" class="relative z-40 sm:hidden" role="dialog" aria-modal="true">
        <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>

        <div class="fixed inset-0 z-40 flex">
          <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
          <div
            class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div class="flex items-center justify-between px-4">
              <h2 class="text-lg font-medium text-gray-900">Filters</h2>
              <button type="button" @click="filters = false"
                class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Filters -->
            <form class="mt-4">
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400"
                    aria-controls="filter-section-0" aria-expanded="false">
                    <span class="font-medium text-gray-900">Category</span>
                    <span class="ml-6 flex items-center">
                      <!--
                    Expand/collapse icon, toggle classes based on section open state.

                    Open: "-rotate-180", Closed: "rotate-0"
                  -->
                      <svg class="rotate-0 h-5 w-5 transform" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-0">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-mobile-category-0" class="ml-3 text-sm text-gray-500">All New Arrivals</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-mobile-category-1" name="category[]" value="tees" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-mobile-category-1" class="ml-3 text-sm text-gray-500">Tees</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-mobile-category-2" name="category[]" value="objects" type="checkbox" checked
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-mobile-category-2" class="ml-3 text-sm text-gray-500">Objects</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400"
                    aria-controls="filter-section-1" aria-expanded="false">
                    <span class="font-medium text-gray-900">Color</span>
                    <span class="ml-6 flex items-center">
                      <!--
                    Expand/collapse icon, toggle classes based on section open state.

                    Open: "-rotate-180", Closed: "rotate-0"
                  -->
                      <svg class="rotate-0 h-5 w-5 transform" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-1">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-mobile-color-0" class="ml-3 text-sm text-gray-500">White</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-mobile-color-1" class="ml-3 text-sm text-gray-500">Beige</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-mobile-color-2" class="ml-3 text-sm text-gray-500">Blue</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400"
                    aria-controls="filter-section-2" aria-expanded="false">
                    <span class="font-medium text-gray-900">Sizes</span>
                    <span class="ml-6 flex items-center">
                      <!--
                    Expand/collapse icon, toggle classes based on section open state.

                    Open: "-rotate-180", Closed: "rotate-0"
                  -->
                      <svg class="rotate-0 h-5 w-5 transform" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-2">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input id="filter-mobile-sizes-0" name="sizes[]" value="s" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-mobile-sizes-0" class="ml-3 text-sm text-gray-500">S</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-mobile-sizes-1" name="sizes[]" value="m" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-mobile-sizes-1" class="ml-3 text-sm text-gray-500">M</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-mobile-sizes-2" name="sizes[]" value="l" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label for="filter-mobile-sizes-2" class="ml-3 text-sm text-gray-500">L</label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Workspace sale</h1>
        <p class="mt-4 max-w-xl text-sm text-gray-700">Our thoughtfully designed workspace objects are crafted in
          limited runs. Improve your productivity and organization with these sale items before we run out.</p>
      </div>

      <!-- Filters -->
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" class="sr-only">Filters</h2>

        <div class="border-b border-gray-200 bg-white pb-4">
          <div class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div class="relative inline-block text-left">
              <div>
                <button type="button" @click="isSort = !isSort"
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  id="menu-button" aria-expanded="false" aria-haspopup="true">
                  Sort
                  <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
              <div v-if="isSort"
                class="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <!--
                Active: "bg-gray-100", Not Active: ""

                Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
              -->
                  <a href="#" class="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-0">Most Popular</a>
                  <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-1">Best Rating</a>
                  <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-2">Newest</a>
                </div>
              </div>
            </div>

            <!-- Mobile filter dialog toggle, controls the 'mobileFiltersOpen' state. -->
            <button type="button" @click="filters = true"
              class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden">Filters</button>

            <div class="hidden sm:block">
              <div class="flow-root">
                <div class="-mx-4 flex items-center divide-x divide-gray-200">
                  <div class="relative inline-block px-4 text-left">
                    <button type="button" @click="isCategory = !isCategory"
                      class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      aria-expanded="false">
                      <span>Category</span>
                      <span
                        class="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">1</span>
                      <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>

                    <!--
                  'Category' dropdown, show/hide based on dropdown state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                    <div v-if="isCategory"
                      class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <form class="space-y-4">
                        <div class="flex items-center">
                          <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-category-0"
                            class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">All New
                            Arrivals</label>
                        </div>
                        <div class="flex items-center">
                          <input id="filter-category-1" name="category[]" value="tees" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-category-1"
                            class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">Tees</label>
                        </div>
                        <div class="flex items-center">
                          <input id="filter-category-2" name="category[]" value="objects" type="checkbox" checked
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-category-2"
                            class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">Objects</label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="relative inline-block px-4 text-left">
                    <button type="button" @click="isColor = !isColor"
                      class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      aria-expanded="false">
                      <span>Color</span>
                      <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>

                    <!--
                  'Color' dropdown, show/hide based on dropdown state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                    <div v-if="isColor"
                      class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <form class="space-y-4">
                        <div class="flex items-center">
                          <input id="filter-color-0" name="color[]" value="white" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-color-0"
                            class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">White</label>
                        </div>
                        <div class="flex items-center">
                          <input id="filter-color-1" name="color[]" value="beige" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-color-1"
                            class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">Beige</label>
                        </div>
                        <div class="flex items-center">
                          <input id="filter-color-2" name="color[]" value="blue" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-color-2"
                            class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">Blue</label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="relative inline-block px-4 text-left">
                    <button type="button" @click="isSize = !isSize"
                      class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      aria-expanded="false">
                      <span>Sizes</span>
                      <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>

                    <!--
                  'Sizes' dropdown, show/hide based on dropdown state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                    <div v-if="isSize"
                      class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <form class="space-y-4">
                        <div class="flex items-center">
                          <input id="filter-sizes-0" name="sizes[]" value="s" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-sizes-0"
                            class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">S</label>
                        </div>
                        <div class="flex items-center">
                          <input id="filter-sizes-1" name="sizes[]" value="m" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-sizes-1"
                            class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">M</label>
                        </div>
                        <div class="flex items-center">
                          <input id="filter-sizes-2" name="sizes[]" value="l" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-sizes-2"
                            class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">L</label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Active filters -->
        <div class="bg-gray-100">
          <div class="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 class="text-sm font-medium text-gray-500">
              Filters
              <span class="sr-only">, active</span>
            </h3>

            <div aria-hidden="true" class="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"></div>

            <div class="mt-2 sm:ml-4 sm:mt-0">
              <div class="-m-1 flex flex-wrap items-center">
                <span
                  class="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900">
                  <span>Objects</span>
                  <button type="button"
                    class="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500">
                    <span class="sr-only">Remove filter for Objects</span>
                    <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                      <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="md:flex md:items-center md:justify-between">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
          <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          <div class="group relative" v-for="itm in 4" :key="itm">
            <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg"
                alt="Hand stitched, orange leather long wallet." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              <a href="#">
                <span class="absolute inset-0"></span>
                Leather Long Wallet
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Natural</p>
            <p class="mt-1 text-sm font-medium text-gray-900">$75</p>
          </div>
        </div>

        <div class="mt-8 text-sm md:hidden">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup lang="ts">
const filters = ref(false)
const route = useRoute()
</script>

<style></style>