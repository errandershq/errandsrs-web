<template>
  <div class="bg-white">
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
                  <a href="#meals"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                    started</a>
                  <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Live demo <span
                      aria-hidden="true">→</span></a> -->
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
