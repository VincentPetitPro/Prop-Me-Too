<template>
    <q-page class="flex flex-center">
        <g-map></g-map>
    </q-page>
</template>

<script>
import GMap from "components/GMap.vue";

export default {
    name: "PageIndex",
    data() {
        return {};
    },
    components: { "g-map": GMap }
};
</script>
