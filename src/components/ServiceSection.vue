<template>
    <section ref="serviceSection" class="container flex items-center justify-between pb-20">
        <div class="flex flex-col space-y-2 font-manrope text-5xl">
            <h2 class="text-[#0C1A30]" :class="{ 'animate-fade-in': showAnimations }">Biziň Hyzmatlarymyz</h2>
        </div>
        <Button :class="{ 'animate-fade-right': showAnimations, 'animation-delay-300': showAnimations }" :name="'ÄHLI HYZMATLARYMYZY GÖRMEK'" route="/about" bg_color="bg-[#0062B0]" text_color="text-white" icon_bg_color="bg-white" icon_color="#0062B0"  px="px-8" />
    </section>
</template>

<script>
import Button from './base/button.vue';
export default {
    name: "ServiceSection",
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
            const section = this.$refs.serviceSection;
            if (section) observer.observe(section);
        });
    },
}
</script>