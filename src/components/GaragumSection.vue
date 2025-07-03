<template>
    <section ref="garagumSection" class="w-full relative pb-20">
        <div class="absolute top-8 left-1/2 -translate-x-1/2">
            <img class="w-full h-full object-cover" src="/svgs/doganlar.svg">
        </div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full font-manrope font-bold text-[65px] tracking-[1%] leading-[130%] text-center text-white flex flex-col">
            <h1 :class="{ 'animate-fade-in': showAnimations }">Biz Garagum Kanaly bilen</h1>
            <p class="font-[500]" :class="{ 'animate-fade-in': showAnimations, 'animation-delay-200': showAnimations }">geljege ýol açýarys!</p>
        </div>
        <img class="w-full h-full object-cover" src="/imgs/garagum.webp">
    </section>
</template>

<script>
export default {
  data() {
    return {
      showAnimations: false
    }
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
  }
}
</script>