<template>
    <q-page class="flex flex-center">
        <gmap-map
            :center="this.$data.center"
            :zoom="15"
            :options="{
                fullscreenControl: false,
                disableDefaultUi: true,
                streetViewControl: false
            }"
        ></gmap-map>
        <gmap-marker
            v-for="(m, index) in this.$data.markers"
            :key="index"
            :position="m.position"
        ></gmap-marker>
    </q-page>
</template>

<script>
export default {
    name: "PageIndex",
    data() {
        return {
            center: { lat: 48.85450510484693, lng: 2.3465948626550723 },
            markers: [
                {
                    position: { lat: 10.0, lng: 10.0 }
                },
                {
                    position: { lat: 11.0, lng: 11.0 }
                }
            ]
        };
    }
};
</script>

<style scoped>
.vue-map-container {
    height: 92.5vh;
    width: 100vw;
}
</style>
