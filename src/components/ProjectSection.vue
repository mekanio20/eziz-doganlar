<template>
    <section ref="projectSection" class="sm:container px-4 py-10 sm:py-20">
        <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0 sm:mb-20 mb-10">
            <div class="flex flex-col space-y-2 font-manrope">
                <h2 class="text-[#0C1A30] text-3xl sm:text-4xl md:text-5xl font-medium"
                    :class="{ 'animate-fade-in': showAnimations }">
                    {{ $t('projects.title1') }}
                </h2>
                <h2 class="text-[#B2B2B2] text-3xl sm:text-4xl md:text-5xl font-medium"
                    :class="{ 'animate-fade-in': showAnimations, 'animation-delay-200': showAnimations }">
                    {{ $t('projects.title2') }}
                </h2>
            </div>

            <Button :class="[
                        'whitespace-nowrap',
                        showAnimations ? 'animate-fade-right animation-delay-400' : ''
                    ]" :name="$t('common.allVisible')" route="/works" bg_color="bg-[#0062B0]" text_color="text-white"
                icon_bg_color="bg-white" icon_color="#0062B0" px="px-6 sm:px-8" />
        </div>

        <!-- Swiper Slider -->
        <swiper :modules="modules" :slides-per-view="slidesPerView" :breakpoints="breakpoints" :space-between="20"
            class="relative" autoplay>
            <swiper-slide v-for="(item, index) in _projects" :key="item.id"
                :class="showAnimations ? `animate-fade-in animation-delay-${(index + 1) * 100}` : ''">
                <ProjectCard :project="item" />
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
import {
    Pagination,
    Navigation,
    Autoplay,
    Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import ProjectCard from "./ProjectCard.vue";
import Button from "./base/button.vue";
import { projects } from '@/data/index.js'

export default {
    name: "ProjectSection",
    components: {
        Swiper,
        SwiperSlide,
        Button,
        ProjectCard,
    },
    data() {
        return {
            showAnimations: false,
            modules: [Scrollbar, Pagination, Navigation, Autoplay],
            breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                550: { slidesPerView: 1.5, spaceBetween: 15 },
                750: { slidesPerView: 2, spaceBetween: 20 },
                900: { slidesPerView: 2.3, spaceBetween: 20 },
                1100: { slidesPerView: 3, spaceBetween: 20 },
            },
            _projects: projects[this.$i18n.locale],
        };
    },
    computed: {
        slidesPerView() {
            return 1;
        },
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
            const section = this.$refs.projectSection;
            if (section) observer.observe(section);
        });
    },
    watch: {
        '$i18n.locale'() {
            this._projects = projects[this.$i18n.locale]
        }
    }
};
</script>