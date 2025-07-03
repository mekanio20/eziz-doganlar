<template>
    <section class="container mx-auto pb-20">
        <h2 class="font-manrope text-3xl text-[#0C1A30] text-center pb-20 uppercase" :class="{ 'animate-fade-in': showAnimations }">Biziň Üstünliklerimiziň Görkezijisi
        </h2>

        <!-- First Row -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-0 mb-0">
            <!-- Experience Card - Takes 3 columns -->
            <article
                class="stat-card bg-blue-700 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] md:col-span-2"
                :class="{'animate-scale-in': showAnimations, 'animation-delay-100': showAnimations}">
                <div>
                    <h2 class="stat-label text-lg sm:text-xl lg:text-2xl mb-2">Tejribämiz</h2>
                </div>
                <div class="mt-auto">
                    <div class="stat-number text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                        {{ animatedExperience }}<span class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">+</span>
                    </div>
                </div>
            </article>

            <!-- Completed Projects Card - Takes 4 columns -->
            <article
                class="stat-card bg-gray-400 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] md:col-span-4"
                :class="{'animate-scale-in': showAnimations, 'animation-delay-200': showAnimations}"
                @mouseenter="handleHover('completed')" @mouseleave="handleLeave('completed')">
                <div>
                    <h2 class="stat-label text-lg sm:text-xl lg:text-2xl mb-2">Ýerine ýetiren işlerimiz</h2>
                </div>
                <div class="mt-auto">
                    <div class="stat-number text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                        {{ animatedCompleted }}<span class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">+</span>
                    </div>
                </div>
            </article>

            <!-- Workers Card - Takes 3 columns -->
            <article
                class="stat-card bg-slate-500 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] md:col-span-3"
                :class="{'animate-scale-in': showAnimations, 'animation-delay-300': showAnimations}"
                @mouseenter="handleHover('workers')" @mouseleave="handleLeave('workers')">
                <div>
                    <h2 class="stat-label text-lg sm:text-xl lg:text-2xl mb-2">Işgärlerimiz</h2>
                </div>
                <div class="mt-auto">
                    <div class="stat-number text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                        {{ animatedWorkers }}<span class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">+</span>
                    </div>
                </div>
            </article>

            <!-- Ongoing Projects Card - Takes 2 columns -->
            <article
                class="stat-card bg-emerald-700 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] md:col-span-3"
                :class="{'animate-scale-in': showAnimations, 'animation-delay-400': showAnimations}"
                @mouseenter="handleHover('ongoing')" @mouseleave="handleLeave('ongoing')">
                <div>
                    <h2 class="stat-label text-lg sm:text-xl lg:text-2xl mb-2">Dowam edýän işlerimiz</h2>
                </div>
                <div class="mt-auto">
                    <div class="stat-number text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                        {{ animatedOngoing }}
                    </div>
                </div>
            </article>
        </div>

        <!-- Second Row -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-0">
            <!-- 2025 Projects Card - Takes 5 columns -->
            <article
                class="stat-card bg-slate-600 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] md:col-span-5"
                :class="{'animate-scale-in': showAnimations, 'animation-delay-500': showAnimations}"
                @mouseenter="handleHover('current')" @mouseleave="handleLeave('current')">
                <div>
                    <h2 class="stat-label text-lg sm:text-xl lg:text-2xl mb-2">2025-nji ýylda ýerine ýetiren işlerimiz
                    </h2>
                </div>
                <div class="mt-auto">
                    <div class="stat-number text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                        {{ animatedCurrent }}
                    </div>
                </div>
            </article>

            <!-- Major Projects Card - Takes 7 columns -->
            <article
                class="stat-card bg-blue-500 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] md:col-span-7"
                :class="{'animate-scale-in': showAnimations, 'animation-delay-600': showAnimations}"
                @mouseenter="handleHover('major')" @mouseleave="handleLeave('major')">
                <div>
                    <h2 class="stat-label text-lg sm:text-xl lg:text-2xl mb-2">Uly işlerimiz</h2>
                </div>
                <div class="mt-auto">
                    <div class="stat-number text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                        {{ animatedMajor }}
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AdvantageSection',
    data() {
        return {
            showAnimations: false,
            // Target values
            targetValues: {
                experience: 31,
                completed: 80,
                workers: 1500,
                ongoing: 12,
                current: 10,
                major: 30
            },
            // Current animated values
            animatedExperience: 0,
            animatedCompleted: 0,
            animatedWorkers: 0,
            animatedOngoing: 0,
            animatedCurrent: 0,
            animatedMajor: 0,
            // Animation state
            animationDuration: 2000,
            isAnimating: false
        }
    },
    mounted() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !this.isAnimating) {
                        this.showAnimations = true;
                        this.startCounterAnimations();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        this.$nextTick(() => {
            const section = this.$el
            if (section) observer.observe(section)
        })
    },
    methods: {
        startCounterAnimations() {
            if (this.isAnimating) return
            this.isAnimating = true

            this.animateValue('experience', 0, this.targetValues.experience, 2000, 0)
            this.animateValue('completed', 0, this.targetValues.completed, 2000, 200)
            this.animateValue('workers', 0, this.targetValues.workers, 2500, 400)
            this.animateValue('ongoing', 0, this.targetValues.ongoing, 1800, 600)
            this.animateValue('current', 0, this.targetValues.current, 1800, 800)
            this.animateValue('major', 0, this.targetValues.major, 2000, 1000)
        },

        animateValue(property, start, end, duration, delay) {
            setTimeout(() => {
                const startTime = performance.now()
                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime
                    const progress = Math.min(elapsed / duration, 1)

                    const easeOutCubic = 1 - Math.pow(1 - progress, 3)
                    const currentValue = Math.floor(start + (end - start) * easeOutCubic)

                    this[`animated${property.charAt(0).toUpperCase() + property.slice(1)}`] = currentValue

                    if (progress < 1) {
                        requestAnimationFrame(animate)
                    }
                }
                requestAnimationFrame(animate)
            }, delay)
        },

        handleHover(cardType) {
            // Add subtle hover effects
            const event = new CustomEvent('cardHover', { detail: cardType })
            document.dispatchEvent(event)
        },

        handleLeave(cardType) {
            // Handle hover leave
            const event = new CustomEvent('cardLeave', { detail: cardType })
            document.dispatchEvent(event)
        }
    }
}
</script>