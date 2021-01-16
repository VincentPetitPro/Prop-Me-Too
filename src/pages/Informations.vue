<template>
    <q-page padding class="page">
        <h1>Prop Me Too</h1>
        <p>
            Cette borne a été mise en place pour venir en aide aux plus démunis.
        </p>
        <p>
            Celle-ci vous sera utile dans un premier temps pour vous renseigner
            sur les points sanitaires (douches/toilettes), de nourriture ainsi
            que de produits de premieres nécessités ouverts et accessibles.
        </p>
        <p>
            Dans un second temps, il vous sera aussi possible d'aider à votre
            échelle soit en déposant de Ia nourriture aux points indiqués soit
            en renseignant l'adresse de votre dépôt.
        </p>
        <p>
            Egalement, un espace de don vous sera disponible afin d'aider au
            mieux nos associations partenaires.
        </p>
        <p>Nos amitiés chaleureuses,</p>
        <p>
            Emma Bitton, Solène Vassent, Vincent Petit, Victor Bonneff et Julien
            Mirgaine
        </p>
        <q-img src="..\assets\logo.png" style="width: 10vw"></q-img>
    </q-page>
</template>

<script>
export default {
    name: "Informations",
    data() {
        return {};
    }
};
</script>

<style scoped>
.page {
    background-color: #dae5f7;
    font-size: 2vw;
    text-align: center;
}
h1 {
    font-size: 5vw;
    margin-top: 0;
    text-align: center;
}
p {
    margin: 3vh;
}
</style>
