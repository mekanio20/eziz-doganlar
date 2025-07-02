<template>
    <div class="feature-card relative overflow-hidden group p-8 lg:p-10">
        <!-- Icon -->
        <div class="mb-10">
            <div class="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300">
                <component :is="iconComponent" class="w-full h-full" />
            </div>
        </div>

        <!-- Content -->
        <div class="space-y-4 font-manrope">
            <h3 class="text-xl font-semibold text-white leading-tight">
                {{ feature.title }}
            </h3>
            <p
                class="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {{ feature.description }}
            </p>
        </div>

        <!-- Hover Border Effect -->
        <div
            class="absolute inset-0 border border-dashed border-white/10 group-hover:border-white/20 transition-colors duration-300 pointer-events-none">
        </div>
    </div>
</template>

<script>
import diamondIcon from '@/components/icons/diamond.vue'
import settingsIcon from '@/components/icons/settings.vue'
import customersIcon from '@/components/icons/customers.vue'
import clockIcon from '@/components/icons/clock.vue'
import innovationIcon from '@/components/icons/innovation.vue'
import securyIcon from '@/components/icons/secury.vue'

export default {
    name: 'FeatureCard',
    components: {
        diamondIcon,
        settingsIcon,
        customersIcon,
        innovationIcon,
        securyIcon,
        clockIcon
    },
    props: {
        feature: {
            type: Object,
            required: true,
            validator(value) {
                return value && typeof value.title === 'string' && typeof value.description === 'string' && typeof value.icon === 'string'
            }
        }
    },
    computed: {
        iconComponent() {
            const icons = {
                diamond: 'diamondIcon',
                settings: 'settingsIcon',
                customers: 'customersIcon',
                clock: 'clockIcon',
                innovation: 'innovationIcon',
                secury: 'securyIcon'
            }
            return icons[this.feature.icon] || icons.diamond
        }
    }
}
</script>

<style scoped>
.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.feature-card:hover::before {
    opacity: 1;
}
</style>˝