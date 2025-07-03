<template>
    <section ref="projectSection" class="container py-20">
        <div class="flex items-end justify-between">
            <div class="flex flex-col space-y-2 font-manrope text-5xl">
                <h2 class="text-[#0C1A30] animate-fade-in" :class="{ 'animate-fade-in': showAnimations }">Her Taslama
                    — Ynamyň We </h2>
                <h2 class="text-[#B2B2B2]"
                    :class="{ 'animate-fade-in': showAnimations, 'animation-delay-200': showAnimations }">Hilimiziň
                    Subutnamasy</h2>
            </div>
            <Button :class="{ 'animate-fade-right': showAnimations, 'animation-delay-400': showAnimations }"
                :name="'ÄHLI IŞLERIMIZI GÖRMEK'" route="/works" bg_color="bg-[#0062B0]" text_color="text-white"
                icon_bg_color="bg-white" icon_color="#0062B0" px="px-8" />
        </div>
        <div class="py-20">
            <swiper :slidesPerView="slidesPerView" :breakpoints="breakpoints" :spaceBetween="20" class="relative">
                <swiper-slide v-for="item in projects" :key="item.id">
                    <ProjectCard :project="item"
                        :class="showAnimations ? `animate-fade-in animation-delay-${(index + 1) * 100}` : ''" />
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>

import { Pagination, Navigation, EffectCoverflow, Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import ProjectCard from './ProjectCard.vue'
import Button from './base/button.vue';

export default {
    name: "ProjectSection",
    components: {
        Swiper,
        SwiperSlide,
        Button,
        ProjectCard
    },
    data() {
        return {
            showAnimation: false,
            modules: [Scrollbar, Pagination, Navigation, EffectCoverflow, Autoplay],
            breakpoints: {
                550: { slidesPerView: 1.5 },
                750: { slidesPerView: 2 },
                900: { slidesPerView: 2.3 },
                1100: { slidesPerView: 3 },
            },
            projects: [
                {
                    id: 1,
                    title: '2-Story Office And Commercial Building',
                    company: 'Economic society «Berk ynam»',
                    image: '/imgs/project-1.webp'
                },
                {
                    id: 2,
                    title: 'Car parking with autoservices, shops and offices',
                    company: 'Toplum',
                    image: '/imgs/project-2.webp'
                },
                {
                    id: 3,
                    title: 'Modern 2-story Cottage',
                    company: 'Union of Entrepreneurs and Industrials of Turkmenistan',
                    image: '/imgs/project-3.webp'
                },
            ]
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
            const section = this.$refs.projectSection;
            if (section) observer.observe(section);
        });
    },
}
</script>