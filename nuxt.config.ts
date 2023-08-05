// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/static/bootstrap/bootstrap-grid.css',
        '@/assets/scss/main.scss',
      ],
      modules: [
        '@element-plus/nuxt','@vueuse/motion/nuxt'
      ],
      components: {
        global: true,
        dirs: ['~/components']
      },
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0
            },
          }
        }
      }
})
