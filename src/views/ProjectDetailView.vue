<template>
    <div class="w-full h-full flex flex-col" id="top">
        <Navbar link="projects" background="bg-custom-gradient-1" />
        <div class="flex-auto">
            <div v-if="this.project">
                <div class="sm:container px-4">
                    <div class="mt-32 mb-10 flex items-center space-x-2">
                        <router-link to="/"
                            class="font-inter font-normal laptop:text-lg sm:text-base text-sm text-m_bg_gray_4">{{
                $t('links.anasayfa')
            }}</router-link>
                        <span class="text-m_bg_gray_4 laptop:text-lg sm:text-base text-sm">></span>
                        <router-link to="/projects"
                            class="font-inter font-normal laptop:text-lg sm:text-base text-sm text-m_bg_gray_4">{{
                    $t('links.projeler')
                }}</router-link>
                        <span class="text-m_bg_gray_4">></span>
                        <router-link :to="`/projects/${this.projectId}`"
                            class="font-inter font-normal laptop:text-lg sm:text-base text-sm text-m_bg_gray_4 sm:block hidden">{{
                project.title }}</router-link>
                        <router-link to="/projects"
                            class="font-inter font-normal laptop:text-lg sm:text-base text-sm text-m_bg_gray_4 sm:hidden block">{{
                $t('links.hepsi') }}</router-link>
                    </div>
                    <div class="w-full phone:h-612 h-full">
                        <img v-show="!isVideo" class="w-full h-full phone:object-contain object-cover" v-lazy="project.img" lazy="loading">
                        <video v-show="isVideo" ref="videoPlayer1" class="w-full h-full phone:object-contain object-cover"
                            controls></video>
                    </div>
                    <div class="w-full flex items-start justify-start">
                        <h4
                            class="font-inter hidden tablet:block font-normal laptop:text-xl text-base text-m_blue_4 mt-155">
                            {{ $t('subtitles.hakkinda') }}
                        </h4>
                        <div class="flex flex-col sm:px-10 lg:mx-14 mx-4 tablet:border-r-2 tablet:border-l-2">
                            <p
                                class="font-inter font-normal laptop:text-lg phone:text-base text-sm text-m_bg_gray_6 pt-4">
                                {{ project.location }}</p>
                            <h2 class="font-sans font-bold laptop:text-4xl phone:text-3xl text-2xl pt-4">{{
                project.title }}</h2>
                            <h4
                                class="font-inter block tablet:hidden font-normal laptop:text-xl text-base text-m_blue_4 my-6">
                                {{ $t('subtitles.hakkinda') }}
                            </h4>
                            <p class="font-roboto font-normal laptop:text-xl phone:text-lg text-base text-m_black_2 tablet:py-14 pb-14"
                                v-html="project.desc"></p>
                        </div>
                    </div>
                </div>
                <div class="w-full bg-m_bg_gray_3 py-20">
                    <div class="sm:container flex tablet:flex-row flex-col items-start justify-start">
                        <h4
                            class="font-inter font-normal tablet:px-0 sm:px-10 tablet:mx-0 mx-4 pb-10 laptop:text-xl text-lg text-m_blue_4">
                            {{ $t('subtitles.detay') }}
                        </h4>
                        <div class="sm:px-10 lg:mx-14 mx-4 grid phone:grid-cols-3 grid-cols-2 gap-14">
                            <div class="w-fit" v-for="item in project.detay" :key="item.id">
                                <h5
                                    class="font-inter font-normal laptop:text-lg phone:text-base text-sm text-m_bg_gray_6">
                                    {{ item.title }}</h5>
                                <p class="font-sans font-semibold laptop:text-2xl phone:text-xl text-lg mt-5"
                                    v-html="item.desc"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sm:container px-4">
                    <div class="w-full flex tablet:flex-row flex-col items-start justify-start sm:mb-28 mb-10">
                        <h4
                            class="font-inter pt-10 tablet:px-0 sm:px-10 tablet:mx-0 sm:mx-4 font-normal laptop:text-xl text-lg text-m_blue_4">
                            {{ $t('subtitles.galeri') }}
                        </h4>
                        <div
                            class="w-full flex flex-col sm:px-10 pt-10 lg:mx-14 sm:mx-4 tablet:border-r-2 tablet:border-l-2">
                            <div class="w-full">
                                <div class="flex-1 flex lg:flex-row flex-col items-center">
                                    <div class="flex-1 h-80 lg:mr-5 mb-5" v-if="project.galeri[0]">
                                        <vue-easy-lightbox :visible="visibleRef" :imgs="galeri" :index="indexRef"
                                            @hide="onHide"></vue-easy-lightbox>
                                        <img @click="onShow(0)" class="w-full h-full object-cover"
                                            v-lazy="project.galeri[0]" lazy="loading">
                                    </div>
                                    <div class="flex-1 h-80 mb-5" v-if="project.galeri[1]">
                                        <img @click="onShow(1)" class="w-full h-full object-cover"
                                            v-lazy="project.galeri[1]" lazy="loading">
                                    </div>
                                </div>
                                <div class="flex-1 h-465 mb-5" v-if="project.galeri[2]">
                                    <img @click="onShow(2)" class="w-full h-full object-cover"
                                        v-lazy="project.galeri[2]" lazy="loading">
                                </div>
                                <div class="flex-1 flex lg:flex-row flex-col items-center">
                                    <div class="flex-1 h-80 lg:mr-5 mb-5" v-if="project.galeri[3]">
                                        <img @click="onShow(3)" class="w-full h-full object-cover"
                                            v-lazy="project.galeri[3]" lazy="loading">
                                    </div>
                                    <div class="flex-1 h-80 mb-5" v-if="project.galeri[4]">
                                        <img @click="onShow(4)" class="w-full h-full object-cover"
                                            v-lazy="project.galeri[4]" lazy="loading">
                                    </div>
                                </div>
                                <div class="flex-1 h-465 mb-5" v-if="project.galeri[5]">
                                    <img @click="onShow(5)" class="w-full h-full object-cover"
                                        v-lazy="project.galeri[5]" lazy="loading">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="project.buildings.length > 0" class="w-full select-none mb-32">
                        <div class="w-full flex items-center justify-between mb-16">
                            <h3 class="font-sans font-normal laptop:text-4xl tablet:text-3xl text-2xl">{{
                $t('titles.projeBinalar') }}</h3>
                        </div>
                        <swiper :slidesPerView="slidesPerView" :breakpoints="breakpoints" :spaceBetween="50"
                            :modules="modules" :autoplay="{ delay: 1000, disableOnInteraction: false, }" :speed="1000"
                            class="relative">
                            <swiper-slide class="flex-shrink-0" v-for="item in project.buildings">
                                <router-link :to="`/projects/${item.id}`" class="space-y-4">
                                    <div class="w-full h-96">
                                        <img class="w-full h-full object-cover" v-lazy="item.img" lazy="loading">
                                    </div>
                                    <div class="w-full flex items-start justify-between">
                                        <h4
                                            class="basis-10/12 font-inter font-medium laptop:text-lg sm:text-base text-sm">
                                            {{ item.title }}</h4>
                                    </div>
                                    <p class="font-inter font-normal sm:text-sm text-xs">{{ item.desc }}</p>
                                </router-link>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { projects } from '@/data/index.js'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Hls from 'hls.js';

export default {
    name: "ProjectDetail",
    components: {
        RouterLink,
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
        VueEasyLightbox,
    },
    async created() {
        this.projectId = this.$route.params.id
        let project = await projects[this.$i18n.locale].find((item) => item.id == this.projectId)
        this.galeri = project.galeri
        this.project = project
        this.isVideo = this.project?.videos ? true : false
        this.movie = `https://www.ajayypgurlusyk.com.tm/api${this.project?.videos}`
    },
    async updated() {
        let project = await projects[this.$i18n.locale].find((item) => item.id == this.projectId)
        this.galeri = project.galeri
        this.project = project
    },
    async mounted() {
        this.$nextTick(() => {
            let element
            setTimeout(() => {
                element = this.$refs.videoPlayer1;
                if (element) {
                    this.setupVideo(element, this.movie);
                } else {
                    console.error('Video element not found!');
                }
            }, 1000);
        });
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
            modules: [Pagination, Navigation, EffectCoverflow, Autoplay],
            breakpoints: {
                600: { slidesPerView: 1 },
                800: { slidesPerView: 1.5 },
                1100: { slidesPerView: 3 },
            },
        }
    },
    methods: {
        onShow(index) {
            this.visibleRef = true
            this.indexRef = index
        },
        onHide() {
            this.visibleRef = false
        },
        setupVideo(videoElement, videoSrc) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(videoSrc);
                hls.attachMedia(videoElement);
                hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    videoElement.play();
                });
            } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
                videoElement.src = videoSrc;
                videoElement.addEventListener('loadedmetadata', function () {
                    videoElement.play();
                });
            }
        },
    }
}
</script>

<style>
img[lazy=loading] {
    background: #eee;
    background: linear-gradient(110deg, #eeeeee 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
}

@keyframes shine {
    to {
        background-position-x: -200%;
    }
}
</style>