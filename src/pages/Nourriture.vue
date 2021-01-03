<template>
<<<<<<< HEAD
    <q-page class="flex flex-center">
        <gmap-map
            :center="this.$data.center"
            :zoom="15"
            :options="{
                fullscreenControl: false,
                disableDefaultUi: true,
                streetViewControl: false
            }"
            ><gmap-marker
                v-for="(m, index) in this.$data.markers"
                :key="index"
                :position="m.position"
            ></gmap-marker
        ></gmap-map>
    </q-page>
=======
    <q-page></q-page>
>>>>>>> 9710ce045a9d1cf860df4db9f27c10dd79930159
</template>

<script>
export default {
<<<<<<< HEAD
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
=======
    name: "Nourriture",
    data() {
        return {};
>>>>>>> 9710ce045a9d1cf860df4db9f27c10dd79930159
    }
};
</script>

<<<<<<< HEAD
<style scoped>
.vue-map-container {
    height: 92.5vh;
    width: 100vw;
}
</style>
=======
<style scoped></style>
>>>>>>> 9710ce045a9d1cf860df4db9f27c10dd79930159
