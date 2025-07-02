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
            openAccordionId: 1,
            accordionItems: [
                {
                    id: 1,
                    number: '001',
                    title: 'Taslama meýilnamalaşdyryşy we dolandyryşy',
                    description: 'Taslama meýilnamalaşdyryşy we dolandyryşy prosesinde müşderileriň isleglerini we talaplaryny göz öňünde tutup, iň oňat çözgütleri hödürleýäris.',
                    color: 'bg-[#F5F5F5]',
                    image: '/imgs/service-1.webp',
                },
                {
                    id: 2,
                    number: '002',
                    title: 'Binalaryň gurluşygy',
                    description: 'Häzirki zaman tehnologiýalaryny ulanmak bilen ýokary hilli binalar gurýarys. Müşderileriň isleglerini göz öňünde tutup, döwrebap we durnukly binalar döredýäris.',
                    color: 'bg-[#F8FCFF]',
                    image: '/imgs/service-1.webp',
                },
                {
                    id: 3,
                    number: '003',
                    title: 'Suwdan peýdalanmak we suw güýüjy ulgamlary',
                    description: 'Suw üpjünçiligi we kanalizasiýa ulgamlaryny döretmek boýunça giň tejribämiz bar. Döwrebap tehnologiýalary ulanmak bilen çeşmeli we ygtybarly ulgamlar gurýarys.',
                    color: 'bg-[#EDF7FF]',
                    image: '/imgs/service-1.webp',
                },
                {
                    id: 4,
                    number: '004',
                    title: 'Howpsuzlyk we hil üpjünçiligi',
                    description: 'Işimiziň her tapgyrynda howpsuzlyk we hil standartlaryny berjaý edýäris. Müşderileriň rahatlygy we howpsuzlygy bizim ileri tutýan maksadymyzdyr.',
                    color: 'bg-[#DBEFFF]',
                    image: '/imgs/service-1.webp',
                },
                {
                    id: 5,
                    number: '005',
                    title: 'Täzelik we abatlaýyş işleri',
                    description: 'Täzelik we abatlaýyş işleri, bar bolan binalaryň, jaýlaryň ýa-da desgalaryň ýagdaýyny gowulandyrmak, olary täzelemegiň hem-de häzirki zaman talaplaryna laýyk gelýän derejä ýetirmek üçin amala aşyrylýar. Bu hyzmatlar, diňe bina görnüşini üýtgetmek bilen çäklenmän, gurluşyk gurluşynyň howpsuzlygyny, funksionallygyny we estetikasyny ýokarlandyrmaga gönükdirilendir.',
                    color: 'bg-[#CEE9FF]',
                    image: '/imgs/service-1.webp',
                }
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