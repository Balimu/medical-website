<script>
export default {
    data: () => {
        return {
            hover: false,
        }
    }
}
</script>

<template>

    <button type="button" @mouseover="hover = true" @click="hover = true" 
    class="relative">
        <div id="rdv-maissin" class="border border-black bg-[#4a9dd1] text-white py-2 px-8 rounded mt-4">
            <span class="font-bold">Prendre rendez-vous <br/> avec la Docteure Maissin</span>
        </div>    
        <div :class="{ invisible: !hover }" class="bg-[#4a9dd1] w-full bg-opacity-50 max-w-[364px] font-bold text-lg mx-auto">
            <font-awesome-icon icon="phone" />
            065 98 27 69
        </div>
    </button>

</template>
