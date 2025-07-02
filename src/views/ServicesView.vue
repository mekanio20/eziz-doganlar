<template>
    <div class="w-full h-full flex flex-col">
        <Navbar link="services" background="bg-custom-gradient-1" />
        <div class="sm:container px-4 flex-1">
            <div class="mt-32 flex items-center space-x-2">
                <router-link to="/" class="font-inter font-normal phone:text-lg text-sm text-m_bg_gray_4">{{
                    $t('links.anasayfa')
                }}</router-link>
                <span class="text-m_bg_gray_4 sm:block hidden">></span>
                <router-link to="#"
                    class="font-inter font-normal phone:text-lg text-sm text-m_bg_gray_4 sm:block hidden">{{ $t('links.hizmetler') }}</router-link>
                <span class="text-m_bg_gray_4">></span>
                <router-link :to="`/services/${name}`"
                    class="font-inter font-normal phone:text-lg text-sm text-m_bg_gray_4">{{
                    category }}</router-link>
            </div>
            <div class="mt-16 flex items-start">
                <div class="flex-2 w-365 xl:flex hidden flex-col sticky top-32 left-0 mb-20">
                    <router-link v-for="(item, index) in categories" :key="index" :to="`/services/${item.link}`"
                        class="cursor-pointer mb-6 font-inter font-medium text-xl"
                        :class="[this.name == item.link ? 'text-black' : 'text-m_gray_5']"
                        @click="changeCategory(index)">
                        {{ item.name }}
                    </router-link>
                </div>
                <div class="flex-1 w-full sm:ml-10">
                    <div v-if="name === 'security'">
                        <h1 class="font-sans font-bold phone:phone:text-4xl text-3xl text-m_black_3 mb-10">{{ category
                            }}</h1>
                        <div class="w-full mb-10">
                            <img class="w-full h-full object-cover" src="/img/img83.webp">
                        </div>
                        <h2 class="ont-sans font-bold phone:text-3xl text-2xl text-m_black_3">{{ $t('services.security.title') }}</h2>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.security.desc1')"></p>
                            <ul class="list-disc pl-5" v-html="$t('services.security.desc2')"></ul>
                        </div>
                        <div class="w-full mb-10">
                            <img class="w-full h-full object-contain" src="/img/img45.webp">
                        </div>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.security.desc3')"></p>
                        </div>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.security.desc4')">
                            </p>
                        </div>
                    </div>
                    <div v-if="name === 'environment'">
                        <h1 class="font-sans font-bold phone:text-4xl text-3xl text-m_black_3 mb-10">{{ category }}</h1>
                        <div class="w-full mb-10">
                            <img class="w-full h-full object-cover" src="/img/img93.webp">
                        </div>
                        <h2 class="ont-sans font-bold text-3xl text-m_black_3">{{ $t('services.environment.title') }}</h2>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.environment.desc1')"></p>
                        </div>
                        <div class="w-full mb-10">
                            <img class="w-full h-full object-contain" src="/img/img97.webp">
                        </div>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.environment.desc2')"></p>
                        </div>
                    </div>
                    <div v-if="name === 'variation'">
                        <h1 class="font-sans font-bold phone:text-4xl text-3xl text-m_black_3 mb-10">{{ category }}</h1>
                        <div class="w-full mb-10">
                            <img class="w-full h-full object-cover" src="/img/img102.webp">
                        </div>
                        <h2 class="ont-sans font-bold text-3xl text-m_black_3">{{ $t('services.variation.title') }}</h2>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.variation.desc1')"></p>
                        </div>
                        <div class="w-full mb-10">
                            <img class="w-full h-full object-contain" src="/img/img96.webp">
                        </div>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.variation.desc2')"></p>
                        </div>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.variation.desc3')"></p>
                        </div>
                    </div>
                    <!-- <div v-if="name === 'reports'">
                        <h1 class="font-sans font-bold phone:text-4xl text-3xl text-m_black_3 mb-10">Raporlar</h1>
                        <div class="w-full">
                            <div class="p-10 border border-m_gray_6 rounded-2xl flex items-center justify-between mb-6">
                                <div class="flex items-center">
                                    <img class="mr-4" src="/icon/file.svg">
                                    <p class="font-inter font-normal phone:text-lg text-base text-m_black_2">Sustainability Report 2021
                                        – We Are Transforming for a Better Future</p>
                                </div>
                                <router-link to="/services/reports/#"
                                    class="ml-10 py-3 px-7 rounded-full font-inter font-medium phone:text-base text-sm text-white bg-m_bg_blue_5 text-nowrap flex space-x-1"><span class="sm:block hidden">7MB</span>
                                    <span>Indir</span></router-link>
                            </div>
                            <div class="p-10 border border-m_gray_6 rounded-2xl flex items-center justify-between mb-6">
                                <div class="flex items-center">
                                    <img class="mr-4" src="/icon/file.svg">
                                    <p class="font-inter font-normal phone:text-lg text-base text-m_black_2">Sustainability Report 2021
                                        – We Are Transforming for a Better Future</p>
                                </div>
                                <router-link to="/services/reports/#"
                                    class="ml-10 py-3 px-7 rounded-full font-inter font-medium phone:text-base text-sm text-white bg-m_bg_blue_5 text-nowrap flex space-x-1"><span class="sm:block hidden">7MB</span>
                                    <span>Indir</span></router-link>
                            </div>
                            <div class="p-10 border border-m_gray_6 rounded-2xl flex items-center justify-between mb-6">
                                <div class="flex items-center">
                                    <img class="mr-4" src="/icon/file.svg">
                                    <p class="font-inter font-normal phone:text-lg text-base text-m_black_2">Sustainability Report 2021
                                        – We Are Transforming for a Better Future</p>
                                </div>
                                <router-link to="/services/reports/#"
                                    class="ml-10 py-3 px-7 rounded-full font-inter font-medium phone:text-base text-sm text-white bg-m_bg_blue_5 text-nowrap flex space-x-1"><span class="sm:block hidden">7MB</span>
                                    <span>Indir</span></router-link>
                            </div>
                            <div class="p-10 border border-m_gray_6 rounded-2xl flex items-center justify-between mb-6">
                                <div class="flex items-center">
                                    <img class="mr-4" src="/icon/file.svg">
                                    <p class="font-inter font-normal phone:text-lg text-base text-m_black_2">Sustainability Report 2021
                                        – We Are Transforming for a Better Future</p>
                                </div>
                                <router-link to="/services/reports/#"
                                    class="ml-10 py-3 px-7 rounded-full font-inter font-medium phone:text-base text-sm text-white bg-m_bg_blue_5 text-nowrap flex space-x-1"><span class="sm:block hidden">7MB</span>
                                    <span>Indir</span></router-link>
                            </div>
                            <div class="p-10 border border-m_gray_6 rounded-2xl flex items-center justify-between mb-6">
                                <div class="flex items-center">
                                    <img class="mr-4" src="/icon/file.svg">
                                    <p class="font-inter font-normal phone:text-lg text-base text-m_black_2">Sustainability Report 2021
                                        – We Are Transforming for a Better Future</p>
                                </div>
                                <router-link to="/services/reports/#"
                                    class="ml-10 py-3 px-7 rounded-full font-inter font-medium phone:text-base text-sm text-white bg-m_bg_blue_5 text-nowrap flex space-x-1"><span class="sm:block hidden">7MB</span>
                                    <span>Indir</span></router-link>
                            </div>
                        </div>
                    </div> -->
                    <div v-if="name === 'partners'">
                        <h1 class="font-sans font-bold phone:text-4xl text-3xl text-m_black_3 mb-10">{{ category }}</h1>
                        <div class="w-full mb-10">
                            <img class="w-full h-full object-cover" src="/img/img101.webp">
                        </div>
                        <h2 class="ont-sans font-bold text-3xl text-m_black_3">{{ $t('services.partners.title') }}</h2>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.partners.desc1')"></p>
                        </div>
                        <div class="w-full mb-10">
                            <img class="w-full h-full object-contain" src="/img/img99.webp">
                        </div>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.partners.desc2')"></p>
                        </div>
                        <div class="w-full my-10">
                            <p class="font-inter font-normal phone:text-lg text-base text-m_black_2" v-html="$t('services.partners.desc3')"></p>
                        </div>
                    </div>
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
import { services } from "@/data/index.js"

export default {
    name: "Services",
    components: {
        RouterLink,
        Navbar,
        Footer,
    },
    data() {
        return {
            category: null,
            name: 'security',
            categories: []
        }
    },
    created() {
        this.categories = services[this.$i18n.locale]
    },
    methods: {
        changeCategory(index) {
            let cat = services[this.$i18n.locale].find((_, indx) => index === indx)
            this.name = cat.link
            this.category = cat.name
        }
    },
    watch: {
        '$route.params.name': {
            immediate: true,
            handler(newName) {
                this.name = newName
                this.category = services[this.$i18n.locale].find((item) => item.link === this.name).name
            }
        },
        '$i18n.locale': {
            immediate: true,
            handler() {
                this.categories = services[this.$i18n.locale]
                this.category = this.categories.find((item) => item.link === this.$route.params.name).name
            }
        }
    },
}
</script>