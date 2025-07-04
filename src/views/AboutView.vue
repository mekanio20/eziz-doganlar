<template>
    <div class="w-full h-full">
        <Navbar link="about" background="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900" />
        <!-- Hero section -->
        <div class="w-full h-full relative">
            <img v-lazy="`/imgs/about.webp`" class="w-full h-full object-cover max-h-screen" loading="lazy" />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
            <div
                class="absolute top-1/2 left-0 -translate-y-1/2 px-4 sm:px-8 md:px-16 flex flex-col space-y-10 w-full max-w-[1100px]">
                <p class="font-manrope text-xs sm:text-sm text-[#EDEDED] animate-fade-in text-center md:text-left">
                    1994-nji ýyldan bäri ösen gurluşyk çözgütleri
                </p>
                <h1
                    class="font-manrope font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight !leading-[130%] text-[#EDEDED] animate-fade-in animation-delay-200 text-center md:text-left capitalize">
                    Biz Öz ukybymyzy we
                    tejribämizi siziň taslamalaryňyza bagyşlaýarys
                </h1>
                <div class="flex justify-center md:justify-start">
                    <Button class="animate-fade-right" :name="$t('links.works')" route="/works" px="px-8" />
                </div>
            </div>
        </div>
        <!--  -->
        <section class="relative min-h-screen py-10 mb-20">
            <div class="absolute top-10 left-1/2 -translate-x-1/2">
                <img class="w-[100px] h-[100px]" src="/svgs/_logo.svg" alt="Doganlar Illustration" />
            </div>
            <div
                class="w-[95%] text-[#0C1A30] text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p class="font-manrope text-xl md:text-[42px]">
                    Eziz Doganlar
                    <img src="/imgs/a1.webp"
                        class="inline w-[40px] sm:w-[60px] md:w-[75px] h-[24px] sm:h-[32px] md:h-[40px] mx-1 align-middle"
                        alt="icon1" />
                    is a company that focuses on the
                </p>

                <p class="font-manrope text-xl md:text-[42px]">
                    implementation of "turnkey"
                    <img src="/imgs/a2.webp"
                        class="inline w-[40px] sm:w-[60px] md:w-[75px] h-[24px] sm:h-[32px] md:h-[40px] mx-1 align-middle"
                        alt="icon2" />
                    construction works. Our
                </p>

                <p class="font-manrope text-xl md:text-[42px]">
                    company established in 1994 in Turkmenistan,
                    <img src="/imgs/a3.webp"
                        class="inline w-[40px] sm:w-[60px] md:w-[75px] h-[24px] sm:h-[32px] md:h-[40px] mx-1 align-middle"
                        alt="icon3" />
                    today
                </p>

                <p class="font-manrope text-xl md:text-[42px]">
                    <img src="/imgs/a4.webp"
                        class="inline w-[40px] sm:w-[60px] md:w-[75px] h-[24px] sm:h-[32px] md:h-[40px] mx-1 align-middle"
                        alt="icon3" />
                    continues to operate throughout the country.
                </p>
            </div>
            <div class="w-full absolute bottom-0">
                <img src="/imgs/about-bg.webp" alt="">
            </div>
        </section>
        <!-- Service section -->
        <ServiceSection />
        <!-- Accordion section -->
        <AccordionSection />
        <!-- Our Missino section -->
        <section ref="missonSection"
            class="container overflow-hidden px-4 relative bg-[#F5F5F5] bg-fixed bg-[url('/imgs/misson.webp')] bg-cover bg-center min-h-[400px] flex flex-col md:flex-row items-center justify-between py-10 md:py-0 space-y-8 md:space-y-0">
            <h1 :class="{ 'animate-fade-right': showAnimations }"
                class="flex-1 font-manrope font-medium text-3xl sm:text-4xl md:text-[46px] text-center md:text-left uppercase leading-snug">
                OUR <span class="text-[#003DA6]">MISSION</span>
            </h1>
            <div class="flex-1 flex flex-col space-y-6 font-manrope font-medium text-base sm:text-lg text-justify">
                <p :class="{ 'animate-fade-left': showAnimations, 'animation-delay-300': showAnimations }">
                    Grounding on the customer satisfaction with its flexible and economic solutions, "Eziz
                    Doganlar" aims to offer habitable and sustainable housing and building solutions, which comply with
                    the environment, cultural values, human health and safety, and psychosocial needs as well as the
                    necessities of the time, without compromising on quality.
                </p>
                <p :class="{ 'animate-fade-left': showAnimations, 'animation-delay-400': showAnimations }">
                    It aims to become one of the leading and brand companies within the industry, which offer innovative
                    solutions.
                </p>
            </div>
        </section>
        <!-- About section -->
        <AboutSection />
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ServiceSection from '@/components/ServiceSection.vue';
import AccordionSection from '@/components/AccordionSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "AboutView",
    components: {
        Navbar,
        ServiceSection,
        AccordionSection,
        AboutSection,
        Footer
    },
    data() {
        return {
            showAnimations: false,
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
            { threshold: 0.3 }
        );

        this.$nextTick(() => {
            const section = this.$refs.missonSection;
            if (section) observer.observe(section);
        });
    },
}
</script>