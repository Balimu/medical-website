<script>
import NavBar from "../components/NavBar.vue";
import Accueil from "../components/Accueil.vue";
import Footer from "../components/Footer.vue";
import NosMedecins from "../components/NosMedecins.vue";

export default {
  components: {
    NavBar,
    Accueil,
    Footer,
    NosMedecins
}
}
</script>

<template>
  <main class>
    <NavBar />
    <div class="pt-16 w-full items-center mx-auto max-w-screen-2xl px-4">
      <Accueil />
      <NosMedecins />
    </div>
    <Footer />
  </main>

</template>
