<template>
  <div class="breed-section-inner">
    <!-- Left side: Breed info -->
    <div class="breed-header">
      <h1 class="breed-name">{{ breed.name }}</h1>
    </div>
    <div class="horizontal-scroll" ref="horizontalContainer">
      <div class="scroll-item">
        <div class="scroll-rect">
          <h2 class="item-header">Beschreibung</h2>
          <p class="breed-description">{{ breed.description }}</p>
        </div>
      </div>

      <div class="scroll-item">
        <div class="scroll-rect">
          <div class="our-chickens">
            <h2 class="item-header">Unsere {{ breed.name }} Hühner</h2>
            <div class="chicken-names">
              <span v-for="chicken in breed.ourChickens" :key="chicken" class="chicken-name">
                🐔 {{ chicken }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-item">
        <div class="scroll-rect">
          <div class="specialties">
            <h2 class="item-header">Besondere Merkmale</h2>
            <ul class="specialties-list">
              <li v-for="specialty in breed.specialties" :key="specialty" class="specialty-item">
                ✨ {{ specialty }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="scroll-item">
        <div class="scroll-rect">
          <h2 class="item-header">Foto</h2>
          <div class="breed-image">
            <div class="image-placeholder">
              <img :src="breed.image" :alt="`${breed.name} image`" class="breed-photo" />
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-item">
        <div class="scroll-rect">
          <h2 class="item-header">Huhn Animiert</h2>
          <div class="animated-chicken">
            <span class="chicken-animation">🐔</span>
          </div>
        </div>
      </div>
    </div>


    <!-- Animated chicken will go here later -->


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
      currentScrollPosition: 0,
      isScrolling: false,
      scrollBuffer: 0,
      requiredBufferScrolls: 8
    }
  },
  methods: {
    handleWheelScroll(event) {
      if (event.deltaY != 0)
        this.isScrolling = true;
      else
        this.isScrolling = false;


      // Optional: Implement horizontal scroll on vertical wheel event
      const container = this.$refs.horizontalContainer

      if (container) {
        const atStart = container.scrollLeft === 0
        const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth
        if (event.deltaY < 0 && atStart) {

          this.scrollBuffer++;
          if (this.scrollBuffer >= this.requiredBufferScrolls) {
            return; // Prevent scrolling if at the edges
          } else {
            event.preventDefault();// Reset buffer after allowing horizontal scroll
          }
        } else if (event.deltaY > 0 && atEnd) {

          this.scrollBuffer++;
          if (this.scrollBuffer >= this.requiredBufferScrolls) {
            return; // Prevent scrolling if at the edges
          } else {
            event.preventDefault(); // Reset buffer after allowing horizontal scroll
          }
        } else {
          container.scrollLeft += event.deltaY
          event.preventDefault()
          this.scrollBuffer = 0;
        }

      }
    },
  },
  mounted() {

    this.$el.addEventListener('wheel', this.handleWheelScroll, { passive: false })

  },
  beforeUnmount() {

    this.$el.removeEventListener('wheel', this.handleWheelScroll)
  },
  computed: {
    isAtScrollStart() {
      return this.$refs.horizontalContainer.scrollLeft === 0;
    },

    isAtScrollEnd() {
      return this.$refs.horizontalContainer.scrollLeft + this.$refs.horizontalContainer.clientWidth >= this.$refs.horizontalContainer.scrollWidth;
    },
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
}

.breed-header {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Left side: Breed information */
.breed-info {
  padding: 2rem;
}

.breed-name {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Georgia', serif;
  color: #8B4513;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.item-header {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Georgia', serif;
  color: #8B4513;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.breed-description {
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #654321;
}

.our-chickens {
  margin-bottom: 2rem;
}

.our-chickens h3 {
  font-size: 1.5rem;
  color: #8B4513;
  margin-bottom: 1rem;
}

.chicken-names {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.chicken-name {
  background: #DEB887;
  color: #654321;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  border: 2px solid #CD853F;
}

.specialties h3 {
  font-size: 1.5rem;
  color: #8B4513;
  margin-bottom: 1rem;
}

.specialties-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.specialty-item {
  background: rgba(139, 69, 19, 0.1);
  margin: 0.5rem 0;
  padding: 0.8rem;
  border-radius: 8px;
  border-left: 4px solid #8B4513;
  font-size: 1.1rem;
}

/* Right side: Image and animation */
.breed-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: rgba(139, 69, 19, 0.1);
  border: 3px dashed #8B4513;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.placeholder-text {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.image-placeholder p {
  font-size: 1.2rem;
  color: #8B4513;
  margin: 0.5rem 0;
  font-weight: bold;
}

.image-placeholder small {
  font-size: 0.9rem;
  color: #999;
  font-style: italic;
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

/* Mobile responsiveness */
@media (max-width: 968px) {
  .breed-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .breed-name {
    font-size: 2.5rem;
  }

  .breed-description {
    font-size: 1.1rem;
  }

  .image-placeholder {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 640px) {
  .breed-content {
    padding: 1rem;
  }

  .breed-name {
    font-size: 2rem;
  }

  .chicken-names {
    justify-content: center;
  }

  .image-placeholder {
    width: 200px;
    height: 200px;
  }
}



.scroll-item {
  min-width: 40vw;
  width: 200vw;
  height: 50vh;
  border-radius: 15px;
  padding: 2rem;

}

.scroll-rect {
  width: 100%;
  height: 100%;
  border: 2px dashed #CD853F;
  border-radius: 15px;
  padding: 3rem;
  flex-direction: column;
}

.breed-photo {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  object-fit: cover;
  padding: 1rem;
}
</style>
