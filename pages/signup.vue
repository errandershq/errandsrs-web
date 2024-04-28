<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img alt="" src="@/assets/img/delivery.jpg"
          class="absolute inset-0 h-full w-full object-cover opacity-80 bg-black" />
        <div class="absolute inset-0 bg-black opacity-50"></div>

        <div class="hidden lg:relative lg:block lg:p-12">
          <a class="block text-white" href="#">
            <span class="sr-only">Home</span>
            <img src="@/assets/img/logo.png" alt="logo" class="h-32 w-32" />
          </a>

          <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome to Erranders
          </h2>

          <p class="mt-4 leading-relaxed text-white/90">
            Order products, anytime and anywhere from your comfort zone.
          </p>
        </div>
      </section>

      <main
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 w-full">
        <div class="max-w-xl lg:max-w-3xl">
          <div class="relative -mt-16 block lg:hidden">
            <a class="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
              href="#">
              <span class="sr-only">Home</span>
              <img src="@/assets/img/logo.png" alt="logo" class="h-32 w-32" />
            </a>

            <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Erranders
            </h1>

            <p class="mt-4 leading-relaxed text-gray-500">
              Order products anytime, anywhere from your comfort zone.
            </p>
          </div>

          <div v-if="route.query.page === 'options'" class="w-full">
            <h2 class="font-semibold text-sm pt-6 lg:text-2xl">Select signup option</h2>
            <fieldset class="space-y-4 w-full">
              <legend class="sr-only">Delivery</legend>

              <div class="w-full">
                <label for="delivery-agent"
                  class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
                  <div>
                    <p class="text-gray-700 text-lg">Delivery Champions</p>

                    <p class="mt-1 text-gray-900">Campus Couriers efficiently handle the delivery of orders throughout
                      the university, ensuring timely and reliable service.</p>
                  </div>

                  <input type="radio" v-model="form.userType" name="DeliveryOption" value="delivery-agent"
                    id="delivery-agent" class="size-5 border-gray-300 text-blue-500" checked />
                </label>
              </div>

              <div class="w-full">
                <label for="vendors"
                  class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
                  <div>
                    <p class="text-gray-700 text-lg">Market Masters</p>

                    <p class="mt-1 text-gray-900">Curators supply essential products tailored for university life,
                      ranging from academic materials to dorm necessities.</p>
                  </div>

                  <input type="radio" v-model="form.userType" name="DeliveryOption" value="store-agent" id="vendors"
                    class="size-5 border-gray-300 text-blue-500" />
                </label>
              </div>

              <div class="w-full">
                <label for="customer"
                  class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
                  <div>
                    <p class="text-gray-700 text-lg">Patron Partners</p>

                    <p class="mt-1 text-gray-900">Scholar Shoppers are the university’s students, faculty, and staff who
                      use Erranders for convenient access to a wide range of products suited to their campus lifestyle.
                    </p>
                  </div>

                  <input type="radio" v-model="form.userType" name="DeliveryOption" value="user" id="customer"
                    class="size-5 border-gray-300 text-blue-500" />
                </label>
              </div>

              <div class="w-full pt-10">
                <button :disabled="!form.userType.length" @click="handleUserType"
                  class="text-white disabled:cursor-not-allowed disabled:opacity-25 bg-green-600 py-3 rounded-md w-full">Continue</button>
              </div>
            </fieldset>
          </div>

          <form v-else @submit.prevent="handleRegister" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="FirstName" class="block text-sm font-medium text-gray-700">
                First Name
              </label>

              <input type="text" v-model="registerPayload.firstname" id="FirstName" name="first_name"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 py-3 border pl-3 shadow-sm" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="LastName" class="block text-sm font-medium text-gray-700">
                Last Name
              </label>

              <input type="text" v-model="registerPayload.lastname" id="LastName" name="last_name"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 py-3 border pl-3 shadow-sm" />
            </div>

            <div class="col-span-6">
              <label for="Email" class="block text-sm font-medium text-gray-700"> Email </label>

              <input type="email" id="Email" name="email" v-model="registerPayload.email"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 py-3 border pl-3 shadow-sm" />
            </div>

            <div class="col-span-6">
              <label for="phone" class="block text-sm font-medium text-gray-700"> Phone Number </label>

              <input type="tel" id="phone" name="phone" v-model="registerPayload.phone"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 py-3 border pl-3 shadow-sm" />
            </div>

            <div class="col-span-6">
              <label for="address" class="block text-sm font-medium text-gray-700"> Current Address (Hostel within LUTH)
                * </label>

              <textarea id="address" name="address" v-model="registerPayload.address.addr1"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 py-3 border pl-3 shadow-sm resize-none"
                rows="3" cols="3" />
            </div>

            <div class="col-span-6 relative">
              <label for="Password" class="block text-sm font-medium text-gray-700"> Password </label>

              <input v-model="registerPayload.password" :type="showPassword ? 'text' : 'password'" id="Password"
                name="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 py-3 border pl-3 shadow-sm" />
              <img @click="showPassword = !showPassword" :src="eye" alt=""
                class="absolute cursor-pointer top-9 right-4 h-6 w-6">
            </div>

            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <input type="checkbox" id="MarketingAccept" name="marketing_accept"
                  class="size-5 rounded-md border-gray-200 bg-white shadow-sm" />

                <span class="text-sm text-gray-700">
                  I want to receive emails about events, product updates and company announcements.
                </span>
              </label>
            </div>

            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700 underline"> terms and conditions </a>
                and
                <a href="#" class="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button :disabled="!isFormEmpty || loading"
                class="inline-block shrink-0 rounded-md border disabled:cursor-not-allowed disabled:opacity-25 border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition">
                <template v-if="loading">
                  <div class="flex items-center">
                    <CoreButtonSpinner /> Processing
                  </div>
                </template>
                <span v-else>Create an account</span>
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <nuxt-link to="/login" class="text-gray-700 underline">Log in</nuxt-link>.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>

<script setup lang="ts">
import eyeOpen from '@/assets/icons/eye-open.svg'
import eyeClose from '@/assets/icons/eye-close.svg'
const route = useRoute()
const router = useRouter()
import { useRegister } from '@/composables/auth/register'
const { registerPayload, handleRegister, loading, isFormEmpty } = useRegister()
definePageMeta({
  layout: 'authentication'
})

const form = ref({
  userType: ''
})

const handleUserType = () => {
  router.push({
    path: route.path, query: {
      page: form.value.userType
    }
  })
}

const eye = computed(() => {
  return !showPassword.value ? eyeClose : eyeOpen
})

const showPassword = ref(false)

</script>

<style></style>
