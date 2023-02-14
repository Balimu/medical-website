<script>
import ButtonLevecq from "./buttons/ButtonLevecq.vue";
import ButtonMaissin from "./buttons/ButtonMaissin.vue";

export default {
    components: {
        ButtonLevecq,
        ButtonMaissin,
    },
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

    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr]">

        <div class="col1 px-8">
            <div class="mt-4 md:mt-8 h-24 md:h-32 flex content-center text-2xl text-left md:text-4xl">
                <h1 id="accueil" class="my-auto leading-tight" style="font-family: 'Satisfy', cursive;">
                    {{ typeValue }} 
                </h1>
            </div>
            <div class="md:text-lg text-left max-w-3xl">
                <div class="relative">
                    <span class="invisible">
                        Le Cabinet Levecq-Maissin est... Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                    <Transition name="fade" class="absolute top-0 left-0">
                        <span v-if="showP">
                            Le Cabinet Levecq-Maissin est... Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                    </Transition>
                </div>
            </div>
        </div>

        <div class="col2 md:mt-12 pt-8 md:pt-12 px-8 mr-8">
            <div class="mb-2">
                <ButtonLevecq />
            </div>
            <div>
                <ButtonMaissin />
            </div>
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