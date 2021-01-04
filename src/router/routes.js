const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "/",
                component: () => import("pages/Index.vue")
            },
            {
                path: "/don",
                component: () => import("pages/Don.vue")
            },
            {
                path: "/mainmap",
                component: () => import("pages/MainMap.vue")
            },
            {
                path: "/informations",
                component: () => import("pages/Informations.vue")
            },
            {
                path: "/douches",
                component: () => import("pages/Douches.vue")
            },
            {
                path: "/nourriture",
                component: () => import("pages/Nourriture.vue")
            },
            {
                path: "/toilettes",
                component: () => import("pages/Toilettes.vue")
            },
            {
                path: "/necessites",
                component: () => import("pages/Necessites.vue")
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "*",
        component: () => import("pages/Error404.vue")
    }
];

export default routes;
