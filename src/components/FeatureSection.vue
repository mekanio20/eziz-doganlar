<template>
  <section ref="featureSection"
    class="relative py-16 px-4 sm:px-6 lg:px-8 bg-fixed bg-[url('/imgs/bg-feature.webp')] min-h-screen mb-20">
    <div class="relative max-w-7xl mx-auto">
      <!-- Section Header -->
      <!-- <div class="flex flex-col space-y-3 font-manrope pb-16 max-w-full sm:max-w-3xl">
        <h2 class="text-white font-medium text-3xl sm:text-4xl md:text-5xl leading-snug"
          :class="{ 'animate-fade-in': showAnimations }">
          Uly maksatlara eltyän ýol —
        </h2>
        <h2 class="text-white/60 text-3xl sm:text-4xl md:text-5xl font-medium"
          :class="{ 'animate-fade-in': showAnimations, 'animation-delay-200': showAnimations }">
          gymmatlyklaryмyz bilen başlaýar
        </h2>
      </div> -->
      <div class="flex flex-col space-y-2 font-manrope pb-16">
        <h2 class="text-white text-3xl sm:text-4xl md:text-5xl font-medium"
          :class="{ 'animate-fade-in': showAnimations }">
          Uly maksatlara eltyän ýol —
        </h2>
        <h2 class="text-white/60 text-3xl sm:text-4xl md:text-5xl font-medium"
          :class="{ 'animate-fade-in': showAnimations, 'animation-delay-200': showAnimations }">
          gymmatlyklaryмyz bilen başlaýar
        </h2>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        <FeatureCard v-for="(feature, index) in features" :key="feature.id" :feature="feature"
          :class="showAnimations ? `animate-fade-in animation-delay-${(index + 1) * 100}` : ''" />
      </div>
    </div>
  </section>
</template>

<script>
import FeatureCard from './FeatureCard.vue';

export default {
  components: {
    FeatureCard,
  },
  data() {
    return {
      features: [
        {
          id: 1,
          icon: 'diamond',
          title: 'Ygtybarlylyк, Hil',
          description:
            'Taslamalarymyzy jogapkärçilik bilen ýerine ýetirýäris. Her bir hyzmatdaşymyz bize doly ynam edip bilýär.',
        },
        {
          id: 2,
          icon: 'settings',
          title: 'Jogapkärçilik',
          description:
            'Her bir ädimimizde jogapkärçiligi çemeleşýäris. Netijelerimiziň arkasında berk durýarys.',
        },
        {
          id: 3,
          icon: 'innovation',
          title: 'Innowasiya',
          description: 'Täze tehnologiýalary we usullary işimize ornaşdyrýarys.',
        },
        {
          id: 4,
          icon: 'secury',
          title: 'Howpsuzlyk',
          description:
            'Müşderilerin howpsuzlygy ileri tutulýar. Gurluşyk meýdançalarynda howpsuzlyk düzgünlerine eýerýäris.',
        },
        {
          id: 5,
          icon: 'clock',
          title: 'Wagta laýyklyk',
          description:
            'Taslamalarymyzy bellenen möhletde tabşyrmak bizin borjumyzdyr. Müny hil bilen utgaşykly ýerine ýetirýäris.',
        },
        {
          id: 6,
          icon: 'customers',
          title: 'Müşderi kanagatlylygy',
          description: 'Müşderilerin işlegleri we teklipleri üns merkezimizdir.',
        },
      ],
      showAnimations: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.showAnimations) {
            this.showAnimations = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    this.$nextTick(() => {
      const section = this.$refs.featureSection;
      if (section) observer.observe(section);
    });
  },
};
</script>