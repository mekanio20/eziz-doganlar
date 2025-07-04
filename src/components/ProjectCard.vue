<template>
    <div
        class="project-card cursor-pointer group relative overflow-hidden rounded-2xl bg-white">
        <!-- Image Container -->
        <div class="relative h-[450px] overflow-hidden">
            <img :src="image" :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>

            <!-- Content Overlay -->
            <div class="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <!-- Top Section - Company Name -->
                <div class="flex justify-between items-start">
                    <p class="text-white/80 text-sm font-[300]">{{ project.subtitle }}</p>
                    <!-- Arrow Icon -->
                    <div
                        class="bg-white/10 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 17L17 7M17 7H7M17 7V17"></path>
                        </svg>
                    </div>
                </div>

                <!-- Bottom Section - Title -->
                <div
                    class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 class="text-white text-lg sm:text-xl lg:text-2xl font-bold leading-tight mb-2">
                        {{ project.title }}
                    </h3>
                    <div
                        class="w-12 h-1 bg-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left">
                    </div>
                </div>
            </div>
        </div>

        <!-- Hover Effect Border -->
        <div
            class="absolute inset-0 rounded-2xl transition-colors duration-300">
        </div>
    </div>
</template>

<script>
import { projects } from '@/data/index.js'
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true,
            validator(value) {
                return value && typeof value.title === 'string' && typeof value.company === 'string' && typeof value.image === 'string'
            }
        }
    },
    data() {
        return {
            image: projects.imgs[Number(this.project.id) - 1]
        }
    }
}
</script>

<style scoped>
.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 1rem;
    z-index: 1;
}

.project-card:hover::before {
    opacity: 1;
}
</style>