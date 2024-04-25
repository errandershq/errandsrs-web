import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file to apply default styles

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      // You can put your AOS configurations here
      once: false, 
      offset: 120, // Offset from the original trigger point
      delay: 0,    // Values from 0 to 3000, with step 50ms
      duration: 400, // Values from 0 to 3000, with step 50ms
      easing: 'ease', // Default easing for AOS animations
      mirror: false, // Whether elements should animate out while scrolling past them    // whether animation should happen only once - while scrolling down
    });
  });
});
