<!-- components/ChatbotIcon.vue -->
<template>
    <div @click="redirectToWhatsApp" class="fixed bottom-6 right-36 cursor-pointer">
        <img src="@/assets/icons/whatsapp.svg" alt="Chat with us on WhatsApp" class="h-12 w-12">
    </div>
</template>

<script setup>
const redirectToWhatsApp = () => {
    const phoneNumber = '08147626503'; // Replace with your WhatsApp business phone number
    const message = encodeURIComponent("Hello! I'd like to chat with you.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}
</script>

<style scoped></style>