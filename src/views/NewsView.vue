<template>
    <div class="w-full h-full">
        <Navbar link="news" background="bg-custom-gradient-1" />
        <div class="sm:container px-4 mb-20">
            <div class="mt-32 flex items-center space-x-2">
                <router-link to="/" class="font-inter font-normal sm:text-lg text-base text-m_bg_gray_4">{{ $t('links.anasayfa')
                    }}</router-link>
                <span class="text-m_bg_gray_4">></span>
                <router-link to="/news" class="font-inter font-normal sm:text-lg text-base text-m_bg_gray_4">{{ $t('links.haberler')
                    }}</router-link>
                <span class="text-m_bg_gray_4">></span>
                <router-link to="/news#" class="font-inter font-normal sm:text-lg text-base text-m_bg_gray_4">{{ $t('links.hepsi')
                    }}</router-link>
            </div>
            <h2 class="my-12 font-sans font-bold sm:text-4xl text-3xl">{{ $t('links.haberler') }}</h2>
            <div class="my-20 flex justify-between overflow-x-auto no-scrollbar">
                <div @click="changeCategory(0)"
                    class="xl:px-16 px-10 lg:text-xl text-lg border-b-3 pb-6 text-black text-center cursor-pointer"
                    :class="[category.activeId === 0 ? 'font-inter font-bold border-b-m_bg_blue' : 'font-inter border-b-m_red']">
                    {{ $t('links.hepsi') }}</div>
                <div v-for="item in categoryNames" :key="item.id" @click="changeCategory(item.id)"
                    class="xl:px-16 px-10 lg:text-xl text-lg border-b-3 pb-6 text-black cursor-pointer"
                    :class="[category.activeId === item.id ? 'font-inter font-bold border-b-m_bg_blue' : 'font-inter border-b-m_red']">
                    {{ item.name }}
                </div>
            </div>
            <div v-show="topNews" class="w-full xl:flex hidden items-start space-x-10 pb-5 border-b-2">
                <router-link to="/news/1">
                    <div class="w-full flex items-start flex-col">
                        <div class="w-full h-60 relative">
                            <img class="w-full h-full object-cover" v-lazy="haberler[0].imgs[0]" lazy="loading">
                            <p class="absolute top-4 right-4 py-2 px-6 bg-white text-black font-inter font-normal text-xs">{{ categoryNames[haberler[0].catId - 1].name }}</p>
                        </div>
                        <div class="w-full">
                            <p class="font-dmSans text-lg font-medium text-m_bg_gray_7 mt-5">{{ haberler[0].date }}</p>
                            <h3 class="font-inter font-semibold text-xl my-4">{{ haberler[0].title }}</h3>
                            <p class="font-inter font-normal text-base text-m_bg_gray_6 h-[50px] overflow-y-hidden">
                                {{ haberler[0].desc }}
                            </p>
                        </div>
                    </div>
                </router-link>
                <div class="flex items-center flex-col">
                    <router-link to="/news/2">
                        <div class="w-full flex items-start space-x-5 mb-10">
                            <div class="w-436 h-60 relative">
                                <img class="w-full h-full object-cover" v-lazy="haberler[1].imgs[0]" lazy="loading">
                                <p
                                    class="absolute top-4 right-4 py-2 px-6 bg-white text-black font-inter font-normal text-xs">
                                    {{ categoryNames[haberler[1].catId - 1].name }}</p>
                            </div>
                            <div class="w-365 flex items-start flex-col pl-4">
                                <p class="font-dmSans text-lg font-medium text-m_bg_gray_7">{{ haberler[1].date }}</p>
                                <h3 class="font-inter font-semibold text-xl my-4">{{ haberler[1].title }}</h3>
                                <p class="font-inter font-normal text-base text-m_bg_gray_6 h-[50px] overflow-y-hidden">
                                    {{ haberler[1].desc }}
                                </p>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/news/3">
                        <div class="w-full flex items-start space-x-5 mb-10">
                            <div class="w-436 h-60 relative">
                                <img class="w-full h-full object-cover" v-lazy="haberler[2].imgs[0]" lazy="loading">
                                <p
                                    class="absolute top-4 right-4 py-2 px-6 bg-white text-black font-inter font-normal text-xs">
                                    {{ categoryNames[haberler[2].catId - 1].name }}</p>
                            </div>
                            <div class="w-365  flex items-start flex-col pl-4">
                                <p class="font-dmSans text-lg font-medium text-m_bg_gray_7">{{ haberler[2].date }}</p>
                                <h3 class="font-inter font-semibold text-xl my-4">{{ haberler[2].title }}</h3>
                                <p class="font-inter font-normal text-base text-m_bg_gray_6 h-[50px] overflow-y-hidden">
                                    {{ haberler[2].desc }}
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="w-full grid laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-10 mt-20">
                <div v-for="item in haberler" class="flex items-start flex-col mb-10">
                    <router-link :to="`/news/${item.id}`" v-scroll-reveal="{ origin: 'bottom', distance: '100px', duration: 1000 }">
                        <div class="w-full tablet:h-60 h-80 relative">
                            <img class="w-full h-full object-cover" v-lazy="item.imgs[0]" lazy="loading">
                            <p
                                class="absolute top-4 right-4 py-2 px-6 bg-white text-black font-inter font-normal text-xs">
                                {{ categoryNames[item.catId - 1].name }}</p>
                        </div>
                        <div>
                            <p class="font-dmSans sm:text-lg text-base font-medium text-m_bg_gray_7 mt-5">{{ item.date }}</p>
                            <h3 class="font-inter font-semibold sm:text-xl text-lg my-4">{{ item.title }}</h3>
                            <p class="font-inter font-normal sm:text-base text-sm text-m_bg_gray_6 h-[50px] overflow-y-hidden">{{ item.desc }}</p>
                        </div>
                    </router-link>
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
import { news, news_contents } from "@/data/index.js"
export default {
    name: "News",
    components: {
        RouterLink,
        Navbar,
        Footer
    },
    data() {
        return {
            haberler: null,
            topNews: true,
            categoryNames: null,
            category: { activeId: 0 },
        }
    },
    created() {
        this.categoryNames = news[this.$i18n.locale]
        this.haberler = news_contents[this.$i18n.locale]
    },
    methods: {
        async changeCategory(id) {
            this.category.activeId = id
            if (id === 0) {
                this.topNews = true
                this.haberler = news_contents[this.$i18n.locale]
                return this.haberler
            }
            this.topNews = false
            this.haberler = news_contents[this.$i18n.locale].filter((item) => item.catId === id)
        }
    },
    watch: {
        '$i18n.locale': {
            immediate: true,
            handler() {
                this.categoryNames = news[this.$i18n.locale];
                this.haberler = news_contents[this.$i18n.locale];
            }
        }
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