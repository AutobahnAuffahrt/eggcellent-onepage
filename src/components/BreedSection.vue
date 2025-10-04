<template>
  <div class="breed-section-inner">
    <v-card variant="tonal" class="w-100 pa-4 mb-6" elevation="2" style="position:sticky;top:0;z-index:10;">
      <v-card-title class="text-h3">
        {{ breed.name }}
      </v-card-title>
    </v-card>
    <v-window class="w-75 h-75" ref="horizontalContainer" show-arrows="hover" v-model="activeSlide">
      <v-window-item class="w-100 h-100">
        <v-card title="Beschreibung" :text="breed.description" class="pa-2 mb-6 h-100 breed-card" variant="outlined" />
      </v-window-item>

      <v-window-item class="w-100 h-100">
        <v-card class="pa-2 mb-6 h-100" variant="outlined">
          <v-list density="compact">
            <v-card-title>Unsere {{ breed.name }} Hühner</v-card-title>
            <v-list-item v-for="chicken in breed.ourChickens" :key="chicken">
              <template #prepend>
                <v-avatar class="chicken-avatar" size="32">
                  <span class="chicken-head">🐔</span>
                </v-avatar>
              </template>
              <v-list-item-title>{{ chicken }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-window-item>

      <v-window-item class="w-100 h-100">
        <v-card variant="outlined" class="pa-2 mb-6 h-100">
          <v-card-title>Besondere Merkmale</v-card-title>
          <v-chip-group column class="d-flex flex-wrap gap-2">
            <v-chip v-for="s in breed.specialties" :key="s" size="large" class="specialty-chip"
              prepend-icon="mdi-sparkles" variant="elevated">
              ✨ {{ s }}
            </v-chip>
          </v-chip-group>
        </v-card>
      </v-window-item>

      <v-window-item class="w-100 h-100">
        <v-card variant="outlined" class="pa-2 mb-6 h-100">
          <v-card-title>Foto</v-card-title>
          <v-img class="justify-center mx-auto d-block" :width="300" aspect-ratio="1/1" cover :src="breed.image"
            alt="Foto von {{ breed.name }}" />
        </v-card>
      </v-window-item>

      <v-window-item class="w-100 h-100">
        <v-card variant="outlined" class="pa-2 mb-6 h-100">
          <v-card-title>Huhn Animiert</v-card-title>
          <div class="animated-chicken">
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
    }
  },
  data() {
    return {
      activeSlide: 0,
      currentScrollPosition: 0,
      isScrolling: false,
      scrollBuffer: 0,
      edgeBuffer: 0,
      requiredBufferScrolls: 8
    }
  },
  methods: {
    handleWheelScroll(event) {
      const dy = event.deltaY
      // Nur reagieren, wenn wirklich vertikal
      if (Math.abs(dy) < 1) return

      // Am Rand: Edge-Puffer erhöhen und Seite scrollen lassen
      if ((dy > 0 && this.atLast) || (dy < 0 && this.atFirst)) {
        this.edgeBuffer++
        if (this.edgeBuffer < this.maxEdgeBuffer) {
          event.preventDefault()
        }
        return
      } else {
        this.edgeBuffer = 0
      }

      this.scrollBuffer++

      if (this.scrollBuffer < this.requiredBufferScrolls) {
        event.preventDefault()
        return
      }

      if (dy > 0 && !this.atLast) {
        this.activeSlide++
        event.preventDefault()
      } else if (dy < 0 && !this.atFirst) {
        this.activeSlide--
        event.preventDefault()
      }

      this.scrollBuffer = 0
    },
  },
  mounted() {
    this.$el.addEventListener('wheel', this.handleWheelScroll, { passive: false })
  },
  beforeUnmount() {
    this.$el.removeEventListener('wheel', this.handleWheelScroll)
  },
  computed: {
    totalSlides() {
      return 5 // TODO: Anzahl deiner v-window-item aktualisieren oder dynamisch zählen
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
.breed-section-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  /* chip theme vars */
  --specialty-chip-bg: #8B4513;
  --specialty-chip-bg-hover: #A96122;
  --specialty-chip-icon: #FFD479;
}

.breed-card {
  width: var(--breed-card-width);
  height: var(--breed-card-height);
  display: flex;
  flex-direction: column;
}

.breed-card :deep(.v-card-text),
.breed-card :deep(.v-list) {
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
}

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

/* Vuetify Card Styling */
:deep(.v-card) {
  background: rgba(139, 69, 19, 0.05) !important;
  border: 2px solid #CD853F !important;
  border-radius: 15px !important;
  box-shadow: 0 4px 8px rgba(139, 69, 19, 0.2) !important;
}

:deep(.v-card-title) {
  color: #8B4513 !important;
  font-family: 'Georgia', serif !important;
  font-size: 3.5rem !important;
  font-weight: bold !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1) !important;
  margin-bottom: 1.5rem !important;
}

:deep(.v-card-text) {
  color: #654321 !important;
  font-size: 1.1rem !important;
  line-height: 1.6 !important;
}

:deep(.v-list) {
  background: transparent !important;
}

/* Specialty chips */
:deep(.specialty-chip) {
  background-color: var(--specialty-chip-bg) !important;
  color: #FFFFFF !important;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: 2px solid #CD853F !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.25s ease, transform 0.2s ease;
}

:deep(.specialty-chip .v-icon) {
  color: var(--specialty-chip-icon) !important;
  opacity: 0.9;
}

:deep(.specialty-chip:hover) {
  background-color: var(--specialty-chip-bg-hover) !important;
  transform: translateY(-2px);
}

:deep(.specialty-chip:active) {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
</style>
