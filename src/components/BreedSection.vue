<template>
  <div class="breed-section-inner d-flex flex-column align-center h-screen w-100" style="width:100vw;overflow:hidden;">
    <v-card variant="tonal" class="w-100 pa-4 mb-6 d-flex flex-column" elevation="2"
      style="position:sticky;top:0;z-index:10;">
      <v-card-title class="font-weight-bold text-h3 text-sm-h2 text-breed_title">
        {{ breed.name }}
      </v-card-title>
    </v-card>

    <v-window class="w-75 h-75 text-breed_text" ref="horizontalContainer" show-arrows="hover" v-model="activeSlide">
      <template v-slot:prev="{ props }">
        <v-btn icon color="primary" @click="props.onClick">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn icon color="primary" @click="props.onClick">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>

      <v-window-item class="w-100 h-100">
        <v-card :class="cardClass" color="rgba(139, 69, 19, 0.05)">
          <v-card-title class="font-weight-bold text-h4 text-sm-h3 text-breed_title">Beschreibung</v-card-title>
          <v-card-text class="overflow-y-auto text-h6 text-sm-h6 text-xl-h5 text-breed_text">{{ breed.description
          }}</v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item class="w-100 h-100">
        <v-card :class="cardClass" color="rgba(139, 69, 19, 0.05)">
          <v-card-title class="font-weight-bold text-h4 text-sm-h3 text-breed_title">Unsere
            {{
              breed.name
            }}
            Hühner</v-card-title>
          <v-list density="compact" class="overflow-y-auto bg-transparent">

            <v-list-item v-for="chicken in breed.ourChickens" :key="chicken">
              <template #prepend>
                <v-avatar size="32">
                  <span>🐔</span>
                </v-avatar>
              </template>
              <v-list-item-title class="overflow-y-auto text-h6 text-sm-h6 text-xl-h5 text-breed_text">{{ chicken
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-window-item>

      <v-window-item class="w-100 h-100">
        <v-card :class="cardClass" color="rgba(139, 69, 19, 0.05)">
          <v-card-title class="font-weight-bold text-h4 text-sm-h3 text-breed_title">Besondere Merkmale</v-card-title>
          <v-chip-group column class="d-flex flex-wrap">
            <v-chip v-for="s in breed.specialties" :key="s" size="large" prepend-icon="mdi-creation-outline"
              variant="elevated" color="primary" class="text-white font-weight-medium bg-primary">
              <template #prepend>
                <v-icon color="accent">mdi-creation-outline</v-icon>
              </template>
              {{ s }}
            </v-chip>
          </v-chip-group>
        </v-card>
      </v-window-item>

      <v-window-item class="w-100 h-100">
        <v-card :class="cardClass" color="rgba(139, 69, 19, 0.05)">
          <v-card-title class="font-weight-bold text-h4 text-sm-h3 text-breed_title">Foto</v-card-title>
          <v-img class="pl-16 justify-center mx-auto d-block" :width="600" aspect-ratio="1/1" :src="breed.image"
            :alt="`Foto von ${breed.name}`" />
        </v-card>
      </v-window-item>

      <v-window-item class="w-100 h-100">
        <v-card :class="cardClass" color="rgba(139, 69, 19, 0.05)">
          <v-card-title class="font-weight-bold text-h4 text-sm-h3 text-breed_title">Huhn Animiert</v-card-title>
          <div class="animated-chicken" role="img" aria-label="Animiertes Huhn läuft hin und her">
            <span class="chicken-animation">🐔</span>
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
export default {
  name: 'BreedSection',
  props: {
    breed: {
      type: Object,
      required: true
    },
    cardClass: {
      type: String,
      default: 'pa-3 mb-6 h-100 d-flex flex-column border-md border-dashed border-breed_card_boarder border-opacity-100 rounded-xl'
    }
  },
  data() {
    return {
      activeSlide: 0,
      scrollBuffer: 0,
      edgeBuffer: 0,
      requiredBufferScrolls: 8,
      maxEdgeBuffer: 5,
    }
  },
  methods: {
    handleWheelScroll(event) {
      const dy = event.deltaY

      // Früher return für bessere Performance
      if (Math.abs(dy) < 1) return

      // Logik vereinfachen
      const isAtEdge = (dy > 0 && this.atLast) || (dy < 0 && this.atFirst)

      if (isAtEdge) {
        this.edgeBuffer++
        if (this.edgeBuffer < this.maxEdgeBuffer) {
          event.preventDefault()
        }
        return
      }

      this.edgeBuffer = 0
      this.scrollBuffer++

      if (this.scrollBuffer < this.requiredBufferScrolls) {
        event.preventDefault()
        return
      }

      // Navigation
      if (dy > 0 && !this.atLast) {
        this.activeSlide++
      } else if (dy < 0 && !this.atFirst) {
        this.activeSlide--
      }

      this.scrollBuffer = 0
      event.preventDefault()
    }
  },
  mounted() {
    // Passive: false nur wenn nötig, sonst Performance-Einbuße
    /*     this.$el.addEventListener('wheel', this.handleWheelScroll, {
          passive: false,
          capture: false // Explizit für Klarheit
        }) */
  },
  beforeUnmount() {
    //this.$el.removeEventListener('wheel', this.handleWheelScroll)
  },
  computed: {
    totalSlides() {
      return this.$refs.horizontalContainer?.$el?.children?.length || 5
    },
    atFirst() {
      return this.activeSlide === 0
    },
    atLast() {
      return this.activeSlide === this.totalSlides - 1
    }
  },
}
</script>

<style scoped>
/* Animated chicken */
.animated-chicken {
  margin-top: 2rem;
}

.chicken-animation {
  font-size: 3rem;
  animation: walk 3s infinite linear;
  display: inline-block;
}

@keyframes walk {
  0% {
    transform: translateX(-50px);
  }

  50% {
    transform: translateX(50px) scaleX(-1);
  }

  100% {
    transform: translateX(-50px);
  }
}

/* Card & typography customization still custom (wenn du willst → Theme defaults) */

:deep(.v-card-title) {
  font-family: 'Georgia', serif !important;
}

:deep(.v-card-text),
:deep(.v-list) {
  overflow-y: auto;
  scrollbar-width: thin;
}

:deep(.v-list-item-title) {
  color: #5A3E1B !important;
  font-weight: 500 !important;
}
</style>
