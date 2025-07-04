<template>
    <section ref="sectionRef" class="relative pb-20">
        <div :style="{ height: `${scenes.length * 100}vh` }">
            <div class="sticky top-0 h-screen w-full overflow-hidden">
                <transition-group name="fade" tag="div">
                    <div v-for="(scene, index) in scenes" :key="index" v-show="currentSceneIndex === index"
                        class="absolute inset-0">
                        <img :src="images[index]" class="w-full h-full object-cover" />
                        <div v-html="scene.html"></div>
                    </div>
                </transition-group>
            </div>
        </div>
    </section>
</template>

<script>
import { scenes } from '@/data/index.js'
export default {
    name: "ScrollSections",
    data() {
        return {
            scenes: scenes[this.$i18n.locale],
            images: scenes.imgs,
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
    watch: {
        '$i18n.locale'() {
            this.scenes = scenes[this.$i18n.locale]
        }
    }
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