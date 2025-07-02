<template>
    <div class="w-full h-full">
        <Navbar link="projects" background="bg-custom-gradient-1" />
        <div class="sm:container px-4 mt-32">
            <div class="flex items-center space-x-2">
                <router-link to="/" class="font-inter font-normal phone:text-lg text-sm text-m_bg_gray_4">{{ $t('links.anasayfa')
                    }}</router-link>
                <span class="text-m_bg_gray_4 phone:text-lg text-sm">></span>
                <router-link to="/projects" class="font-inter font-normal phone:text-lg text-sm text-m_bg_gray_4">{{
                    $t('links.projeler') }}</router-link>
            </div>
            <h2 class="phone:my-12 my-6 font-sans font-bold laptop:text-4xl text-3xl">{{ $t('links.projeler') }}</h2>
            <div class="w-full py-10 flex items-center justify-start space-x-5 border-t-2 overflow-auto no-scrollbar">
                <div class="cursor-pointer py-3 px-10 rounded-full" @click="changeCategory(0)"
                    :class="[activeId === 0 ? 'bg-m_bg_blue_2 text-white' : 'bg-m_bg_gray_5 text-black']">{{
                    $t('links.hepsi') }}</div>
                <div v-for="item in category" :key="item.id" @click="changeCategory(item.id)"
                    class="text-nowrap cursor-pointer py-3 px-10 laptop:text-lg sm:text-base text-sm rounded-full hover:bg-m_bg_blue_2 hover:text-white duration-200"
                    :class="[activeId === item.id ? 'bg-m_bg_blue_2 text-white' : 'bg-m_bg_gray_5 text-black']">
                    {{ item.name }}
                </div>
            </div>
            <div class="w-full mb-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 laptop:gap-x-10 gap-x-5">
                <div v-for="item in projeler" :key="item.id">
                    <router-link :to="`/projects/${item.id}#top`"
                        class="flex items-start justify-start flex-col h-406 my-4" v-scroll-reveal="{ origin: 'bottom', distance: '100px', duration: 1000 }">
                        <div class="w-full h-72">
                            <img class="w-full h-full object-cover" v-lazy="item.img" lazy="loading">
                        </div>
                        <p class="font-inter font-medium phone:text-sm text-xs text-m_bg_gray_6 my-2">{{ item.detay[0].desc }}</p>
                        <div class="w-full flex items-start justify-between">
                            <h4 class="basis-10/12 font-inter font-medium phone:text-lg text-sm mb-2">{{ item.title }}</h4>
                            <svg class="basis-1/12 fill-black mt-1" width="16" height="14" viewBox="0 0 19 18"
                                fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.604 2.09476L17.6748 1.09727L18.6723 1.16806L18.6015 2.16555L17.604 2.09476ZM1.68377 17.2289C1.26658 17.5908 0.635001 17.546 0.273102 17.1288C-0.0887974 16.7116 -0.0439744 16.08 0.373215 15.7181L1.68377 17.2289ZM5.29311 0.218548L17.6748 1.09727L17.5332 3.09225L5.15153 2.21353L5.29311 0.218548ZM18.6015 2.16555L17.7228 14.5473L15.7278 14.4057L16.6065 2.02397L18.6015 2.16555ZM18.2593 2.85015L1.68377 17.2289L0.373215 15.7181L16.9488 1.33937L18.2593 2.85015Z" />
                            </svg>
                        </div>
                        <p class="font-inter font-normal phone:text-sm text-xs">{{ item.location }}</p>
                    </router-link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import { RouterLink } from "vue-router"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import VueEasyLightbox from "vue-easy-lightbox"
import { categories, projects } from '@/data/index.js'

export default {
    name: "Project",
    components: {
        RouterLink,
        Navbar,
        Footer,
        VueEasyLightbox
    },
    data() {
        return {
            activeId: 0,
            projeler: null,
            category: null,
            searchVal: null,
        }
    },
    created() {
        console.log('created at ...');
        this.category = categories[this.$i18n.locale]
        if (this.$route.query.search) { this.searchVal = this.$route.query.search }
        else { this.projeler = projects[this.$i18n.locale] }
    },
    updated() {
        console.log('updated at ...');
        this.category = categories[this.$i18n.locale]
        this.searchVal = this.$route.query.search
    },
    methods: {
        search(param) {
            console.log('search ...');
            this.searchVal = param
            const regex = new RegExp(this.searchVal, 'i')
            this.projeler =  projects[this.$i18n.locale].filter((item) => regex.test(item.title))
        },
        changeCategory(id) {
            console.log('change category ...');
            this.activeId = id
            if (id === 0) {
                this.projeler =  projects[this.$i18n.locale]
                return this.projeler
            }
            console.log(id);
            let _projeler =  projects[this.$i18n.locale].filter((item) => item.catId === id)
            this.projeler = _projeler
            return this.projeler
        }
    },
    watch: {
        searchVal(newQuery) {
            this.search(newQuery)
        },
        '$i18n.locale': {
            immediate: true,
            handler() {
                this.projeler = projects[this.$i18n.locale]
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