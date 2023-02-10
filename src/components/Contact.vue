<script>
import ButtonMaissin from './buttons/ButtonMaissin.vue';
import ButtonLevecq from './buttons/ButtonLevecq.vue';

export default {
    components: {
        ButtonLevecq,
        ButtonMaissin,
    },
    data: () => {
        return {
            mapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
        }
    }
}
</script>

<template>
    <div class="mx-8 text-left">
        <div id="contact" class="h-16"></div>
        <h1 class="text-3xl font-bold mt-4">
            Contact
        </h1>
        
        <div class="mt-16 mb-32 grid grid-cols-2">
            <div class="col1 ml-8">
                <p class="mb-4">
                    <span class="font-bold">Adresse: </span><br/> Rue de Bouzanton 11, <br/>
                    7000 Mons, Belgique
                </p>
                <ButtonLevecq />
                <ButtonMaissin />
            </div>
            <div class="col2">
                <iframe width="400" height="300" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"
                    :src="'https://www.google.com/maps/embed/v1/place?key=' + mapsApiKey + '&q=docteur+céline+levecq,Mons'"
                ></iframe>
            </div>

        </div>

    </div>
</template>
