<template>
    <section ref="aboutSection"
        class="sm:container px-4 flex flex-col lg:flex-row items-center justify-between sm:py-20 py-10 gap-10 lg:gap-20">
        <!-- Metin alanı -->
        <div class="flex flex-col space-y-8 lg:space-y-20 max-w-full lg:max-w-[700px]">
            <div class="flex flex-col space-y-2 font-manrope">
                <h2 class="text-[#0C1A30] text-3xl sm:text-4xl md:text-5xl font-medium"
                    :class="{ 'animate-fade-in': showAnimations }">
                    Biz Iň Ýokary Hilli We Ygtybarly
                </h2>
                <h2 class="text-[#B2B2B2] text-3xl sm:text-4xl md:text-5xl font-medium"
                    :class="{ 'animate-fade-in': showAnimations, 'animation-delay-200': showAnimations }">
                    Serişdeleri Ulanýarys
                </h2>
            </div>

            <p class="font-manrope text-base sm:text-lg text-[#838589]"
                :class="{ 'animate-fade-right': showAnimations, 'animation-delay-300': showAnimations }">
                Her bir gurluşyk tapgyrynda berk hil gözegçiligi bilen seçilen serişdeler taslamalaryň uzak ömürli
                bolmagyny üpjün edýär.
                Gurluşykda ulanýan serişdelerimiz taslamalaryň uzak ömürli bolmagyny üpjün edýär.
            </p>

            <Button :class="{ 'animate-fade-right': showAnimations, 'animation-delay-400': showAnimations }"
                :name="'dowamy'" route="/about" bg_color="bg-[#0062B0]" text_color="text-white" icon_bg_color="bg-white"
                icon_color="#0062B0" px="px-8" />
        </div>

        <!-- Görsel alanı -->
        <div class="w-full max-w-[400px] h-auto">
            <img class="w-full h-full object-contain" src="/imgs/building.webp" alt="Building Image" />
        </div>
    </section>
</template>

<script>
import Button from './base/button.vue';

export default {
    name: 'AboutSection',
    components: {
        Button,
    },
    data() {
        return {
            showAnimations: false,
        };
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
            { threshold: 0.3 }
        );

        this.$nextTick(() => {
            const section = this.$refs.aboutSection;
            if (section) observer.observe(section);
        });
    },
};
</script>