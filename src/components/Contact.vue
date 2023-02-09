<template>
    <div class="mt-20 mb-16 w-full text-right">

        <iframe
            width="600"
            height="450"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            :src="'https://www.google.com/maps/embed/v1/place?key=' + mapsApiKey + '&q=docteur+céline+levecq,Mons'"
        >
        </iframe>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            mapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
        }
    }
}
</script>