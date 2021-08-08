(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_about_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/carousel */ "./node_modules/primevue/carousel/carousel.esm.js");
/* harmony import */ var _data_team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/team */ "./resources/js/data/team.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Carousel: primevue_carousel__WEBPACK_IMPORTED_MODULE_0__.default
  },
  name: "about",
  data: function data() {
    return {
      team: [],
      board: [],
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
      }]
    };
  },
  mounted: function mounted() {
    this.showBoardMembers();
    this.showBoardTeam();
  },
  methods: {
    showBoardMembers: function showBoardMembers() {
      var _this = this;

      axios.get("/api/get-all-board").then(function (res) {
        _this.board = res.data;
      }, function (error) {
        console.log(error);
      });
    },
    showBoardTeam: function showBoardTeam() {
      var _this2 = this;

      axios.get("/api/get-all-team").then(function (res) {
        _this2.team = res.data;
      }, function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=template&id=0b0aedd2&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=template&id=0b0aedd2&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-0b0aedd2");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0b0aedd2");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"parallax\" style=\"height:100vh;\" data-v-0b0aedd2><ul class=\"slideshow\" data-v-0b0aedd2><li data-v-0b0aedd2><span style=\"background-image:url(&#39;/images/banner/t1.jpg&#39;);\" data-v-0b0aedd2></span></li><li data-v-0b0aedd2><span style=\"background-image:url(&#39;/images/banner/t2.jpg&#39;);\" data-v-0b0aedd2></span></li><li data-v-0b0aedd2><span style=\"background-image:url(&#39;/images/banner/t3.jpg&#39;);\" data-v-0b0aedd2></span></li><!--                &lt;li&gt;&lt;span style=&quot;background-image: url(&#39;/images/banner/t4.jpg&#39;)&quot;&gt;&lt;/span&gt;&lt;/li&gt;--><!--                &lt;li&gt;&lt;span style=&quot;background-image: url(&#39;/images/banner/t5.jpg&#39;)&quot;&gt;&lt;/span&gt;&lt;/li&gt;--></ul></div>", 1);

var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "about-page"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"mission\" data-v-0b0aedd2><div class=\"p-grid\" data-v-0b0aedd2><div class=\"p-col-12 p-md-6 p-lg-6\" style=\"text-align:justify;\" data-v-0b0aedd2><h3 data-v-0b0aedd2>Our Mission</h3><p class=\"p-text-bold\" data-v-0b0aedd2>To Innovate, Improve &amp; Inspire.</p><p data-v-0b0aedd2> Superior Homes Kenya PLC is a family-owned real estate development company that was registered in 2004. The company takes pride in being the pioneers of the open-plan gated community concept in the region, which is now recognized as the future for sustainable living in East Africa. Superior Homes plans to diversify into hospitality and leisure by offering holidays at its three sites while continuing to develop beautiful houses within outstanding environments. </p></div><div class=\"p-col-12 p-md-6 p-lg-6\" data-v-0b0aedd2><h3 data-v-0b0aedd2>Our Vision</h3><p class=\"p-text-bold\" data-v-0b0aedd2>To become the Largest and Most Trusted Provider of New Houses in East Africa.</p><p data-v-0b0aedd2>Our vision is to become the largest and the most respected and trusted provider of new houses in East Africa while engaging positively and to the mutual benefit of customers, staff, contractors, suppliers, and the wider community.</p></div></div></div><div class=\"team-statement\" data-v-0b0aedd2><h2 data-v-0b0aedd2>The Team</h2><p class=\"quote\" data-v-0b0aedd2><strong data-v-0b0aedd2>“</strong><i data-v-0b0aedd2>Individual commitment to a group effort. That is what makes a team work, a company work, a society work, a civilisation work.</i><strong data-v-0b0aedd2>”</strong></p><span data-v-0b0aedd2>- Vince Lombardi</span></div>", 2);

var _hoisted_6 = {
  "class": "team-wrap"
};
var _hoisted_7 = {
  "class": "team-card"
};
var _hoisted_8 = {
  "class": "pic"
};
var _hoisted_9 = {
  "class": "desc"
};
var _hoisted_10 = {
  "class": "title"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "team-statement"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", null, "Meet The Board"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "quote"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", null, "“"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", null, "”")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "- Andrew Carnegie")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "team-wrap"
};
var _hoisted_13 = {
  "class": "team-card"
};
var _hoisted_14 = {
  "class": "pic"
};
var _hoisted_15 = {
  "class": "desc"
};
var _hoisted_16 = {
  "class": "title"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Carousel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                team scroll"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carousel, {
    value: $data.team,
    numVisible: 3,
    numScroll: 1,
    responsiveOptions: $data.responsiveOptions,
    "class": "custom-carousel",
    circular: true,
    autoplayInterval: 3000
  }, {
    item: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
        src: slotProps.data.img,
        alt: slotProps.data.name
      }, null, 8
      /* PROPS */
      , ["src", "alt"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.name), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.title), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.abt), 1
      /* TEXT */
      )])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "responsiveOptions"])]), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carousel, {
    value: $data.board,
    numVisible: 3,
    numScroll: 1,
    responsiveOptions: $data.responsiveOptions,
    "class": "custom-carousel",
    circular: true,
    autoplayInterval: 3000
  }, {
    item: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
        src: slotProps.data.img,
        alt: slotProps.data.name
      }, null, 8
      /* PROPS */
      , ["src", "alt"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.name), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.title), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.abt), 1
      /* TEXT */
      )])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "responsiveOptions"])])])])]);
});

/***/ }),

/***/ "./resources/js/data/team.js":
/*!***********************************!*\
  !*** ./resources/js/data/team.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var team = [{
  img: '/images/users/team/wanjiru.jpg',
  name: 'Louisa Wanjiru',
  position: 'Brand and Marketing Coordinator',
  desc: 'Louisa Wanjiru holds a Bachelors Degree in International Business Administration from the United States International University.'
}, {
  img: '/images/users/team/yvonne.jpg',
  name: 'Yvonne Ondego',
  position: 'Project and Site Manager',
  desc: 'Yvonne Ondego holds a Bachelors Degree in Architectural studies from the University of Nairobi. '
}, {
  img: '/images/users/team/clive.jpg',
  name: 'Clive Ndege',
  position: 'Head of Sales',
  desc: 'Clive Ndege holds a Masters Degree in Finance & Investments from University of Nairobi.   '
}, {
  img: '/images/users/team/kungu.jpg',
  name: 'Daniel Kungu',
  position: 'Finance Manager',
  desc: 'Daniel Kungu joined Superior Homes in 2011. Daniel is a Bachelors of Commerce graduate from Kenyatta University and a CPA Finalist.'
}, {
  img: '/images/users/board/shiv.jpg',
  name: 'Shiv Arora',
  position: 'Chief Executive Officer',
  desc: 'Shiv Arora holds a BSc. Hons in Economics from the University of Warwick and serves as the Chief Executive Officer'
}, {
  img: '/images/users/team/silvano.jpg',
  name: 'Silvano Inyangala',
  position: 'In-house Architect',
  desc: 'Silvano Inyangala holds a Bachelor of Arts in Urban and Regional Planning (with IT) from Maseno University. He serves as the In-House Architect.'
}, {
  img: '/images/users/team/rodgers.jpg',
  name: 'Rodgers Opere',
  position: 'Human Resource and Business Administration Manager',
  desc: 'Rodgers Opere holds a degree in Business Information Technology from Multimedia University'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (team);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.parallax-home[data-v-0b0aedd2] {\n    background-image: url('/images/shk_general/shk_family.jpg');\n    height: 100vh;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_vue_vue_type_style_index_0_id_0b0aedd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_vue_vue_type_style_index_0_id_0b0aedd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_vue_vue_type_style_index_0_id_0b0aedd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/about.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/about.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about_vue_vue_type_template_id_0b0aedd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.vue?vue&type=template&id=0b0aedd2&scoped=true */ "./resources/js/components/about.vue?vue&type=template&id=0b0aedd2&scoped=true");
/* harmony import */ var _about_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.vue?vue&type=script&lang=js */ "./resources/js/components/about.vue?vue&type=script&lang=js");
/* harmony import */ var _about_vue_vue_type_style_index_0_id_0b0aedd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css */ "./resources/js/components/about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css");




;
_about_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _about_vue_vue_type_template_id_0b0aedd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_about_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-0b0aedd2"
/* hot reload */
if (false) {}

_about_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/about.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_about_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/about.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/about.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./about.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/about.vue?vue&type=template&id=0b0aedd2&scoped=true":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/about.vue?vue&type=template&id=0b0aedd2&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_vue_vue_type_template_id_0b0aedd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_vue_vue_type_template_id_0b0aedd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./about.vue?vue&type=template&id=0b0aedd2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=template&id=0b0aedd2&scoped=true");


/***/ }),

/***/ "./resources/js/components/about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_vue_vue_type_style_index_0_id_0b0aedd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/about.vue?vue&type=style&index=0&id=0b0aedd2&scoped=true&lang=css");


/***/ })

}]);