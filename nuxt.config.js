// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "App Trainers",
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
          type: "text/javascript",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
          type: "text/javascript",
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ],
    },
  },

  css: [
    "@/assets/css/animate.css",
    "animate.css/animate.css",
    // "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/css/style.css",
    "@/assets/css/responsive.css",
  ],


  components: true,
  compatibilityDate: "2025-05-01",
});