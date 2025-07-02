<template>
  <footer class="w-full pt-5 text-white bg-custom-gradient-1 px-4 sm:px-0">
    <div class="container-sm sm:container flex flex-col">
      <div class="w-full flex laptop:flex-row flex-col laptop:items-start justify-between my-16">
        <div class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-20">
            <p class="font-manrope text-xl text-white w-[80%]">
              Innowasion Çözgütler Bilen Berk Gurluşyk — Geljegi Bilelikde Gurýarys.
            </p>
            <div class="flex items-center space-x-5">
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
          class="laptop:flex laptop:items-start laptop:justify-end grid phone:grid-cols-3 grid-cols-2 gap-y-14 gap-x-32">
          <div class="flex flex-col space-y-5">
            <h4 class="font-manrope text-base font-medium text-white/60">Nawigasiýa</h4>
            <router-link to="/" class="text-white font-manrope font-[300] text-base">{{
                    $t('links.home') }}</router-link>
            <router-link to="/about" class="text-white font-manrope font-[300] text-base">{{
                    $t('links.about') }}</router-link>
            <router-link to="/works" class="text-white font-manrope font-[300] text-base">{{
                    $t('links.works') }}</router-link>
            <router-link to="/services" class="text-white font-manrope font-[300] text-base">{{
                    $t('links.services') }}</router-link>
            <router-link to="/contact" class="text-white font-manrope font-[300] text-base">{{
                    $t('links.contact') }}</router-link>
          </div>
          <div class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <h4 class="font-manrope text-base font-medium text-white/60">Ýazmak üçin</h4>
              <a href="mailto:info@ezizdoganlar.com" class="font-manrope text-white font-[300] text-base">
                info@ezizdoganlar.com
              </a>
            </div>
            <div class="flex flex-col space-y-5">
              <h4 class="font-manrope text-base font-medium text-white/60">Jaň etmek</h4>
              <a href="tel:+99312753577" class="font-manrope text-white font-[300] text-base">
                +993 12 75 35 77
              </a>
            </div>
          </div>
          <div class="flex flex-col space-y-5">
            <router-link to="/news" class="font-manrope text-base font-medium text-white/60">Salgymyz</router-link>
            <p class="font-manrope text-base font-[300]">
              9 Garagum Street
              Bagtyyarlyk district Ashgabat
              745202, Turkmenistan
            </p>
            <p class="font-manrope text-base font-[300]">
              (9:00 - 18:00)
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between pb-6">
        <p class="font-inter text-sm text-white/60">© 2025 Eziz Doganlar. Ähli hukuklar goragly.</p>
        <p class="font-inter text-sm text-white/60">Made by ParlakNesil</p>
      </div>
      <div
        class="flex sm:flex-row flex-col sm:space-y-0 space-y-10 sm:items-center items-start justify-between py-5 border-t-2 border-blue-800">
        <div class="w-[124px] h-[74px]">
          <img class="w-full h-full object-cover" src="/svgs/doganlar.svg">
        </div>
        <h1 class="font-manrope font-medium text-7xl text-white">
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