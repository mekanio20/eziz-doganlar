<template>
    <div class="w-full h-full">
        <Navbar link="about" />
        <div class="w-full h-full relative">
            <div class="absolute z-10 lg:top-1/3 top-2/4 lg:ml-44 ml-10">
                <h1 class="text-white xl:text-6xl tablet:text-5xl text-4xl font-bold mb-10" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                    {{ $t('titles.mukemmellik') }}
                </h1>
                <p class="sm:w-648 font-inter text-white tablet:text-lg text-base" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 2000 }">
                    {{ $t('descriptions.mukemmellik_desc') }}
                </p>
            </div>
            <div class="absolute z-10 bottom-20 right-20 lg:flex items-center space-x-6 hidden">
                <div class="bg-white text-black w-fit py-6 px-12">
                    <h4 class="font-inter text-base text-m_bg_gray_6 mb-4">{{ $t('statistics.tecrube') }}</h4>
                    <AnimatedCounter class="font-inter font-bold text-3xl" :finalValue="30" :start-value="0" :speed="70"
                        :plus="true"></AnimatedCounter>
                </div>
                <div class="bg-white text-black w-fit py-6 px-12">
                    <h4 class="font-inter text-base text-m_bg_gray_6 mb-4">{{ $t('statistics.calisanlar') }}</h4>
                    <AnimatedCounter class="font-inter font-bold text-3xl" :finalValue="500" :start-value="0"
                        :speed="1" :plus="true"></AnimatedCounter>
                </div>
                <div class="bg-white text-black w-fit py-6 px-12">
                    <h4 class="font-inter text-base text-m_bg_gray_6 mb-4">{{ $t('statistics.cesitlilik') }}</h4>
                    <div class="flex items-center">
                        <AnimatedCounter class="font-inter font-bold text-3xl" :finalValue="64" :start-value="0"
                            :speed="30"></AnimatedCounter>
                        <sub class="ml-2 font-inter font-bold text-lg">{{ $t('statistics.milletden') }}</sub>
                    </div>
                </div>
            </div>
            <swiper :slidesPerView="1" :modules="modules" effect="fade" :speed="1000" :loop="true"
                :autoplay="{ delay: 5000, disableOnInteraction: false, }" 
                class="w-full h-full">
                <swiper-slide v-for="item in images" :key="item" class="!w-full !h-full">
                    <img v-lazy="item" class="absolute w-full h-full object-cover" lazy="loading">
                </swiper-slide>
            </swiper>
        </div>
        <div class="sm:container px-4 flex lg:flex-row flex-col justify-between py-10">
            <div class="flex items-start flex-col justify-between overflow-hidden">
                <h1 class="font-sans font-bold lg:text-5xl tablet:text-4xl text-3xl lg:mb-40 mb-10 text-m_red" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">{{ $t('titles.hakkimizda') }}</h1>
                <div class="lg:inline-block hidden">
                    <h4 class="font-sans font-normal tablet:ext-2xl text-xl text-m_bg_gray_6">{{ $t('titles.tejrubemiz') }}</h4>
                    <AnimatedCounter class="font-sans font-black text-9xl text-m_red" :finalValue="30" :start-value="0"
                        :speed="50" :plus="true"></AnimatedCounter>
                </div>
            </div>
            <div class="relative flex flex-col items-start lg:w-3/5 w-full">
                <div class=" overflow-hidden">
                    <p class="font-inte font-normal pb-40 tablet:text-22 text-lg text-m_black_2" v-scroll-reveal="{ origin: 'right', distance: '100px', duration: 1000 }">
                        {{ $t('descriptions.tejrubemi_desc') }}
                    </p>
                </div>
                <div class="w-full h-418 absolute -bottom-80">
                    <swiper :slidesPerView="1" :modules="modules" effect="fade" :speed="1000" :loop="true"
                        :autoplay="{ delay: 2000, disableOnInteraction: false, }"
                        @activeIndexChange="increaseSliderId" class="w-full h-full">
                        <swiper-slide v-for="(item, index) in sliderImgs" :key="index" class="w-full h-full">
                            <img v-lazy="item" class="w-full h-full object-cover" lazy="loading">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="w-full bg-m_bg_blue" id="degerlerimiz">
            <div class="sm:container px-4 py-32">
                <h2 class="font-sans font-bold lg:text-5xl tablet:text-4xl text-3xl text-white hidden xl:block">{{ $t('titles.degerlerimiz') }}</h2>
                <div class="flex lg:flex-row flex-col items-start mt-48 justify-between lg:space-x-28">
                    <div class="flex flex-col space-y-10 border-t-4"
                        :class="[this.sliderId == 1 ? 'border-m_red duration-1000 block' : 'lg:block hidden border-white']">
                        <p class="font-sans font-bold tablet:text-22 text-lg mt-6 text-white">01</p>
                        <h3 class="font-sans font-black tablet:text-2xl text-xl text-white uppercase">{{ $t('subtitles.yenilikci') }}
                        </h3>
                        <p class="font-inter font-normal tablet:text-xl text-lg text-white">
                            {{ $t('descriptions.yenilikci_desc') }}
                        </p>
                    </div>
                    <div class="flex flex-col space-y-10 border-t-4"
                        :class="[this.sliderId == 2 ? 'border-m_red duration-1000 block' : 'lg:block hidden border-white']">
                        <p class="font-sans font-bold tablet:text-22 text-lg mt-6 text-white">02</p>
                        <h3 class="font-sans font-black tablet:text-2xl text-xl text-white uppercase">{{ $t('subtitles.rekabetci') }}
                        </h3>
                        <p class="font-inter font-normal tablet:text-xl text-lg text-white">
                            {{ $t('descriptions.rekabetci_desc') }}
                        </p>
                    </div>
                    <div class="flex flex-col space-y-10 border-t-4"
                        :class="[this.sliderId == 0 ? 'border-m_red duration-1000 block' : 'lg:block hidden border-white']">
                        <p class="font-sans font-bold tablet:text-22 text-lg mt-6 text-white">03</p>
                        <h3 class="font-sans font-black tablet:text-2xl text-xl text-white uppercase">{{ $t('subtitles.dayanikli') }}
                        </h3>
                        <p class="font-inter font-normal tablet:text-xl text-lg text-white">
                            {{ $t('descriptions.dayanikli_desc') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="sm:container px-4 py-20">
            <h2 class="font-sans font-semibold xl:text-4xl tablet:text-3xl text-2xl mb-3" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">{{ $t('titles.faaliyetAlanlarimiz') }}</h2>
            <p class="font-inter xl:text-lg tablet:text-base text-sm text-m_gray_7" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1500 }">{{ $t('subtitles.faaliyet') }}</p>
            <div class="grid laptop:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10 overflow-hidden">
                <div class="px-10 py-12 bg-m_bg_gray_3 hover:text-white hover:bg-m_bg_blue_2 flex items-center rounded duration-300" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                    <div class="block">
                        <h3 class="font-inter font-medium xl:text-2xl tablet:text-xl text-lg mb-2">{{ $t('titles.altyapiUstyapi') }}</h3>
                        <p class="font-inter xl:text-lg tablet:text-base text-sm opacity-70">23 {{ $t('subtitles.proje') }}</p>
                    </div>
                    <div></div>
                </div>
                <div class="px-10 py-12 bg-m_bg_gray_3 hover:text-white hover:bg-m_bg_blue_2 flex items-center rounded duration-300" v-scroll-reveal="{ origin: 'top', distance: '100px', duration: 1000 }">
                    <div class="block">
                        <h3 class="font-inter font-medium xl:text-2xl tablet:text-xl text-lg mb-2">{{ $t('titles.endustriel') }}</h3>
                        <p class="font-inter xl:text-lg tablet:text-base text-sm opacity-70">23 {{ $t('subtitles.proje') }}</p>
                    </div>
                    <div></div>
                </div>
                <div class="px-10 py-12 bg-m_bg_gray_3 hover:text-white hover:bg-m_bg_blue_2 flex items-center rounded duration-300" v-scroll-reveal="{ origin: 'right', distance: '100px', duration: 1000 }">
                    <div class="block">
                        <h3 class="font-inter font-medium xl:text-2xl tablet:text-xl text-lg mb-2">{{ $t('titles.saglik') }}</h3>
                        <p class="font-inter xl:text-lg tablet:text-base text-sm opacity-70">23 {{ $t('subtitles.proje') }}</p>
                    </div>
                    <div></div>
                </div>
                <div class="px-10 py-12 bg-m_bg_gray_3 hover:text-white hover:bg-m_bg_blue_2 flex items-center rounded duration-300" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                    <div class="block">
                        <h3 class="font-inter font-medium xl:text-2xl tablet:text-xl text-lg mb-2">{{ $t('titles.konutInsat') }}</h3>
                        <p class="font-inter xl:text-lg tablet:text-base text-sm opacity-70">23 {{ $t('subtitles.proje') }}</p>
                    </div>
                    <div></div>
                </div>
                <div class="px-10 py-12 bg-m_bg_gray_3 hover:text-white hover:bg-m_bg_blue_2 flex items-center rounded duration-300" v-scroll-reveal="{ origin: 'bottom', distance: '100px', duration: 1000 }">
                    <div class="block">
                        <h3 class="font-inter font-medium xl:text-2xl tablet:text-xl text-lg mb-2">{{ $t('titles.ishletmeHizmetleri') }}</h3>
                        <p class="font-inter xl:text-lg tablet:text-base text-sm opacity-70">23 {{ $t('subtitles.proje') }}</p>
                    </div>
                    <div></div>
                </div>
                <div class="px-10 py-12 bg-m_bg_gray_3 hover:text-white hover:bg-m_bg_blue_2 flex items-center rounded duration-300" v-scroll-reveal="{ origin: 'right', distance: '100px', duration: 1000 }">
                    <div class="block">
                        <h3 class="font-inter font-medium xl:text-2xl tablet:text-xl text-lg mb-2">{{ $t('titles.yonetim') }}</h3>
                        <p class="font-inter xl:text-lg tablet:text-base text-sm opacity-70">23 {{ $t('subtitles.proje') }}</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="w-full mb-10 pt-20 lg:pb-0 pb-60 bg-m_black bg-image" id="hikayemiz">
            <div class="sm:container px-4 relative">
                <div class="flex items-start justify-between mb-10">
                    <h2 class="font-sans font-bold lg:text-40 tablet:text-3xl text-2xl mb-20 text-m_red">{{ $t('titles.hikayemiz') }}</h2>
                    <div class="flex items-center space-x-1">
                        <img class="cursor-pointer" v-lazy="`/icon/left-row.svg`"
                            @click="changeGaleri(this.activeId - 1)" lazy="loading">
                        <img class="cursor-pointer" v-lazy="`/icon/right-row.svg`"
                            @click="changeGaleri(this.activeId + 1)" lazy="loading">
                    </div>
                </div>
                <div class="flex w-full">
                    <h3 class="font-sans font-black text-8xl text-white mt-36 xl:block hidden">{{ year }}</h3>
                    <div class="w-full lg:flex hidden items-center justify-between ml-24 px-14">
                        <div class="flex cursor-pointer" @click="changeGaleri(0)">
                            <img class="w-full h-full object-cover"
                                :src="[this.activeId === 0 ? '/icon/column-active.svg' : '/icon/column.svg']">
                            <p class="font-sans font-bold tablet:text-2xl text-xl ml-4"
                                :class="[this.activeId === 0 ? 'text-white' : 'text-m_gray_4']">2023</p>
                        </div>
                        <div class="flex cursor-pointer" @click="changeGaleri(1)">
                            <img class="w-full h-full object-cover"
                                :src="[this.activeId === 1 ? '/icon/column-active.svg' : '/icon/column.svg']">
                            <p class="font-sans font-bold tablet:text-2xl text-xl ml-4"
                                :class="[this.activeId === 1 ? 'text-white' : 'text-m_gray_4']">2022</p>
                        </div>
                        <div class="flex cursor-pointer" @click="changeGaleri(2)">
                            <img class="w-full h-full object-cove" r
                                :src="[this.activeId === 2 ? '/icon/column-active.svg' : '/icon/column.svg']">
                            <p class="font-sans font-bold tablet:text-2xl text-xl ml-4"
                                :class="[this.activeId === 2 ? 'text-white' : 'text-m_gray_4']">2021</p>
                        </div>
                        <div class="flex cursor-pointer" @click="changeGaleri(3)">
                            <img class="w-full h-full object-cover"
                                :src="[this.activeId === 3 ? '/icon/column-active.svg' : '/icon/column.svg']">
                            <p class="font-sans font-bold tablet:text-2xl text-xl ml-4"
                                :class="[this.activeId === 3 ? 'text-white' : 'text-m_gray_4']">2020</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-537 sm:w-2/3 px-4 block absolute lg:bottom-20 -bottom-80 lg:right-96">
                    <h4 class="font-sans font-bold tablet:text-xl text-lg text-white mb-4">{{ hikayemiz[this.activeId].title }}
                    </h4>
                    <div class="w-full h-300">
                        <img class="w-full h-full object-cover" v-lazy="this.hikayemiz[this.activeId].img"
                            lazy="loading">
                    </div>
                </div>
            </div>
        </div>
        <div class="sm:container px-4 py-20 overflow-hidden">
            <h2 class="text-center font-sans font-bold lg:text-40 tablet:text-3xl text-2xl mb-20" v-scroll-reveal="{ origin: 'bottom', distance: '100px', duration: 1000 }">{{ $t('titles.grupDegerleri') }}</h2>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-14">
                <div class="block" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                    <div class="h-374 mb-12">
                        <img class="w-full h-full object-cover" v-lazy="`/img/img97.webp`" lazy="loading">
                    </div>
                    <img class="w-full" src="/icon/row-right.svg">
                </div>
                <div class="flex items-start flex-col justify-center space-y-7 pb-10" v-scroll-reveal="{ origin: 'right', distance: '100px', duration: 1000 }">
                    <img v-lazy="`/icon/safety.svg`" lazy="loading">
                    <h5 class="font-sans font-normal tablet:text-xl text-lg text-m_red">{{ $t('subtitles.emniyet') }}</h5>
                    <p class="font-inter font-normal tablet:text-2xl text-xl text-m_black_2">
                        {{ $t('descriptions.emniyet_desc') }}
                    </p>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-14">
                <div class="lg:hidden block" v-scroll-reveal="{ origin: 'right', distance: '100px', duration: 1000 }">
                    <div class="h-374 mb-12">
                        <img class="w-full h-full object-cover" v-lazy="`/img/img84.webp`" lazy="loading">
                    </div>
                    <img class="w-full" src="/icon/row-left.svg">
                </div>
                <div class="flex items-start flex-col justify-center space-y-7 pb-10" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                    <img v-lazy="`/icon/reliability.svg`" lazy="loading">
                    <h5 class="font-sans font-normal tablet:text-xl text-lg text-m_red">{{ $t('titles.guvenirlik') }}</h5>
                    <p class="font-inter font-normal tablet:text-2xl text-xl text-m_black_2">
                        {{ $t('descriptions.guvenirlik_desc') }}
                    </p>
                </div>
                <div class="lg:block hidden" v-scroll-reveal="{ origin: 'right', distance: '100px', duration: 1000 }">
                    <div class="h-374 mb-12">
                        <img class="w-full h-full object-cover" v-lazy="`/img/img84.webp`" lazy="loading">
                    </div>
                    <img class="w-full" src="/icon/row-left.svg">
                </div>
            </div>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-14">
                <div class="block" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                    <div class="h-374 mb-12">
                        <img class="w-full h-full object-cover" v-lazy="`/img/img4.webp`" lazy="loading">
                    </div>
                    <img class="w-full" src="/icon/row-right.svg">
                </div>
                <div class="flex items-start flex-col justify-center space-y-7 pb-10" v-scroll-reveal="{ origin: 'right', distance: '100px', duration: 1000 }">
                    <img v-lazy="`/icon/responsibility.svg`" lazy="loading">
                    <h5 class="font-sans font-normal tablet:text-xl text-lg text-m_red">{{ $t('titles.hesapVerebilirlik') }}</h5>
                    <p class="font-inter font-normal tablet:text-2xl text-xl text-m_black_2">
                        {{ $t('descriptions.hesapVerebilirlik_desc') }}
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import AnimatedCounter from "@/components/AnimatedCounter.vue"
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { RouterLink } from 'vue-router'

import 'swiper/css';
import 'swiper/css/navigation';

export default {
    name: "About",
    components: {
        RouterLink,
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
        AnimatedCounter
    },
    data() {
        return {
            temp: true,
            activeId: 0,
            sliderId: 0,
            count: 0,
            year: 2023,
            years: [2023, 2022, 2021, 2020],
            modules: [Navigation, EffectFade, Autoplay],
            images: ['/img/img44.webp', '/img/img45.webp', '/img/img46.webp', '/img/img47.webp', '/img/img48.webp'],
            sliderImgs: ['/img/img84.webp', '/img/img190.webp', '/img/img192.webp'],
            hikayemiz: [
                { img: '/img/img120.webp', title: 'Senagat Bank' },
                { img: '/img/img134.webp', title: 'Şeýh Zaid bin Sultan Al Nahaýýan adyndaky Döwletliler köşgi' },
                { img: '/img/img163.webp', title: 'Gökdepe etrabynyň Babarap obasynda orta mekdep' },
                { img: '/img/img155.webp', title: 'Sport desgalary, umumy ýaşaýyş jaýy we degişli desgalar' }
            ],
        }
    },
    methods: {
        changeGaleri(id) {
            if (id > 3) id = 0
            if (id < 0) id = 3
            this.activeId = id
            this.year = this.years[this.activeId]
        },
        increaseSliderId() {
            this.count++
            if (this.count >= 5) {
                if (this.temp) {
                    if (this.sliderId >= 2) this.sliderId = 0
                    else this.sliderId++
                }
                this.temp = !this.temp
            } else {
                if (this.sliderId >= 2) this.sliderId = 0
                else this.sliderId++
            }
        }
    }
}
</script>

<style>
.swiper-slide {
    transition: opacity 2s ease-in-out;
}

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