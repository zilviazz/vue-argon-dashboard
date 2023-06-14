const dashboard = {
    path: '/dashboard',
    name: 'Dashboard',
    children:[
        {
            path: "",
            name: "Default",
            component: () => import('@/views/Dashboard/Default.vue'),
            meta: { auth: true },
        },
        {
            path: "tables",
            name: "Tables",
            component: () => import('@/views/Dashboard/ListView.vue'),
            meta: { auth: true },
        },
        {
            path: "todo",
            name: "ToDo",
            component: () => import('@/views/Dashboard/ToDo.vue'),
            meta: { auth: true },
        },
    ],
};

export default dashboard;