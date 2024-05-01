<template>
    <main>
        <header class="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
            <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div class="flex flex-1 items-center gap-x-6">
                    <button @click="isOpen = true" type="button" class="-m-3 p-3 md:hidden">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <img class="h-14 w-auto" src="@/assets/img/logo.png" alt="Your Company">
                </div>
                <nav class="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
                    <a href="#">Home</a>
                    <a href="#">Invoices</a>
                    <a href="#">Clients</a>
                    <a href="#">Expenses</a>
                </nav>
                <div class="flex flex-1 items-center justify-end gap-x-8">
                    <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">View notifications</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </button>
                    <a href="#" class="-m-1.5 p-1.5" @click.prevent="isProfileOpen = !isProfileOpen">
                        <span class="sr-only">Your profile</span>
                        <img class="h-8 w-8 rounded-full bg-gray-800"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                    </a>
                </div>
            </div>
            <CoreProfileSlideOver :user="user" :show="isProfileOpen" @close="isProfileOpen = false" />
            <!-- <section class="relative">
                <div v-show="isProfileOpen"
                    class="absolute top-14 right-36 right w-80 rounded-md shadow-lg z-50 bg-white border-t border-gray-50 p-4">
                    <div class="mx-auto w-full flex items-center justify-center">
                        <div class="cone w-0 h-0 absolute"></div>
                    </div>
                    <div class="flex justify-end items-end">
                        <div @click="isProfileOpen = false"
                            class="rounded-full cursor-pointer bg-white shadow-lg p-2.5 flex justify-center h-10 w-10 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="py-2 px-4 border-b border-gray-100 pb-4">
                        <h3 class="font-semibold font-sans text-lg text-gray-700 ">Hello, 
                            {{ user.firstname }} {{ user.lastname }} !</h3>
                    </div>
                    <div class="">
                        <ul class="border-b border-gray-100 py-4">
                            <li>
                                <div class="block px-4 py-2  text-sm text-gray-700 ">
                                    <p class="text-gray-400">Name</p>
                                    <p class="font-medium text-gray-800">{{ user.firstname }} {{ user.lastname }}</p>
                                </div>
                            </li>
                            <li>
                                <div class="block px-4 py-2  text-sm text-gray-700 ">
                                    <p class="text-gray-400">Email</p>
                                    <p class="font-medium text-gray-800">{{ user.email }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="py-2 px-4 border-b border-gray-100 flex justify-between items-center py-4">
                        <div class="block py-2  text-sm text-gray-700 ">
                            <p class="text-gray-400">Phone</p>
                            <p class="text-xs text-yellow-500">What's your phone number?</p>
                        </div>
                        <button class="text-green-700 font-medium text-sm">Edit</button>
                    </div>

                    <div class="px-4 border-b border-gray-100 text-sm flex py-6 justify-between items-center">
                        <p class="text-gray-400">Password</p>
                        <button class="text-green-700 font-medium text-sm">Edit</button>
                    </div>
                    <div class="text-sm px-4 py-4">
                        <p class="text-gray-400">Manage preferences</p>
                        <p class="text-xs text-gray-600">We use customer data to improve the experience of our service
                            and
                            show relevant promotions.</p>
                    </div>
                    <div class="py-4">
                        <p class="text-xs bg-gray-50 rounded-lg p-3 text-gray-400">Erranders may share user data (such
                            as
                            hashed emails, phones, or device identifiers) with Facebook
                            and similar platforms to personalise, measure ads and content, and create audiences. You can
                            always opt out of receiving these communications at any time.</p>
                    </div>

                    <div class="px-4 border-b border-gray-100 text-sm flex py-6 justify-between items-center">
                        <p class="text-gray-400">Recieve special deals and promotions?</p>
                        <button type="button" @click="enabled = !enabled"
                            class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                            role="switch" aria-checked="false">
                            <span class="sr-only">Use setting</span>
                            <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0']"
                                class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                        </button>
                    </div>
                    <div class="py-2 border-t border-gray-100">
                        <a href.prevent="#" @click="logOut"
                            class="px-4 py-2 flex items-center text-sm gap-x-2 cursor-pointer text-red-500 no-un hover:underline font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="#d0021b" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                            </svg>
                            Log Out</a>
                    </div>
                </div>
            </section> -->
            <!-- Mobile menu, show/hide based on menu open state. -->
            <div class="lg:hidden" role="dialog" aria-modal="true" v-if="isOpen">
                <!-- Background backdrop, show/hide based on slide-over state. -->
                <div class="fixed inset-0 z-50"></div>
                <div
                    class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
                    <div class="-ml-0.5 flex h-16 items-center gap-x-6">
                        <button @click="isOpen = false" type="button" class="-m-2.5 p-2.5 text-gray-700">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div class="-ml-0.5">
                            <a href="#" class="-m-1.5 block p-1.5">
                                <span class="sr-only">Your Company</span>
                                <img class="h-8 w-auto" src="@/assets/img/logo.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="mt-2 space-y-2">
                        <a href="#"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                        <a href="#"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Invoices</a>
                        <a href="#"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Clients</a>
                        <a href="#"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Expenses</a>
                    </div>
                </div>
            </div>
        </header>
        <slot />
    </main>
</template>

<script setup lang="ts">
import { useLogin } from "@/composables/auth/login";
const { isLoggedIn, localstorageData, logOut } = useLogin();
const enabled = ref(false)
const user = computed(() => {
    return localstorageData.user.value
})

const isOpen = ref(false)
const isProfileOpen = ref(false)
</script>

<style>
.cone {
    border-left: 10px solid transparent;
    /* Adjust size by changing the pixel values */
    border-right: 10px solid transparent;
    /* Adjust size by changing the pixel values */
    border-bottom: 20px solid currentColor;
    /* Creates the cone pointing upwards */
    top: -10px;
    /* Half of the border-bottom value to align it with the line */
}
</style>