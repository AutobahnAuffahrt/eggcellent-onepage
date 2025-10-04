<template>
  <div class="hero-content">
    <h1 class="hero-title">🥚 Schuchardt Farm 🥚</h1>
    <p class="hero-subtitle">Willkommen in unserem Hühnerparadies!</p>
    <p class="hero-description">
      Entdecken Sie unsere {{ totalBreeds }} erstaunlichen Hühnerarten und erkunden Sie unseren handgefertigten Stall.
    </p>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <span>Scrollen Sie, um zu erkunden</span>
      <div class="scroll-arrow">↓</div>
    </div>
  </div>
</template>

<script>
import { useBreedsStore } from '../stores/breeds.js'

export default {
  name: 'HeroSection',

  setup() {
    const breedsStore = useBreedsStore()
    return {
      breedsStore
    }
  },

  computed: {
    totalBreeds() {
      return this.breedsStore.totalBreeds
    }
  }
}
</script>

<style scoped>
.hero-content {
  text-align: center;
  max-width: 900px;
  padding: 2rem;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Georgia', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 300;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.hero-description {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.scroll-indicator {
  animation: fadeInUp 1s ease-out 0.9s both;
}

.scroll-indicator span {
  display: block;
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.scroll-arrow {
  font-size: 2rem;
  animation: bounce 2s infinite;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }
}
</style>
