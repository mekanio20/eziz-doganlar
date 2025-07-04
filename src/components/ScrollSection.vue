<template>
    <section ref="sectionRef" class="relative pb-20">
        <div :style="{ height: `${scenes.length * 100}vh` }">
            <div class="sticky top-0 h-screen w-full overflow-hidden">
                <transition-group name="fade" tag="div">
                    <div v-for="(scene, index) in scenes" :key="index" v-show="currentSceneIndex === index"
                        class="absolute inset-0">
                        <img :src="scene.image" class="w-full h-full object-cover" alt="scene" />
                        <div v-html="scene.html"></div>
                    </div>
                </transition-group>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ScrollSections",
    data() {
        return {
            scenes: [
                {
                    id: 1,
                    image: "/imgs/g1.webp",
                    html: `
                        <div class="w-[90%] md:w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <h2 class="font-manrope text-2xl md:text-5xl lg:text-[64px] font-bold capitalize mb-2">
                            Biz Garagum Kanaly bilen 
                            </h2>
                            <h2 class="font-manrope text-2xl md:text-5xl lg:text-[64px] font-bold capitalize">
                            geljege ýol açýarys!
                            </h2>
                        </div>
                    `
                },
                {
                    id: 2,
                    image: "/imgs/g2.webp",
                    html: `
                        <div class="w-[90%] md:w-[80%] absolute bottom-10 md:bottom-20 left-5 md:left-20 text-white">
                            <p class="font-manrope font-medium text-sm md:text-lg text-[#EDEDED]">
                            Turkmenistan, one of Central Asia’s driest countries, relies heavily on the Karakum Canal, a 1,375 km-long waterway that distributes Amu Darya’s waters across the nation. It irrigates vast farmlands, provides drinking water, and helps stabilize the ecology of arid regions. As a vital part of the national strategy, preserving its resources through modern, efficient water management is essential.
                            </p>
                        </div>
                    `
                },
                {
                    id: 3,
                    image: "/imgs/g3.webp",
                    html: `
                        <div class="w-[90%] md:w-[80%] absolute bottom-10 md:bottom-20 left-5 md:left-20 text-white">
                            <h2 class="font-manrope font-bold text-xl md:text-2xl text-[#EDEDED] pb-4 md:pb-6">
                            Eziz Doganlar’s Role in Water Security
                            </h2>
                            <p class="font-manrope font-medium text-sm md:text-lg text-[#EDEDED]">
                            Eziz Doganlar Economic Society has implemented key projects to enhance water infrastructure—building pumping stations, pipelines, reservoirs, and irrigation systems using modern engineering and environmentally conscious solutions.
                            </p>
                        </div>
                    `
                },
                {
                    image: "/imgs/g4.webp",
                    html: `
                        <div class="w-[90%] md:w-[70%] absolute bottom-10 left-5 md:left-10 text-white">
                            <p class="font-manrope font-medium text-sm md:text-lg text-[#EDEDED] pb-6 md:pb-10">
                            At Ýigit Economic Society: Built a 50,000 m³ reservoir, creating 1,000 hectares of irrigated farmland.
                            </p>
                            <p class="font-manrope font-medium text-sm md:text-lg text-[#EDEDED] pb-6 md:pb-10">
                            At Ýumak Economic Society: Constructed a large eco-sustainable reservoir, adapted to local soil and climate.
                            </p>
                            <p class="font-manrope font-medium text-sm md:text-lg text-[#EDEDED] pb-6 md:pb-10">
                            At Miwe Economic Society: Developed a full water supply system including pumping stations, high-pressure pipelines, and canals.
                            </p>
                            <p class="font-manrope font-medium text-sm md:text-lg text-[#EDEDED] pb-6 md:pb-10">
                            All projects included scientific soil analysis, erosion control, and gas-release systems for environmental stability.
                            </p>
                        </div>
                    `
                },
                {
                    image: "/imgs/g5.webp",
                    html: `
                        <div class="w-[90%] md:w-[80%] absolute bottom-10 left-5 md:left-10 text-white">
                            <h2 class="font-manrope font-bold text-xl md:text-2xl text-[#EDEDED] pb-6 md:pb-10">
                            Additional Key Projects
                            </h2>
                            <ul class="list-disc pl-5 md:pl-6">
                            <li class="font-manrope font-medium text-sm md:text-lg text-[#EDEDED] pb-3 md:pb-5">
                                Dozens of vehicle service complexes across the country    
                            </li>
                            <li class="font-manrope font-medium text-sm md:text-lg text-[#EDEDED] pb-3 md:pb-5">
                                Engineering for 250 ha of greenhouses and 4,000 ha of orchards
                            </li>
                            <li class="font-manrope font-medium text-sm md:text-lg text-[#EDEDED] pb-3 md:pb-5">
                                Cold storage facilities (6,000 tons each)
                            </li>
                            <li class="font-manrope font-medium text-sm md:text-lg text-[#EDEDED] pb-3 md:pb-5">
                                Ceramic and sanitary ware production plants
                            </li>
                            </ul>
                        </div>
                    `
                },
                {
                    image: "/imgs/g6.webp",
                    html: `
                        <div class="w-[90%] md:w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <h2 class="font-manrope text-lg md:text-2xl text-[#EDEDED] font-medium uppercase mb-4 md:mb-10">
                            Our Mission
                            </h2>
                            <h2 class="font-manrope text-xl md:text-4xl font-bold capitalize">
                            Eziz Doganlar remains committed to supporting national development, ensuring water security, ecological balance, and sustainable progress in line with the honorable goals set by Turkmenistan’s leadership.
                            </h2>
                        </div>
                    `
                }
            ],
            scrollY: 0,
            windowHeight: 0,
            sectionTop: 0,
        };
    },
    computed: {
        currentSceneIndex() {
            const offset = this.scrollY - this.sectionTop;
            const sceneHeight = this.windowHeight;
            const index = Math.floor(offset / sceneHeight);
            return Math.max(0, Math.min(this.scenes.length - 1, index));
        },
    },
    mounted() {
        this.windowHeight = window.innerHeight;
        this.sectionTop = this.$refs.sectionRef.offsetTop;

        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        handleScroll() {
            this.scrollY = window.scrollY;
        },
        handleResize() {
            this.windowHeight = window.innerHeight;
            this.sectionTop = this.$refs.sectionRef.offsetTop;
        },
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>