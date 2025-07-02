<template>
  <section
    class="relative py-20 px-4 sm:px-6 lg:px-8 bg-fixed bg-[url('/imgs/project-1.webp')] from-blue-800 via-blue-700 to-blue-900 min-h-screen mb-20">
    <!-- Background Pattern Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-800/90 via-blue-700/95 to-blue-900/90"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col space-y-2 font-manrope text-5xl pb-20">
        <h2 class="text-[#fff] animate-fade-in">Uly maksatlara eltyän ýol —</h2>
        <h2 class="text-[#B2B2B2] animate-fade-in animation-delay-200">gymmatlyklaryмyz bilen başlaýar</h2>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        <FeatureCard v-for="(feature, index) in features" :key="feature.id" :feature="feature"
          :class="`animate-fade-in animation-delay-${(index + 1) * 100}`" />
      </div>
    </div>
  </section>
</template>

<script>
import FeatureCard from './FeatureCard.vue';
export default {
  components: {
    FeatureCard
  },
  data() {
    return {
      features: [
        {
          id: 1,
          icon: 'diamond',
          title: 'Ygtybarlylyк, Hil',
          description: 'Taslamalarymyzy jogapkärçilik bilen ýerine ýetirýäris. Her bir hyzmatdaşymyz bize doly ynam edip bilýär.'
        },
        {
          id: 2,
          icon: 'settings',
          title: 'Jogapkärçilik',
          description: 'Her bir ädimimizde jogapkärçiligi çemeleşýäris. Netijelerimizin arkasында berk durýarys.'
        },
        {
          id: 3,
          icon: 'innovation',
          title: 'Innowasiya',
          description: 'Täze tehnologiýalary we usullary işimize ornaşdyrýarys.'
        },
        {
          id: 4,
          icon: 'secury',
          title: 'Howpsuzlyk',
          description: 'Müşderilerin howpsuzlygy ileri tutulýar. Gurlušyk meýdançalarynda howpsuzlyk düzgünlerine eýerýäris.'
        },
        {
          id: 5,
          icon: 'clock',
          title: 'Wagta laýyklyk',
          description: 'Taslamalarymyzy bellenen möhletde tabşyrmak bizin borjumyzdyr. Müny hil bilen utgaşykly ýerine ýetirýäris.'
        },
        {
          id: 6,
          icon: 'customers',
          title: 'Müşderi kanagatlylygy',
          description: 'Müşderilerin işlegleri we tekipleri üns merkezimizdir.'
        }
      ],
    }
  }
}
</script>