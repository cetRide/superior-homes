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
        path: "/referral/:name/:id",
        name: "referral",
        component: () => import("../components/admin/referals"),
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
                    content: "East Africa's Leading Master-planned Real Estate Developer\n" +
                        "Superior Homes Kenya is East Africa’s first master-planned real estate developer.",
                },
                {
                    property: "og:description",
                    content: "East Africa's Leading Master-planned Real Estate Developer\n" +
                        "Superior Homes Kenya is East Africa’s first master-planned real estate developer",
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
                            content: "East Africa's Leading Master-planned Real Estate Developer\n" +
                                "Superior Homes Kenya is East Africa’s first master-planned real estate developer",
                        },
                        {
                            property: "og:description",
                            content: "East Africa's Leading Master-planned Real Estate Developer\n" +
                                "Superior Homes Kenya is East Africa’s first master-planned real estate developer",
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
                            content: "Talk to us today for all your real estate solutions.",
                        },
                        {
                            property: "og:description",
                            content: "Talk to us today for all your real estate solutions.",
                        },
                    ],
                },
            },
            { path: '/careers', redirect: 'https://shr.co.ke/careers' },
            {
                path: "/careers",
                name: "careers",
                component: () => import("../components/careers"),
                meta: {
                    title: "Superior Homes Kenya | Careers",
                    metaTags: [
                        {
                            name: "description",
                            content: "Superior Homes Kenya is East Africa’s first master-planned real estate developer.",
                        },
                        {
                            property: "og:description",
                            content: "Superior Homes Kenya is East Africa’s first master-planned real estate developer.",
                        },
                    ],
                },
            },
            { path: '/careers', redirect: '/b' },
            {
                path: "/about-us",
                name: "about",
                component: () => import("../components/about"),
                meta: {
                    title: "Superior Homes Kenya | About us",
                    metaTags: [
                        {
                            name: "description",
                            content: "Superior Homes Kenya PLC is a family-owned real estate development company that was registered in 2004. The company takes pride in being the pioneers of the open-plan gated community concept in the region, which is now recognized as the future for sustainable living in East Africa.\n",
                        },
                        {
                            property: "og:description",
                            content: "Superior Homes Kenya PLC is a family-owned real estate development company that was registered in 2004. The company takes pride in being the pioneers of the open-plan gated community concept in the region, which is now recognized as the future for sustainable living in East Africa.\n",
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
                            content: "Superior Homes develops beautiful houses within outstanding environments. View our gallery.\n",
                        },
                        {
                            property: "og:description",
                            content: "Superior Homes develops beautiful houses within outstanding environments. View our gallery.\n",
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
                            content: "Watch our videos and get to know our client testimonials.",
                        },
                        {
                            property: "og:description",
                            content: "Watch our videos and get to know our client testimonials.",
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
                            content: "We take pride in being the pioneers of the open-plan gated community concept in East Africa. Our vision is to become the largest and the most respected and trusted provider of new houses in East Africa\n",
                        },
                        {
                            property: "og:description",
                            content: "We take pride in being the pioneers of the open-plan gated community concept in East Africa. Our vision is to become the largest and the most respected and trusted provider of new houses in East Africa",
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
                            content: "We take pride in being the pioneers of the open-plan gated community concept in East Africa. Our vision is to become the largest and the most respected and trusted provider of new houses in East Africa\n",
                        },
                        {
                            property: "og:description",
                            content: "We take pride in being the pioneers of the open-plan gated community concept in East Africa. Our vision is to become the largest and the most respected and trusted provider of new houses in East Africa\n",
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
                            content: "We take pride in being the pioneers of the open-plan gated community concept in East Africa. Our vision is to become the largest and the most respected and trusted provider of new houses in East Africa\n",
                        },
                        {
                            property: "og:description",
                            content: "We take pride in being the pioneers of the open-plan gated community concept in East Africa. Our vision is to become the largest and the most respected and trusted provider of new houses in East Africa\n",
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
                            content: "Read our articles to get an intellectual depth and have an exceptional degree of insight",
                        },
                        {
                            property: "og:description",
                            content: "Read our articles to get an intellectual depth and have an exceptional degree of insight",
                        },
                    ],
                },
            },
            {
                path: "/blogs/article/:title",
                name: "Read Article",
                component: () => import("../components/media/read-article"),
                meta: {
                    title: "Superior Homes Kenya | Read Article",
                    metaTags: [
                        {
                            name: "description",
                            content: "Read our articles to get an intellectual depth and have an exceptional degree of insight",
                        },
                        {
                            property: "og:description",
                            content: "Read our articles to get an intellectual depth and have an exceptional degree of insight",
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
                path: "/admin/docs",
                name: "Documents",
                component: () => import("../components/admin/docs/index"),
            },
            {
                path: "/admin/referrals",
                name: "Referrals",
                component: () => import("../components/admin/redirects/index"),
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
