<script>
import NavBar from "../components/NavBar.vue";
import Accueil from "../components/Accueil.vue";
import Footer from "../components/Footer.vue";
import NosMedecins from "../components/NosMedecins.vue";
import Contact from "../components/Contact.vue";

export default {
  components: {
    NavBar,
    Accueil,
    Footer,
    NosMedecins,
    Contact
  }
}
</script>

<template>
  <main>
    <NavBar />
    <div class="pt-16 w-full items-center mx-auto max-w-screen-2xl md:px-4 xl:px-12">
      <Accueil />
      <NosMedecins />
      <Contact />
    </div>
    <Footer />
  </main>

</template>
