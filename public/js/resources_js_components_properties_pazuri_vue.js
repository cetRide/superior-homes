(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_properties_pazuri_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_pazuri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/pazuri */ "./resources/js/data/pazuri.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Pazuri",
  data: function data() {
    return {
      green_park: '/images/shk_properties/fadhili.jpg',
      pazuriData: _data_pazuri__WEBPACK_IMPORTED_MODULE_0__.default
    };
  },
  mounted: function mounted() {
    this.initMap();
  },
  methods: {
    reserve: function reserve(type) {
      console.log(type);
    },
    initMap: function initMap() {
      var uluru = {
        lat: -3.785953,
        lng: 39.803321
      };
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=template&id=573cb244&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=template&id=573cb244&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-573cb244");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-573cb244");

var _hoisted_1 = {
  "class": "parallax parallax-home"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "data-aos": "fade-up",
  "data-aos-duration": "2000",
  "class": "prop-landing-details"
};
var _hoisted_4 = {
  "class": "container"
};
var _hoisted_5 = {
  "class": "p-grid prop-top"
};
var _hoisted_6 = {
  "class": "p-col-12 p-md-12 p-lg-6 prop-desc"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "p-col-12 p-md-12 p-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  id: "map"
})], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "p-grid"
};
var _hoisted_9 = {
  "class": "p-col-12 p-md-6 p-lg-4"
};
var _hoisted_10 = {
  "class": "shk_property_type"
};
var _hoisted_11 = {
  "class": "image-wrap"
};
var _hoisted_12 = {
  "class": "tag"
};
var _hoisted_13 = {
  "class": "title"
};
var _hoisted_14 = {
  "class": "price"
};
var _hoisted_15 = {
  "class": "desc"
};
var _hoisted_16 = {
  "class": "icons"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/images/icons/bed.svg",
  alt: "bed-icon"
})], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "item"
};
var _hoisted_19 = {
  "class": "icons"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/images/icons/bath.svg",
  alt: "bathtub-icon"
})], -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "item"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icons"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/images/icons/parking.svg",
  alt: "parking-icon"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "item"
}, " Private Parking ")], -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "btn-sec"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"cont-form-wrapper\" style=\"margin:30px 0 10px 0;width:100% !important;\" data-v-573cb244><div class=\"form-title\" data-v-573cb244><div data-v-573cb244><img src=\"/images/logos/logo_1.png\" alt=\"Superior homes logo\" data-v-573cb244></div><div data-v-573cb244><h2 data-v-573cb244>Send us an Inquiry</h2></div></div><div class=\"form-container\" data-v-573cb244><div class=\"p-grid properties-cont\" data-v-573cb244><div class=\"p-col-12 p-2 p-md-6 p-lg-6\" data-v-573cb244><div data-v-573cb244><input type=\"text\" required placeholder=\"First Name\" data-v-573cb244></div></div><div class=\"p-col-12 p-2 p-md-6 p-lg-6\" data-v-573cb244><div data-v-573cb244><input type=\"text\" required placeholder=\"Last Name\" data-v-573cb244></div></div><div class=\"p-col-12 p-2 p-md-6 p-lg-6\" data-v-573cb244><div data-v-573cb244><input type=\"text\" required placeholder=\"Email Address\" data-v-573cb244></div></div><div class=\"p-col-12 p-2 p-md-6 p-lg-6\" data-v-573cb244><div data-v-573cb244><input type=\"text\" required placeholder=\"Phone number\" data-v-573cb244></div></div></div><div data-v-573cb244><textarea name=\"message\" id=\"\" cols=\"100\" data-v-573cb244></textarea></div><button style=\"margin-top:20px;\" class=\"shk-btns\" data-v-573cb244> Send Message </button></div></div>", 1);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pazuriData.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pazuriData.sub), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "prop-btn",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.reserve($data.pazuriData.title);
    })
  }, " Reserve Now ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pazuriData.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pazuriData.sub), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pazuriData.abt), 1
  /* TEXT */
  )]), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.pazuriData.type, function (data) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
      src: data.img,
      alt: data.name
    }, null, 8
    /* PROPS */
    , ["src", "alt"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.price), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.abt), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.beds) + " Bedrooms ", 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.baths) + " Bathrooms ", 1
    /* TEXT */
    )]), _hoisted_22]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      "class": "properties-btn",
      onClick: function onClick($event) {
        return $options.reserve(data.name);
      }
    }, " Reserve ", 8
    /* PROPS */
    , ["onClick"])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), _hoisted_24])]);
});

/***/ }),

/***/ "./resources/js/data/pazuri.js":
/*!*************************************!*\
  !*** ./resources/js/data/pazuri.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pazuri = {
  title: 'Pazuri at Vipingo',
  sub: 'Luxury Within Reach',
  abt: 'Pazuri at Vipingo is a master-planned residential and holiday home estate located in Vipingo, adjacent to the luxurious Vipingo Ridge. The estate consists of 372 affordable and luxurious units with a choice of two, three, and four-bedroom villas, each on a quarter-acre with scenic and unparalleled views of the Indian Ocean. All villas have large and private gardens, a roof terrace for entertainment, spacious open-plan kitchens, and luxurious lounge areas. Additionally, all bedrooms are master en-suite. The houses are all designed with the coastal climate in mind, with high ceilings and large windows. In addition, a total of 45 quarter acre self-build serviced plots are also available at an elevated prime location within the Pazuri Vipingo site for those who wish to purchase and self-build their homes. All plots have stunning views of the Indian Ocean and are fully serviced with provisions for water and electricity already in place, as well as an easy access road.',
  type: [{
    name: '2 Bedroom Villa',
    price: 'Ksh 12.98M',
    beds: '2',
    baths: '3',
    abt: 'This 2 bedroom is 132 square metres, occupies a 1/4 acre parcel of land, has 2 master bedrooms ensuite, an open plan kitchen, dining & lounge area, Roof terrace, Laundry area, and a private Car parking',
    img: '/images/shk_properties/pazuri/type/4.jpg'
  }, {
    name: '3 Bedroom Villa',
    price: 'Ksh 16.98M',
    beds: '3',
    baths: '4',
    abt: 'This 3 bedroom is 192 square metres, occupies a 1/4 acre parcel of land, has 3 master bedrooms ensuite, an open plan kitchen, dining & lounge area, Roof terrace, Laundry area, and a private car parking',
    img: '/images/shk_properties/pazuri/type/2.jpg'
  }, {
    name: '4 Bedroom Villa',
    price: 'Ksh 20.98M',
    beds: '4',
    baths: '5',
    abt: 'This 4 bedroom villa is 226 square metres, occupies a 1/4 acre parcel of land, has 4 master bedrooms ensuite, an open plan kitchen, dining & lounge area, Roof terrace, Laundry area, and a private car parking',
    img: '/images/shk_properties/pazuri/type/3.jpg'
  }, {
    name: '3 Bedroom Maisonette',
    price: 'Ksh 17.98 M',
    beds: '3',
    baths: '4',
    abt: 'This 3 bedroom is 192 square metres, occupies a 1/4 acre parcel of land, has 3 master bedrooms ensuite, an open plan kitchen, dining & lounge area, Roof terrace, Laundry area, and a private car parking',
    img: '/images/shk_properties/pazuri/type/4.jpg'
  }, {
    name: '3 Bedroom Maisonette 2',
    price: 'Ksh 17.98 M',
    beds: '3',
    baths: '4',
    abt: 'This 3 bedroom occupies a 1/4 acre parcel of land, has 3 master bedrooms ensuite, an open plan kitchen, dining & lounge area, Roof terrace, Laundry area, and a private car parking',
    img: '/images/shk_properties/pazuri/type/5.jpg'
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pazuri);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#map[data-v-573cb244] {\n    height: 300px;\n    width: 100%;\n}\n.parallax-home[data-v-573cb244] {\n    background-image: url('/images/shk_properties/Pazuri_at_Vipingo.jpg');\n    height: 100vh;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pazuri_vue_vue_type_style_index_0_id_573cb244_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pazuri_vue_vue_type_style_index_0_id_573cb244_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pazuri_vue_vue_type_style_index_0_id_573cb244_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/properties/pazuri.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/properties/pazuri.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pazuri_vue_vue_type_template_id_573cb244_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pazuri.vue?vue&type=template&id=573cb244&scoped=true */ "./resources/js/components/properties/pazuri.vue?vue&type=template&id=573cb244&scoped=true");
/* harmony import */ var _pazuri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pazuri.vue?vue&type=script&lang=js */ "./resources/js/components/properties/pazuri.vue?vue&type=script&lang=js");
/* harmony import */ var _pazuri_vue_vue_type_style_index_0_id_573cb244_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css */ "./resources/js/components/properties/pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css");




;
_pazuri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _pazuri_vue_vue_type_template_id_573cb244_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_pazuri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-573cb244"
/* hot reload */
if (false) {}

_pazuri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/properties/pazuri.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_pazuri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/properties/pazuri.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/properties/pazuri.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pazuri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pazuri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pazuri.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/properties/pazuri.vue?vue&type=template&id=573cb244&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/properties/pazuri.vue?vue&type=template&id=573cb244&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pazuri_vue_vue_type_template_id_573cb244_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pazuri_vue_vue_type_template_id_573cb244_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pazuri.vue?vue&type=template&id=573cb244&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=template&id=573cb244&scoped=true");


/***/ }),

/***/ "./resources/js/components/properties/pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/properties/pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pazuri_vue_vue_type_style_index_0_id_573cb244_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/pazuri.vue?vue&type=style&index=0&id=573cb244&scoped=true&lang=css");


/***/ })

}]);