<template>
    <div id="map">Hello</div>
</template>

<script>
export default {
    mounted: function() {
        this.$nextTick(this.initMap());
    },
    methods: {
        initMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
                mapTypeId: "roadmap",
                center: this.mapCenter,
                zoom: 8,
                maxZoom: 20,
                minZoom: 3,
                streetViewControl: true,
                fullscreenControl: false,
                styles: [
                    {
                        elementType: "geometry",
                        stylers: [{ color: "#242f3e" }]
                    },
                    {
                        elementType: "labels.text.stroke",
                        stylers: [{ color: "#242f3e" }]
                    },
                    {
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#746855" }]
                    },
                    {
                        featureType: "administrative.locality",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }]
                    },
                    {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }]
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{ color: "#263c3f" }]
                    },
                    {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#6b9a76" }]
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{ color: "#38414e" }]
                    },
                    {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#212a37" }]
                    },
                    {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#9ca5b3" }]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{ color: "#746855" }]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#1f2835" }]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#f3d19c" }]
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{ color: "#2f3948" }]
                    },
                    {
                        featureType: "transit.station",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }]
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{ color: "#17263c" }]
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#515c6d" }]
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.stroke",
                        stylers: [{ color: "#17263c" }]
                    }
                ]
            });
        }
    },
    data() {
        return {
            map: null,
            mapCenter: { lat: 48.85450510484693, lng: 2.3465948626550723 }
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
