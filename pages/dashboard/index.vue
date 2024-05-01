<template>
    <main>
        <h1 class="h-screen grid place-content-center">Coming soon</h1>
    </main>
</template>

<script setup lang="ts">
import { useLogin } from '@/composables/auth/login'
const router = useRouter()
const { localstorageData, isLoggedIn } = useLogin()
onMounted(() => {
    if (isLoggedIn.value && localstorageData.user.value.role === 'store-agent') {
        router.push('/dashboard/store');
    }

    if (isLoggedIn.value && localstorageData.user.value.role === 'delivery-agent') {
        router.push('/dashboard/delivery');
    }

    if (isLoggedIn.value && localstorageData.user.value.role === 'user') {
        router.push('/dashboard/user');
    }

    if(!isLoggedIn){
        router.push('/login');
    }
});

definePageMeta({
    middleware: 'auth'
})
</script>