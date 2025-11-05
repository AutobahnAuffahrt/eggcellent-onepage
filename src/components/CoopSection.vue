<template>
  <div class="coop-section-inner d-flex flex-column align-center h-screen w-100" style="width:100vw;overflow:hidden;">
    <v-card variant="tonal" class="w-100 pa-4 mb-6 d-flex flex-column" elevation="2"
      style="position:sticky;top:0;z-index:10;">
      <v-card-title class="font-weight-bold text-h3 text-sm-h2 text-coop_title">
        {{ coopInfo.title }}
      </v-card-title>
      <v-card-subtitle class="text-h6 text-sm-h5 text-coop_text">
        {{ coopInfo.description }}
      </v-card-subtitle>
    </v-card>
    <div class="flex-1-1 w-75">
      <v-window class="h-100 w-100 text-coop_text" ref="horizontalContainer" show-arrows="hover" v-model="activeSlide">
        <template v-slot:prev="{ props }">
          <v-btn icon color="coop_card_boarder" @click="props.onClick">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn icon color="coop_card_boarder" @click="props.onClick">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </template>

        <v-window-item v-for="(item, index) in coopInfo.sections" :key="index" class="w-100 h-100">
          <v-card :class="cardClass" color="rgba(65, 105, 225, 0.05)">
            <v-card-title class="font-weight-bold text-h4 text-sm-h3 text-coop_title">{{ item.title }}</v-card-title>
            <v-card-text class="overflow-y-auto text-h6 text-sm-h6 text-xl-h5 text-coop_text mb-4">{{ item.content
            }}</v-card-text>
            <div class="d-flex justify-center">
              <v-img :src="item.image" :alt="`Foto von ${item.title}`" class="pl-16 rounded-lg" max-width="800"
                aspect-ratio="4/3" cover />
            </div>
          </v-card>
        </v-window-item>

        <!-- Zusätzlicher Slide für Bauinformationen -->
        <v-window-item class="w-100 h-100">
          <v-card :class="cardClass" color="rgba(65, 105, 225, 0.05)">
            <v-card-title class="font-weight-bold text-h4 text-sm-h3 text-coop_title">Bauinformationen</v-card-title>
            <v-card-text class="overflow-y-auto text-coop_text">
              <v-row>
                <v-col cols="12" md="6">
                  <v-list density="compact" class="bg-transparent">
                    <v-list-subheader class="text-h6 font-weight-bold text-coop_title">Materialien</v-list-subheader>
                    <v-list-item v-for="material in coopInfo.buildInfo.materials" :key="material">
                      <template #prepend>
                        <v-avatar size="32" color="primary">
                          <v-icon color="white">mdi-hammer-screwdriver</v-icon>
                        </v-avatar>
                      </template>
                      <v-list-item-title class="text-h6 text-sm-h6 text-xl-h5 text-coop_text">{{ material
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="12" md="6">
                  <v-list density="compact" class="bg-transparent">
                    <v-list-subheader class="text-h6 font-weight-bold text-coop_title">Eigenschaften</v-list-subheader>
                    <v-list-item v-for="feature in coopInfo.buildInfo.features" :key="feature">
                      <template #prepend>
                        <v-avatar size="32" color="accent">
                          <v-icon color="white">mdi-star</v-icon>
                        </v-avatar>
                      </template>
                      <v-list-item-title class="text-h6 text-sm-h6 text-xl-h5 text-coop_text">{{ feature
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
              <v-divider class="my-4"></v-divider>
              <div class="text-center">
                <v-chip size="large" color="primary" variant="elevated" class="text-white font-weight-medium">
                  <template #prepend>
                    <v-icon>mdi-calendar</v-icon>
                  </template>
                  Baujahr: {{ coopInfo.buildInfo.year }}
                </v-chip>
                <v-chip size="large" color="secondary" variant="elevated" class="text-white font-weight-medium ml-2">
                  <template #prepend>
                    <v-icon>mdi-ruler</v-icon>
                  </template>
                  Größe: {{ coopInfo.buildInfo.size }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoopSection',
  props: {
    coopInfo: {
      type: Object,
      required: true
    },
    cardClass: {
      type: String,
      default: 'pa-3 mb-6 d-flex flex-column border-md border-dashed border-coop_card_boarder border-opacity-100 rounded-xl'
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
    // Wheel-Scroll Event-Listener für horizontale Navigation
    // Auskommentiert für bessere Performance, kann bei Bedarf aktiviert werden
    /*     this.$el.addEventListener('wheel', this.handleWheelScroll, {
          passive: false,
          capture: false
        }) */
  },
  beforeUnmount() {
    // Event-Listener aufräumen
    //this.$el.removeEventListener('wheel', this.handleWheelScroll)
  },
  computed: {
    totalSlides() {
      // +1 für den zusätzlichen Bauinformationen-Slide
      return (this.coopInfo?.sections?.length || 0) + 1
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
/* Card & typography customization */
:deep(.v-card-title) {
  font-family: 'Georgia', serif !important;
}

:deep(.v-card-text),
:deep(.v-list) {
  overflow-y: auto;
  scrollbar-width: thin;
}
</style>
