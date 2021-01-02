<template>
    <gmap-map
        id="map"
        :center="center"
        :zoom="zoom"
        :map-type-id="mapTypeId"
    ></gmap-map>
</template>

<script>
export default {
    data() {
        return {
            center: { lat: 48.85450510484693, lng: 2.3465948626550723 },
            zoom: 7,
            mapTypeId: "terrain"
        };
    }
};
</script>

<style scoped>
#map {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
