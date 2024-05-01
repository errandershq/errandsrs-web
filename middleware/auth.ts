import { useLogin } from "@/composables/auth/login";
const { isLoggedIn }  = useLogin()
export default defineNuxtRouteMiddleware((to, from) => {  
    if (!isLoggedIn && to.path !== '/login') {
      return navigateTo('/login');
    }
  });