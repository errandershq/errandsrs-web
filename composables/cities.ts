export const usePopularPlaces = () => {
  const popularPlaces = ref([
    {
      text: "Just Spices",
      value: "just-spices",
    },
    {
      text: "Mama Chidera",
      value: "mama-chidera",
    },
    {
      text: "Bubbles",
      value: "bubbles",
    },
    {
      text: "Chijoke",
      value: "chijoke",
    },
    {
      text: "Tandalicious",
      value: "tandalicious",
    },
    {
      text: "Yem Yem",
      value: "yem-yem",
    },
    {
      text: "Iya Itunu",
      value: "iya-itunu",
    },
  ]);

  return { popularPlaces };
};
