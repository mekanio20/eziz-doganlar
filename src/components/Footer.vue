<template>
  <footer class="w-full pt-5 text-white bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 px-4 sm:px-0">
    <div class="container-sm sm:container flex flex-col">
      <div class="w-full flex laptop:flex-row flex-col laptop:items-start justify-between my-16">
        <div class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-10">
            <p class="font-manrope text-xl text-white w-[80%]">
              {{ $t('footer.title1') }}
            </p>
            <div class="flex items-center space-x-5 pb-10">
              <a href="#" target="_blank">
                <div
                  class="phone:w-9 phone:h-9 w-7 h-7 p-1 rounded-full bg-transparent border flex items-center justify-center cursor-pointer">
                  <img class="object-cover" v-lazy="`/svgs/facebook.svg`">
                </div>
              </a>
              <a href="#" target="_blank">
                <div
                  class="phone:w-9 phone:h-9 w-7 h-7 p-1 rounded-full bg-transparent border flex items-center justify-center cursor-pointer">
                  <img class="object-cover" v-lazy="`/svgs/instagram.svg`">
                </div>
              </a>
              <a href="#" target="_blank">
                <div
                  class="phone:w-9 phone:h-9 w-7 h-7 p-1 rounded-full bg-transparent border flex items-center justify-center cursor-pointer">
                  <img class="object-cover" v-lazy="`/svgs/youtube.svg`">
                </div>
              </a>

            </div>
          </div>
        </div>
        <div
          class="laptop:flex laptop:items-start laptop:justify-end grid phone:grid-cols-3 grid-cols-2 gap-y-14 sm:gap-x-16 gap-x-10">
          <div class="flex flex-col space-y-5">
            <h4 class="font-manrope text-base font-medium text-white/60">
              {{ $t('footer.title2') }}
            </h4>
            <router-link to="/" class="text-white font-manrope font-[300] text-base">{{
                $t('links.home') }}</router-link>
            <router-link to="/about" class="text-white font-manrope font-[300] text-base">{{
                $t('links.about') }}</router-link>
            <router-link to="/works" class="text-white font-manrope font-[300] text-base">{{
                $t('links.works') }}</router-link>
            <router-link to="/contact" class="text-white font-manrope font-[300] text-base">{{
                $t('links.contact') }}</router-link>
          </div>
          <div class="flex flex-col space-y-5">
            <h4 class="font-manrope text-base font-medium text-white/60">
              {{ $t('footer.title3') }}
            </h4>
            <p class="font-manrope text-base font-[300]">
              9 Garagum Street
              Bagtyyarlyk district Ashgabat
              745202, Turkmenistan
            </p>
            <p class="font-manrope text-base font-[300]">
              (9:00 - 18:00)
            </p>
          </div>
          <div class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <h4 class="font-manrope text-base font-medium text-white/60">
                {{ $t('footer.title4') }}
              </h4>
              <a href="mailto:info@ezizdoganlar.com" class="font-manrope text-white font-[300] text-base">
                info@ezizdoganlar.com
              </a>
            </div>
            <div class="flex flex-col space-y-5">
              <h4 class="font-manrope text-base font-medium text-white/60">
                {{ $t('footer.title5') }}
              </h4>
              <a href="tel:+99312753577" class="font-manrope text-white font-[300] text-base">
                +993 12 75 35 77
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex sm:flex-row flex-col sm:space-y-0 space-y-2 items-center justify-between pb-6">
        <p class="font-inter sm:text-sm text-xs text-white/60">© 2025 Eziz Doganlar. {{ $t('footer.title6') }}</p>
        <p class="font-inter sm:text-sm text-xs text-white/60">Made by ParlakNesil</p>
      </div>
      <div
        class="flex sm:flex-row flex-col sm:space-y-0 space-y-6 sm:items-center items-start justify-between py-5 border-t border-opacity-20 border-blue-200">
        <div class="w-[124px] h-[74px]">
          <img class="w-full h-full object-cover" src="/svgs/doganlar.svg">
        </div>
        <h1 class="font-manrope font-medium md:text-7xl text-5xl text-white">
          EZIZ DOGANLAR
        </h1>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  name: "Footer",
  components: {
    RouterLink
  }
}
</script>