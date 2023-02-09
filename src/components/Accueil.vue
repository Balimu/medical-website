<script>
export default {
    data: () => {
        return {
            typeValue: "",
            typeStatus: false,
            displayText: "Bienvenue sur le site du Cabinet Levecq-Maissin",
            typingSpeed: 40,
            charIndex: 0,
            paragraphVisible: false,
            showP: false,
            hover: false,
            offsetWidth: 0,
        }
    },
    methods: {
        typeText() {
            if (this.charIndex < this.displayText.length) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue += this.displayText.charAt(this.charIndex);
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            }
        },
        toggleShowP() {
            this.showP = true;
        }
    },
    created() {
        setTimeout(this.typeText, 200);
        setTimeout(this.toggleShowP, 500);
    },
    mounted () {
        this.offsetWidth = document.getElementById('rdv-maissin').offsetWidth
        },
    computed: {
        getBannerStyle () {
            return `width: ${this.offsetWidth}px;`
        }
    }
}
</script>

<template>

    <div class="grid grid-cols-[2fr_1fr]">

        <div class="col1 px-8">
            <div class="mt-12 text-2xl text-left h-12 md:text-4xl">
                <h1 style="font-family: 'Satisfy', cursive;">
                    {{ typeValue }} 
                </h1>
            </div>
            <div class="mt-20 text-lg text-left max-w-3xl">
                <Transition name="fade">
                    <span v-if="showP">
                        Le Cabinet Levecq-Maissin est... Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </Transition>
            </div>
        </div>

        <div class="col2 mt-12 pt-12 px-8 mr-8">
            <a href="https://be.mobminder.com/e-resa.php?p=drcelinelevecq">
                <button class="border border-black bg-[#4a9dd1] text-white font-bold py-2 px-8 rounded">
                    Prendre rendez-vous <br/> avec la Docteure Levecq
                </button>
            </a>
            <button id="rdv-maissin" type="button" @mouseover="hover = true" @click="hover = true" class="border border-black relative bg-[#4a9dd1] text-white py-2 px-8 rounded mt-4">
                <div class="font-bold">Prendre rendez-vous <br/> avec la Docteure Maissin</div>
            </button>
            <div :class="{ invisible: !hover }" :style="getBannerStyle" class="bg-[#4a9dd1] bg-opacity-50 max-w-[364px] font-bold text-lg mx-auto">
                <font-awesome-icon icon="phone" />
                065 98 27 69</div>
        </div>

    </div>

</template>

<style>
.fade-enter-from {
    opacity: 0;
}
.fade-enter-to {
    opacity: 1;
}
.fade-enter-active {
    transition: all 3s ease;
}
</style>