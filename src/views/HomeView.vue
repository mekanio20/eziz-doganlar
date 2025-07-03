<template>
    <div v-show="!isLoading" class="w-full h-full">
        <!-- Navbar -->
        <Navbar link="home" />
        <!-- Hero section -->
        <div class="w-full h-full relative">
            <img v-lazy="`/imgs/project-4.webp`" class="w-full h-full object-cover max-h-screen" loading="lazy" />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
            <div
                class="absolute top-1/2 left-0 -translate-y-1/2 px-4 sm:px-8 md:px-16 flex flex-col space-y-6 w-full max-w-[1200px]">
                <p class="font-manrope text-xs sm:text-sm text-[#EDEDED] animate-fade-in text-center md:text-left">
                    TÜRKMENISTAN BOÝUNÇA #1 GURLUŞYK KÄRHANASY
                </p>
                <h1
                    class="font-manrope font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-snug text-[#EDEDED] animate-fade-in animation-delay-200 text-center md:text-left">
                    Innowasion Çözgütler Bilen Berk Gurluşyk — Geljegi Bilelikde Gurýarys.
                </h1>
                <div class="flex justify-center md:justify-start">
                    <Button class="animate-fade-right" :name="$t('links.works')" route="/works" px="px-8" />
                </div>
            </div>
            <div
                class="absolute w-[90%] md:w-[40%] bottom-4 md:bottom-10 left-1/2 md:left-auto md:right-[54px] transform -translate-x-1/2 md:translate-x-0">
                <swiper :scrollbar="{ hide: false }" :modules="modules"
                    :autoplay="{ delay: 2500, disableOnInteraction: false }">
                    <swiper-slide v-for="item in header_text" :key="item.id">
                        <p
                            class="font-manrope text-xs sm:text-sm text-white/90 tracking-wide leading-relaxed pb-6 sm:pb-10">
                            {{ item.text }}
                        </p>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!-- Advertisement section -->
        <AdvertisementSection />
        <!-- Garagum section -->
        <GaragumSection />
        <!-- Advantages section -->
        <AdvantageSection />
        <!-- About section -->
        <AboutSection />
        <!-- Project section -->
        <ProjectSection />
        <!-- Feature section -->
        <FeatureSection />
        <!-- Service section -->
        <ServiceSection />
        <!-- Accordion section -->
        <AccordionSection />
        <!-- Footer -->
        <Footer />
    </div>
    <!-- LOADER -->
    <div v-if="isLoading"
        class="w-full h-full relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 overflow-hidden">
        <div class="absolute top-3 sm:left-20 left-4 flex items-center">
            <img class="md:w-72 w-52" src="/svgs/logo.svg">
        </div>
        <div v-if="!fadeShow" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <lottie-player class="sm:w-600 sm:h-406 w-96 h-96" src="/Zob9o2rbHI.json" background="transparent" speed="1"
                loop autoplay></lottie-player>
        </div>
    </div>
</template>

<script>
import Map from "@/components/Map.vue"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import Button from "@/components/base/button.vue"
import AdvertisementSection from "@/components/AdvertisementSection.vue"
import AdvantageSection from "@/components/AdvantageSection.vue"
import AboutSection from "@/components/AboutSection.vue"
import ProjectSection from "@/components/ProjectSection.vue"
import FeatureSection from "@/components/FeatureSection.vue"
import ServiceSection from "@/components/ServiceSection.vue"
import AccordionSection from "@/components/AccordionSection.vue"
import GaragumSection from "@/components/GaragumSection.vue"
import { Pagination, Navigation, EffectCoverflow, Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import ScrollReveal from 'scrollreveal';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

export default {
    name: "Home",
    components: {
        Navbar,
        Footer,
        Map,
        Swiper,
        SwiperSlide,
        Button,
        AdvertisementSection,
        AdvantageSection,
        AboutSection,
        ProjectSection,
        FeatureSection,
        ServiceSection,
        AccordionSection,
        GaragumSection
    },
    created() {
        const isFirstVisit = sessionStorage.getItem('firstVisit')
        if (!isFirstVisit) {
            this.isLoading = true
            sessionStorage.setItem('firstVisit', 'false')
        }

        setTimeout(() => {
            this.isLoading = false
            this.fadeShow = true
            if (!sessionStorage.getItem('hasRefreshed')) {
                sessionStorage.setItem('hasRefreshed', 'true')
                window.location.reload()
            }
        }, 10000);
    },
    mounted() {
        ScrollReveal().reveal('.scroll-reveal-left', {
            distance: '100px',
            duration: 1000,
            origin: 'left'
        })
        ScrollReveal().reveal('.scroll-reveal-right', {
            distance: '100px',
            duration: 1000,
            origin: 'right'
        })
        ScrollReveal().reveal('.scroll-reveal-top', {
            distance: '100px',
            duration: 1000,
            origin: 'top'
        })
        ScrollReveal().reveal('.scroll-reveal-bottom', {
            distance: '100px',
            duration: 1000,
            origin: 'bottom'
        })
    },
    data() {
        return {
            header_text: [
                {
                    id: 1,
                    text: 'Bu bina döwrebap arhitektura çözgütleri bilen guruldy. Uly penjireler, ýokary hilli gurluşyk serişdeleri we energiýany tygşytlaýan ulgamlar bilen enjamlaşdyrylan. Binanyň içerki dizaýny amatlylyk we döwrebaplyk ýörelgelerine laýyklykda işlenip düzüldi.',
                },
                {
                    id: 2,
                    text: 'Bu bina döwrebap arhitektura çözgütleri bilen guruldy. Uly penjireler, ýokary hilli gurluşyk serişdeleri we energiýany tygşytlaýan ulgamlar bilen enjamlaşdyrylan. Binanyň içerki dizaýny amatlylyk we döwrebaplyk ýörelgelerine laýyklykda işlenip düzüldi.',
                },
                {
                    id: 3,
                    text: 'Bu bina döwrebap arhitektura çözgütleri bilen guruldy. Uly penjireler, ýokary hilli gurluşyk serişdeleri we energiýany tygşytlaýan ulgamlar bilen enjamlaşdyrylan. Binanyň içerki dizaýny amatlylyk we döwrebaplyk ýörelgelerine laýyklykda işlenip düzüldi.',
                },
                {
                    id: 4,
                    text: 'Bu bina döwrebap arhitektura çözgütleri bilen guruldy. Uly penjireler, ýokary hilli gurluşyk serişdeleri we energiýany tygşytlaýan ulgamlar bilen enjamlaşdyrylan. Binanyň içerki dizaýny amatlylyk we döwrebaplyk ýörelgelerine laýyklykda işlenip düzüldi.',
                },
            ],
            modules: [Scrollbar, Pagination, Navigation, EffectCoverflow, Autoplay],
            fadeShow: false,
            isLoading: false,
        }
    },
}
</script>

<style>
.swiper-scrollbar {
    background-color: rgb(160, 160, 160);
    height: 6px;
    box-sizing: border-box;
    border-radius: 9999px;
}

.swiper-scrollbar-drag {
    background-color: white;
    border-radius: 9999px;
}
</style>