<template>
    <q-page class="flex flex-center">
        <gmap-map
            id="map"
            :center="center"
            :zoom="zoom"
            :map-type-id="mapTypeId"
        ></gmap-map>
    </q-page>
</template>

<script>
import GMap from "components/GMap.vue";

export default {
    name: "PageIndex",
    data() {
        return {
            center: { lat: 48.85450510484693, lng: 2.3465948626550723 },
            zoom: 7,
            mapTypeId: "terrain"
        };
    }
    //components: { "g-map": GMap }
};
</script>

<style scoped>
#map {
    width: 100vw;
    height: 100vh;
}
</style>
