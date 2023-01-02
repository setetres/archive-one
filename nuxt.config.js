import tailwindConfig from './tailwind.config'

export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'overflow-y-scroll min-h-screen select-none',
    },
    title: 'Sete Três — Archive One',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, height=device-height, user-scalable=no, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '🗄️ v1.0 of the archive.',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Sete Três — Archive One' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '🗄️ v1.0 of the archive.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://archive-one.setetres.st/share-archive-one.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://archive-one.setetres.st',
      },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Sete Três — Archive One',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: '🗄️ v1.0 of the archive.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://archive-one.setetres.st/share-archive-one.png',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
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
  plugins: [
    {
      src: '~/plugins/ga.js',
      mode: 'client',
    },
  ],
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
