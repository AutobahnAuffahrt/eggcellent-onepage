<template>
  <v-sheet class="d-flex flex-column justify-center align-center text-center h-100 w-100 px-8" elevation="0"
    style="background:linear-gradient(135deg,rgb(var(--v-theme-backgroundhero)) 0%, rgb(var(--v-theme-background)) 100%);">
    <v-container class="py-0">
      <v-row class="justify-center">
        <v-col cols="12" md="10" lg="8">
          <h1
            class="hero-title text-h3 text-sm-h2 text-xl-h1 font-weight-bold mb-4 text-white animate__animated animate__fadeInUp">
            <span class="egg d-none d-md-inline">🥚</span>
            <span class="title-text text-no-wrap">Schuchardt&nbsp;Farm</span>
            <span class="egg d-none d-md-inline">🥚</span>
          </h1>

          <p class="text-h5 text-sm-h4 mb-4 text-white animate__animated animate__fadeInUp animate__delay-300ms">
            Willkommen in unserem Hühnerparadies!
          </p>
          <p
            class="text-subtitle-1 text-sm-h6 mb-8 text-white opacity-90 animate__animated animate__fadeInUp animate__delay-600ms">
            Entdecken Sie unsere {{ totalBreeds }} erstaunlichen Hühnerarten und erkunden Sie unseren handgefertigten
            Stall.
          </p>
          <div class="animate__animated animate__fadeInUp animate__delay-900ms">
            <div class="text-caption mb-2 text-white opacity-80">
              Scrollen Sie, um zu erkunden
            </div>
            <v-icon size="48" class="text-white animate__animated animate__infinite animate__bounce mt-6">
              mdi-chevron-down
            </v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
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

<style scoped></style>
