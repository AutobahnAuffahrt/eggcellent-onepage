<template>
  <div class="page-wrapper">
    <!-- Hero Section - Full Screen -->
    <section id="hero" class="full-section hero-section">
      <hero-section />
    </section>

    <!-- Breed Sections - Each breed gets its own full screen -->
    <section v-for="breed in breeds" :key="breed.id" :id="`breed-${breed.id}`" class="full-section breed-section">
      <breed-section :breed="breed" />
    </section>

    <!-- Coop Section - Full Screen -->
    <section id="coop" class="full-section coop-section">
      <coop-section :coopInfo="coopInfo" />
    </section>
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
      breedsStore
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
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  scroll-snap-align: start;
  overflow: hidden;
}

/* Hero Section Styling */
.hero-section {
  background: linear-gradient(135deg, #8B4513 0%, #D2B48C 100%);
  color: white;
}

/* Breed Section Styling */
.breed-section {
  background: #F5F5DC;
  /* Beige background */
  color: #654321;
  padding: 0rem;
}

.breed-section:nth-child(even) {
  background: #FAEBD7;
  /* Alternate background for variety */
}

/* Coop Section Styling */
.coop-section {
  background: linear-gradient(135deg, #4169E1 0%, #87CEEB 100%);
  color: white;
}



/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
  /* Schnappt nur wenn nahe genug */
}



/* Mobile responsiveness */
@media (max-width: 768px) {
  .section-nav {
    right: 1rem;
  }

  .nav-dot {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }

  .coop-content h1 {
    font-size: 2.5rem;
  }

  .coop-description {
    font-size: 1.2rem;
  }
}
</style>
