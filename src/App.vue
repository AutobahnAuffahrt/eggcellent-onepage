<template>
  <RouterView />
</template>

<script>


import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterView,
  },
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import "animate.css/animate.min.css";

.horizontal-scroll {
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* scroll-snap-type: x mandatory; */
}

/* Hide scrollbar while keeping functionality */
body::-webkit-scrollbar {
  width: 0px;
}

body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

body::-webkit-scrollbar-thumb {
  background: #8B4513;
  border-radius: 4px;
}

body::-webkit-scrollbar-thumb:hover {
  background: #654321;
}


/* Global styles will be imported from assets/main.css */
</style>
