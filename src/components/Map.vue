<template>
    <div id="map"></div>
</template>

<script>
export default {
    name: "Map",
    mounted() {
        let map = L.map('map').setView([37.958691, 58.422439], 15)

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)

        L.marker([37.958491, 58.422650]).addTo(map)
    }
}

</script>

<style>
#map {
    height: 450px;
}
</style>