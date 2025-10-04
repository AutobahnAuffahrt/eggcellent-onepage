<template>
  <div>
    <div class="coop-content">
      <h1>{{ coopInfo.title }}</h1>
      <p class="coop-description">{{ coopInfo.description }}</p>
      <!-- Coop details will be added later -->
    </div>
    <div class="coop-images">
      <div class="horizontal-scroll" ref="horizontalContainer">
        <div class="scroll-item" v-for="(item, index) in coopInfo.sections" :key="index">
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
          <img :src="item.image" alt="" />
        </div>
      </div>
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
        // Only scroll vertically if we are not at the end of the scroll area. but if we scroll vertical up we must scroll horizontal left
        if ((event.deltaY < 0 && container.scrollLeft === 0) || (event.deltaY > 0 && container.scrollLeft + container.clientWidth >= container.scrollWidth)) {
          return; // Prevent scrolling if at the edges
        }
        container.scrollLeft += event.deltaY
        event.preventDefault()
      }
    },
  },
  mounted() {

    this.$el.addEventListener('wheel', this.handleWheelScroll, { passive: false })
  },
  beforeUnmount() {

    this.$el.removeEventListener('wheel', this.handleWheelScroll)
  },
}
</script>

<style scoped>
.coop-content {
  text-align: center;
  width: 100vw;
  height: 18vh;
  padding: 2rem;
}

.coop-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Georgia', serif;
}

.coop-description {
  font-size: 1.5rem;
  line-height: 1.6;
}

.coop-images {
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-item {
  min-width: 80vw;
  width: 200vw;
  padding-left: 10rem;
  height: 80vh;
  /* Jeder Bereich = Bildschirmbreite */
  scroll-snap-align: start;
}
</style>
