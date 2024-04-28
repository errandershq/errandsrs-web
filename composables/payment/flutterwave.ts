import { useFlutterwave } from "flutterwave-vue3";
import { useLogin } from "@/composables/auth/login";
import logo from "@/assets/img/logo.png";

export const useFlutterwaveSDK = () => {
  const { localstorageData } = useLogin();
  const user = localstorageData.user.value;
  console.log(user, "uer here");
  const paymentForm = ref({
    amount: "500" as any,
  });
  const loading = ref(false);
  const computedUsername = computed(() => {
    return `${user.firstname} ${user.lastname}`;
  });

  const handlePayment = () => {
    loading.value = true;
    useFlutterwave({
      amount: Number(paymentForm.value.amount),
      callback(data: any): void {
        console.log(data);
      },
      country: "NG",
      currency: "NGN",
      customer: {
        email: user.email,
        name: computedUsername.value,
        phone_number: user.phone,
      },
      customizations: {
        description: "Pay with Erranders",
        logo: logo,
        title: "Erranders",
      },
      meta: {
        user_id: 1,
        token: "jdjdjdjdjd",
      },
      onclose(): void {},
      payment_options: "card",
      public_key: import.meta.env.VITE_FLW_PUBLIC_KEY,
      redirect_url: undefined,
      tx_ref: "tx_ref_herer_h92hjyj3",
    });
  };

  return { handlePayment, paymentForm };
};
