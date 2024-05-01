// composables/useOrganizations.ts
import { authApiFactory } from "@/apiFactory/auth";
import { useStorage } from "@vueuse/core";
import Swal from "sweetalert2";
import { useReferrer } from "@/composables/core/useReferrer";

const router = useRouter();
const { referrer, redirectToReferrer } = useReferrer();
const runtimeData = {
  user: ref({} as any),
  token: ref(""),
};
const localstorageData = {
  user: useStorage("user", {} as any),
  token: useStorage("token", ""),
};
watch(
  runtimeData.user,
  (val) => {
    Object.keys(val).forEach((key) => {
      localstorageData.user.value[key] = val[key];
    });
  },
  { deep: true }
);

(() => {
  runtimeData.user.value = localstorageData.user.value;
  runtimeData.token.value = localstorageData.token.value;
})();

const loginPayload = ref({
  email: "",
  password: "",
});
export const useLogin = () => {
  const loading = ref(false);
  const handleLogin = async () => {
    const router = useRouter();
    loading.value = true;
    const payload = {
      email: loginPayload.value.email,
      password: loginPayload.value.password,
    };
    await authApiFactory
      .login(payload)
      .then((response) => {
        console.log(response);
        if (typeof response !== "undefined") {
          runtimeData.user.value = response?.data?.user;
          localstorageData.token.value = response?.data?.token;
          runtimeData.token.value = response?.data?.token;
          const previousRoute = router?.options?.history?.state?.back;
          const likelyDashboardRedirectPaths = [
            "/",
            "/signup?page=delivery-agent",
            "/signup?page=user",
            "/signup?page=store-agent",
          ];
          const likelyBackPaths = [
            "/login",
            "/signup?page=delivery-agent",
            "/signup?page=user",
            "/signup?page=store-agent",
          ];
          if (likelyDashboardRedirectPaths.includes(previousRoute)) {
            router.push("/dashboard");
          }

          if (!likelyBackPaths.includes(previousRoute)) {
            router.push(`${router.options.history.state.back}`);
          }

          if (previousRoute === "/") {
            router.push("/dashboard");
          }
        }
      })
      .catch((error) => {
        useNuxtApp().$toast.error("Something went wrong!", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      })
      .finally(() => {
        loading.value = false;
      });
  };

  const logOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        runtimeData.user.value = null;
        location.href = "/login";
      } else {
        Swal.fire("Cancelled", "Action was cancelled", "info");
      }
    });
  };

  const id = computed({
    get: () => runtimeData?.user?.value?.id ?? "",
    set: () => {},
  });

  const isLoggedIn = computed({
    get: () => {
      if (!runtimeData.token?.value) return false;
      return runtimeData?.user?.value != null || undefined || {};
    },
    set: () => {},
  });

  const userRole = computed({
    get: () => {
      if (!runtimeData.token?.value) return false;
      return runtimeData?.user?.value != null || undefined || {}
        ? runtimeData?.user?.value.role
        : "";
    },
    set: () => {},
  });

  const isFormEmpty = computed(() => {
    return !!(loginPayload.value.email && loginPayload.value.password);
  });

  return {
    handleLogin,
    localstorageData,
    loginPayload,
    loading,
    isFormEmpty,
    logOut,
    isLoggedIn,
    id,
    userRole,
  };
};
