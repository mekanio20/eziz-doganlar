<template>
    <section ref="serviceSection"
        class="px-8 flex flex-col sm:flex-row items-center justify-between pb-20 gap-6 sm:gap-0">
        <div
            class="flex flex-col space-y-2 font-manrope sm:text-4xl text-3xl md:text-5xl w-full text-center">
            <h2 class="text-[#0C1A30]" :class="{ 'animate-fade-in': showAnimations }">
                {{ $t('common.ourServices') }}
            </h2>
        </div>
    </section>
</template>

<script>

export default {
    name: "ServiceSection",
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
            { threshold: 0.5 }
        );

        this.$nextTick(() => {
            const section = this.$refs.serviceSection;
            if (section) observer.observe(section);
        });
    },
};
</script>