<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-16 w-auto" src="@/assets/img/logo.png" alt="">
          </a>
        </div>
        <div class="flex lg:hidden">
          <button @click="showSideBar = true" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
              aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div class="lg:hidden" role="dialog" aria-modal="true" v-if="showSideBar">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-50"></div>
        <div
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-16 w-auto" src="@/assets/img/logo.png" alt="">
            </a>
            <button  @click="showSideBar = false" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                <a href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                <a href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                <a href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
              </div>
              <div class="py-6">
                <a href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                  in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="relative isolate">
        <svg
          class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true">
          <defs>
            <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1"
              patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div
          class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true">
          <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)">
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" data-aos="fade-up">Order products anytime,
                  anywhere</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none" data-aos="fade-down">Browse from our list of
                  specials to place your order and
                  have food delivered to you in no time. Affordable, tasty and fast!</p>
                <div class="mt-10 flex items-center gap-x-6">
                  <a href="#"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                    started</a>
                  <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Live demo <span
                      aria-hidden="true">→</span></a>
                </div>
              </div>
              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div
                  class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div class="relative">
                    <img src="@/assets/img/delivery.jpg" alt="" data-aos="fade-left"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                    </div>
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <img src="@/assets/img/delivery2.jpg" alt="" data-aos="fade-left"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                    </div>
                  </div>
                  <div class="relative">
                    <img src="@/assets/img/hero3.jpg" alt="" data-aos="fade-left"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                    </div>
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <img src="@/assets/img/hero5.png" alt="" data-aos="fade-left"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                    </div>
                  </div>
                  <div class="relative">
                    <img src="@/assets/img/hero2.jpg" alt="" data-aos="fade-left"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <!-- <main>
    <div class="bg-white">
      <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:flex items-center justify-between gap-x-32 lg:px-8 lg:py-40">
          <div class="px-6 lg:px-0 lg:pt-4 ">
            <div class="mx-auto max-w-2xl">
              <div class="max-w-lg">
                <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Order products anytime,
                  anywhere
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">Browse from our list of specials to place your order and
                  have food delivered to you in no time. Affordable, tasty and fast!</p>
                <div class="mt-10 flex items-center gap-x-6">
                  <button @click="isProceedToOrder = true"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start
                    shopping</button>
                  <nuxt-link to="/login" class="text-sm font-semibold leading-6 text-gray-900">Explore products <span
                      aria-hidden="true">→</span></nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!isPaymentSuccessful"
            class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen flex justify-center items-end">
            <img v-if="!isProceedToOrder" src="@/assets/img/hero5.png"
              alt="" />
            <section v-else class="border w-11/12 bg-[#171817] rounded-xl p-6 lg:p-10 text-white space-y-6">
              <div class="flex justify-end items-end">
                <button @click="isProceedToOrder = false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
                    stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <p class="text-white text-sm lg:text-base font-bold">🌟 Discover the Taste of Freshness! 🌟</p>
              <div v-if="purchaseFormStep === 1" class="space-y-6">
                <div>
                  <label for="location" class="block text-sm font-medium leading-6 text-white">Select vendor</label>
                  <select v-model="form.vendor" id="location" name="location"
                    class="mt-2 block w-full rounded-md text-black px-3 border-0 py-3 outline-none pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option v-for="(itm, idx) in vendorsList" :key="idx" :value="itm.value">{{ itm.name }}</option>
                  </select>
                </div>
                <div>
                  <label for="store" class="block text-sm font-medium leading-6 text-white">Store</label>
                  <select v-model="form.store" id="location" name="location"
                    class="mt-2 block w-full rounded-md text-black px-3 border-0 py-3 outline-none pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option v-for="(itm, idx) in storeProductList" :key="idx" :value="itm">{{ itm }}
                    </option>
                  </select>
                </div>
                <div class="space-y-2">
                  <label for="itemName" class="block text-sm font-medium leading-6 text-white">Item Name</label>
                  <input type="text" id="itemName" v-model="form.itemName"
                    class="border py-3 px-3 outline-none text-black rounded-md w-full" required>
                </div>
                <div class="lg:flex justify-between items-center gap-x-6 w-full space-y-4 lg:space-y-0">
                  <div class="space-y-2 w-full">
                    <label for="phone" class="block text-sm font-medium leading-6 text-white">Phone</label>
                    <input type="tel" id="phone" v-model="form.phone"
                      class="border py-3 px-3 outline-none text-black rounded-md w-full" required>
                  </div>
                  <div class="space-y-2 w-full">
                    <label for="email" class="block text-sm font-medium leading-6 text-white">Email</label>
                    <input type="email" id="email" v-model="form.email"
                      class="border py-3 px-3 outline-none text-black rounded-md w-full" required>
                  </div>
                </div>
                <div class="space-y-2">
                  <label for="location" class="block text-sm font-medium leading-6 text-white">Where would you like us
                    to
                    deliver your order to</label>
                  <input type="text" id="location" v-model="form.location"
                    class="border text-black px-3 py-3 outline-none rounded-md w-full" required>
                </div>
                <div class="w-full pt-6 space-y-3">
                  <button @click="handleNext" :disabled="!isFormEmpty || loading" type="submit"
                    class="bg-[#00e069] disabled:cursor-not-allowed disabled:opacity-25 w-full text-white py-3 font-medium outline-none rounded-md">{{
                    loading
                      ? 'checking stores...' : 'Continue' }}</button>
                  <div class="flex justify-center items-center">
                    <nuxt-link class="font-medium text-white underline" to="/">View all available products</nuxt-link>
                  </div>
                </div>
              </div>
              <div v-if="purchaseFormStep === 2" class="space-y-6">
                <fieldset>
                  <legend class="sr-only">Checkboxes</legend>

                  <div class="space-y-2">
                    <label for="Option1" v-for="(itm, idx) in items" :key="idx" @click="selectedProductToPurchase(itm)"
                      class="flex cursor-pointer text-white items-start gap-4 bg-black rounded-lg border border-gray-200 p-4 transition  has-[:checked]:bg-black">
                      <div class="flex items-center">
                        &#8203;
                        <input type="checkbox" class="size-4 rounded  border-gray-300" id="Option1" />
                      </div>

                      <div class="w-full">
                        <strong class="text-white font-semibold"> {{ itm.name }} </strong>
                        <p class="mt-1 text-pretty text-white text-sm font-semibold">
                          {{ itm.description }}
                        </p>
                        <div class="flex items-center justify-between w-full">
                          <p class="mt-1 text-pretty text-white text-sm font-semibold">
                            {{ itm.price.toLocaleString('en-NG', { style: "currency", currency: "NGN" }) }}
                          </p>
                          <p class="mt-1 text-pretty text-white text-sm font-semibold">
                            {{ itm.quantityInStock }} piece{{ itm.quantityInStock > 1 ? 's' : '' }} available
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </fieldset>
                <div class="space-y-2">
                  <label for="quantity" class="block text-sm font-medium leading-6 text-white">Quantity to
                    purchase</label>
                  <input type="tel" id="quantity" v-model.number="form.quantity"
                    class="border text-black px-3 py-3 outline-none rounded-md w-full" required>
                </div>
                <div class="w-full pt-6 space-y-3">
                  <button @click="initializePaystack" type="submit"
                    class="bg-[#00e069] w-full text-black py-3 font-medium outline-none rounded-md">Proceed
                    To Pay</button>
                  <div class="flex justify-center items-center">
                    <nuxt-link class="font-medium text-white underline" to="/">View all available products</nuxt-link>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div v-if="isPaymentSuccessful">
            <div class="bg-white">
              <div class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div class="max-w-xl">
                  <h1 class="text-base font-medium text-indigo-600">Thank you!</h1>
                  <p class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">It's on the way!</p>
                  <p class="mt-2 text-base text-gray-500">Your order #14034056 has shipped and will be with you soon.
                  </p>

                  <dl class="mt-12 text-sm font-medium">
                    <dt class="text-gray-900">Tracking number</dt>
                    <dd class="mt-2 text-indigo-600">51547878755545848512</dd>
                  </dl>
                </div>

                <div class="mt-10 border-t border-gray-200">
                  <h2 class="sr-only">Your order</h2>

                  <h3 class="sr-only">Items</h3>
                  <div class="flex space-x-6 border-b border-gray-200 py-10">
                    <img src="@/assets/img/delivery.jpg" alt="Glass bottle with black plastic pour top and mesh insert."
                      class="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40">
                    <div class="flex flex-auto flex-col">
                      <div>
                        <h4 class="font-medium text-gray-900">
                          <a href="#">{{ orderReview.name }}</a>
                        </h4>
                        <p class="mt-2 text-sm text-gray-600">{{ orderReview.description }}</p>
                      </div>
                      <div class="mt-6 flex flex-1 items-end">
                        <dl class="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                          <div class="flex">
                            <dt class="font-medium text-gray-900">Quantity</dt>
                            <dd class="ml-2 text-gray-700">{{ orderReview.quantity }}</dd>
                          </div>
                          <div class="flex pl-4 sm:pl-6">
                            <dt class="font-medium text-gray-900">Price</dt>
                            <dd class="ml-2 text-gray-700">{{ orderReview.finalPrice }}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>

                  <div class="sm:ml-40 sm:pl-6">
                    <h3 class="sr-only">Your information</h3>

                    <h4 class="sr-only">Addresses</h4>
                    <dl class="grid grid-cols-2 gap-x-6 py-10 text-sm">
                      <div>
                        <dt class="font-medium text-gray-900">Shipping address</dt>
                        <dd class="mt-2 text-gray-700">
                          <address class="not-italic">
                            <span class="block">{{ orderReview.location }}</span>
                          </address>
                        </dd>
                      </div>
                    </dl>

                    <h4 class="sr-only">Payment</h4>
                    <dl class="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
                      <div>
                        <dt class="font-medium text-gray-900">Payment method</dt>
                        <dd class="mt-2 text-gray-700">
                          <p>Paystack</p>
                        </dd>
                      </div>
                      <div>
                        <dt class="font-medium text-gray-900">Shipping method</dt>
                        <dd class="mt-2 text-gray-700">
                          <p>Luth Errander</p>
                          <p>Takes up to 5 minutes to deliver your item</p>
                          <p></p>
                        </dd>
                      </div>
                      <div>
                        <dt class="font-medium text-gray-900">Delivery Agent Details</dt>
                        <dd class="mt-2 text-gray-700">
                          <p>+234 81476 24503</p>
                          <p></p>
                        </dd>
                      </div>
                    </dl>

                    <h3 class="sr-only">Summary</h3>

                    <dl class="space-y-6 border-t border-gray-200 pt-10 text-sm">
                      <div class="flex justify-between">
                        <dt class="font-medium text-gray-900">Subtotal</dt>
                        <dd class="text-gray-700">{{ orderReview.finalPrice.toLocaleString('en-NG', {
                    style: "currency",
                    currency: "NGN"
                  }) }}</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt class="flex font-medium text-gray-900">
                          Discount
                          <span class="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-600">STUDENT50</span>
                        </dt>
                        <dd class="text-gray-700">NGN 0.00 (50%)</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt class="font-medium text-gray-900">Shipping</dt>
                        <dd class="text-gray-700">NGN 0.00</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt class="font-medium text-gray-900">Total</dt>
                        <dd class="text-gray-900">{{ orderReview.finalPrice.toLocaleString('en-NG', {
                    style: "currency",
                    currency: "NGN"
                          }) }}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
      </div>
    </div>
  </main> -->
</template>

<script>
export default {
  data() {
    return {
      showSideBar: false,
      purchaseFormStep: 1,
      isProceedToOrder: false,
      orderReview: null,
      choiceProduct: null,
      isVisible: false,
      loading: false,
      showModal: false,
      searchMessage: '',
      finalPrice: '',
      isPaymentSuccessful: false,
      items: [],
      vendorsList: [
        {
          name: 'Yem Yem Stores',
          value: 'yemyem'
        },
        {
          name: 'Iya Tinu Stores',
          value: 'iyaitnu'
        },
        {
          name: 'Tandalicious Stores',
          value: 'tandalicious'
        },
        {
          name: 'Chijoke Stores',
          value: 'chijoke'
        },
        {
          name: 'Baba Wale Stores',
          value: 'yemyem'
        }
      ],
      tandaliciousStoreProductList: ['Fruits Hub', 'Meal Hub'],
      babawaleStoreProductList: ['Snacks', 'Home Essentials', 'Electronics Hub'],
      chijokeStoreProductList: ['Snacks', 'Home Essentials', 'Electronics Hub'],
      iyaitnuStoreProductList: ['Snacks', 'Home Essentials', 'Electronics Hub'],
      yemyemStoreProductList: ['Snacks', 'Home Essentials', 'Electronics Hub'],
      form: {
        itemName: '',
        location: null,
        phone: '',
        email: '',
        vendor: '',
        store: '',
        quantity: ''
      }
    };
  },
  methods: {
    handleFormSubmit() {
      // Handle the form submission logic
      this.showModal = false;
    },
    handleNext() {
      this.loading = true;
      const formData = JSON.stringify(this.form);
      sessionStorage.setItem('formData', formData);
      setTimeout(() => {
        this.loading = false;
        this.searchItem()
        this.purchaseFormStep += 1
      }, 3000);
    },
    initializePaystack() {
      this.updateChoiceProduct()
      // this.update({ finalPrice: this.finalPrice, quantity: this.form.quantity })
      const paystackPublicKey = process.env.PAYSTACK_KEY;
      this.$paystack({
        key: paystackPublicKey,
        email: 'abahmarquis@gmail.com',
        amount:
          this.finalPrice * 100,
        ref: "" + Math.floor(Math.random() * 100000000000000 + 1),
        currency: "NGN",
        callback: (res) => {
          if (res.status === "success") {
            this.isPaymentSuccessful = true
            this.orderReview = JSON.parse(sessionStorage.getItem('formData'))
            console.log(this.orderReview, 'overview')
            this.$toastr.s("Pre-order was made successfully! We would contact you shortly.");
          } else {
            this.isPaymentSuccessful = false
            this.$toastr.e("Payment was not successful!");
          }
        },
        onClose: () => {
          this.$toastr.e("Pre-order process aborted!");
        },
      });
    },
    beforeEnter(el) {
      this.isVisible = false; // Start with the div hidden
    },
    enter(el, done) {
      this.isVisible = true; // Animate to visible
      done();
    },
    leave(el, done) {
      this.isVisible = false; // Animate to hidden
      done();
    },
    async searchItem() {
      const response = await fetch(`/stores/${this.form.vendor}.json`);
      const stores = await response.json();
      const selectedStore = stores.find(store => store.store === this.form.store);
      this.items = selectedStore.items.filter(item => item.name.toLowerCase().includes(this.form.itemName.toLowerCase()));

      // Handle the case where multiple items are returned or no items are found
      if (this.items.length > 1) {
        this.searchMessage = 'Multiple products were found'
      } else if (this.items.length === 1) {
        this.searchMessage = 'We found only one product'
      } else {
        this.searchMessage = 'Sorry! No item was found. Please adjust your search parameter'
      }
    },
    toCurrency(number, currency, language = undefined) {
      Intl.NumberFormat(language, { style: 'currency', currency: currency }).format(number);
    },
    selectedProductToPurchase(product) {
      this.choiceProduct = product;
      // this.finalPrice = product.price * this.form.quantity
    },
    updateChoiceProduct() {
      const storedSessionDataString = sessionStorage.getItem('formData')
      if (storedSessionDataString) {
        const sessionData = JSON.parse(storedSessionDataString)
        sessionData['productId'] = this.choiceProduct.productId
        sessionData['name'] = this.choiceProduct.name
        sessionData['description'] = this.choiceProduct.description
        sessionData['price'] = this.choiceProduct.price
        sessionData['quantityInStock'] = this.choiceProduct.quantityInStock
        sessionData['finalPrice'] = this.finalPrice
        sessionData['quantity'] = this.form.quantity
        sessionStorage.setItem('formData', JSON.stringify(sessionData))
      } else {
        this.$toastr.e("No data was found in session storage!");
      }
    },
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.itemName && this.form.location && this.form.vendor && this.form.store && this.form.phone && this.form.email)
    },
    storeProductList() {
      const storeMap = {
        yemyem: this.yemyemStoreProductList,
        iyaitnu: this.iyaitnuStoreProductList,
        chijoke: this.chijokeStoreProductList,
        babawale: this.babawaleStoreProductList,
        tandalicious: this.tandaliciousStoreProductList
      }
      return storeMap[this.form.vendor]
    }
  },
  watch: {
    'form.quantity'(val) {
      console.log(val)
      if (this.form.quantity > this.choiceProduct.quantityInStock) {
        this.$toastr.e("The Quantity requested exceeds the quantity available. Please Contact Admin.");
      } else {
        this.finalPrice = this.choiceProduct.price * this.form.quantity
        console.log(this.finalPrice)
      }
    }
  }
};
</script>
