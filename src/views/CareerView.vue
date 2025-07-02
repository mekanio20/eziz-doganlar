<template>
    <div class="w-full h-full flex flex-col">
        <Navbar background="bg-custom-gradient-1" />
        <div class="sm:container px-4 flex-1">
            <div class="mt-32 flex items-center space-x-2">
                <router-link to="/" class="font-inter font-normal laptop:text-lg sm:text-base text-sm text-m_bg_gray_4">{{ $t('links.anasayfa')
                    }}</router-link>
                <span class="text-m_bg_gray_4">></span>
                <router-link to="/career" class="font-inter font-normal laptop:text-lg sm:text-base text-sm text-m_bg_gray_4">{{ $t('links.kariyer') }}</router-link>
            </div>
            <h1 class="font-sans my-10 font-bold laptop:text-4xl sm:text-3xl text-2xl">{{ $t('links.kariyer') }}</h1>
            <p class="sm:w-1/2 w-full font-inter font-normal laptop:text-xl text-lg text-m_black_2">
                {{ $t('descriptions.kariyer_desc') }}
            </p>
            <div class="w-full sm:my-20 my-10">
                <h2 class="text-center font-inter font-semibold laptop:text-3xl sm:text-2xl text-xl mb-16">{{ $t('titles.katilmak') }}</h2>
                <div class="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    <div class="bg-m_bg_gray_3 flex flex-col items-center p-10" v-for="(item, index) in ekip" :key="item.id">
                        <div class="block">
                            <img :src="this.ekip_imgs[index]">
                        </div>
                        <h4 class="font-inter font-semibold laptop:text-xl tablet:text-lg text-base text-m_blue_5 my-6 uppercase">{{ item.title }}</h4>
                        <p class="font-inter font-normal laptop:text-lg text-base text-center text-m_bg_gray_6">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
            <div class="w-full my-28">
                <h2 class="font-inter font-semibold laptop:text-3xl sm:text-2xl text-xl text-m_blue_5 pb-6 border-b-2">{{ $t('titles.pozisyon') }}</h2>
                <div class="w-full flex items-center justify-between border-b-2" v-for="item in pozisyonlar" :key="item.id">
                    <div class="w-fit">
                        <p class="font-inter font-medium laptop:text-base sm:text-sm text-xs text-m_blue_5 my-3">{{ item.type }}</p>
                        <h3 class="font-inter font-semibold laptop:text-2xl sm:text-xl text-lg uppercase my-3">{{ item.title }}</h3>
                        <div class="w-fit text-m_bg_gray_6 mb-3">
                            <img class="inline-block" src="/icon/pin.svg">
                            <span class="font-inter font-normal laptop:text-base sm:text-sm text-xs">Ashgabat, Turkmenistan</span>
                        </div>
                    </div>
                    <router-link :to="`/career/${item.id}`" class="bg-m_blue_5 py-3 px-4 laptop:text-lg sm:text-base text-xs text-nowrap text-white rounded-full">Daha fazla bilgi edin</router-link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import { RouterLink } from 'vue-router'
import { pozisyonlar, ekip } from "@/data/index.js"

export default {
    name: "Career",
    components: {
        RouterLink,
        Navbar,
        Footer,
    },
    created() {
        this.pozisyonlar = pozisyonlar[this.$i18n.locale]
        this.ekip = ekip[this.$i18n.locale]
        this.ekip_imgs = ekip.imgs
    },
    updated() {
        this.pozisyonlar = pozisyonlar[this.$i18n.locale]
        this.ekip = ekip[this.$i18n.locale]
    },
    data() {
        return {
            ekip: null,
            ekip_imgs: null,
            pozisyonlar: null
        }
    }
}
</script>