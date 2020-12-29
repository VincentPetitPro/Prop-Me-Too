<template>
    <q-page>
        <iframe
            src="https://opendata.paris.fr/explore/embed/dataset/sanisettesparis/map/?disjunctive.type&disjunctive.statut&disjunctive.arrondissement&disjunctive.horaire&disjunctive.acces_pmr&disjunctive.relais_bebe&basemap=jawg.dark&location=12,48.8398,2.29425&static=false&datasetcard=false&scrollWheelZoom=false"
            frameborder="0"
            style="position: absolute; height: 100%; width: 100%"
        ></iframe>
    </q-page>
</template>

<script>
export default {
    name: "Toilettes",
    data() {
        return {};
    }
};
</script>

<style scoped></style>
