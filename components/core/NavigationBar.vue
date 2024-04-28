<template>
    <main>
        <header class="absolute inset-x-0 top-0 z-50 border-b border-gray-100 shadow bg-white">
            <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-16 w-auto" src="@/assets/img/logo.png" alt="" />
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button @click="showSideBar = true" type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
                    <a href="#market" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <nuxt-link v-if="!isLoggedIn" to="/login" class="text-sm font-semibold leading-6 text-gray-900">Log
                        in<span aria-hidden="true">&rarr;</span></nuxt-link>
                    <span @click="isOpen = !isOpen" class="relative inline-block cursor-pointer" v-if="isLoggedIn">
                        <img class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="" />
                        <span
                            class="absolute right-0 top-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white"></span>
                    </span>
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
                            <img class="h-16 w-auto" src="@/assets/img/logo.png" alt="" />
                        </a>
                        <button @click="showSideBar = false" type="button"
                            class="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
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
                                <a href="#market"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                            </div>
                            <div class="py-6">
                                <nuxt-link to="/login"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                    in</nuxt-link>
                            </div>
                            <div class="py-6">
                                <nuxt-link @click.native="handleLogout" to="#"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Logout</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="isOpen"
                class="absolute top-20 right-16 w-80 rounded-md shadow-lg z-50 bg-white border-t border-gray-50 p-4">
                <div class="flex justify-end items-end">
                    <div @click="isOpen = false"
                        class="rounded-full cursor-pointer bg-white shadow-lg p-2.5 flex justify-center h-10 w-10 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </div>
                <div class="py-2 px-4 border-b border-gray-100 pb-4">
                    <h3 class="font-semibold font-sans text-lg text-gray-700 ">Hello, {{
                        user.firstname }} {{ user.lastname }} !</h3>
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
                    <p class="text-xs text-gray-600">We use customer data to improve the experience of our service and
                        show relevant promotions.</p>
                </div>
                <div class="py-4">
                    <p class="text-xs bg-gray-50 rounded-lg p-3 text-gray-400">Erranders may share user data (such as
                        hashed emails, phones, or device identifiers) with Facebook
                        and similar platforms to personalise, measure ads and content, and create audiences. You can
                        always opt out of receiving these communications at any time.</p>
                </div>

                <div class="px-4 border-b border-gray-100 text-sm flex py-6 justify-between items-center">
                    <p class="text-gray-400">Recieve special deals and promotions?</p>
                    <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                    <button type="button" @click="enabled = !enabled"
                        class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                        role="switch" aria-checked="false">
                        <span class="sr-only">Use setting</span>
                        <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                        <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0']"
                            class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                    </button>
                </div>
                <div class="py-2 border-t border-gray-100">
                    <a href.prevent="#" @click="isConfirmLogout = true"
                        class="px-4 py-2 flex items-center text-sm gap-x-2 cursor-pointer text-red-500 no-un hover:underline font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="#d0021b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                        </svg>
                        Log Out</a>
                </div>
            </div>
        </header>
        <CoreBaseModal :show="isConfirmLogout">
            <main class="p-6 space-y-7">
                <div class="flex justify-center items-center">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22 6.62219V17.245C22 18.3579 21.2857 19.4708 20.1633 19.8754L15.0612 21.7977C14.7551 21.8988 14.449 22 14.0408 22C13.5306 22 12.9184 21.7977 12.4082 21.4942C12.2041 21.2918 11.898 21.0895 11.7959 20.8871H7.91837C6.38776 20.8871 5.06122 19.6731 5.06122 18.0544V17.0427C5.06122 16.638 5.36735 16.2333 5.87755 16.2333C6.38776 16.2333 6.69388 16.5368 6.69388 17.0427V18.0544C6.69388 18.7626 7.30612 19.2684 7.91837 19.2684H11.2857V4.69997H7.91837C7.20408 4.69997 6.69388 5.20582 6.69388 5.91401V6.9257C6.69388 7.33038 6.38776 7.73506 5.87755 7.73506C5.36735 7.73506 5.06122 7.33038 5.06122 6.9257V5.91401C5.06122 4.39646 6.28572 3.08125 7.91837 3.08125H11.7959C12 2.87891 12.2041 2.67657 12.4082 2.47423C13.2245 1.96838 14.1429 1.86721 15.0612 2.17072L20.1633 4.09295C21.1837 4.39646 22 5.50933 22 6.62219Z"
                            fill="#030D45" />
                        <path
                            d="M4.85714 14.8169C4.65306 14.8169 4.44898 14.7158 4.34694 14.6146L2.30612 12.5912C2.20408 12.49 2.20408 12.3889 2.10204 12.3889C2.10204 12.2877 2 12.1865 2 12.0854C2 11.9842 2 11.883 2.10204 11.7819C2.10204 11.6807 2.20408 11.5795 2.30612 11.5795L4.34694 9.55612C4.65306 9.25261 5.16327 9.25261 5.46939 9.55612C5.77551 9.85963 5.77551 10.3655 5.46939 10.669L4.7551 11.3772H8.93878C9.34694 11.3772 9.7551 11.6807 9.7551 12.1865C9.7551 12.6924 9.34694 12.7936 8.93878 12.7936H4.65306L5.36735 13.5017C5.67347 13.8052 5.67347 14.3111 5.36735 14.6146C5.26531 14.7158 5.06122 14.8169 4.85714 14.8169Z"
                            fill="#030D45" />
                    </svg>
                </div>
                <div class="">
                    <h1 class="text-2xl font-semibold text-gray-700">Oh no! You're leaving...</h1>
                    <h1 class="text-2xl font-semibold text-gray-700">Are you sure?</h1>
                </div>

                <div class="flex justify-between items-center">
                    <div>
                        <button @click="handleLogout">
                            <a class="group relative inline-block overflow-hidden border border-red-600 px-8 py-3 focus:outline-none focus:ring"
                                href="#">
                                <span
                                    class="absolute inset-x-0 top-0 h-[2px] bg-red-600 transition-all group-hover:h-full group-active:bg-red-500"></span>

                                <span
                                    class="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white">
                                    Yes, Log Me Out.
                                </span>
                            </a>
                        </button>
                    </div>
                    <div>
                        <button @click="isConfirmLogout = false">
                            <a class="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                                href="#">
                                <span
                                    class="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

                                <span
                                    class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                                    Nah, Just Kidding
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
            </main>
        </CoreBaseModal>
    </main>
</template>

<script setup lang="ts">
import { useLogin } from "@/composables/auth/login";
const { isLoggedIn, localstorageData, logOut } = useLogin();
const isOpen = ref(false);
const dropdownOpen = ref(false)
const showSideBar = ref(false)
const isConfirmLogout = ref(false)

const enabled = ref(false)

const user = computed(() => {
    return localstorageData.user.value
})

const handleLogout = () => {
    logOut()
    isConfirmLogout.value = false

}


// const handleClickOutside = (event: any) => {
//     if (!event.target.closest('.user-profile-dropdown')) {
//         isOpen.value = false;
//     }
// };

// document.addEventListener('click', handleClickOutside);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};
</script>
