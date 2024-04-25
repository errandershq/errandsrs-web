<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white p-5 rounded-lg max-w-xl w-full m-4" @click.stop>
      <form @submit.prevent="initializePaystack" class="">
        <!-- Form content here -->
        <div v-if="purchaseFormStep === 0">
          <h1 class="text-gray-700 font-semibold text-center">Mushin Market Items Purchase Form</h1>
          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter phone" v-model="form.phone"
              class="mt-1 p-2 py-3 w-full border-gray-300 rounded-md shadow-sm border outline-none text-sm" required>
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter email address" v-model="form.email"
              class="mt-1 p-2 py-3 w-full border-gray-300 rounded-md shadow-sm border outline-none text-sm" required>
          </div>

          <div class="mb-4">
            <label for="location" class="block text-sm font-medium text-gray-700">Delivery Location</label>
            <input type="text" id="quantity" name="location" placeholder="Enter location" v-model="form.location"
              class="mt-1 p-2 py-3 w-full border-gray-300 rounded-md shadow-sm border outline-none text-sm" required>
          </div>

          <div class="container mx-auto p-4 bg-gray-100 border rounded-md border-gray-200 mb-4">
            <div class="mb-4">
              <label for="itemName" class="block text-gray-700 text-sm font-bold mb-2">Item Name:</label>
              <input type="text" v-model="item.name" id="itemName" placeholder="Enter item name"
                class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4">
              <label for="itemQuantity" class="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
              <input type="number" v-model.number="item.quantity" id="itemQuantity" placeholder="Enter quantity"
                class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4">
              <label for="itemPrice" class="block text-gray-700 text-sm font-bold mb-2">Price:</label>
              <input type="number" v-model.number="item.price" id="itemPrice" placeholder="Enter price"
                class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="flex justify-end items-end">
              <button @click="saveItem" type="button"
                class="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save
              </button>
            </div>
          </div>
          <div class="mt-10">
            <button @click="purchaseFormStep += 1" type="button" class="w-full bg-black text-white p-2 rounded">Continue
              to view order summary</button>
          </div>
        </div>
        <div v-if="purchaseFormStep === 1" class="space-y-3">
          <h1 class="text-gray-700 font-semibold text-center text-lg">Please confirm the order details below:</h1>
          <div class="space-y-6">
            <p class="text-sm"><span class="font-bold text-gray-800">Phone:</span>{{ form.phone }}</p>
            <p class="text-sm"><span class="font-bold text-gray-800">Email:</span> {{ form.email }}</p>
            <p class="text-sm"><span class="font-bold text-gray-800">Location:</span> {{ form.location }}</p>
            <div>
              <p class="font-semibold text-gray-800 text-sm">Order list</p>
              <div class="space-y-3">
                <div v-for="(itm, idx) in form.items" :key="idx"
                  class="rounded-md flex items-start bg-gray-100 space-y-2 gap-x-3">
                  <div class="pt-3 pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="#4a90e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                      <line x1="7" y1="7" x2="7.01" y2="7"></line>
                    </svg>
                  </div>
                  <div class="space-y-1 pb-2">
                    <p class="text-sm font-semibold">{{ itm.name }}</p>
                    <p class="text-sm font-semibold"> {{ itm.price.toLocaleString('en-NG', {
    style: "currency",
    currency: "NGN"
  }) }}</p>
                    <p class="text-sm font-semibold"> {{ itm.quantity }} packs</p>
                  </div>
                </div>
                <p class="text-sm"><span class="font-semibold text-gray-800">Total Price for order</span>: {{
    total.toLocaleString('en-NG', { style: "currency", currency: "NGN" }) }}
                </p>
                <p class="text-sm"><span class="font-semibold text-gray-800">Discount</span>: 0.00</p>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button :disabled="processingPayment" type="submit"
              class="w-full bg-blue-500 disabled:cursor-not-allowed disabled:opacity-25 text-white p-2 py-3 rounded hover:bg-blue-700">
              {{ processingPayment ? ` processing payment for ${total.toLocaleString('en-NG', {
    style:
      "currency", currency: "NGN"
  })}` : ` Proceed To Pay ${total.toLocaleString('en-NG', {
              style:
              "currency", currency: "NGN" })}` }}</button>
          </div>
        </div>
      </form>
    </div>
    <div class="relative">
      <div class="rounded-full bg-white shadow p-1.5 cursor-pointer absolute top-0 left-0" @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
  },
  data() {
    return {
      purchaseFormStep: 0,
      processingPayment: false,
      isPaymentSuccessful: false,
      item: {
        name: '',
        quantity: 0,
        price: 0,
      },
      form: {
        phone: '',
        email: '',
        location: '',
        items: []
      }
    }
  },
  methods: {
    initializePaystack() {
      this.processingPayment = true
      const paystackPublicKey = process.env.PAYSTACK_KEY;
      this.$paystack({
        key: paystackPublicKey,
        email: 'abahmarquis@gmail.com',
        amount:
          this.total * 100,
        ref: "" + Math.floor(Math.random() * 100000000000000 + 1),
        currency: "NGN",
        callback: (res) => {
          if (res.status === "success") {
            this.isPaymentSuccessful = true
            this.finalOrderSummary = JSON.parse(sessionStorage.setItem(JSON.stringify(this.form)))
            this.$toastr.s("Pre-order was made successfully! We would contact you shortly.");
          } else {
            this.$toastr.e("Payment was not successful!");
          }
        },
        onClose: () => {
          this.processingPayment = false
          this.$toastr.e("Pre-order process aborted!");
        },
      });
    },
    // submitForm() {
    //   // Implement submission logic here
    //   // console.log(this.form, 'purchase')
    //   // alert('Form submitted successfully!');
    //   // this.$emit('close');

    // },
    handleItems(item) {
      console.log(item.target.value, 'items')
    },
    saveItem() {
      // Push the item into the items array
      this.form.items.push({ ...this.item });

      // Clear the form fields
      this.item = { name: '', quantity: 0, price: 0 };
    },
  },
  computed: {
    total() {
      return this.form.items.reduce((acc, itm) => {
        return acc + (itm.price * itm.quantity);
      }, 0);
    }
  }

}
</script>
