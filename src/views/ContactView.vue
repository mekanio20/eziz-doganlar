<template>
    <div class="w-full h-full">
        <Navbar link="contact" background="bg-custom-gradient-1" />
        <div class="sm:container px-4 laptop:mb-20 mb-6">
            <div class="mt-32 flex items-center space-x-2">
                <router-link to="/" class="font-inter font-normal sm:text-lg text-base text-m_bg_gray_4">{{ $t('links.anasayfa')
                    }}</router-link>
                <span class="text-m_bg_gray_4">></span>
                <router-link to="/contact" class="font-inter font-normal sm:text-lg text-base text-m_bg_gray_4">{{ $t('links.iletishim')
                    }}</router-link>
            </div>
            <div class="py-10 flex laptop:flex-row flex-col-reverse laptop:items-end items-center laptop:justify-start justify-start sm:mr-10">
                <div class="flex pt-10 items-start xl:w-1/2 sm:w-537 w-full flex-col laptop:mr-20">
                    <h2 class="mb-12 font-sans font-bold sm:text-4xl text-3xl laptop:text-start">{{ $t('links.iletishim') }}</h2>
                    <input class="p-4 bg-gray-50 w-full mb-5" type="text" :placeholder="$t('subtitles.isminiz')">
                    <input class="p-4 bg-gray-50 w-full mb-5" type="email" :placeholder="$t('subtitles.eposta')">
                    <textarea class="p-4 bg-gray-50 w-full mb-5" rows="8" :placeholder="$t('subtitles.mesaj')"></textarea>
                    <button class="w-full text-center rounded text-white p-4 sm:text-xl text-base bg-m_bg_blue_4 hover:bg-m_bg_blue_3">{{ $t('subtitles.gonder') }}</button>
                </div>
                <div class="laptop:w-1/2 sm:w-537 w-full">
                    <div class="w-full h-full relative z-0">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
        <div class="phone:container container-sm">
            <div class="my-10 py-10 flex sm:flex-row flex-col sm:items-center sm:space-y-0 space-y-10 items-start justify-between md:px-20 px-4 sm:space-x-10 bg-m_bg_gray_3">
                <div class="flex items-start justify-start">
                    <div class="laptop:w-8 laptop:h-8 w-5 h-5 lg:block hidden mr-3 mb-3">
                        <img class="w-full h-full object-cover" v-lazy="`/icon/email.svg`">
                    </div>
                    <div class="flex flex-col items-start">
                        <h4 class="font-inter font-semibold laptop:text-2xl phpne:text-xl sm:text-lg text-sm mb-4">{{ $t('subtitles.eposta') }}</h4>
                        <a class="font-inter font-normal laptop:text-base sm:text-sm text-xs mb-2 text-m_bg_gray_4" href="mailto:ajayypgurlushyk.info@gmail.com">ajayypgurlushyk.info@gmail.com</a>
                        <a class="font-inter font-normal laptop:text-base sm:text-sm text-xs text-m_bg_gray_4" href="mailto:ajayypgurlushyk.info@gmail.com">ajayypgurlushyk.info@gmail.com</a>
                    </div>
                </div>
                <div class="flex items-start justify-start">
                    <div class="laptop:w-8 laptop:h-8 w-5 h-5 lg:block hidden mr-3 mb-3">
                        <img class="w-full h-full object-cover" v-lazy="`/icon/phone.svg`">
                    </div>
                    <div class="flex flex-col items-start">
                        <h4 class="font-inter font-semibold laptop:text-2xl phpne:text-xl sm:text-lg text-sm mb-4">{{ $t('titles.telefon') }}</h4>
                        <a href="tel:12754051" class="font-inter font-normal laptop:text-base sm:text-sm text-xs mb-2 text-m_bg_gray_4">12754051</a>
                        <a href="tel:12754055"class="font-inter font-normal laptop:text-base sm:text-sm text-xs text-m_bg_gray_4">12754055</a>
                    </div>
                </div>
                <div class="flex items-start justify-start">
                    <div class="laptop:w-8 laptop:h-8 w-5 h-5 lg:block hidden mr-3 mb-3">
                        <img class="w-full h-full object-cover" v-lazy="`/icon/location.svg`">
                    </div>
                    <div class="flex flex-col items-start">
                        <h4 class="font-inter font-semibold laptop:text-2xl phpne:text-xl sm:text-lg text-sm mb-4">{{ $t('titles.ofis') }}</h4>
                        <p class="font-inter font-normal laptop:text-base sm:text-sm text-xs mb-2 text-m_bg_gray_4">G, Kuliýew köçesi 36</p>
                        <p class="font-inter font-normal laptop:text-base sm:text-sm text-xs text-m_bg_gray_4">Aşgabat, Türkmenistan</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Map from "@/components/Map.vue"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import { RouterLink } from 'vue-router'

export default {
    name: "Contact",
    components: {
        RouterLink,
        Navbar,
        Footer,
        Map,
    },
}
</script>