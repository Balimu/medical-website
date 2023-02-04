<script>
import NavBar from "../components/NavBar.vue";
import Accueil from "../components/Accueil.vue";

export default {
  components: {
    NavBar,
    Accueil,
  }
}
</script>

<template>
  <main>
    <NavBar />
    <div class="pt-16">
      <Accueil />
    </div>
    
  </main>
</template>
