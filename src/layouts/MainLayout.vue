<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated class="bg-dark text-font">
            <q-btn-group spread flat unelevated
                ><q-btn to="Informations"
                    ><q-img src="../assets/info.png" style="width:7vw"></q-img
                ></q-btn>
                <q-btn to="Douches"
                    ><q-img src="../assets/douche.png" style="width:7vw"></q-img
                ></q-btn>
                <q-btn to="Nourriture"
                    ><q-img
                        src="../assets/nourriture.png"
                        style="width:7vw"
                    ></q-img
                ></q-btn>
                <q-btn to="Toilettes"
                    ><q-img
                        src="../assets/toilette.png"
                        style="width:7vw"
                    ></q-img
                ></q-btn>
                <q-btn to="Necessites"
                    ><q-img
                        src="../assets/necessite.png"
                        style="width:7vw"
                    ></q-img></q-btn
            ></q-btn-group>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: "MainLayout",
    data() {
        return {};
    }
};
</script>
