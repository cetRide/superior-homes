import {createRouter, createWebHistory} from "vue-router";
import Main from "../components/main";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/",
        name: "main",
        component: Main,
        meta: {
            title: "Superior Homes Kenya | Home",
            metaTags: [
                {
                    name: "description",
                    content: "The Home page of superior homes website.",
                },
                {
                    property: "og:description",
                    content: "The Home page of superior homes website.",
                },
            ],
        },
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("../components/home"),
                meta: {
                    title: "Superior Homes Kenya | Home",
                    metaTags: [
                        {
                            name: "description",
                            content: "The Home page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The Home page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/contact-us",
                name: "contact",
                component: () => import("../components/contact"),
                meta: {
                    title: "Superior Homes Kenya | Contact Us",
                    metaTags: [
                        {
                            name: "description",
                            content: "The Contact us page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The Contact us page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/careers",
                name: "careers",
                component: () => import("../components/careers"),
                meta: {
                    title: "Superior Homes Kenya | Careers",
                    metaTags: [
                        {
                            name: "description",
                            content: "The Careers page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The Careers page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/about-us",
                name: "about",
                component: () => import("../components/about"),
                meta: {
                    title: "Superior Homes Kenya | About us",
                    metaTags: [
                        {
                            name: "description",
                            content: "The Home page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The Home page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/view-gallery",
                name: "gallery",
                component: () => import("../components/gallery/index"),
                meta: {
                    title: "Superior Homes Kenya | Gallery",
                    metaTags: [
                        {
                            name: "description",
                            content: "The Gallery page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The Gallery page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/videos",
                name: "videos",
                component: () => import("../components/media/videos"),
                meta: {
                    title: "Superior Homes Kenya | Videos",
                    metaTags: [
                        {
                            name: "description",
                            content: "The Videos page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The Videos page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/faqs",
                name: "faqs",
                component: () => import("../components/media/faqs"),
                meta: {
                    title: "Superior Homes Kenya | FAQs",
                    metaTags: [
                        {
                            name: "description",
                            content: "The FAQs page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The FAQs page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/greenpark-estate",
                name: "Green Park",
                component: () => import("../components/properties/greenpark"),
                meta: {
                    title: "Superior Homes Kenya | GreenPark Estate",
                    metaTags: [
                        {
                            name: "description",
                            content: "The GreenPark Estate page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The GreenPark Estate page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/fadhili",
                name: "Fadhili",
                component: () => import("../components/properties/fadhili"),
                meta: {
                    title: "Superior Homes Kenya | Fadhili",
                    metaTags: [
                        {
                            name: "description",
                            content: "The Fadhili page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The Fadhili page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/pazuri-at-vipingo",
                name: "Pazuri at Vipingo",
                component: () => import("../components/properties/pazuri"),
                meta: {
                    title: "Superior Homes Kenya | Pazuri at Vipingo",
                    metaTags: [
                        {
                            name: "description",
                            content: "The Pazuri at Vipingo page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The Pazuri at Vipingo page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/articles",
                name: "Articles",
                component: () => import("../components/media/articles"),
                meta: {
                    title: "Superior Homes Kenya | Articles",
                    metaTags: [
                        {
                            name: "description",
                            content: "The Articles page of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The Articles page of superior homes website.",
                        },
                    ],
                },
            },
            {
                path: "/read-article/:id/:title",
                name: "Read Article",
                component: () => import("../components/media/read-article"),
                meta: {
                    title: "Superior Homes Kenya | Read Article",
                    metaTags: [
                        {
                            name: "description",
                            content: "The Read article of superior homes website.",
                        },
                        {
                            property: "og:description",
                            content: "The Read article of superior homes website.",
                        },
                    ],
                },
            },
        ]
    },
    {
        path: "/admin",
        redirect: "/admin/dashboard"
    },
    {
        path: "/admin/about/index",
        redirect: "/team-member"
    },
    {
        path: "/admin/home/index",
        redirect: "/property-listings"
    },
    {
        path: "/admin",
        name: "layout",
        component: () => import("../components/admin/layout"),
        children: [
            {
                path: "/admin/dashboard",
                name: "dashboard",
                component: () => import("../components/admin/dashboard"),
            },
            {
                path: "/admin/home/index",
                name: "Home-Index",
                component: () => import("../components/admin/home/index"),
                children: [
                    {
                        path: "/property-listings",
                        name: "Property Listing",
                        component: () => import("../components/admin/home/properities"),
                    },
                    {
                        path: "/brands",
                        name: "Brands",
                        component: () => import("../components/admin/home/brands"),
                    },
                    {
                        path: "/property-listings/:id",
                        name: "Property Details",
                        component: () => import("../components/admin/home/property-details"),
                    },
                ]
            },
            {
                path: "/admin/careers",
                name: "Admin-Careers",
                component: () => import("../components/admin/careers/index"),
            },
            {
                path: "/admin/about/index",
                name: "about-index",
                component: () => import("../components/admin/about-us/index"),
                children: [
                    {
                        path: "/team-member",
                        name: "Team",
                        component: () => import("../components/admin/about-us/team"),
                    },
                    {
                        path: "/board-member",
                        name: "Board",
                        component: () => import("../components/admin/about-us/board"),
                    },
                ]
            },
            {
                path: "/admin/media/index",
                name: "media-index",
                component: () => import("../components/admin/media/index"),
                children: [
                    {
                        path: "/manage-videos",
                        name: "Admin-Videos",
                        component: () => import("../components/admin/media/videos"),
                    },
                    {
                        path: "/manage-faqs",
                        name: "Admin-Faqs",
                        component: () => import("../components/admin/media/faqs"),
                    },
                    {
                        path: "/manage-articles",
                        name: "admin-Articles",
                        component: () => import("../components/admin/media/articles-index"),
                        children: [
                            {
                                path: "/add-article",
                                name: "Add-article",
                                component: () => import("../components/admin/media/articles"),
                            },
                            {
                                path: "/view-articles",
                                name: "Admin-Articles",
                                component: () => import("../components/admin/media/articles-manage"),
                            },
                        ]
                    },
                ]
            }
        ]
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    mode: history,
    routes,
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title);
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);
    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }
    Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
        (el) => el.parentNode.removeChild(el)
    );
    if (!nearestWithMeta) return next();
    nearestWithMeta.meta.metaTags
        .map((tagDef) => {
            const tag = document.createElement("meta");

            Object.keys(tagDef).forEach((key) => {
                tag.setAttribute(key, tagDef[key]);
            });
            tag.setAttribute("data-vue-router-controlled", "");
            return tag;
        })
        .forEach((tag) => document.head.appendChild(tag));
    next();
});

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
