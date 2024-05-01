import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';
export default defineNuxtPlugin((nuxtApp) => {
      nuxtApp.vueApp.use(TawkMessengerVue, {
        propertyId: "663209451ec1082f04e9bafc",
        widgetId: "1hspn8e63",
     });
});