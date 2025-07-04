<template>
    <section class="px-4 sm:px-6 lg:px-8 pb-20">
        <div class="w-full mx-auto">
            <!-- Accordion Container -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionItem v-for="item in accordionItems" :key="item.id" :item="item"
                    :isOpen="openAccordionId === item.id" @toggle="toggleAccordion" />
            </div>
        </div>
    </section>
</template>


<script>
import AccordionItem from './AccordionItem.vue';
import { accordionItems } from '@/data/index.js'
export default {
    components: {
        AccordionItem
    },
    data() {
        return {
            openAccordionId: 0,
            accordionItems: accordionItems[this.$i18n.locale],
        }
    },
    methods: {
        toggleAccordion(itemId) {
            this.openAccordionId = this.openAccordionId === itemId ? null : itemId
        }
    },
    watch: {
        '$i18n.locale': {
            immediate: true,
            handler() {
                this.accordionItems = accordionItems[this.$i18n.locale]
            }
        }
    }
}
</script>