<template>
  <div class="bg-white mt-32">
    <div class="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
      <h1 class="sr-only">Checkout</h1>

      <div class="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div class="mx-auto w-full max-w-lg">
          <h2 class="sr-only">Order summary</h2>

          <div class="flow-root">
            <ul role="list" class="-my-6 divide-y divide-gray-200">
              <li class="flex space-x-6 py-6">
                <img src="@/assets/img/meal1.jpg" alt="Front of women&#039;s basic tee in heather gray."
                  class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center">
                <div class="flex-auto">
                  <div class="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                    <div class="flex-auto space-y-1 text-sm font-medium">
                      <h3 class="text-gray-900">
                        <a href="#">Cameroonian Achu (Mangled Cocoyam with Stew)</a>
                      </h3>
                      <p class="text-gray-900">₦500.00</p>
                    </div>
                    <div class="flex flex-none space-x-4">
                      <button type="button"
                        class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Edit</button>
                      <div class="flex border-l border-gray-300 pl-4">
                        <button type="button"
                          class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <!-- More products... -->
            </ul>
          </div>

          <dl class="mt-10 space-y-6 text-sm font-medium text-gray-500">
            <div class="flex justify-between">
              <dt>Subtotal</dt>
              <dd class="text-gray-900">$104.00</dd>
            </div>
            <div class="flex justify-between">
              <dt>Taxes</dt>
              <dd class="text-gray-900">$8.32</dd>
            </div>
            <div class="flex justify-between">
              <dt>Shipping</dt>
              <dd class="text-gray-900">$14.00</dd>
            </div>
            <div class="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
              <dt class="text-base">Total</dt>
              <dd class="text-base">$126.32</dd>
            </div>
          </dl>
        </div>

        <div class="mx-auto w-full max-w-lg">
          <!-- <button type="button"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
            <span class="sr-only">Pay with Apple Pay</span>
            <svg class="h-5 w-auto" fill="currentColor" viewBox="0 0 50 20">
              <path
                d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
            </svg>
          </button>

          <div class="relative mt-8">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white px-4 text-sm font-medium text-gray-500">or</span>
            </div>
          </div> -->

          <form class="" @submit.prevent="handlePayment">
            <div class="mt-6 flex space-x-2">
              <div class="flex h-5 items-center">
                <input v-model="agreedToTerms" id="terms" name="terms" type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
              </div>
              <label for="terms" class="text-sm text-gray-500">I have read the terms and conditions and agree to the
                sale of my personal information to the highest bidder.</label>
            </div>

            <!-- Submit button, enable/disable based on form state -->
            <button type="submit" :disabled="!agreedToTerms"
              class="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500">Continue</button>
          </form>
          <h2 class="text-lg font-medium text-gray-900 pt-10">Product delivery information</h2>
          <div class="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200">
            <div class="space-y-4">
              <details
                class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open>
                <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 class="text-lg font-medium text-gray-900">
                    Shipping address
                  </h2>

                  <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                </summary>

                <div class="mt-4 leading-relaxed text-gray-700 space-y-3">
                  <p class="text-sm"><span class="font-medium text-gray-800">Carrier:</span> FedEx Ground</p>
                  <p class="text-sm"><span class="font-medium text-gray-800">Tracking number:</span> 9876543210</p>
                  <p class="text-sm"><span class="font-medium text-gray-800">Estimated delivery date:</span>May 2,
                    2024 (depending on the retailer, this could be a
                    range of dates or
                    a
                    specific date)</p>
                  <p class="text-sm"><span class="font-medium text-gray-800">Delivery method:</span>Standard shipping
                    (unless a different option was chosen at
                    checkout)</p>
                </div>
              </details>

              <details
                class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 class="text-lg font-medium text-gray-900">
                    Review
                  </h2>

                  <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                </summary>

                <div class="mt-4 leading-relaxed text-gray-700 text-sm space-y-3">
                  <h3 class="text-lg text-gray-800">Items Ordered</h3>

                  <p><span class="font-semibold text-gray-800">Item 1: </span>Redwood Twin Bed Frame (quantity: 1)</p>
                  <p><span class="font-semibold text-gray-800">Item 2: </span>10" Memory Foam Mattress (quantity: 1)</p>
                  Additional Information

                  <p>A link to the carrier's website where you can track your package using the tracking number.
                    Customer service contact information in case you have any questions about your delivery.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFlutterwaveSDK } from '@/composables/payment/flutterwave'
const { handlePayment, paymentForm } = useFlutterwaveSDK()
const router = useRouter()
const showOrderSummary = ref(false)
const agreedToTerms = ref(false)

</script>
