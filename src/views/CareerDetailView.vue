<template>
    <div class="w-full h-full flex flex-col">
        <Navbar background="bg-custom-gradient-1" />
        <div class="sm:container px-4 flex-1">
            <div class="mt-32 flex items-center space-x-2">
                <div class="laptop:w-6 phone:w-5 w-4">
                    <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0625 12.5L5.9375 12.5" stroke="#CD0303" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12.5 19.0625L5.9375 12.5L12.5 5.9375" stroke="#CD0303" stroke-width="1.8"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <router-link to="/career" class="font-inter font-normal laptop:text-lg phone:text-base text-sm text-m_red">{{ $t('titles.pozisyon') }}</router-link>
            </div>
            <div class="mt-10 flex phone:flex-row-reverse flex-col-reverse items-start">
                <div class="flex-2 laptop:w-365 lg:w-80 w-72 flex flex-col sticky top-32 left-0 mb-20">
                    <router-link to="#"
                        class="cursor-pointer bg-m_blue_5 text-white py-4 laptop:px-10 px-8 text-center mt-3 mb-6 rounded font-inter font-medium laptop:text-lg text-base">
                        {{ $t('links.bashvurmak') }}
                    </router-link>
                    <router-link to="#" class="rounded py-4 laptop:px-10 px-8 bg-m_bg_gray">
                        <div class="flex items-center justify-center space-x-3">
                            <p class="font-inter font-medium laptop:text-lg text-base">{{ $t('links.paylash') }}</p>
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.5 17C11.8056 17 11.2153 16.7521 10.7292 16.2563C10.2431 15.7604 10 15.1583 10 14.45C10 14.3508 10.0069 14.248 10.0208 14.1414C10.0347 14.0349 10.0556 13.9394 10.0833 13.855L4.20833 10.37C3.97222 10.5825 3.70833 10.7491 3.41667 10.8698C3.125 10.9905 2.81944 11.0506 2.5 11.05C1.80556 11.05 1.21528 10.8021 0.729167 10.3063C0.243056 9.81042 0 9.20833 0 8.5C0 7.79167 0.243056 7.18958 0.729167 6.69375C1.21528 6.19792 1.80556 5.95 2.5 5.95C2.81944 5.95 3.125 6.01035 3.41667 6.13105C3.70833 6.25175 3.97222 6.41807 4.20833 6.63L10.0833 3.145C10.0556 3.06 10.0347 2.96452 10.0208 2.85855C10.0069 2.75258 10 2.64973 10 2.55C10 1.84167 10.2431 1.23958 10.7292 0.74375C11.2153 0.247917 11.8056 0 12.5 0C13.1944 0 13.7847 0.247917 14.2708 0.74375C14.7569 1.23958 15 1.84167 15 2.55C15 3.25833 14.7569 3.86042 14.2708 4.35625C13.7847 4.85208 13.1944 5.1 12.5 5.1C12.1806 5.1 11.875 5.03993 11.5833 4.9198C11.2917 4.79967 11.0278 4.63307 10.7917 4.42L4.91667 7.905C4.94444 7.99 4.96528 8.08577 4.97917 8.1923C4.99306 8.29883 5 8.4014 5 8.5C5 8.5986 4.99306 8.70145 4.97917 8.80855C4.96528 8.91565 4.94444 9.01113 4.91667 9.095L10.7917 12.58C11.0278 12.3675 11.2917 12.2012 11.5833 12.081C11.875 11.9609 12.1806 11.9006 12.5 11.9C13.1944 11.9 13.7847 12.1479 14.2708 12.6438C14.7569 13.1396 15 13.7417 15 14.45C15 15.1583 14.7569 15.7604 14.2708 16.2563C13.7847 16.7521 13.1944 17 12.5 17ZM12.5 3.4C12.7361 3.4 12.9342 3.31868 13.0942 3.15605C13.2542 2.99342 13.3339 2.7914 13.3333 2.55C13.3328 2.3086 13.2528 2.10687 13.0933 1.9448C12.9339 1.78273 12.7361 1.70113 12.5 1.7C12.2639 1.69887 12.0661 1.78047 11.9067 1.9448C11.7472 2.10913 11.6672 2.31087 11.6667 2.55C11.6661 2.78913 11.7461 2.99115 11.9067 3.15605C12.0672 3.32095 12.265 3.40227 12.5 3.4ZM2.5 9.35C2.73611 9.35 2.93417 9.2684 3.09417 9.1052C3.25417 8.942 3.33389 8.74027 3.33333 8.5C3.33278 8.25973 3.25278 8.058 3.09333 7.8948C2.93389 7.7316 2.73611 7.65 2.5 7.65C2.26389 7.65 2.06611 7.7316 1.90667 7.8948C1.74722 8.058 1.66722 8.25973 1.66667 8.5C1.66611 8.74027 1.74611 8.94228 1.90667 9.10605C2.06722 9.26982 2.265 9.35113 2.5 9.35ZM12.5 15.3C12.7361 15.3 12.9342 15.2184 13.0942 15.0552C13.2542 14.892 13.3339 14.6903 13.3333 14.45C13.3328 14.2097 13.2528 14.008 13.0933 13.8448C12.9339 13.6816 12.7361 13.6 12.5 13.6C12.2639 13.6 12.0661 13.6816 11.9067 13.8448C11.7472 14.008 11.6672 14.2097 11.6667 14.45C11.6661 14.6903 11.7461 14.8923 11.9067 15.0561C12.0672 15.2198 12.265 15.3011 12.5 15.3Z"
                                    fill="black" />
                            </svg>
                        </div>
                    </router-link>
                </div>
                <div class="flex-1 sm:mr-20">
                    <div class="w-full h-full">
                        <p class="font-inter font-medium laptop:text-xl text-lg text-m_blue_5 my-3">{{ $t('titles.belge') }}</p>
                        <h2
                            class="font-sans tracking-wider font-bold laptop:text-4xl phone:text-3xl text-2xl leading-normal text-m_black_3">
                            Kıdemli
                            CSA (İNŞAAT, YAPI, MİMARLIK) MÜHENDİSİ</h2>
                        <p class="font-inter font-normal laptop:text-lg text-base text-m_bg_gray_6 mt-4">Ashgabat,
                            Turkmenistan</p>
                        <div class="w-full sm:my-16 my-10">
                            <h3 class="font-inter font-bold text-base mb-8">Sorumlulukların özeti</h3>
                            <p class="font-inter font-normal laptop:text-lg text-base text-m_black_2">
                                Mekanik Sorumlusunun gözetimi altında, görevli kişi, inşaat işinin spesifikasyonlar,
                                kodlar ve standartlar dahil olmak üzere mühendislik tasarımına uygun olmasını sağlamak
                                için saha inşaat yönetimi ve denetim ekibine teknik mühendislik desteği sağlamada yer
                                alacaktır. Daha spesifik olarak, Saha Makine Mühendisi aşağıdakiler için çağrılacaktır:
                                <br><br>
                            </p>
                            <ul class="list-disc pl-5">
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Gerektiğinde teknik teklif analizine ve önerilere yardımcı olun.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Site verilerini ve koşullarını doğrulayın.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Yerel izin teknik gerekliliklerini koordine edin.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Mühendislik çıktılarında (çizimler ve spesifikasyonlar) keşfedildiğinde disiplinler
                                    arası çatışmaları veya çatışmaları yönetin ve çözün.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    İnşaat Uygulama Planının Saha Mühendisliği bölümüne yardımcı olun.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Uygun olduğu ölçüde, inşa edilebilirlik girdilerine ve tasarımın, iş kapsamının,
                                    inşaat sırasının, tahmin ve planlamaya etkilerinin yerinde izlenmesine yardımcı
                                    olun.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    QA/QC'ye teknik yardım sağlayın.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Gerektiğinde QA test raporlarını ve belgelerini inceleyin ve onaylayın.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    İnşaat Denetimine teknik yardım sağlamak.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Saha bilgi taleplerini ve saha tasarımı değişiklik prosedürlerini yönetin.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Geçici işler veya sahada üretilen satın almalar gibi, gerektiğinde yerinde satın
                                    alımlara yönelik spesifikasyonları geliştirin, kontrol edin ve dağıtın.
                                </li>
                            </ul>
                            <h3 class="font-inter font-bold text-base sm:mt-16 sm:mb-8 my-6">Yetenekleri</h3>
                            <ul class="list-disc pl-5">
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    İyi analitik, sentez, problem çözme ve iletişim becerileri.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    İyi organizasyon becerileri.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Özerk
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Mühendislik çıktılarında (çizimler ve spesifikasyonlar) keşfedildiğinde disiplinler
                                    arası çatışmaları veya çatışmaları yönetin ve çözün.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    İnşaat Uygulama Planının Saha Mühendisliği bölümüne yardımcı olun.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Girişim
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Detaylara dikkat.
                                </li>
                            </ul>
                            <h3 class="font-inter font-bold text-base sm:mt-16 sm:mb-8 my-6">Gereksinimler</h3>
                            <h3 class="font-inter font-bold text-base sm:mt-16 sm:mb-8 my-6">İdeal adayın şunları yapması gerekir:
                            </h3>
                            <ul class="list-disc pl-5">
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Elektrik mühendisliği alanında lisans derecesine sahip olmak.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Konuyla ilgili en az on (10) yıllık deneyime sahip olmak.
                                </li>
                            </ul>
                            <h3 class="font-inter font-bold text-base sm:mt-16 sm:mb-8 my-6">Sorumlulukların özeti</h3>
                            <p class="font-inter mb-10 font-normal laptop:text-lg text-base text-m_black_2">
                                Mekanik Sorumlusunun gözetimi altında, görevli kişi, inşaat işinin spesifikasyonlar,
                                kodlar ve standartlar dahil olmak üzere mühendislik tasarımına uygun olmasını sağlamak
                                için saha inşaat yönetimi ve denetim ekibine teknik mühendislik desteği sağlamada yer
                                alacaktır. Daha spesifik olarak, Saha Makine Mühendisi aşağıdakiler için çağrılacaktır:
                            </p>
                            <ul class="list-disc pl-5">
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Gerektiğinde teknik teklif analizine ve önerilere yardımcı olun.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Site verilerini ve koşullarını doğrulayın.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Yerel izin teknik gerekliliklerini koordine edin.
                                </li>
                                <li class="font-inter mb-4 font-normal laptop:text-lg text-base text-m_black_2">
                                    Mühendislik çıktılarında (çizimler ve spesifikasyonlar) keşfedildiğinde disiplinler
                                    arası çatışmaları veya çatışmaları yönetin ve çözün.
                                </li>
                            </ul>
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

export default {
    name: "Career",
    components: {
        RouterLink,
        Navbar,
        Footer,
    }
}
</script>