<template>
    <section class="py-20">
        <!-- Header -->
        <h2 class="font-manrope text-sm sm:text-base text-[#0C1A30] text-center pb-10 px-4">
            {{ $t('common.title') }}
        </h2>

        <!-- Scrolling Text -->
        <div class="bg-white relative overflow-hidden">
            <div v-for="(line, index) in lines" :key="index" :style="{ transform: `translateX(${positions[index]}px)` }"
                class="w-full text-[32px] sm:text-[48px] md:text-[64px] lg:text-[70px] text-[#0F172A] whitespace-nowrap transition-transform duration-100"
                :class="[
                index % 2 === 0
                    ? 'text-center pr-0 sm:pr-10 md:pr-20'
                    : 'text-right pr-2 sm:pr-10 md:pr-16',
            ]">
                <span v-html="line" :class="index % 2 === 0 ? 'font-[400]' : 'font-[200]'" class="inline-block" />
            </div>
        </div>
    </section>
</template>

<script>
import { lines } from '@/data/index.js'
export default {
    name: "AdvertisementSection",
    data() {
        return {
            lines: lines[this.$i18n.locale],
            positions: [0, 0, 0],
            lastScrollY: 0,
            ticking: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll, { passive: true });
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        onScroll() {
            const currentY = window.scrollY;
            const delta = currentY - this.lastScrollY;

            this.positions = this.positions.map((pos, i) => {
                const direction = i % 2 === 0 ? 1 : -1;
                return pos + delta * direction * 0.2;
            });

            this.lastScrollY = currentY;

            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.ticking = false;
                });
                this.ticking = true;
            }
        },
    },
    watch: {
        '$i18n.locale'() {
            this.lines = lines[this.$i18n.locale]
        }
    }
};
</script>