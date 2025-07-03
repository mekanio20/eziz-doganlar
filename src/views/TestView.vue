<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Main Content -->
        <main class="container mx-auto px-4 py-8 lg:py-16">
            <div class="max-w-6xl mx-auto">
                <!-- Header -->
                <header class="mb-12">
                    <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
                        Haberlaşmak
                    </h1>
                </header>

                <!-- Contact Section -->
                <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
                    <!-- Contact Form -->
                    <div class="space-y-6 animate-slide-up">
                        <form @submit.prevent="submitForm" class="space-y-6">
                            <!-- Full Name -->
                            <div class="relative">
                                <input v-model="form.fullName" type="text" id="fullName" :class="[
                            'w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 bg-transparent placeholder-transparent focus:border-primary-600 focus:outline-none peer',
                            errors.fullName ? 'border-red-500' : ''
                        ]" placeholder="Doly adyňyz" required />
                                <label for="fullName"
                                    class="absolute left-0 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-primary-600 peer-focus:text-sm">
                                    Doly adyňyz
                                </label>
                                <div v-if="errors.fullName" class="text-red-500 text-sm mt-1">{{ errors.fullName }}
                                </div>
                            </div>

                            <!-- Phone Number -->
                            <div class="relative">
                                <input v-model="form.phone" type="tel" id="phone" :class="[
                            'w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 bg-transparent placeholder-transparent focus:border-primary-600 focus:outline-none peer',
                            errors.phone ? 'border-red-500' : ''
                        ]" placeholder="Telefon belginiz" required />
                                <label for="phone"
                                    class="absolute left-0 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-primary-600 peer-focus:text-sm">
                                    Telefon belginiz
                                </label>
                                <div v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</div>
                            </div>

                            <!-- Email -->
                            <div class="relative">
                                <input v-model="form.email" type="email" id="email" :class="[
                            'w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 bg-transparent placeholder-transparent focus:border-primary-600 focus:outline-none peer',
                            errors.email ? 'border-red-500' : ''
                        ]" placeholder="Elektron salgyňyz" required />
                                <label for="email"
                                    class="absolute left-0 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-primary-600 peer-focus:text-sm">
                                    Elektron salgyňyz
                                </label>
                                <div v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</div>
                            </div>

                            <!-- Message -->
                            <div class="relative">
                                <textarea v-model="form.message" id="message" rows="4" :class="[
                            'w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 bg-transparent placeholder-transparent focus:border-primary-600 focus:outline-none peer resize-none',
                            errors.message ? 'border-red-500' : ''
                        ]" placeholder="Habarlagntak" required></textarea>
                                <label for="message"
                                    class="absolute left-0 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-primary-600 peer-focus:text-sm">
                                    Habarlagntak
                                </label>
                                <div v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</div>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" :disabled="isSubmitting"
                                class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-600 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                                <span v-if="!isSubmitting">UGRATMAK</span>
                                <span v-else class="flex items-center justify-center">
                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    Ugradylýar...
                                </span>
                            </button>
                        </form>
                    </div>

                    <!-- Contact Info -->
                    <div class="space-y-8 animate-slide-up" style="animation-delay: 0.2s;">
                        <!-- Email Section -->
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium text-primary-600">Yazmak üçin</h3>
                            <a href="mailto:info@ezizdoganlar.com"
                                class="block text-xl text-gray-900 hover:text-primary-600 transition-colors duration-300">
                                info@ezizdoganlar.com
                            </a>
                        </div>

                        <!-- Phone Section -->
                        <div class="space-y-4">
                            <h3 class="text-lg font-medium text-primary-600">Jaň etmek</h3>
                            <a href="tel:+99312753577"
                                class="block text-xl text-gray-900 hover:text-primary-600 transition-colors duration-300">
                                +993 12 75 35 77
                            </a>
                        </div>

                        <!-- Social Media -->
                        <div class="flex space-x-4 pt-4">
                            <a href="#"
                                class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label="Facebook">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label="Twitter">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label="Instagram">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.804C4.851 14.539 4.6 13.5 4.6 12.017s.251-2.522.833-3.167c.566-1.074 1.719-1.804 3.016-1.804 1.297 0 2.448.73 3.016 1.804.582.645.833 1.684.833 3.167s-.251 2.522-.833 3.167c-.568 1.074-1.719 1.804-3.016 1.804zm7.119 0c-1.297 0-2.448-.73-3.016-1.804-.582-.645-.833-1.684-.833-3.167s.251-2.522.833-3.167c.568-1.074 1.719-1.804 3.016-1.804 1.297 0 2.448.73 3.016 1.804.582.645.833 1.684.833 3.167s-.251 2.522-.833 3.167c-.568 1.074-1.719 1.804-3.016 1.804z" />
                                </svg>
                            </a>
                            <a href="#"
                                class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label="YouTube">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                <!-- Address and Map Section -->
                <section class="bg-white rounded-xl shadow-lg p-8 lg:p-12 animate-fade-in"
                    style="animation-delay: 0.4s;">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <!-- Address -->
                        <div class="space-y-6">
                            <h2 class="text-2xl font-bold text-gray-900">SalgyBiz</h2>
                            <address class="not-italic">
                                <p class="text-lg text-gray-700 leading-relaxed">
                                    9 GARAGUM STREET, BAGTYYARLYK DISTRICT, ASHGABAT 745202, TURKMENISTAN
                                </p>
                            </address>

                            <!-- Additional Contact Info -->
                            <div class="pt-4 border-t border-gray-200">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h4 class="font-semibold text-gray-900 mb-2">Iş wagty:</h4>
                                        <p class="text-gray-600">Du-Ju: 9:00 - 18:00</p>
                                        <p class="text-gray-600">Şenbe: 9:00 - 14:00</p>
                                        <p class="text-gray-600">Ýekşenbe: Dynç</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-gray-900 mb-2">Goşmaça maglumat:</h4>
                                        <p class="text-gray-600">Müşteri hyzmatlar</p>
                                        <p class="text-gray-600">24/7 goldaw</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Map -->
                        <div
                            class="relative h-64 lg:h-80 bg-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                <div class="text-center">
                                    <div
                                        class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <p class="text-gray-700 font-medium">Ashgabat, Turkmenistan</p>
                                    <p class="text-sm text-gray-500 mt-1">Kartan görmek üçin basyň</p>
                                </div>
                            </div>

                            <!-- Interactive Map Overlay -->
                            <div
                                class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100">
                                <button @click="openMap"
                                    class="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                                    Kartany açmak
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>

        <!-- Success Modal -->
        <div v-if="showSuccessModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in"
            @click="showSuccessModal = false">
            <div class="bg-white rounded-xl p-8 max-w-md mx-4 transform animate-bounce-in">
                <div class="text-center">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Üstünlikli ugradyldy!</h3>
                    <p class="text-gray-600 mb-6">Habarňyz üstünlikli ugradyldy. Gysga wagtyň içinde siziň bilen
                        habarlaşarys.</p>
                    <button @click="showSuccessModal = false"
                        class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                        Goşa
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            form: {
                fullName: '',
                phone: '',
                email: '',
                message: ''
            },
            errors: {},
            isSubmitting: false,
            showSuccessModal: false
        }
    },
    methods: {
        validateForm() {
            this.errors = {};

            if (!this.form.fullName.trim()) {
                this.errors.fullName = 'Doly adyňyzy giriziň';
            }

            if (!this.form.phone.trim()) {
                this.errors.phone = 'Telefon belgiňizi giriziň';
            } else if (!/^\+?[\d\s-()]+$/.test(this.form.phone)) {
                this.errors.phone = 'Telefon belgisi dogry däl';
            }

            if (!this.form.email.trim()) {
                this.errors.email = 'E-mail adresini giriziň';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
                this.errors.email = 'E-mail adresi dogry däl';
            }

            if (!this.form.message.trim()) {
                this.errors.message = 'Habarňyzy giriziň';
            }

            return Object.keys(this.errors).length === 0;
        },

        async submitForm() {
            if (!this.validateForm()) {
                return;
            }

            this.isSubmitting = true;

            // Simulate API call
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Reset form
                this.form = {
                    fullName: '',
                    phone: '',
                    email: '',
                    message: ''
                };

                // Show success modal
                this.showSuccessModal = true;

                // Auto close modal after 5 seconds
                setTimeout(() => {
                    this.showSuccessModal = false;
                }, 5000);

            } catch (error) {
                console.error('Form submission error:', error);
                // Handle error (show error message)
            } finally {
                this.isSubmitting = false;
            }
        },

        openMap() {
            // Open map in new tab
            window.open('https://www.google.com/maps/place/Ashgabat,+Turkmenistan/', '_blank');
        }
    },

    mounted() {
        // Add staggered animation delays
        const elements = document.querySelectorAll('.animate-slide-up');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.1}s`;
        });
    }
}
</script>

<style scoped>
/* Custom animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }

    50% {
        opacity: 1;
        transform: scale(1.05);
    }

    70% {
        transform: scale(0.9);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out forwards;
}

.animate-bounce-in {
    animation: bounceIn 0.5s ease-out forwards;
}

/* Custom input focus styles */
.peer:focus~label {
    color: #1e40af;
}

/* Custom scrollbar */
textarea::-webkit-scrollbar {
    width: 6px;
}

textarea::-webkit-scrollbar-track {
    background: #f1f5f9;
}

textarea::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}
</style>