<script>
import NavBar from "../components/NavBar.vue";
import Accueil from "../components/Accueil.vue";
import Footer from '../components/footer.vue';

export default {
  components: {
    NavBar,
    Accueil,
    Footer,
  }
}
</script>

<template>
  <main class>
    <NavBar />
    <div class="pt-16 w-full items-center mx-auto">
      <Accueil />
    </div>    
    <Footer />
  </main>

</template>
