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
                <div class="relative mb-12">
                    <span class="invisible">
                        Jeunes médecins généralistes nouvellement installées à Mons, 
                        nous proposons des consultations sur rendez-vous du lundi au vendredi.
                        Pour les patients dans l'incapacité de se déplacer, des visites à domicile sont possibles.
                        Pour une demande de visite, merci de téléphoner au secrétariat, de préférence du matin.
                    </span>
                    <Transition name="fade" class="absolute top-0 left-0">
                        <span v-if="showP">
                            Jeunes médecins généralistes nouvellement installées à Mons, 
                            nous proposons des consultations sur rendez-vous du lundi au vendredi.
                            Pour les patients dans l'incapacité de se déplacer, des visites à domicile sont possibles.
                            Pour une demande de visite, merci de téléphoner au secrétariat, de préférence du matin.
                        </span>
                    </Transition>
                </div>
                <h2 class="font-bold text-lg mb-2">Informations utiles:</h2>
                <ul class="text-base list-disc pl-4">
                    <li>
                        N'oubliez pas de vous munir de votre carte d'identité, ou carte ISI+ pour les jeunes enfants.
                    </li>
                    <li>
                        Le paiement mobile est possible, mais nous ne disposons pas de Bancontact.
                    </li>
                    <li>
                        Le parking est aisé aux alentours du cabinet.
                    </li>
                    <li>
                        Consultations sur rendez-vous du lundi au vendredi de 8h à 18h uniquement.
                    </li>
                    <li>
                        Attention, 1 rendez-vous = 1 patient.
                    </li>
                    <li>
                        En cas d'empêchement, veuillez le signaler le plus rapidement possible afin de pouvoir libéŕer de la place pour d'autres patients dans le besoin.
                    </li>
                </ul>
            </div>
        </div>

        <div class="col2 md:mt-12 pt-8 md:pt-12 px-8 md:mr-8">
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