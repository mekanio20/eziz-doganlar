<template>
    <div class="w-full h-full">
        <!-- Navbar -->
        <Navbar link="works" />

        <!-- Hero section -->
        <div class="w-full h-full relative">
            <img v-lazy="`/imgs/header.webp`" class="w-full h-screen object-cover" loading="lazy" />
            <div class="absolute inset-0 bg-black/40"></div>

            <!-- Hero Text -->
            <div class="absolute sm:bottom-52 bottom-1/2 left-0 px-4 sm:px-8 md:px-16 flex flex-col space-y-6 w-full max-w-screen-xl">
                <h1
                    class="font-manrope font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug tracking-wide text-[#EDEDED] animate-fade-in text-center md:text-left capitalize">
                    Horticultural complex, greenhouse facilities
                </h1>
            </div>

            <!-- Hero Bottom Info -->
            <div
                class="absolute bottom-0 left-0 px-4 sm:px-8 md:px-16 w-full flex flex-col sm:flex-row sm:items-start items-center justify-between gap-4 pb-10">
                <p class="font-manrope text-base sm:text-lg text-[#EDEDED] animate-fade-in animation-delay-200">
                    Aşgabat, Türkmenistan
                </p>
                <p class="font-manrope text-base sm:text-lg text-[#EDEDED] animate-fade-in animation-delay-200">
                    August 2018 - December 2019
                </p>
            </div>

            <!-- Swiper Caption -->
            <div
                class="absolute w-[90%] md:w-[40%] bottom-4 md:bottom-10 left-1/2 md:left-auto md:right-14 transform -translate-x-1/2 md:translate-x-0">
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

        <!-- Project Description -->
        <div class="container px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-10 items-start">
            <div class="flex-1 w-full">
                <img class="w-full h-full object-cover" v-lazy="`/imgs/project-4-1.webp`" lazy="loading" />
            </div>
            <div class="flex-1 w-full px-0 lg:px-10">
                <div class="flex flex-col space-y-8 pb-20">
                    <h2 class="font-manrope font-semibold text-sm uppercase">MAGLUMAT</h2>
                    <p class="font-manrope text-base">
                        Construction of Modern Fruit Orehard complex, consisting of 80000m2, water reservoir, cold
                        storage
                        for vegetables, all-season greenhouse with a total area of 80 hectares, building for staff and
                        ete
                        located in Akhal Province
                    </p>
                    <div class="w-full h-[165px]">
                        <img class="w-full h-full object-cover" src="/imgs/project-4-2.webp" />
                    </div>
                </div>

                <div class="flex flex-col space-y-8">
                    <h2 class="font-manrope font-semibold text-sm uppercase">Goşmaça maglumatlar</h2>
                    <div class="flex flex-col space-y-4">
                        <div class="flex items-center justify-between py-4 border-b border-black">
                            <p class="font-manrope font-semibold text-base uppercase">Employer</p>
                            <p class="font-manrope text-sm">Mive OJSC</p>
                        </div>
                        <div class="flex items-center justify-between py-4 border-b border-black">
                            <p class="font-manrope font-semibold text-base uppercase">Type of project</p>
                            <p class="font-manrope text-sm">Horticultural complex, greenhouse facilities</p>
                        </div>
                        <div class="flex items-center justify-between py-4 border-b border-black">
                            <p class="font-manrope font-semibold text-base uppercase">Total Construction Area</p>
                            <p class="font-manrope text-sm">1211.7 ha</p>
                        </div>
                        <div class="flex items-center justify-between py-4 border-b border-black">
                            <p class="font-manrope font-semibold text-base uppercase">Total Indoor Area (m<sup>2</sup>)
                            </p>
                            <p class="font-manrope text-sm">820 000.0 m<sup>2</sup></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Project Images Grid -->
        <div class="container px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 pb-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img class="w-full h-[295px] object-cover" src="/imgs/project-4-3.webp" />
                <img class="w-full h-[295px] object-cover" src="/imgs/project-4-4.webp" />
            </div>
            <img class="w-full h-[440px] object-cover" src="/imgs/project-4-5.webp" />
        </div>

        <!-- Related Projects -->
        <div class="container px-4 sm:px-6 lg:px-8 pb-20">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-manrope font-medium capitalize">
                    Meňzeş işlerimiz
                </h2>
                <Button :class="[showAnimations ? 'animate-fade-right animation-delay-300' : '']"
                    :name="'ÄHLI HYZMATLARYMYZY GÖRMEK'" route="/about" bg_color="bg-[#0062B0]" text_color="text-white"
                    icon_bg_color="bg-white" icon_color="#0062B0" px="px-8" />
            </div>

            <swiper :modules="modules" :slides-per-view="slidesPerView" :breakpoints="breakpoints" :space-between="20"
                class="relative" autoplay>
                <swiper-slide v-for="item in 10" :key="item"
                    :class="showAnimations ? `animate-fade-in animation-delay-${(item + 1) * 100}` : ''">
                    <router-link :to="`/works/${item.id}`" class="group flex flex-col my-4">
                        <div class="w-full relative overflow-hidden rounded-lg">
                            <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src="/imgs/project-1.webp" loading="lazy" />
                            <div
                                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div
                                    class="flex flex-col items-center text-center space-y-5 w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <h3 class="font-manrope text-sm text-white uppercase">Suwa degişli gurluşyk, Aşgabat
                                    </h3>
                                    <h2 class="font-manrope text-xl text-white uppercase">Horticultural complex,
                                        greenhouse facilities</h2>
                                </div>
                                <div
                                    class="flex items-center space-x-2 absolute bottom-5 left-1/2 transform -translate-x-1/2 hover:bg-slate-400/40 duration-300 rounded-full px-4 py-1 cursor-pointer">
                                    <p class="font-manrope text-sm text-white">Görmek</p>
                                    <svg width="35" height="14" viewBox="0 0 35 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.4736 2.89471L31.5263 6.94735L27.4736 11" stroke="white"
                                            stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1 7L31 7" stroke="white" stroke-width="1.2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Button from '@/components/base/button.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default {
    name: "ProjectDetail",
    components: {
        RouterLink,
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
        Button
    },
    data() {
        return {
            indexRef: 0,
            visibleRef: false,
            currentImage: null,
            projectId: null,
            project: null,
            movie: null,
            isVideo: false,
            galeri: [],
            modules: [Pagination, Navigation, Autoplay],
            breakpoints: {
                600: { slidesPerView: 1 },
                800: { slidesPerView: 1.5 },
                1100: { slidesPerView: 3 },
            },
        }
    },
}
</script>