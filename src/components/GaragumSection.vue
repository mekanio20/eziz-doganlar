<template>
  <section ref="garagumSection" class="w-full relative pb-20">
    <!-- Arka plan SVG, pozisyonu responsive olarak ayarlanıyor -->
    <div 
      class="absolute top-8 left-1/2 -translate-x-1/2 w-[90vw] max-w-[600px] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw]"
      >
      <img class="w-full lg:h-[80px] sm:h-[60px] h-[40px] object-contain" src="/svgs/doganlar.svg" alt="Doganlar Illustration" />
    </div>

    <!-- Metin alanı, font boyutları ve spacing responsive -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90vw] px-4 font-manrope font-bold text-center text-white flex flex-col"
    >
      <h1
        :class="[
          'leading-[130%] tracking-[1%]',
          showAnimations ? 'animate-fade-in' : '',
          'text-[28px] sm:text-[40px] md:text-[50px] lg:text-[65px]'
        ]"
      >
        Biz Garagum Kanaly bilen
      </h1>
      <p
        :class="[
          'font-medium mt-2',
          showAnimations ? 'animate-fade-in animation-delay-200' : '',
          'text-[28px] sm:text-[40px] md:text-[50px] lg:text-[65px]'
        ]"
      >
        geljege ýol açýarys!
      </p>
    </div>

    <!-- Arka plan resmi -->
    <img
      class="w-full h-auto object-cover"
      src="/imgs/g6.webp"
      alt="Garagum Background"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
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
      const section = this.$refs.garagumSection;
      if (section) observer.observe(section);
    });
  },
};
</script>