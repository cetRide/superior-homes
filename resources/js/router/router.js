import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/home";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
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
        path: "/about",
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
        path: "/gallery",
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
        path: "/green-park",
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
            title: "Superior Homes Kenya | Pazuri at Vipingo",
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
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
