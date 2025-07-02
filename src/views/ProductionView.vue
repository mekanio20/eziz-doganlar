<template>
    <div class="w-full h-full">
        <Navbar link="productions" background="bg-custom-gradient-1" />
        <div class="sm:container px-4 mb-20">
            <div class="mt-32 flex items-center space-x-2">
                <router-link to="/" class="font-inter font-normal sm:text-lg text-base text-m_bg_gray_4">{{ $t('links.anasayfa')
                    }}</router-link>
                <span class="text-m_bg_gray_4">></span>
                <router-link to="/productions" class="font-inter font-normal  sm:text-lg text-base text-m_bg_gray_4">{{ $t('links.uretim')
                    }}</router-link>
                <span class="text-m_bg_gray_4">></span>
                <router-link to="/productions" class="font-inter font-normal  sm:text-lg text-base text-m_bg_gray_4">{{ $t('links.hepsi')
                    }}</router-link>
            </div>
            <h2 class="mt-12 font-sans font-bold sm:text-4xl text-3xl" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">{{ $t('links.uretim') }}</h2>
            <div class="w-full flex flex-col space-y-10 overflow-hidden">
                <div class="flex items-start lg:flex-row flex-col justify-between py-20 border-b-2">
                    <div class="w-full h-465 pb-10" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                        <img class="w-full h-full object-cover" v-lazy="`/img/alkim.jpeg`" lazy="loading">
                    </div>
                    <div class="w-full lg:pl-20" v-scroll-reveal="{ origin: 'right', distance: '100px', duration: 1000 }">
                        <h3 class="font-sans font-bold sm:text-3xl text-2xl">{{ $t('production.titles.kalite') }}</h3>
                        <p class="font-inter font-normal sm:text-xl text-lg py-14 text-m_black_2">
                            {{ $t('production.descriptions.kalite_desc') }}
                        </p>
                        <div class="grid grid-cols-2 gap-y-8">
                            <div class="flex flex-col">
                                <h5 class="font-inter font-medium text-sm text-m_gray_3">{{ $t('production.subtitles.boyut') }}</h5>
                                <p class="font-inter font-medium sm:text-lg text-base">20x10x5 cm</p>
                            </div>
                            <div class="flex flex-col">
                                <h5 class="font-inter font-medium text-sm text-m_gray_3">{{ $t('production.subtitles.basinc') }}</h5>
                                <p class="font-inter font-medium sm:text-lg text-base">3000 psi</p>
                            </div>
                            <div class="flex flex-col">
                                <h5 class="font-inter font-medium text-sm text-m_gray_3">{{ $t('production.subtitles.agirlik') }}</h5>
                                <p class="font-inter font-medium sm:text-lg text-base">2.5 kg</p>
                            </div>
                            <div class="flex flex-col">
                                <h5 class="font-inter font-medium text-sm text-m_gray_3">{{ $t('production.subtitles.su') }}</h5>
                                <p class="font-inter font-medium sm:text-lg text-base">%10</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-start lg:flex-row flex-col-reverse justify-between lg:py-20 pb-20">
                    <div class="w-full lg:pr-20" v-scroll-reveal="{ origin: 'left', distance: '100px', duration: 1000 }">
                        <h3 class="font-sans font-bold sm:text-3xl text-2xl">{{ $t('production.titles.kirec') }}</h3>
                        <p class="font-inter font-normal sm:text-xl text-lg py-14 text-m_black_2">
                            {{ $t('production.descriptions.kirec_desc') }}
                        </p>
                        <div class="grid grid-cols-2 gap-y-8">
                            <div class="flex flex-col">
                                <h5 class="font-inter font-medium text-sm text-m_gray_3">{{ $t('production.subtitles.boyut') }}</h5>
                                <p class="font-inter font-medium sm:text-lg text-base">20x10x5 cm</p>
                            </div>
                            <div class="flex flex-col">
                                <h5 class="font-inter font-medium text-sm text-m_gray_3">{{ $t('production.subtitles.basinc') }}</h5>
                                <p class="font-inter font-medium sm:text-lg text-base">3000 psi</p>
                            </div>
                            <div class="flex flex-col">
                                <h5 class="font-inter font-medium text-sm text-m_gray_3">{{ $t('production.subtitles.agirlik') }}</h5>
                                <p class="font-inter font-medium sm:text-lg text-base">2.5 kg</p>
                            </div>
                            <div class="flex flex-col">
                                <h5 class="font-inter font-medium text-sm text-m_gray_3">{{ $t('production.subtitles.su') }}</h5>
                                <p class="font-inter font-medium sm:text-lg text-base">%10</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-465 pb-10" v-scroll-reveal="{ origin: 'right', distance: '100px', duration: 1000 }">
                        <img class="w-full h-full object-cover" v-lazy="`/img/mebel.jpg`" lazy="loading">
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
export default {
    name: "Production",
    components: {
        RouterLink,
        Navbar,
        Footer
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