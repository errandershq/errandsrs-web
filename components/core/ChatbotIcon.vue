<!-- components/ChatbotIcon.vue -->
<template>
    <div @click="redirectToWhatsApp" class="fixed bottom-6 right-24 cursor-pointer">
        <img src="@/assets/icons/whatsapp.svg" alt="Chat with us on WhatsApp" class="h-12 w-12 bg-white rounded-full p-1.5 shadow-sm">
    </div>
</template>

<script setup>
const redirectToWhatsApp = () => {
    const phoneNumber = '+2348147626503'; // Replace with your WhatsApp business phone number
    const message = encodeURIComponent("Hello! I'd like to know more about Erranders.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}
</script>

<style scoped></style>