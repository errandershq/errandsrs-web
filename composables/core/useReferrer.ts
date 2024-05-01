import { ref } from 'vue';
import { parse } from 'qs';

export function useReferrer() {
  const router = useRouter();
  const route = useRoute();

  const referrer = ref<string | null>(null);

  const getReferrer = () => {
    const query = route.query.ru || null; // 'ru' stands for referral URL
    console.log(query, 'query here')

    if (query) {
      try {
        referrer.value = parse(query, { loose: true }).ru; // Decode referral URL
      } catch (error) {
        console.error('Error parsing referrer URL:', error);
      }
    }
  };

  getReferrer();

  const redirectToReferrer = async (redirectTo = referrer.value) => {
    if (redirectTo) {
      try {
        await router.push(redirectTo);
      } catch (error) {

        router.push('/')
        // Handle redirect error gracefully (e.g., redirect to home page)
      }
    } else {
        router.push('/')
      // Handle case where no referrer is available (e.g., redirect to home page)
    }
  };

  return { referrer, redirectToReferrer };
}
