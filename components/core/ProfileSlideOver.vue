<template>
    <div class="relative z-10" role="dialog" aria-modal="true" v-if="show">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <!--
                Slide-over panel, show/hide based on slide-over state.
      
                Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                  From: "translate-x-full"
                  To: "translate-x-0"
                Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                  From: "translate-x-0"
                  To: "translate-x-full"
              -->
                    <div class="pointer-events-auto w-screen max-w-md">
                        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div class="px-4 py-6 sm:px-6">
                                <div class="flex items-start justify-between">
                                    <h2 id="slide-over-heading" class="text-base font-semibold leading-6 text-gray-900">
                                        Profile</h2>
                                    <div class="ml-3 flex h-7 items-center">
                                        <button type="button" @click="closeSlideOver"
                                            class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
                                            <span class="absolute -inset-2.5"></span>
                                            <span class="sr-only">Close panel</span>
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- Main -->
                            <div>
                                <div class="pb-1 sm:pb-6">
                                    <div>
                                        <div class="relative h-40 sm:h-56">
                                            <img class="absolute h-full w-full object-cover"
                                                src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"
                                                alt="">
                                        </div>
                                        <div class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                                            <div class="sm:flex-1">
                                                <div>
                                                    <div class="flex items-center">
                                                        <h3 class="text-xl font-bold text-gray-900 sm:text-2xl">{{
        user.firstname }} {{ user.lastname }}</h3>
                                                        <span
                                                            class="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                                            <span class="sr-only">Online</span>
                                                        </span>
                                                    </div>
                                                    <p class="text-sm text-gray-500">@{{ user.firstname.toLowerCase()
                                                        }}{{ user.lastname.toLowerCase() }}</p>
                                                </div>
                                                <div class="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                                                    <button type="button"
                                                        class="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1">Update
                                                        Profile</button>
                                                    <button type="button"
                                                        class="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Call</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
                                    <dl class="space-y-8 px-4 sm:space-y-6 sm:px-6">
                                        <div>
                                            <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Bio
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                                                <p>{{ user.bio ?? 'N/A' }}</p>
                                            </dd>
                                        </div>
                                        <div>
                                            <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                                Location</dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{{ user.address.addr1
                                                }}
                                            </dd>
                                        </div>
                                        <div>
                                            <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                                Email</dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{{ user.email }}</dd>
                                        </div>
                                        <div>
                                            <dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                                Phone</dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                                                <time datetime="1988-06-23">{{ user.phone }}</time>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    user: {
        type: Object,
        default: () => { }
    }
})

const emit = defineEmits(['close'])
const closeSlideOver = () => {
    emit('close')
}
</script>
