<template>
    <div class="w-full h-full">
        <Navbar link="works" background="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900" />
        <div class="sm:container px-4 mt-32">
            <div class="flex items-center space-x-2">
                <router-link to="/" class="font-inter font-normal phone:text-lg text-sm text-m_bg_gray_4">
                    {{ $t('links.home') }}
                </router-link>
                <span class="text-m_bg_gray_4 phone:text-lg text-sm">></span>
                <router-link to="/works" class="font-inter font-normal phone:text-lg text-sm text-m_bg_gray_4">
                    {{ $t('links.works') }}
                </router-link>
            </div>
            <div class="flex md:flex-row flex-col items-center md:justify-between justify-center">
                <h2 class="phone:my-12 my-6 font-manrope font-medium laptop:text-5xl text-4xl">{{ $t('links.works') }}
                </h2>
                <div class="flex items-center justify-center space-x-2">
                    <div class="flex sm:flex-row flex-col gap-4">
                        <!-- Location dropdown -->
                        <div class="relative font-manrope select-none">
                            <div @click="toggleDropdown('location')"
                                class="cursor-pointer border border-gray-300 rounded-full px-4 py-2.5 text-sm text-[#0C1A30] flex items-center justify-between w-48">
                                <span>{{ selectedLocation || 'Ýerleşýän ýeri' }}</span>
                                <svg class="w-4 h-4 text-gray-500 transform transition-transform duration-200"
                                    :class="{ 'rotate-180': dropdowns.location }" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div v-if="dropdowns.location"
                                class="absolute z-10 bg-white mt-2 w-48 rounded-md shadow-lg border border-gray-200">
                                <div v-for="(location, index) in locations" :key="index"
                                    @click="selectOption('location', location)"
                                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-[#0C1A30]">
                                    {{ location }}
                                </div>
                            </div>
                        </div>
                        <!-- Category dropdown -->
                        <div class="relative font-manrope select-none">
                            <div @click="toggleDropdown('category')"
                                class="cursor-pointer border border-gray-300 rounded-full px-4 py-2.5 text-sm text-[#0C1A30] flex items-center justify-between w-48">
                                <span>{{ selectedCategory || 'Ähli kategoriýalar' }}</span>
                                <svg class="w-4 h-4 text-gray-500 transform transition-transform duration-200"
                                    :class="{ 'rotate-180': dropdowns.category }" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div v-if="dropdowns.category"
                                class="absolute z-10 bg-white mt-2 w-48 rounded-md shadow-lg border border-gray-200">
                                <div v-for="(category, index) in categories" :key="index"
                                    @click="selectOption('category', category)"
                                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-[#0C1A30]">
                                    {{ category }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full mb-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 laptop:gap-x-10 gap-x-5">
                <div v-for="(item, index) in _projects" :key="index">
                    <router-link :to="`/works/${item.id}`"
                        class="relative group flex items-start justify-start flex-col my-4"
                        v-scroll-reveal="{ origin: 'bottom', distance: '100px', duration: 1000 }">
                        <!-- Image -->
                        <div class="w-full h-full relative overflow-hidden rounded-lg">
                            <img class="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
                                :src="_imgs[index]" loading="lazy" />
                            <!-- Hover Overlay -->
                            <div
                                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div class="flex flex-col items-center text-center space-y-5 w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <h3 class="font-manrope font-normal text-sm text-white uppercase">
                                        {{ item.subtitle }}
                                    </h3>
                                    <h2 class="font-manrope font-normal text-xl text-white uppercase">
                                        {{ item.title }}
                                    </h2>
                                </div>
                                <div class="flex items-center space-x-2 absolute bottom-5 left-1/2 transform -translate-x-1/2 hover:cursor-pointer hover:bg-slate-400/40 duration-300 rounded-full px-4 py-1">
                                    <p class="font-manrope font-normal text-sm text-white">{{ $t('common.readMore') }}</p>
                                    <svg width="35" height="14" viewBox="0 0 35 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.4736 2.89471L31.5263 6.94735L27.4736 11" stroke="white"
                                            stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1 7L31 7" stroke="white" stroke-width="1.2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
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
import { projects } from '@/data/index.js'

export default {
    name: "Project",
    components: {
        RouterLink,
        Navbar,
        Footer,
    },
    data() {
        return {
            _imgs: projects.imgs,
            _projects: projects[this.$i18n.locale],
            category: null,
            searchVal: null,
            selectedLocation: '',
            selectedCategory: '',
            dropdowns: {
                location: false,
                category: false
            },
            locations: ['Aşgabat', 'Balkan', 'Mary', 'Lebap', 'Daşoguz', 'Ahal'],
            categories: ['Tehnika', 'Emlak', 'Iş', 'Ulaglar', 'Hyzmat', 'Bezeg']
        }
    },
    methods: {
        toggleDropdown(type) {
            this.dropdowns[type] = !this.dropdowns[type]
            Object.keys(this.dropdowns).forEach(key => {
                if (key !== type) this.dropdowns[key] = false
            })
        },
        selectOption(type, value) {
            if (type === 'location') this.selectedLocation = value
            if (type === 'category') this.selectedCategory = value
            this.dropdowns[type] = false
        },
        search(param) {
            this.searchVal = param
            const regex = new RegExp(this.searchVal, 'i')
            this._projects = projects[this.$i18n.locale].filter((item) => regex.test(item.title))
        },
    },
    watch: {
        searchVal(newQuery) {
            this.search(newQuery)
        },
        '$i18n.locale': {
            immediate: true,
            handler() {
                this._projects = projects[this.$i18n.locale]
            }
        }
    }
}
</script>