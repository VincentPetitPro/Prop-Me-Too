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
            ><gmap-marker
                v-for="(m, index) in this.$data.markers"
                :key="index"
                :position="m.position"
            ></gmap-marker
        ></gmap-map>
    </q-page>
</template>

<script>
export default {
    name: "Nourriture",
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

function downloadUrl(url,callback) {
 var request = window.ActiveXObject ?
     new ActiveXObject('Microsoft.XMLHTTP') :
     new XMLHttpRequest;

 request.onreadystatechange = function() {
   if (request.readyState == 4) {
     request.onreadystatechange = doNothing;
     callback(request, request.status);
   }
 };

 request.open('GET', url, true);
 request.send(null);
</script>

<style scoped>
.vue-map-container {
    height: 92.5vh;
    width: 100vw;
}
</style>

