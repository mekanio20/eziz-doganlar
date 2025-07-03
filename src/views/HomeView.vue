<template>
    <div v-show="!isLoading" class="w-full h-full">
        <!-- Navbar -->
        <Navbar />
        <!-- Hero section -->
        <div class="w-full h-full relative">
            <img v-lazy="`/imgs/header.webp`" class="w-full h-full object-cover" lazy="loading">
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
            <div class="absolute top-1/2 left-16 -translate-y-1/2 flex flex-col space-y-8 w-4/5">
                <p class="font-manrope text-sm text-[#EDEDED] animate-fade-in">TÜRKMENISTAN BOÝUNÇA #1 GURLUŞYK KÄRHANASY</p>
                <h1 class="font-manrope font-bold text-6xl tracking-[1%] leading-[130%] text-[#EDEDED] animate-fade-in animation-delay-200">Innowasion
                    Çözgütler Bilen Berk Gurluşyk — Geljegi Bilelikde Gurýarys.</h1>
                <Button class="animate-fade-right" :name="$t('links.works')" route="/works" px="px-8" />
            </div>
            <div class="w-[35%] absolute bottom-10 right-[54px]">
                <!-- Swiper -->
                <swiper :scrollbar="{ hide: false }" :modules="modules" :autoplay="{ delay: 1000, disableOnInteraction: false }">
                    <swiper-slide v-for="item in header_text" :key="item.id">
                        <p class="font-manrope text-sm text-[#FFFFFFE5] tracking-[1%] leading-[140%] pb-10">
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
    <div v-if="isLoading" class="w-full h-full relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 overflow-hidden">
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
import AnimatedCounter from "@/components/AnimatedCounter.vue"
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
        AnimatedCounter,
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
            features: [
                {
                    id: 1,
                    icon: 'diamond',
                    title: 'Ygtybarlylyк, Hil',
                    description: 'Taslamalarymyzy jogapkärçilik bilen ýerine ýetirýäris. Her bir hyzmatdaşymyz bize doly ynam edip bilýär.'
                },
                {
                    id: 2,
                    icon: 'settings',
                    title: 'Jogapkärçilik',
                    description: 'Her bir ädimimizde jogapkärçiligi çemeleşýäris. Netijelerimizin arkasында berk durýarys.'
                },
                {
                    id: 3,
                    icon: 'innovation',
                    title: 'Innowasiya',
                    description: 'Täze tehnologiýalary we usullary işimize ornaşdyrýarys.'
                },
                {
                    id: 4,
                    icon: 'shield',
                    title: 'Howpsuzlyk',
                    description: 'Müşderilerin howpsuzlygy ileri tutulýar. Gurlušyk meýdançalarynda howpsuzlyk düzgünlerine eýerýäris.'
                },
                {
                    id: 5,
                    icon: 'clock',
                    title: 'Wagta laýyklyk',
                    description: 'Taslamalarymyzy bellenen möhletde tabşyrmak bizin borjumyzdyr. Müny hil bilen utgaşykly ýerine ýetirýäris.'
                },
                {
                    id: 6,
                    icon: 'users',
                    title: 'Müşderi kanagatlylygy',
                    description: 'Müşderilerin işlegleri we tekipleri üns merkezimizdir.'
                }
            ],
            modules: [Scrollbar, Pagination, Navigation, EffectCoverflow, Autoplay],
            isIphone: false,
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