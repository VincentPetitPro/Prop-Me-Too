<template>
    <div class="bg">
        <q-page class="flex flex-center background-black">
            <q-btn to="MainMap" class="btn shadow-2">
                <h3>RENSEIGNEMENTS</h3>
                <p>douches/toilettes publiques</p>
                <p>don de première nécessité</p>
                <p>point de nourriture gratuite</p>
            </q-btn>
            <q-img src="../assets/logo.png" style="width: 20vw"></q-img>
            <q-btn to="Don" class="btn shadow-2">
                <h3>venir en aide</h3>
                <p>faire un don</p>
                <p>dépôt de nourriture</p>
                <p>dépôt de première nécessité</p>
            </q-btn>
        </q-page>
    </div>
</template>

<script>
export default {
    name: "PageIndex",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
.bg {
    background: #dae5f7;
}
.btn {
    background: #ffffff;
    color: #2e3d53;
    height: 55vh;
    width: 35vw;
}
h3 {
    padding: 0;
    margin: 1vh;
    font-weight: bold;
}
p {
    font-size: 2vw;
    padding: 0;
    margin: 2vh;
}
</style>
