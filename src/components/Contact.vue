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
        <div id="contact" class="h-12 md:h-16"></div>
        <h1 class="text-3xl font-bold mt-4">
            Contact
        </h1>
        
        <div class="flex flex-wrap mt-8 md:mt-16 mb-32">
            <div class="col1 mb-4 w-[300px] text-center">
                <p class="mb-8">
                    <span class="font-bold">Adresse: </span><br/> 11 rue de Bouzanton <br/>
                    7000 Mons, Belgique
                </p>
                <div class="mb-2">
                    <ButtonLevecq />
                </div>
                <div>
                    <ButtonMaissin />
                </div>
            </div>
            <div class="col2 block md:grow w-full md:w-auto content-center border border-black">
                <iframe class="w-full mx-auto h-[240px] md:h-[450px] max-w-[700px]" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"
                    :src="'https://www.google.com/maps/embed/v1/place?key=' + mapsApiKey + '&q=docteur+céline+levecq,Mons'"
                    alt="Carte de Google Maps avec l'emplacement du Cabinet"
                ></iframe>
            </div>

        </div>

    </div>
</template>
