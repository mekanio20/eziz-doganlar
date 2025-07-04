<template>
  <div :class="['fixed w-full top-0 z-50 mx-auto text-white select-none opacity-90', isScrolled ? 'bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900' : background]">
    <nav class="sm:container px-4 relative">
      <div class="flex items-center flex-row py-6 justify-between">
        <router-link to="/" class="flex items-center justify-center w-56 cursor-pointer">
          <img class="w-full h-full object-cover" src="/svgs/logo.svg">
        </router-link>
        <div
          class="laptop:flex items-center hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul class="flex items-center justify-around">
            <li v-for="item in links" :key="item.id" class="px-2 xl:px-4">
              <router-link :to="item.link"
                class="text-base font-manrope hover:font-bold duration-100 cursor-pointer pr-4"
                :class="[link === item.link_name ? 'font-bold' : 'font-normal']">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="laptop:flex items-center space-x-2 hidden">
          <!-- LANGS -->
          <div class="flex items-center xl:space-x-10">
            <div class="flex items-center space-x-3 cursor-pointer" @click="dropdown()">
              <svg class="hidden xl:block" width="18" height="18" viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 9C1 13.4184 4.5816 17 9 17C13.4184 17 17 13.4184 17 9C17 4.5816 13.4184 1 9 1C4.5816 1 1 4.5816 1 9Z"
                  stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M9.79991 1.04004C9.79991 1.04004 12.1999 4.20004 12.1999 9.00004C12.1999 13.8 9.79991 16.96 9.79991 16.96M8.19991 16.96C8.19991 16.96 5.79991 13.8 5.79991 9.00004C5.79991 4.20004 8.19991 1.04004 8.19991 1.04004M1.50391 11.8H16.4959M1.50391 6.20004H16.4959"
                  stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="text-lg font-manrope">{{ locale }}</span>
              <div class="relative inline-block">
                <div class="cursor-pointer py-2 pr-2">
                  <svg :class="{ 'rotate-180': isRotated, 'transition-transform duration-200': true }" width="12"
                    height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
                <div v-if="isDropdown"
                  class="absolute bg-white h-fit top-8 right-4 flex flex-col rounded-md overflow-hidden">
                  <span v-for="(item, index) in langs" :key="index" @click="updateLang(item)"
                    v-show="item !== this.locale"
                    class="text-black py-2 px-4 cursor-pointer hover:bg-gray-100 duration-200">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- CONTACT -->
          <Button :name="$t('links.contact')" route="/contact" px="px-3" />
        </div>
        <div @click="openBurger" class="cursor-pointer laptop:hidden">
          <div class="w-10 flex flex-col justify-between space-y-2">
            <div class="h-0.5 bg-white duration-500"
              :class="[isBurger ? 'w-6 transform translate-y-[10px] -rotate-45' : 'w-6']"></div>
            <div class="w-3 h-0.5 bg-white duration-500" :class="[isBurger ? 'opacity-0' : '']"></div>
            <div class="h-0.5 bg-white duration-500"
              :class="[isBurger ? 'w-6 transform translate-y-[-10px] rotate-45' : 'w-4']"></div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- Mobile -->
  <div
    class="select-none w-full fixed z-20 top-0 !overflow-hidden duration-200 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900"
    :class="[isBurger ? 'h-full' : 'h-0']">
    <div class="mt-28 px-4">
      <div class="w-full flex flex-col items-start space-y-6 px-1 mt-20">
        <div v-for="item in links" :key="item.id" class="w-full px-2 xl:px-4 cursor-pointer">
          <router-link :to="item.link" class="text-base font-manrope hover:font-bold duration-200 pr-4 text-white"
            :class="[link === item.link_name ? 'font-bold' : 'font-normal']">
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <div class="w-full flex items-center justify-between px-1 mt-10 cursor-pointer"
        @click="this.isLang = !this.isLang">
        <div class="flex items-center space-x-3">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 9C1 13.4184 4.5816 17 9 17C13.4184 17 17 13.4184 17 9C17 4.5816 13.4184 1 9 1C4.5816 1 1 4.5816 1 9Z"
              stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M9.79991 1.04004C9.79991 1.04004 12.1999 4.20004 12.1999 9.00004C12.1999 13.8 9.79991 16.96 9.79991 16.96M8.19991 16.96C8.19991 16.96 5.79991 13.8 5.79991 9.00004C5.79991 4.20004 8.19991 1.04004 8.19991 1.04004M1.50391 11.8H16.4959M1.50391 6.20004H16.4959"
              stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="text-lg text-white">{{ locale }}</span>
        </div>
        <div class="block pr-2">
          <svg :class="{ '-rotate-90': !isLang, 'transition-transform duration-200': true }" width="13" height="13"
            viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div v-if="isLang" class="mt-4 w-full h-fit p-2 bg-m_blue_6 flex flex-col">
        <span v-for="(item, index) in langs" :key="index" @click="updateLang(item)" v-show="item !== this.locale"
          class="text-white p-4 cursor-pointer hover:bg-white/50 duration-300">
          {{ item }}
        </span>
      </div>
      <div class="w-full flex items-center justify-center space-x-6 mt-20">
        <a href="https://www.instagram.com/ajayyp__gurlushyk?igsh=YzU2c3FscGFja2g%3D&utm_source=qr" target="_blank"
          class="w-8 border rounded-full p-2">
          <img class="w-full h-full cursor-pointer" src="/svgs/instagram.svg" alt="instagram">
        </a>
        <a href="https://www.facebook.com/profile.php?id=61564710432722" target="_blank"
          class="w-8 border rounded-full p-2">
          <img class="w-full h-full cursor-pointer" src="/svgs/facebook.svg" alt="facebook">
        </a>
        <a href="https://www.youtube.com/channel/UCNelgrppCVytiD6rBeNNJOQ" target="_blank"
          class="w-8 border rounded-full p-2">
          <img class="w-full h-full cursor-pointer" src="/svgs/youtube.svg" alt="youtube">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './base/button.vue';
import { navs } from '@/data/index.js'
export default {
  name: "Navbar",
  data() {
    return {
      isDropdown: false,
      isRotated: false,
      isScrolled: false,
      isBurger: false,
      invalid: false,
      locale: localStorage.getItem('lang') || 'TM',
      langs: ['TM', 'RU', 'EN'],
      isLang: false,
      isService: false,
      links: navs[this.$i18n.locale]
    }
  },
  props: {
    background: {
      type: String,
      default: 'transparent'
    }
  },
  components: {
    Button
  },
  methods: {
    dropdown() {
      this.isDropdown = !this.isDropdown
      this.isRotated = !this.isRotated
    },
    openBurger() {
      this.isBurger = !this.isBurger
      this.isScrolled = true
      this.invalid = !this.invalid
    },
    updateLang(lang) {
      localStorage.setItem('lang', lang)
      this.locale = lang
      this.isLang = !this.isLang
      this.$i18n.locale = lang
    },
    handleClickOutside(event) {
      if (event.clientY > 100) {
        this.isDropdown = false
        this.isRotated = false
      }
    },
    handleScroll() {
      if (!this.invalid) {
        this.isScrolled = window.scrollY > 100
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler() {
        this.links = navs[this.$i18n.locale]
      }
    }
  }
}
</script>

<style scoped>
.rotated {
  transform: rotate(50deg);
  transition: transform 0.5s;
}
</style>