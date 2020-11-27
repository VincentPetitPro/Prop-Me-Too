<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated class="bg-dark text-font">
            <div class="row justify-around">
                <q-img src="../assets/info.png" style="width:10vw"></q-img>
                <q-img
                    src="../assets/nourriture.png"
                    style="width:10vw"
                ></q-img>
                <q-img
                    src="../assets/douche.png"
                    style="width:10vw"
                ></q-img>
                <q-img
                    src="../assets/toilette.png"
                    style="width:10vw"
                ></q-img>
                <q-img
                    src="../assets/necessite.png"
                    style="width:10vw"
                ></q-img>
            </div>
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
