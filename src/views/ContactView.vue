<template>
    <div class="w-full h-full">
        <Navbar link="contact" background="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900" />

        <div class="sm:container px-4">
            <!-- Breadcrumb -->
            <div class="mt-32 flex items-center space-x-2">
                <router-link to="/" class="font-inter font-normal sm:text-lg text-base text-m_bg_gray_4">
                    {{ $t('links.home') }}
                </router-link>
                <span class="text-m_bg_gray_4">></span>
                <router-link to="/contact" class="font-inter font-normal sm:text-lg text-base text-m_bg_gray_4">
                    {{ $t('links.contact') }}
                </router-link>
            </div>

            <!-- Title -->
            <h2 class="py-10 font-manrope font-medium sm:text-5xl text-4xl laptop:text-start">
                {{ $t('links.contact') }}
            </h2>

            <!-- Form & Contact Info -->
            <div class="flex laptop:flex-row flex-col laptop:space-y-0 space-y-20 items-start justify-start">
                <!-- Form -->
                <div class="flex w-full items-start flex-col space-y-6 laptop:mr-20">
                    <!-- Input Fields -->
                    <div v-for="(field, key) in fields[this.$i18n.locale][0]" :key="key" class="w-full relative">
                        <input v-model="form[key]" :type="field.type" :id="key"
                            :class="['w-full px-0 py-4 text-lg border-0 border-b border-[#0C1A30] bg-transparent placeholder-transparent focus:border-primary-600 focus:outline-none peer', errors[key] ? 'border-red-500' : '']"
                            :placeholder="field.placeholder" required />
                        <label :for="key"
                            class="absolute left-0 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-0 peer-focus:text-primary-600 peer-focus:text-sm">
                            {{ field.label }}
                        </label>
                        <div v-if="errors[key]" class="text-red-500 text-sm mt-1">{{ errors[key] }}</div>
                    </div>

                    <!-- Submit Button -->
                    <button
                        class="w-full font-manrope font-semibold !mt-16 text-center rounded-md text-white p-4 sm:text-xl text-sm bg-[#003DA6] hover:bg-[#3c7ade] duration-300 uppercase">
                        {{ $t('common.send') }}
                    </button>
                </div>

                <!-- Contact Info -->
                <div class="w-full px-4 sm:px-10 lg:px-20 mb-10 laptop:mb-0">
                    <div class="flex flex-col space-y-10">
                        <div class="flex flex-col space-y-5">
                            <h4 class="font-manrope text-base font-medium text-black/60">
                                {{ $t('footer.title4') }}
                            </h4>
                            <a href="mailto:info@ezizdoganlar.com" class="font-manrope text-black font-[300] text-base">
                                info@ezizdoganlar.com
                            </a>
                        </div>
                        <div class="flex flex-col space-y-5">
                            <h4 class="font-manrope text-base font-medium text-black/60">
                                {{ $t('footer.title5') }}
                            </h4>
                            <a href="tel:+99312753577" class="font-manrope text-black font-[300] text-base">
                                +993 12 75 35 77
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Address and Socials -->
            <div class="flex flex-col space-y-2 pt-16 pb-10">
                <div
                    class="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                    <p class="font-manrope text-[#0C1A30] font-[300] text-xl uppercase">
                        9 Garagum Street, Bagtyyarlyk district, Ashgabat 745202, Turkmenistan
                    </p>
                    <div class="flex items-center space-x-2">
                        <a href="#" class="w-9">
                            <img class="w-full h-full object-cover" v-lazy="`/svgs/_facebook.svg`" />
                        </a>
                        <a href="#" class="w-9">
                            <img class="w-full h-full object-cover" v-lazy="`/svgs/_instagram.svg`" />
                        </a>
                        <a href="#" class="w-9">
                            <img class="w-full h-full object-cover" v-lazy="`/svgs/_youtube.svg`" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Map -->
        <div class="w-full h-[600px]">
            <iframe class="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201318.17307570975!2d58.25028409999999!3d37.96320754999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffe1bab3684d9%3A0x3cde013f62d3ade9!2zQcWfa2FiYXQ!5e0!3m2!1str!2s!4v1751547853761!5m2!1str!2s"
                style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'ContactPage',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            form: {
                fullName: '',
                phone: '',
                email: '',
                message: ''
            },
            errors: {},
            fields: {
                TM: [
                    {
                        fullName: { label: 'Doly adyňyz', placeholder: 'Doly adyňyz', type: 'text' },
                        phone: { label: 'Telefon belginiz', placeholder: 'Telefon belginiz', type: 'tel' },
                        email: { label: 'Elektron salgyňyz', placeholder: 'Elektron salgyňyz', type: 'email' },
                        message: { label: 'Habarlaşmak', placeholder: 'Habarlaşmak', type: 'text' }
                    }
                ],
                RU: [
                    {
                        fullName: { label: 'Полное имя', placeholder: 'Полное имя', type: 'text' },
                        phone: { label: 'Номер телефона', placeholder: 'Номер телефона', type: 'tel' },
                        email: { label: 'Адрес электронной почты', placeholder: 'Адрес электронной почты', type: 'email' },
                        message: { label: 'Сообщение', placeholder: 'Сообщение', type: 'text' }
                    }
                ],
                EN: [
                    {
                        fullName: { label: 'Full Name', placeholder: 'Full Name', type: 'text' },
                        phone: { label: 'Phone Number', placeholder: 'Phone Number', type: 'tel' },
                        email: { label: 'Email Address', placeholder: 'Email Address', type: 'email' },
                        message: { label: 'Message', placeholder: 'Message', type: 'text' }
                    }
                ]
            }
        }
    },
    methods: {
        validateForm() {
            this.errors = {};

            if (!this.form.fullName.trim()) this.errors.fullName = 'Doly adyňyzy giriziň';
            if (!this.form.phone.trim()) {
                this.errors.phone = 'Telefon belgiňizi giriziň';
            } else if (!/^[\d\s\-+()]+$/.test(this.form.phone)) {
                this.errors.phone = 'Telefon belgisi dogry däl';
            }
            if (!this.form.email.trim()) {
                this.errors.email = 'E-mail adresini giriziň';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
                this.errors.email = 'E-mail adresi dogry däl';
            }
            if (!this.form.message.trim()) this.errors.message = 'Habarňyzy giriziň';

            return Object.keys(this.errors).length === 0;
        },
        async submitForm() {
            if (!this.validateForm()) return;
            // fake submit
            await new Promise(res => setTimeout(res, 1500));
            alert('Form ugratdyňyz!');
        }
    },
}
</script>