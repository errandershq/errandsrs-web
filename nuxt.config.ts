export default {
  ssr: false,
  target: "static",
  app: {
    head: {
      title: "Erranders",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["/assets/css/main.css"],
  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },
  axios: {
    // Axios options here
    timeout: 10000, // Example: set timeout to 10 seconds
  },
  // auth: {
  //   strategies: {
  //     google: {
  //       clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
  //       codeChallengeMethod: '',
  //       responseType: 'token id_token',
  //       redirectUri: 'YOUR_REDIRECT_URI',
  //       scope: ['openid', 'profile', 'email'],
  //     }
  //   },
  //   redirect: {
  //     login: '/login',
  //     logout: '/',
  //     callback: '/login',
  //     home: '/'
  //   }
  // }
  // buildModules: [
  //   '@nuxtjs/moment'
  // ]
  // alias: {
  // 	'@': '/'
  // },
};
