<template>
    <div class="relative" :class="[item.color]">
        <!-- Header -->
        <button @click="toggle"
            class="w-full flex items-center justify-between py-10 px-8 text-left transition-colors duration-200 focus:outline-none">
            <!-- Number and Title -->
            <div class="flex items-center space-x-40">
                <span class="font-manrope text-xl font-medium text-[#0C1A30]">
                    {{ item.number }}
                </span>
                <h3 class="font-manrope text-xl font-medium text-[#0C1A30]">
                    {{ item.title }}
                </h3>
            </div>
        </button>

        <!-- Content -->
        <div class="transition-all duration-500 ease-out overflow-hidden"
            :style="{ maxHeight: isOpen ? contentHeight + 'px' : '0px' }">
            <div ref="content" class="px-8 py-12 flex items-center">
                <p class="w-1/2 text-gray-600 text-base lg:text-lg leading-relaxed">
                    {{ item.description }}
                </p>
                <!-- Image -->
                <div class="w-[300px] absolute right-4 top-10 mb-40">
                    <img :src="item.image"
                        class="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccordionItem',
    props: {
        item: {
            type: Object,
            required: true
        },
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            contentHeight: 0
        }
    },
    mounted() {
        this.calculateHeight()
    },
    updated() {
        this.calculateHeight()
    },
    methods: {
        toggle() {
            this.$emit('toggle', this.item.id)
        },
        calculateHeight() {
            this.$nextTick(() => {
                if (this.$refs.content) {
                    this.contentHeight = this.$refs.content.scrollHeight
                }
            })
        }
    }
}
</script>