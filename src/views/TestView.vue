<template>
    <div class="min-h-[800vh] bg-gray-100">
        <div class="h-screen flex items-center justify-center sticky top-0">
            <video ref="videoRef" class="w-[1200px] border rounded-lg shadow-lg" muted preload="auto" playsinline>
                <source src="/videos/water.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
            </video>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lastScrollTime: 0,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const video = this.$refs.videoRef;
            if (!video || video.readyState < 2) return;

            // Scroll hızını hesapla
            const currentScrollTop = window.scrollY;
            const deltaY = Math.abs(currentScrollTop - this.lastScrollTop);
            this.lastScrollTop = currentScrollTop;

            // Delta'yı süreye çevir (örneğin deltaY / 100)
            let timeToAdd = deltaY / 100; // çok hızlıysa daha fazla saniye eklenir

            // Max ve min sınırlama (aşırı scroll'u engelle)
            timeToAdd = Math.min(Math.max(timeToAdd, 0.05), 1.5); // 0.05s - 1.5s arası

            // Eğer sona ulaştıysa başa sar, değilse süre ekle
            if (video.currentTime + timeToAdd >= video.duration) {
                video.currentTime = 0;
            } else {
                video.currentTime += timeToAdd;
            }

            video.pause(); // otomatik oynatma olmasın

            // Opsiyonel: scroll durduysa yapılacaklar
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                // Video zaten duraklatıldı
            }, 100);
        },
    }
};
</script>