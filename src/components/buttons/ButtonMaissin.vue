<script>
export default {
    data: () => {
        return {
            hover: false,
            offsetWidth: 0,
        }
    },
    mounted () {
        this.offsetWidth = document.getElementById('rdv-maissin').offsetWidth
        },
    computed: {
        getBannerStyle () {
            return `width: ${this.offsetWidth}px;`
        }
    },
    methods: {
        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
    }
}
</script>

<template>

    <button id="rdv-maissin" type="button" @mouseover="hover = true" @click="hover = true" class="border border-black relative bg-[#4a9dd1] text-white py-2 px-8 rounded mt-4">
        <div class="font-bold">Prendre rendez-vous <br/> avec la Docteure Maissin</div>
    </button>
    <div :class="{ invisible: !hover }" :style="getBannerStyle" class="bg-[#4a9dd1] bg-opacity-50 max-w-[364px] font-bold text-lg mx-auto">
        <font-awesome-icon icon="phone" />
        065 98 27 69
    </div>

</template>
