import tailwindConfig from './tailwind.config' // eslint-disable-line

export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'overflow-y-scroll min-h-screen',
    },
    title: 'Sete Três — Archive',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, height=device-height, user-scalable=no, initial-scale=1',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap',
      },
    ],
  },
  loading: {
    color: '#000000',
    failedColor: '#e02020',
    throttle: 0,
  },
  css: [
    '@/assets/css/application.css',
    '@/assets/css/setetres/s.css',
    '@/assets/css/setetres/e.css',
    '@/assets/css/setetres/t.css',
    '@/assets/css/setetres/r.css',
    '@/assets/css/setetres/setetres.css',
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
}
