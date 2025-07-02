<template>
    <div class="w-full h-full">
        <Navbar link="news" background="bg-custom-gradient-1" />
        <div class="sm:container px-4 mb-20">
            <div class="mt-32 flex items-center space-x-2">
                <router-link to="/" class="font-inter font-normal tablet:text-lg text-sm text-m_bg_gray_4">{{ $t('links.anasayfa')
                    }}</router-link>
                <span class="text-m_bg_gray_4">></span>
                <router-link to="/news" class="font-inter font-normal tablet:text-lg text-sm text-m_bg_gray_4">{{ $t('links.haberler')
                    }}</router-link>
                <span class="text-m_bg_gray_4 sm:hidden block">></span>
                <router-link to="/news" class="font-inter font-normal laptop:text-lg sm:text-base text-sm text-m_bg_gray_4 sm:hidden block">{{ $t('links.hepsi') }}</router-link>
            </div>
            <h2 class="mt-12 font-sans font-bold sm:text-center text-start phone:text-4xl text-2xl">{{ haber.title }}</h2>
            <div class="w-full pb-8 border-b-2">
                <div class="w-full h-418 my-10">
                    <vue-easy-lightbox :visible="visibleRef" :imgs="currentImage" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
                    <img @click="onShow(`${haber.imgs[0]}`)" class="w-full h-full phone:object-contain object-cover left-0" v-lazy="haber.imgs[0]">
                </div>
                <div class="flex items-center sm:justify-center justify-normal">
                    <div class="w-fit grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
                        <div class="font-inter font-normal sm:text-sm text-xs bg-m_bg_gray_8 py-3 px-10 mb-2 w-fit">{{ categoryNames[haber.catId - 1].name }}</div>
                        <div class="font-inter font-normal sm:text-sm text-xs bg-m_bg_gray_8 py-3 px-10 mb-2 w-fit">{{ haber.date }}</div>
                    </div>
                </div>
            </div>
            <div class="w-full mt-2 mb-10">
                <div class="w-full my-8">
                    <p class="font-inter font-normal text-lg text-m_black_2" v-html="haber.desc">
                    </p>
                </div>
                <div v-if="haber.imgs[1]" class="grid">
                    <h3 class="font-sans font-bold text-xl text-m_black_3 mb-10">{{ haber.title }}</h3>
                    <div class="flex items-center space-x-5 w-full h-374 mb-10">
                        <img v-if="haber.imgs[1]" @click="onShow(haber.imgs[1])" class="phone:w-1/2 w-full h-full object-cover" v-lazy="haber.imgs[1]">
                        <img v-if="haber.imgs[2]" @click="onShow(haber.imgs[2])" class="w-1/2 h-full object-cover hidden phone:block" v-lazy="haber.imgs[2]">
                    </div>
                </div>
            </div>
            <div class="w-full mt-28 select-none">
                <div class="w-full flex items-center justify-between mb-16">
                    <h3 class="font-sans font-normal laptop:text-4xl sm:text-3xl text-2xl">{{ $t('titles.benzerHaberler') }}</h3>
                    <router-link to="/news" class="font-sans font-normal laptop:text-2xl sm:text-xl text-lg text-m_red">{{ $t('links.hepsi') }}</router-link>
                </div>
                <swiper :slidesPerView="slidesPerView" :breakpoints="breakpoints" :spaceBetween="50" class="relative">
                    <swiper-slide class="flex-shrink-0" v-for="item in haberler" :key="item">
                        <router-link :to="`/news/${item.id}`">
                            <div class="w-full sm:h-60 h-64 relative">
                                <img class="w-full h-full object-cover" v-lazy="item.imgs[0]">
                                <p class="absolute top-4 right-4 py-2 px-6 bg-white text-black font-inter font-normal text-xs">{{ categoryNames[item.catId - 1].name }}</p>
                            </div>
                            <div>
                                <p class="font-dmSans sm:text-lg text-base font-medium text-m_bg_gray_7 mt-5">{{ item.date }}</p>
                                <h3 class="font-inter font-semibold sm:text-xl text-lg sm:my-8 my-4">{{ item.title }}</h3>
                                <p class="font-inter font-normal sm:text-base text-sm text-m_bg_gray_6 h-[50px] overflow-y-hidden">{{ item.desc }}</p>
                            </div>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import { news, news_contents } from '@/data/index.js'
import 'swiper/css';

export default {
    name: "NewsDetail",
    components: {
        RouterLink,
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
        VueEasyLightbox
    },
    data() {
        return {
            indexRef: 0,
            visibleRef: false,
            currentImage: null,
            breakpoints: {
                550: { slidesPerView: 1.5 },
                750: { slidesPerView: 2 },
                900: { slidesPerView: 2.3 },
                1100: { slidesPerView: 3.3 },
            },
            categoryNames: null,
            haberler: null,
            haber: null
        }
    },
    async created() {
        let newsId = this.$route.params.id
        let news_content = await news_contents[this.$i18n.locale].find((item) => item.id == newsId)
        this.haberler = await news_contents[this.$i18n.locale]
        this.categoryNames = await news[this.$i18n.locale]
        this.haber = news_content
    },
    async updated() {
        let newsId = this.$route.params.id
        let news_content = await news_contents[this.$i18n.locale].find((item) => item.id == newsId)
        this.haberler = await news_contents[this.$i18n.locale]
        this.categoryNames = await news[this.$i18n.locale]
        this.haber = news_content
    },
    methods: {
        onShow(img) {
            this.visibleRef = true
            this.currentImage = img
        },
        onHide() {
            this.visibleRef = false
        },
    }
}
</script>