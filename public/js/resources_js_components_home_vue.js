(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_homeproperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/homeproperties */ "./resources/js/data/homeproperties.js");
/* harmony import */ var primevue_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/carousel */ "./node_modules/primevue/carousel/carousel.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "home",
  components: {
    Carousel: primevue_carousel__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      responsiveOptions: [{
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      }, {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 2
      }, {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
      }],
      property: [],
      properties: [{
        title: 'Lake Elementaita Mountain Lodge',
        sub: 'A Glance of Paradise',
        img: 'lem.jpg',
        route: '',
        url: 'https://leml.co.ke/'
      }, {
        title: 'The Greenpark Sundowner Hotel',
        sub: 'Eat, Drink, Play, Enjoy',
        img: 'home_10.jpg',
        route: '',
        url: 'https://greenparksundowner.co.ke/'
      }, {
        title: 'Greenpark Estate',
        sub: 'Where Dreams Come Home',
        img: 'home_1.jpg',
        route: 'Green Park',
        url: ''
      }, {
        title: 'Pazuri at Vipingo',
        sub: 'Luxury Within Reach',
        img: 'home_5.jpg',
        route: 'Pazuri at Vipingo',
        url: ''
      }, {
        title: 'Fadhili Retirement Village',
        sub: 'A Retirement Oasis in the City',
        img: 'home_9.jpg',
        route: 'Fadhili',
        url: ''
      }]
    };
  },
  mounted: function mounted() {
    this.showProperties();
  },
  methods: {
    showProperties: function showProperties() {
      var _this = this;

      axios.get("/api/get-all-property").then(function (res) {
        _this.property = res.data;
      }, function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-fa6affac");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-fa6affac");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"parallax\" style=\"height:100vh;\" data-v-fa6affac><ul class=\"slideshow\" data-v-fa6affac><li data-v-fa6affac><span style=\"background-image:url(&#39;/images/shk_properties/home_1.jpg&#39;);\" data-v-fa6affac></span></li><li data-v-fa6affac><span style=\"background-image:url(&#39;/images/banner/home_3.jpg&#39;);\" data-v-fa6affac></span></li><li data-v-fa6affac><span style=\"background-image:url(&#39;/images/banner/home_4.jpg&#39;);\" data-v-fa6affac></span></li><!--                &lt;li&gt;&lt;span style=&quot;background-image: url(&#39;/images/shk_properties/home_5.jpg&#39;)&quot;&gt;&lt;/span&gt;&lt;/li&gt;--><!--                &lt;li&gt;&lt;span style=&quot;background-image: url(&#39;/images/banner/home_2.jpg&#39;)&quot;&gt;&lt;/span&gt;&lt;/li&gt;--></ul></div>", 1);

var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "data-aos": "fade-up",
  "data-aos-duration": "1000",
  "class": "top-landing-details"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", null, "Superior Homes Kenya", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", null, "East Africa's Leading Master-planned Real Estate Developer")], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Superior Homes Kenya is East Africa’s first master-planned real estate developer", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "landing-btn"
}, " Learn more ", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": ""
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  style: {
    "font-size": "30px"
  },
  "class": "text-center my-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("OUR REAL ESTATE "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  style: {
    "color": "#F68D2E"
  }
}, "LISTINGS")], -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "item-content"
};
var _hoisted_11 = {
  "class": "shk_property"
};
var _hoisted_12 = {
  "class": "image-wrap"
};
var _hoisted_13 = {
  "class": "item-desc"
};
var _hoisted_14 = {
  "class": "title"
};
var _hoisted_15 = {
  key: 0
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "https://leml.co.ke/",
  target: "_blank",
  rel: "noopener noreferrer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "more-btn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-arrow-right"
})])], -1
/* HOISTED */
);

var _hoisted_17 = {
  key: 1
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "'https://greenparksundowner.co.ke/'",
  target: "_blank",
  rel: "noopener noreferrer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "more-btn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-arrow-right"
})])], -1
/* HOISTED */
);

var _hoisted_19 = {
  key: 2
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "more-btn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-arrow-right"
})], -1
/* HOISTED */
);

var _hoisted_21 = {
  key: 3
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "more-btn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-arrow-right"
})], -1
/* HOISTED */
);

var _hoisted_23 = {
  key: 4
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "more-btn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-arrow-right"
})], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Carousel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, _hoisted_5, _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/about-us"
  }, {
    "default": _withId(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carousel, {
    value: $data.property,
    numVisible: 3,
    numScroll: 1,
    responsiveOptions: $data.responsiveOptions,
    "class": "custom-carousel",
    circular: true,
    autoplayInterval: 2000
  }, {
    item: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
        src: slotProps.data.img,
        alt: slotProps.data.title
      }, null, 8
      /* PROPS */
      , ["src", "alt"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.title), 1
      /* TEXT */
      ), slotProps.data.title === 'Lake Elementaita Mountain Lodge' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_15, [_hoisted_16])) : slotProps.data.title === 'The Greenpark Sundowner Hotel' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_17, [_hoisted_18])) : slotProps.data.title === 'Fadhili Retirement Village' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/fadhili"
      }, {
        "default": _withId(function () {
          return [_hoisted_20];
        }),
        _: 1
        /* STABLE */

      })])) : slotProps.data.title === 'Pazuri at Vipingo' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/pazuri-at-vipingo"
      }, {
        "default": _withId(function () {
          return [_hoisted_22];
        }),
        _: 1
        /* STABLE */

      })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/greenpark-estate"
      }, {
        "default": _withId(function () {
          return [_hoisted_24];
        }),
        _: 1
        /* STABLE */

      })]))])])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "responsiveOptions"])])])]);
});

/***/ }),

/***/ "./resources/js/data/homeproperties.js":
/*!*********************************************!*\
  !*** ./resources/js/data/homeproperties.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var homeproperties = [{
  title: 'Greenpark Estate',
  sub: 'Where Dreams Come Home',
  img: '/images/shk_properties/GPhomepage.jpg',
  route: 'Green Park',
  url: ''
}, {
  title: 'Pazuri at Vipingo',
  sub: 'Luxury Within Reach',
  img: '/images/shk_properties/Pazuri_at_Vipingo.jpg',
  route: 'Pazuri at Vipingo',
  url: ''
}, {
  title: 'Fadhili Retirement Village',
  sub: 'A Retirement Oasis in the City',
  img: '/images/shk_properties/fadhili.jpg',
  route: 'Fadhili',
  url: ''
}, {
  title: 'Lake Elementaita Mountain Lodge',
  sub: 'A Glance of Paradise',
  img: '/images/shk_properties/lem.jpg',
  route: '',
  url: 'https://leml.co.ke/'
}, {
  title: 'The Greenpark Sundowner Hotel',
  sub: 'Eat, Drink, Play, Enjoy',
  img: '/images/shk_properties/sundowner.jpg',
  route: '',
  url: 'https://greenparksundowner.co.ke/'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeproperties);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.parallax-home[data-v-fa6affac] {\n    background-image: url('/images/shk_general/gphomesmall.jpg');\n    height: 100vh;\n}\n.item-content[data-v-fa6affac] {\n    border-radius: 3px;\n    margin: .3rem;\n    text-align: center;\n    padding: 0.5rem 0;\n}\n\n/*<img src=\"/images/shk_properties/Pazuri_at_Vipingo.jpg\" alt=\"Slider\">*/\n/*<img src=\"/images/shk_general/gphomesmall.jpg\" alt=\"Slider\">*/\n/*<img src=\"/images/shk_general/Greenpark_SHK_Drone_3.jpg\" alt=\"Slider\">*/\n/*<img src=\"/images/shk_properties/sundowner.jpg\" alt=\"Slider\">*/\n/*<img src=\"/images/shk_properties/leml.jpg\" alt=\"Slider\">*/\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_fa6affac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=fa6affac&scoped=true */ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true");
/* harmony import */ var _home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js */ "./resources/js/components/home.vue?vue&type=script&lang=js");
/* harmony import */ var _home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css */ "./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css");




;
_home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _home_vue_vue_type_template_id_fa6affac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-fa6affac"
/* hot reload */
if (false) {}

_home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/home.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true":
/*!************************************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_home_vue_vue_type_template_id_fa6affac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_home_vue_vue_type_template_id_fa6affac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./home.vue?vue&type=template&id=fa6affac&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=template&id=fa6affac&scoped=true");


/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_home_vue_vue_type_style_index_0_id_fa6affac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home.vue?vue&type=style&index=0&id=fa6affac&scoped=true&lang=css");


/***/ })

}]);