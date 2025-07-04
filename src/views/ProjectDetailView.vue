<template>
    <div class="w-full h-full" ref="projectDetail">
        <!-- Navbar -->
        <Navbar link="works" background="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900" />

        <!-- Hero section -->
        <div class="w-full h-full relative">
            <img v-lazy="project_img" class="w-full h-screen object-cover" loading="lazy" />
            <div class="absolute inset-0 bg-black/40"></div>

            <div class="absolute sm:bottom-52 bottom-1/2 left-0 px-4 sm:px-8 md:px-16 flex flex-col space-y-6 w-full max-w-screen-xl">
                <h1
                    class="font-manrope font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug tracking-wide text-[#EDEDED] animate-fade-in text-center md:text-left capitalize">
                    {{ project.title }}
                </h1>
            </div>

            <div
                class="absolute bottom-0 left-0 px-4 sm:px-8 md:px-16 w-full pb-10">
                <p class="font-manrope text-base sm:text-lg text-[#EDEDED] animate-fade-in animation-delay-200">
                    {{ project.start_date }} - {{ project.end_date }}
                </p>
            </div>
        </div>

        <!-- Project Description -->
        <div class="container px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-10 items-start">
            <div class="flex-1 w-full">
                <img class="w-full h-full object-cover rounded-lg" v-lazy="project_img" lazy="loading" />
            </div>
            <div class="flex-1 w-full px-0 lg:px-10">
                <div class="flex flex-col space-y-8 pb-20">
                    <h2 class="font-manrope font-semibold text-sm uppercase">
                        {{ $t('projects.title3') }}
                    </h2>
                    <p class="font-manrope text-base">
                        {{ project.desc }}
                    </p>
                </div>

                <div class="flex flex-col space-y-8">
                    <h2 class="font-manrope font-semibold text-sm uppercase">
                        {{ $t('projects.title4') }}
                    </h2>
                    <div class="flex flex-col space-y-4">
                        <div class="flex items-center justify-between py-4 border-b border-black">
                            <p class="font-manrope font-semibold text-base uppercase">
                                {{ $t('projects.title5') }}
                            </p>
                            <p class="font-manrope text-sm">{{ project.subtitle }}</p>
                        </div>
                        <div class="flex items-center justify-between py-4 border-b border-black">
                            <p class="font-manrope font-semibold text-base uppercase">
                                {{ $t('projects.title6') }}
                            </p>
                            <p class="font-manrope text-sm">{{ project.title }}</p>
                        </div>
                        <div class="flex items-center justify-between py-4 border-b border-black">
                            <p class="font-manrope font-semibold text-base uppercase">
                                {{ $t('projects.title7') }}
                            </p>
                            <p class="font-manrope text-sm">{{ project.construction_area }}</p>
                        </div>
                        <div class="flex items-center justify-between py-4 border-b border-black">
                            <p class="font-manrope font-semibold text-base uppercase">{{ $t('projects.title8') }} (m<sup>2</sup>)
                            </p>
                            <p class="font-manrope text-sm" v-html="project.indoor_area"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Project Images Grid -->
        <!-- <div class="container px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 pb-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img class="w-full h-[295px] object-cover" src="/imgs/project-4-3.webp" />
                <img class="w-full h-[295px] object-cover" src="/imgs/project-4-4.webp" />
            </div>
            <img class="w-full h-[440px] object-cover" src="/imgs/project-4-5.webp" />
        </div> -->

        <!-- Related Projects -->
        <div class="container px-4 sm:px-6 lg:px-8 pb-20">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-10">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-manrope font-medium capitalize">
                    {{ $t('projects.title9') }}
                </h2>
                <Button :class="[showAnimations ? 'animate-fade-right animation-delay-300' : '']"
                    :name="$t('common.allVisibleServices')" route="/about" bg_color="bg-[#0062B0]" text_color="text-white"
                    icon_bg_color="bg-white" icon_color="#0062B0" px="px-8" />
            </div>

            <swiper :modules="modules" :slides-per-view="slidesPerView" :breakpoints="breakpoints" :space-between="20"
                class="relative" autoplay>
                <swiper-slide v-for="(item, index) in _projects" :key="index"
                    :class="showAnimations ? `animate-fade-in animation-delay-${(item + 1) * 100}` : ''">
                    <router-link :to="`/works/${item.id}`" class="group flex flex-col my-4">
                        <div class="w-full h-[400px] relative overflow-hidden rounded-lg">
                            <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                :src="project_images[index]" loading="lazy" />
                            <div
                                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div
                                    class="flex flex-col items-center text-center space-y-5 w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <h3 class="font-manrope text-sm text-white uppercase">
                                        {{ item.subtitle }}
                                    </h3>
                                    <h2 class="font-manrope text-xl text-white uppercase">
                                        {{ item.title }}
                                    </h2>
                                </div>
                                <div
                                    class="flex items-center space-x-2 absolute bottom-5 left-1/2 transform -translate-x-1/2 hover:bg-slate-400/40 duration-300 rounded-full px-4 py-1 cursor-pointer">
                                    <p class="font-manrope text-sm text-white">{{ $t('common.readMore') }}</p>
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
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Button from '@/components/base/button.vue'
import { projects } from '@/data/index.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default {
    name: "ProjectDetail",
    components: {
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
        Button
    },
    data() {
        return {
            project: null,
            project_img: null,
            _projects: projects[this.$i18n.locale],
            project_images: projects.imgs,
            modules: [Pagination, Navigation, Autoplay],
            breakpoints: {
                600: { slidesPerView: 1 },
                800: { slidesPerView: 1.5 },
                1100: { slidesPerView: 3 },
            },
            slidesPerView: null,
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
            { threshold: 0.5 }
        );

        this.$nextTick(() => {
            const section = this.$refs.projectDetail;
            if (section) observer.observe(section);
        });
    },
    created() {
        this.project = projects[this.$i18n.locale].find(p => p.id === Number(this.$route.params.id))
        this.project_img = projects.imgs.find((_, index) => index === Number(this.$route.params.id) - 1)
    },
    watch: {
        '$i18n.locale': {
            immediate: true,
            handler() {
                this._projects = projects[this.$i18n.locale]
                this.project = projects[this.$i18n.locale].find(p => p.id === Number(this.$route.params.id))
            }
        }
    }
}
</script>