<template>
    <NavBar />
    <HelloWorld msg="Bienvenue sur le site médical Levecq-Maissin"/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
    name: 'HomeView',
    
    components: {
        HelloWorld,
        NavBar
    }
});
</script>