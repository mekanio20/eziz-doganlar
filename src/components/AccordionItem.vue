<template>
    <div class="relative" :class="[item.color]">
        <!-- Header -->
        <button @click="toggle"
            class="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 sm:py-10 px-4 sm:px-8 text-left transition-colors duration-200 focus:outline-none gap-4">
            <!-- Number and Title -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-10">
                <span class="font-manrope text-base sm:text-lg md:text-xl font-medium text-[#0C1A30]">
                    {{ item.number }}
                </span>
                <h3 class="font-manrope text-lg sm:text-xl font-medium text-[#0C1A30]">
                    {{ item.title }}
                </h3>
            </div>
        </button>

        <!-- Content -->
        <div class="transition-all duration-500 ease-out overflow-hidden"
            :style="{ maxHeight: isOpen ? contentHeight + 'px' : '0px' }">
            <div ref="content" class="px-4 sm:px-8 py-6 sm:py-12 flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
                <!-- Text -->
                <p class="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed lg:w-1/2 w-full">
                    {{ item.description }}
                </p>

                <!-- Image -->
                <div class="w-full lg:w-[300px] h-auto relative lg:absolute lg:right-4 lg:top-10">
                    <img :src="accordionImage"
                        class="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { accordionItems } from '@/data/index.js'
export default {
    name: 'AccordionItem',
    props: {
        item: {
            type: Object,
            required: true,
        },
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            contentHeight: 0,
            accordionImage: accordionItems.imgs[Number(this.item.id) - 1]
        };
    },
    mounted() {
        this.calculateHeight();
    },
    updated() {
        this.calculateHeight();
    },
    methods: {
        toggle() {
            this.$emit('toggle', this.item.id);
        },
        calculateHeight() {
            this.$nextTick(() => {
                if (this.$refs.content) {
                    this.contentHeight = this.$refs.content.scrollHeight;
                }
            });
        },
    },
};
</script>