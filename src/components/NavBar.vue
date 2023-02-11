<script>
import { ref } from 'vue';

export default {
    data: () => {
        return {
            scrollPosition: ref(window.scrollY),
            burgerMenu: true,
        }
    },
    methods: {
        scrollTo(element_id) {
            const el = document.getElementById(element_id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        },
        getViewingSection() {
            const topNosMedecins = document.getElementById("nos-medecins").getBoundingClientRect().top;
            console.log("topNosMedecins: " + topNosMedecins);
            const topContact = document.getElementById("contact").getBoundingClientRect().top;
            let currentSection = "";
            if(this.scrollPosition < topNosMedecins) {
                currentSection = "Accueil";
            } else if (topNosMedecins <= this.scrollPosition && this.scrollPosition < topContact) {
                currentSection = "NosMedecins";
            } else {
                currentSection = "Contact";
            }
            return currentSection;
        }
    }
}
</script>

<template>
    
    <nav class="bg-[#f45b5b] h-16 z-20 px-4 sm:px-4 fixed w-full top-0 left-0">
        <div class="items-center mx-auto my-auto mt-1 w-full max-w-screen-2xl flex flex-wrap justify-between">
            <div class="flex items-center">
                <img src="../assets/logo_celine_bold.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Cabinet Levecq-Maissin</span>
            </div>

            <button data-collapse-toggle="navbar-default" type="button" @click="this.burgerMenu = !this.burgerMenu" class="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-red-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            
            <div class="w-full md:block md:w-auto" :class="{ hidden: this.burgerMenu }" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#f45b5b] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                    <button @click="scrollTo('app')" :class="{ bold: getViewingSection == 'Accueil' }" 
                        class="block w-28 py-2 pl-3 pr-4 text-base text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:font-bold md:p-0">
                        Accueil
                    </button>
                </li>
                <li>
                    <button @click="scrollTo('nos-medecins')" :class="{ bold: getViewingSection == 'NosMedecins' }" 
                        class="block w-28 py-2 pl-3 pr-4 text-base text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:font-bold md:p-0">
                        Nos médecins
                    </button>
                </li>
                <li>
                    <button @click="scrollTo('contact')" :class="{ bold: getViewingSection == 'Contact' }" 
                        class="block w-28 py-2 pl-3 pr-4 text-base text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:font-bold md:p-0">
                        Contact
                    </button>
                </li>
            </ul>
            </div>
        </div>
    </nav>

</template>
