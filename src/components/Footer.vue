<template>
  <footer class="w-full pt-20 pb-10 text-white bg-custom-gradient-1 px-4 sm:px-0">
    <div class="container-sm sm:container flex flex-col">
      <div class="w-full flex laptop:flex-row flex-col laptop:items-start justify-between my-16">
        <div class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-6">
            <p class="font-manrope text-lg text-white w-[90%]">
              Innowasion Çözgütler Bilen Berk Gurluşyk — Geljegi Bilelikde Gurýarys.
            </p>
            <div class="flex items-center space-x-5">
              <a href="#" target="_blank">
                <div
                  class="phone:w-9 phone:h-9 w-7 h-7 p-2 rounded-full bg-transparent border flex items-center justify-center cursor-pointer">
                  <img class="object-cover" v-lazy="`/svgs/facebook.svg`">
                </div>
              </a>

              <a href="#"
                target="_blank">

                <div
                  class="phone:w-9 phone:h-9 w-7 h-7 p-2 rounded-full bg-transparent border flex items-center justify-center cursor-pointer">
                  <img class="object-cover" v-lazy="`/svgs/instagram.svg`">
                </div>
              </a>
              <a href="#" target="_blank">
                <div
                  class="phone:w-9 phone:h-9 w-7 h-7 p-2 rounded-full bg-transparent border flex items-center justify-center cursor-pointer">
                  <img class="object-cover" v-lazy="`/svgs/youtube.svg`">
                </div>
              </a>

            </div>
          </div>
          <div class="flex items-center space-x-3">
            <p class="font-manrope text-xl text-white">
              {{ $t('titles.iletisim') }}
            </p>
          </div>
        </div>
        <div
          class="w-full laptop:flex laptop:items-start laptop:justify-between grid phone:grid-cols-3 grid-cols-2 gap-y-14 phone:gap-x-32 sm:gap-x-20 gap-x-10">
          <div class="flex flex-col space-y-5">
            <h4 class="font-poppins text-base font-bold">{{ $t('links.bizkim') }}</h4>
            <router-link to="/#hakkimizda" class="text-m_gray_2 font-sans font-normal text-base">{{
                    $t('titles.hakkimizda') }}</router-link>
            <router-link to="/about/#degerlerimiz" class="text-m_gray_2 font-sans font-normal text-base">{{
                    $t('titles.degerlerimiz') }}</router-link>
            <router-link to="/about/#hikayemiz" class="text-m_gray_2 font-sans font-normal text-base">{{
                    $t('titles.hikayemiz') }}</router-link>
            <router-link to="/#faaliyet_alanarimiz" class="text-m_gray_2 font-sans font-normal text-base">{{
                    $t('titles.faaliyetAlanlarimiz') }}</router-link>
            <router-link to="/#rakamlarimiz" class="text-m_gray_2 font-sans font-normal text-base">{{
                    $t('titles.bizimRakamlarimiz') }}</router-link>
          </div>
          <div class="flex flex-col space-y-5">
            <h4 class="font-poppins text-base font-bold">{{ $t('links.hizmetler') }}</h4>
            <router-link to="/services/security" class="text-m_gray_2 font-sans font-normal text-base">{{
                    $t('links.guvenlik') }}</router-link>
            <router-link to="/services/environment" class="text-m_gray_2 font-sans font-normal text-base">{{
                    $t('links.cevre') }}</router-link>
            <router-link to="/services/variation" class="text-m_gray_2 font-sans font-normal text-base">{{
                    $t('links.cesitlilikVeEsitlilik') }}</router-link>
            <!-- <router-link to="/services/reports" class="text-m_gray_2 font-sans font-normal text-base">{{ $t('links.raporlar') }}</router-link> -->
            <router-link to="/services/partners" class="text-m_gray_2 font-sans font-normal text-base">{{
                    $t('links.partnerler') }}</router-link>
          </div>
          <div class="flex flex-col space-y-5">
            <!-- <router-link to="/career" class="font-poppins text-base font-bold">{{ $t('links.kariyer') }}</router-link> -->
            <router-link to="/news" class="font-poppins text-base font-bold">{{ $t('links.haberler') }}</router-link>
            <router-link to="/projects" class="font-poppins text-base font-bold">{{ $t('links.projeler')
              }}</router-link>
            <router-link to="/productions" class="font-poppins text-base font-bold">{{ $t('links.uretim')
              }}</router-link>
          </div>
        </div>
      </div>
      <div
        class="flex sm:flex-row flex-col sm:space-y-0 space-y-10 sm:items-center items-start justify-between pt-10 pb-5 border-t-2 border-blue-800">
        <p class="phone:text-lg text-sm">© 2024 All rights reserved</p>
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