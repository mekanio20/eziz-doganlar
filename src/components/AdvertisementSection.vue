<template>
    <section class="py-20">
        <h2 class="font-manrope text-base text-[#0C1A30] text-center pb-10">1994-nji ýyldan bäri ösen gurluşyk çözgütleri</h2>
        <div class="bg-white relative overflow-hidden">
            <div v-for="(line, index) in lines" :key="index" :style="{ transform: `translateX(${positions[index]}px)` }"
                class="w-full text-[70px] text-[#0F172A]"
                :class="index % 2 === 0 ? 'text-center pr-40' : 'text-right pr-4 md:pr-16'">
                <span v-html="line" :class="index % 2 === 0 ? 'font-[400]' : 'font-[200]'" class="inline-block" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AdvertisementSection",
    data() {
        return {
            lines: [
                `"Biz Öz Ukbybymyzy we <img src='/imgs/ad-1.webp' class='inline w-[75px] h-[40px] mx-1'/>`,
                `Tejribämizi <img src='/imgs/ad-2.webp' class='inline w-[75px] h-[40px] mx-1'/> Siziň Taslamalaryňyza`,
                `<img src='/imgs/ad-3.webp' class='inline w-[75px] h-[40px] mx-1'/> Bagyşlaýarys"`,
            ],
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
                return pos + delta * direction * 0.2; // hassasiyet
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
};
</script>