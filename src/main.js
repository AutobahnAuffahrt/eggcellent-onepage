import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

/* optional italic styles */
import '@fontsource/roboto/100-italic.css'
import '@fontsource/roboto/300-italic.css'
import '@fontsource/roboto/400-italic.css'
import '@fontsource/roboto/500-italic.css'
import '@fontsource/roboto/700-italic.css'
import '@fontsource/roboto/900-italic.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  },
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false, // oder true für Dark Mode
        colors: {
          // Primäre Farben
          primary: '#8B4513',          // Earthy primary (statt Blau)
          secondary: '#654321',        // Dark brown (Text / Kontrast)
          accent: '#FFC107',           // Warm highlight
          success: '#4CAF50',
          warning: '#FF9800',
          error: '#F44336',
          info: '#87CEEB',

          // Oberflächenfarben
          surface: '#FFFFFF',
          background: '#D2B48C',       // Global app background (Tan)
          backgroundhero: '#8B4513',   // Hero start
          background_breeds_even: '#FAEBD7', // AntiqueWhite
          background_breeds_odd: '#F5F5DC',  // Beige
          background_coop: '#4169E1',       // Coop gradient start
          background_coop_to: '#87CEEB',    // Coop gradient end
          background_footer: '#422910ff',         // Dark brown footer

          // Custom Farben
          breed_title: '#8B4513',
          breed_text: '#654321',
          breed_card_boarder: '#CD853F', // Peru
          coop_title: '#FAEBD7',         // Blue für Coop-Titel
          coop_text: '#F5F5DC',          // Dunkelblau für Coop-Text
          coop_card_boarder: '#42A5F5',  // Hellblau für Coop-Card-Rahmen
          brand: '#6366F1',        // Ihre Markenfarbe
          highlight: '#FFC107',    // Highlight-Farbe
        }
      }
    }
  }
})

app.use(createPinia())
// register vuetify before router (can avoid some init timing issues)
app.use(vuetify)
app.use(router)

// Surface uncaught errors and promise rejections in the browser console
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue global errorHandler:', err, info)
}
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
})

app.mount('#app')
