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
        <div id="contact" class="h-12 scroll-mt-16"></div>
        <h1 class="text-3xl font-bold mt-4 mb-8">
            Contact
        </h1>

        <h2 class="text-lg font-bold mb-2">Prise de rendez-vous</h2>
        <p class="mb-4">
            Pour une question d'organisation, nous ne disposons pas encore d'un secrétariat en commun.
        </p>
        <p>
            Pour le <b>Dr Levecq Céline</b> :
            La prise de rendez-vous en ligne est disponible 7jours/7 24h/24 via le lien de prise de rendez-vous,
            ou du lundi au vendredi de 8h à 18h au 0477&nbsp;09&nbsp;13&nbsp;51.
        </p>
        <p>
            Pour le <b>Dr Maissin Mathilde</b> :
            La prise de rendez-vous se fait du lundi au vendredi de 8h à 18h au 065&nbsp;98&nbsp;27&nbsp;69.
        </p>
        
        <div class="md:flex md:flex-wrap mt-8 md:mt-12 pb-16 text-center">
            <div class="mx-auto mb-8 w-[300px] text-center">
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
            <div class="block md:grow w-full md:w-auto content-center pb-6">
                <!--iframe class="w-full mx-auto h-[240px] md:h-[450px] max-w-[700px] border border-black" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"
                    :src="'https://maps.googleapis.com/maps/embed/v1/place?key=' + mapsApiKey + '&q=docteur+céline+levecq,Mons'"
                    defer alt="Carte de Google Maps avec l'emplacement du Cabinet"
                ></iframe-->
                <iframe class="w-full mx-auto h-[240px] md:h-[450px] max-w-[700px] border border-black" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4906303115954!2d3.9459207000000003!3d50.4505878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c25006c749d3e9%3A0x25634869575569bf!2sRue%20de%20Bouzanton%2011%2C%207000%20Mons%2C%20Belgique!5e0!3m2!1sfr!2ses!4v1676932744851!5m2!1sfr!2ses" 
                loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        </div>

    </div>
</template>
