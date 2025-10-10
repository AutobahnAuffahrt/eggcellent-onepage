<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container class="scroller page-wrapper w-100 h-screen" fluid>

          <!-- Hero Section - Full Screen -->
          <v-row id="hero" class="full-section hero-section h-screen d-flex align-stretch justify-center text-white">
            <hero-section />
          </v-row>

          <!-- Breed Sections - Each breed gets its own full screen -->
          <v-row v-for="breed in breeds" :key="breed.id" :id="`breed-${breed.id}`"
            class="full-section breed-section h-screen d-flex align-center justify-center"
            :class="(breed.id % 2) ? 'bg-background_breeds_odd' : 'bg-background_breeds_even'">
            <breed-section :breed="breed" />
          </v-row>

          <!-- Coop Section - Full Screen -->
          <v-row id="coop"
            class="full-section coop-section h-screen d-flex align-center justify-center bg-background_coop">
            <coop-section :coopInfo="coopInfo" />
          </v-row>

        </v-container>
      </v-main>

      <!-- Sticky Footer -->
      <v-footer app color="footer" class="bg-background_footer d-flex text-white">
        <span>© 2024 AutobahnAuffahrt</span>
      </v-footer>

      <!-- Toast/Snackbar -->
      <v-snackbar v-model="snackbar">
        Erfolgreich gespeichert!
      </v-snackbar>
    </v-app>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import BreedSection from '@/components/BreedSection.vue'
import CoopSection from '@/components/CoopSection.vue'
import { useBreedsStore } from '../stores/breeds.js'



export default {
  name: 'HomeView',
  components: {
    HeroSection,
    BreedSection,
    CoopSection,
  },
  setup() {
    const breedsStore = useBreedsStore()
    return {
      breedsStore,
    }
  },

  computed: {
    breeds() {
      return this.breedsStore.breeds
    },

    coopInfo() {
      return this.breedsStore.coopInfo
    }
  }
}
</script>

<style scoped>
/* Remove default margins/padding */
.page-wrapper {
  margin: 0;
  padding: 0;
}

/* Full-screen sections */
.full-section {
  scroll-snap-align: start;
}

/* Hero Section Styling */
.hero-section {
  background: linear-gradient(135deg,
      rgb(var(--v-theme-backgroundhero)) 0%,
      rgb(var(--v-theme-background)) 100%);
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
  /* Schnappt nur wenn nahe genug */
}
</style>
