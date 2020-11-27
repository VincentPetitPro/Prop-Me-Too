<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-list></q-list>
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
