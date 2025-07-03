<template>
    <section ref="aboutSection" class="container flex items-center justify-between py-20">
        <div class="flex flex-col space-y-20">
            <div class="flex flex-col space-y-2 font-manrope text-5xl">
                <h2 class="text-[#0C1A30]" :class="{ 'animate-fade-in': showAnimations }">Biz Iň Ýokary Hilli We
                    Ygtybarly</h2>
                <h2 class="text-[#B2B2B2]"
                    :class="{ 'animate-fade-in': showAnimations, 'animation-delay-200': showAnimations }">Serişdeleri
                    Ulanýarys</h2>
            </div>
            <p class="font-manrope text-lg text-[#838589] w-[600px]"
                :class="{ 'animate-fade-right': showAnimations, 'animation-delay-300': showAnimations }">
                Her bir gurluşyk tapgyrynda berk hil gözegçiligi bilen seçilen serişdeler taslamalaryň uzak ömürli
                bolmagyny üpjün edýär. Gurluşykda ulanýan serişdelerimiz taslamalaryň uzak ömürli bolmagyny üpjün edýär.
            </p>
            <Button :class="{ 'animate-fade-right': showAnimations, 'animation-delay-400': showAnimations }" :name="'dowamy'" route="/about" bg_color="bg-[#0062B0]" text_color="text-white"
                icon_bg_color="bg-white" icon_color="#0062B0" px="px-8" />
        </div>
        <div class="w-[400px] h-[400px]" :class="{ 'animate-fade-left': showAnimations, 'animation-delay-200': showAnimations }">
            <img class="w-full h-full object-contain" src="/imgs/building.webp">
        </div>
    </section>
</template>

<script>
import Button from './base/button.vue';
export default {
    name: "AboutSection",
    components: {
        Button
    },
    data() {
        return {
            showAnimations: false
        }
    },
    mounted() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !this.showAnimations) {
                        this.showAnimations = true;
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        this.$nextTick(() => {
            const section = this.$refs.aboutSection;
            if (section) observer.observe(section);
        });
    }
}
</script>