<template>
  <section ref="featureSection"
    class="relative py-16 px-4 sm:px-6 lg:px-8 bg-fixed bg-[url('/imgs/bg-feature.webp')] min-h-screen mb-20">
    <div class="relative max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col space-y-2 font-manrope pb-16">
        <h2 class="text-white text-3xl sm:text-4xl md:text-5xl font-medium"
          :class="{ 'animate-fade-in': showAnimations }">
          {{ $t('features.title1') }}
        </h2>
        <h2 class="text-white/60 text-3xl sm:text-4xl md:text-5xl font-medium"
          :class="{ 'animate-fade-in': showAnimations, 'animation-delay-200': showAnimations }">
          {{ $t('features.title2') }}
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
import { features } from '@/data/index.js'

export default {
  components: {
    FeatureCard,
  },
  data() {
    return {
      features: features[this.$i18n.locale],
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
  watch: {
    '$i18n.locale'() {
      this.features = features[this.$i18n.locale]
    }
  }
};
</script>