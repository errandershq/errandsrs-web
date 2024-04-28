import { authApiFactory } from "@/apiFactory/auth";
const route = useRoute()
export const useRegister = () => {
  const loading = ref(false);
  const registerPayload = ref({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    address: {
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      country: "",
      zip: "",
    },
  });

  const handleRegister = async () => {
    loading.value = true;
    try {
      const payload = {
        role: route.query.page,
        firstname: registerPayload.value.firstname,
        lastname: registerPayload.value.lastname,
        email: registerPayload.value.email,
        password: registerPayload.value.password,
        phone: registerPayload.value.phone,
        address: {
          addr1: registerPayload.value.address.addr1,
          addr2: registerPayload.value.address.addr2,
          city: registerPayload.value.address.city,
          state: registerPayload.value.address.state,
          country: registerPayload.value.address.city,
          zip: registerPayload.value.address.zip,
        },
      };

      const response = await authApiFactory.register(payload);
      useNuxtApp().$toast.success("Account was successfully created.", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      useRouter().push("/login");
    } catch (error) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      // return error;
    } finally {
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(
      registerPayload.value.firstname &&
      registerPayload.value.lastname &&
      registerPayload.value.email &&
      registerPayload.value.password &&
      registerPayload.value.phone &&
      registerPayload.value.address.addr1
    );
  });

  return { registerPayload, handleRegister, loading, isFormEmpty };
};
