<script>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";

export default {
  name: 'App',
  components: {
    HomeView,
  }
}
</script>

<template>
  <!-- Example of passing props-->
  <!--HelloWorld msg="You did it!" /-->
  <RouterView />
</template>

<style>
#app {
  max-width: 1280px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
