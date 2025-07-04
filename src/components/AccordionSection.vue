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
export default {
    components: {
        AccordionItem
    },
    data() {
        return {
            openAccordionId: 0,
            accordionItems: [
                {
                    id: 1,
                    number: '001',
                    title: 'Construction and Contracting Work',
                    description: 'We undertake a wide range of construction and contracting projects, including residential, commercial, and industrial structures. From groundbreaking to final finishes, we ensure quality, safety, and timely delivery.',
                    color: 'bg-[#F5F5F5]',
                    image: '/imgs/service-1.webp',
                },
                {
                    id: 2,
                    number: '002',
                    title: 'Engineering Activities',
                    description: 'Our engineering services include precise technical planning, structural analysis, and execution. We apply advanced engineering methods to guarantee the durability and efficiency of every project.',
                    color: 'bg-[#F8FCFF]',
                    image: '/imgs/service-2.webp',
                },
                {
                    id: 3,
                    number: '003',
                    title: 'Turnkey Project Delivery',
                    description: 'We specialize in turnkey solutions, managing every phase of a project from design to handover. Clients receive a fully completed, operational structure—ready for immediate use.',
                    color: 'bg-[#EDF7FF]',
                    image: '/imgs/service-3.webp',
                },
                {
                    id: 4,
                    number: '004',
                    title: 'Ground Structure Construction (Specialization)',
                    description: 'Our core expertise lies in ground structure construction—laying strong and stable foundations that ensure long-lasting buildings.',
                    color: 'bg-[#DBEFFF]',
                    image: '/imgs/service-4.webp',
                },
                {
                    id: 5,
                    number: '005',
                    title: 'Design Services',
                    description: 'We offer professional architectural and structural design services that combine functionality, safety, and aesthetic appeal. Every design is tailored to meet project goals and client vision.',
                    color: 'bg-[#CEE9FF]',
                    image: '/imgs/service-5.webp',
                },
                {
                    id: 6,
                    number: '006',
                    title: 'Electrical Work',
                    description: 'We handle complete electrical infrastructure, including wiring, power distribution, lighting, and panel installations, all in line with modern standards and safety regulations.',
                    color: 'bg-[#BFE2FF]',
                    image: '/imgs/service-6.webp',
                },
                {
                    id: 7,
                    number: '007',
                    title: 'Electronic Work',
                    description: 'Our team installs and configures smart systems, security setups, and other electronic components essential for modern building operations.',
                    color: 'bg-[#B1DCFF]',
                    image: '/imgs/service-7.webp',
                },
                {
                    id: 8,
                    number: '008',
                    title: 'Labour Services',
                    description: 'We provide skilled and experienced labourers across all stages of construction. Our workforce ensures smooth on-site execution, adhering to high productivity and safety standards.',
                    color: 'bg-[#A0D5FF]',
                    image: '/imgs/service-8.webp',
                },
                {
                    id: 9,
                    number: '009',
                    title: 'Mechanical Work',
                    description: 'From HVAC systems to plumbing and elevators, we deliver precise mechanical installations that support comfort, functionality, and long-term performance.',
                    color: 'bg-[#8ECDFF]',
                    image: '/imgs/service-9.webp',
                },
                {
                    id: 10,
                    number: '0010',
                    title: 'Equipment of the Structure',
                    description: 'We furnish and install all structural equipment needed for a complete and ready-to-use facility—bridging the gap between construction and functionality.',
                    color: 'bg-[#7DC5FF]',
                    image: '/imgs/service-10.webp',
                },
                {
                    id: 11,
                    number: '0011',
                    title: 'Landscaping',
                    description: 'We design and implement aesthetically pleasing and functional outdoor spaces that enhance the overall look and feel of the property.',
                    color: 'bg-[#5EB8FF]',
                    image: '/imgs/service-11.webp',
                },
            ],
        }
    },
    methods: {
        toggleAccordion(itemId) {
            // If clicking the same item, close it. Otherwise, open the new one
            this.openAccordionId = this.openAccordionId === itemId ? null : itemId
        }
    }
}
</script>