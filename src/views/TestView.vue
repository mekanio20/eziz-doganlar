<template>
    <div>
        <video ref="video" controls></video>
    </div>
</template>

<script>
import Hls from 'hls.js';

export default {
    mounted() {
        const video = this.$refs.video;
        const videoSrc = 'https://www.ajayypgurlusyk.com.tm/api/video/cut.m3u8'; // .m3u8 playlist URL'si

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = videoSrc;
            video.addEventListener('loadedmetadata', function () {
                video.play();
            });
        }
    },
};
</script>