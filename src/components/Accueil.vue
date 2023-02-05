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

    <div class="pl-8 mt-12 text-2xl text-left h-12 md:text-4xl">
        <span style="font-family: 'Satisfy', cursive;">
            {{ typeValue }} 
        </span>
    </div>
    <div class="pl-8 mt-12 text-lg text-left max-w-3xl">
        <Transition name="fade">
            <span v-if="showP">
                Le Cabinet Levecq-Maissin est... Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
        </Transition>
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