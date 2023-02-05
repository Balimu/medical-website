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
    }
}
</script>

<template>

    <div class="mx-auto w-full max-w-screen-2xl px-4 grid grid-cols-[2fr_1fr]">

        <div class="col1 px-8">
            <div class="mt-12 text-2xl text-left h-12 md:text-4xl">
                <span style="font-family: 'Satisfy', cursive;">
                    {{ typeValue }} 
                </span>
            </div>
            <div class="mt-12 text-lg text-left max-w-3xl">
                <Transition name="fade">
                    <span v-if="showP">
                        Le Cabinet Levecq-Maissin est... Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </Transition>
            </div>
        </div>

        <div class="col2 mt-12 pt-12 px-8 mr-8">
            <a href="https://be.mobminder.com/e-resa.php?p=drcelinelevecq">
                <button class="bg-[#4a9dd1] text-white font-bold py-2 px-4 rounded">
                Prendre rendez-vous avec la Docteure Levecq
                </button>
            </a>
            <button type="button" @mouseover="hover = true" @mouseleave="hover = false" class="relative bg-[#4a9dd1] text-white py-2 px-4 rounded mt-4">
                <div class="font-bold invisible">Prendre rendez-vous avec la Docteure Maissin</div>
                <div :class="{ invisible: hover }" class="font-bold button-label">Prendre rendez-vous avec la Docteure Maissin</div>
                <div :class="{ invisible: !hover }" class="text-center font-bold button-label">+32 495 00 00 00</div>
            </button>
        </div>

    </div>

</template>

<style>
.button-label {
    position: absolute;
    top: 0.5rem;
    bottom: 0.5rem;
    left: 1rem;
    right: 1rem;
    text-align: center;
}

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