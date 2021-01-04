<template>
    <q-page class="flex flex-center">
        <gmap-map
            :center="this.$data.center"
            :zoom="15"
            :options="{
                fullscreenControl: false,
                disableDefaultUi: true,
                streetViewControl: false,
                mapTypeControl: false
            }"
        >
            <gmap-info-window
                :options="infoOptions"
                :position="infoWindowPos"
                :opened="infoWinOpen"
                @closeclick="infoWinOpen = false"
            ></gmap-info-window>
            <gmap-marker
                v-for="(m, index) in this.$data.markers"
                :key="index"
                :position="m.position"
                :clickable="true"
                @click="toggleInfoWindow(m, index)"
            >
            </gmap-marker>
        </gmap-map>
    </q-page>
</template>

<script>
export default {
    name: "Necessites",
    data() {
        return {
            center: { lat: 48.85450510484693, lng: 2.3465948626550723 },
            markers: [],
            infoWindowPos: null,
            infoWinOpen: false,
            currentMarkerIndex: null,

            infoOptions: {
                content: "",
                //optional: offset infowindow so it visually sits nicely on top of our marker
                pixelOffset: {
                    width: 0,
                    height: -35
                }
            }
        };
    },
    methods: {
        toggleInfoWindow: function(marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoOptions.content = marker.infoText;

            //check if its the same marker that was selected if yes toggle
            if (this.currentMarkerIndex == idx) {
                this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
                this.infoWinOpen = true;
                this.currentMarkerIndex = idx;
            }
        },
        getMarkers() {
            this.$axios.get("/necessites").then(response => {
                let res = response.data;

                for (let i = 0; i < res.length; i++) {
                    let marker = { infoText: "", position: { lat: 0, lng: 0 } };
                    marker.infoText = res[i].name;
                    marker.position = {
                        lat: Number(res[i].latitude),
                        lng: Number(res[i].longitude)
                    };

                    this.markers.push(marker);
                }
            });
        }
    },
    mounted() {
        this.getMarkers();
    }
};
</script>

<style scoped>
.vue-map-container {
    height: 100%;
    width: 100%;
    position: absolute;
    border: 0px;
}
</style>