(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_properties_greenpark_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_greenPark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/greenPark */ "./resources/js/data/greenPark.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/button */ "./node_modules/primevue/button/button.esm.js");
/* harmony import */ var mosha_vue_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mosha-vue-toastify */ "./node_modules/mosha-vue-toastify/dist/mosha-vue-toastify.es.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GreenPark",
  components: {
    Button: primevue_button__WEBPACK_IMPORTED_MODULE_1__.default
  },
  setup: function setup() {
    var successToast = function successToast(message) {
      (0,mosha_vue_toastify__WEBPACK_IMPORTED_MODULE_2__.createToast)(message, {
        hideProgressBar: "true",
        showIcon: "true",
        position: "top-right",
        type: "success",
        transition: "zoom",
        timeout: 1500,
        toastBackgroundColor: "#6cb2eb"
      });
    };

    var errorToast = function errorToast(message) {
      (0,mosha_vue_toastify__WEBPACK_IMPORTED_MODULE_2__.createToast)(message, {
        hideProgressBar: "true",
        showIcon: "true",
        position: "top-right",
        type: "success",
        transition: "zoom",
        timeout: 1500,
        toastBackgroundColor: "#E46464"
      });
    };

    return {
      successToast: successToast,
      errorToast: errorToast
    };
  },
  data: function data() {
    return {
      logo: '/images/logos/logo_1.png',
      green_park: '/images/shk_properties/GPhomepage.jpg',
      property: {},
      form: {
        phone: '',
        message: '',
        email: ''
      },
      firstname: '',
      lastname: '',
      firstnameValid: "",
      lastnameValid: "",
      emailValid: "",
      phoneValid: "",
      messageValid: ""
    };
  },
  mounted: function mounted() {
    this.showPropertyTypes();
    this.initMap();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['emailSend', 'toast', 'toast_err'])),
  watch: {
    toast_err: function toast_err() {
      if (this.toast_err) {
        this.errorToast("An error occurred. Try again!");
        this.$store.commit('TOAST_ERR', false);
      }
    },
    toast: function toast() {
      this.successToast("Inquiry send successfully.");
      this.$store.commit('TOAST', false);
      this.form = {};
      this.firstname = '';
      this.lastname = '';
    }
  },
  methods: {
    track: function track() {
      this.$gtag.pageview(this.$route);
    },
    showPropertyTypes: function showPropertyTypes() {
      var _this = this;

      axios.get("/api/fetch-property/Greenpark Estate").then(function (res) {
        _this.property = res.data[0];
      }, function (error) {
        console.log(error);
      });
    },
    canSendRequest: function canSendRequest() {
      return this.firstnameValid === "" && this.lastnameValid === "" && this.emailValid === "" && this.phoneValid === "" && this.messageValid === "";
    },
    clearFormErrors: function clearFormErrors() {
      this.firstnameValid = "";
      this.lastnameValid = "";
      this.emailValid = "";
      this.phoneValid = "";
      this.messageValid = "";
    },
    validateForm: function validateForm(data) {
      this.clearFormErrors();

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        this.emailValid = "Email is invalid";
      }

      if (this.firstname === "") {
        this.firstnameValid = "First Name is required";
      }

      if (this.lastname === "") {
        this.lastnameValid = "Last Name is required";
      }

      if (data.phone === "") {
        this.phoneValid = "Phone is required";
      }

      if (data.phone.length > 12) {
        this.phoneValid = "Phone number cannot be more than 12 digits";
      }

      if (/\D/.test(data.phone)) {
        this.phoneValid = "Phone number should contain only digits";
      }

      if (data.message === "") {
        this.messageValid = "Message is required";
      }

      if (data.email === "") {
        this.emailValid = "Email is required";
      }
    },
    sendEmail: function sendEmail() {
      this.validateForm(this.form);
      this.form.page = 'Green Park';
      this.form.name = this.firstname + '  ' + this.lastname;

      if (this.canSendRequest()) {
        this.$store.dispatch('sendEmail', this.form);
      }
    },
    reserve: function reserve(type) {
      console.log(type);
    },
    initMap: function initMap() {
      var uluru = {
        lat: -1.462344,
        lng: 37.012593
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=template&id=e4be7848&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=template&id=e4be7848&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-e4be7848");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-e4be7848");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"parallax\" style=\"height:100vh;\" data-v-e4be7848><ul class=\"slideshow\" data-v-e4be7848><li data-v-e4be7848><span style=\"background-image:url(&#39;https://d1bqrv1jyf8x1f.cloudfront.net/images/banner/ge.jpg&#39;);\" data-v-e4be7848></span></li><li data-v-e4be7848><span style=\"background-image:url(&#39;https://d1bqrv1jyf8x1f.cloudfront.net/images/shk_properties/greenpark/4.jpg&#39;);\" data-v-e4be7848></span></li><li data-v-e4be7848><span style=\"background-image:url(&#39;https://d1bqrv1jyf8x1f.cloudfront.net/images/shk_properties/greenpark/6.jpg&#39;);\" data-v-e4be7848></span></li></ul></div>", 1);

var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "data-aos": "fade-up",
  "data-aos-duration": "1000",
  "class": "prop-landing-details"
};
var _hoisted_4 = {
  "class": "prop-title"
};
var _hoisted_5 = {
  "class": "prop-sub"
};
var _hoisted_6 = {
  href: "#reserve"
};
var _hoisted_7 = {
  "class": "container"
};
var _hoisted_8 = {
  "class": "p-grid prop-top"
};
var _hoisted_9 = {
  "class": "p-col-12 p-md-12 p-lg-6 prop-desc"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "p-col-12 p-md-12 p-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  id: "map"
})], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "p-grid"
};
var _hoisted_12 = {
  "class": "p-col-12 p-md-6 p-lg-6"
};
var _hoisted_13 = {
  "class": "shk_property_type"
};
var _hoisted_14 = {
  "class": "image-wrap"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "content-overlay"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "tag"
};
var _hoisted_17 = {
  "class": "title"
};
var _hoisted_18 = {
  "class": "price"
};
var _hoisted_19 = {
  "class": "desc"
};
var _hoisted_20 = {
  "class": "btn-sec"
};
var _hoisted_21 = {
  href: "#reserve"
};
var _hoisted_22 = {
  id: "reserve"
};
var _hoisted_23 = {
  "class": "cont-form-wrapper",
  style: {
    "margin": "30px 0 10px 0",
    "width": "100% !important"
  }
};
var _hoisted_24 = {
  "class": "wrap"
};
var _hoisted_25 = {
  "class": "form-title"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, "TALK TO US")], -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "form-container"
};
var _hoisted_28 = {
  "class": "p-grid properties-cont"
};
var _hoisted_29 = {
  "class": "p-col-12 p-2 p-md-6 p-lg-6"
};
var _hoisted_30 = {
  key: 0,
  "class": "p-error"
};
var _hoisted_31 = {
  "class": "p-col-12 p-2 p-md-6 p-lg-6"
};
var _hoisted_32 = {
  key: 0,
  "class": "p-error"
};
var _hoisted_33 = {
  "class": "p-col-12 p-2 p-md-6 p-lg-6"
};
var _hoisted_34 = {
  key: 0,
  "class": "p-error"
};
var _hoisted_35 = {
  "class": "p-col-12 p-2 p-md-6 p-lg-6"
};
var _hoisted_36 = {
  key: 0,
  "class": "p-error"
};
var _hoisted_37 = {
  key: 0,
  "class": "p-error"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.property.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.property.subt), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "prop-btn",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.reserve($data.property.title);
    })
  }, " Reserve Now ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.property.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.property.subt), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.property.art), 1
  /* TEXT */
  )]), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.property.property_types, function (data) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
      src: data.img,
      alt: data.name
    }, null, 8
    /* PROPS */
    , ["src", "alt"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.price), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.description), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      "class": "properties-btn",
      onClick: function onClick($event) {
        return $options.reserve(data.name);
      }
    }, " Reserve ", 8
    /* PROPS */
    , ["onClick"])])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $data.logo,
    alt: "Superior homes logo"
  }, null, 8
  /* PROPS */
  , ["src"])]), _hoisted_26])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.firstname = $event;
    }),
    required: "",
    placeholder: "First Name"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.firstname]])]), $data.firstnameValid !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.firstnameValid) + ".", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.lastname = $event;
    }),
    required: "",
    placeholder: "Last Name"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.lastname]])]), $data.lastnameValid !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lastnameValid) + ".", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "email",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.email = $event;
    }),
    required: "",
    placeholder: "Email Address"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.email]])]), $data.emailValid !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.emailValid) + ".", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "number",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.phone = $event;
    }),
    required: "",
    placeholder: "Phone number"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.phone]])]), $data.phoneValid !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.phoneValid) + ".", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
    name: "message",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.message = $event;
    }),
    rows: "8",
    cols: "100"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.message]]), $data.messageValid !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.messageValid) + ".", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    loading: _ctx.emailSend,
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.sendEmail();
    }),
    style: {
      "margin-top": "20px",
      "background-color": "#F68D2E !important",
      "border-radius": "20px!important",
      "border": "none !important",
      "box-shadow": "none !important",
      "height": "40px !important"
    },
    label: "Send Message"
  }, null, 8
  /* PROPS */
  , ["loading"])])])])])]);
});

/***/ }),

/***/ "./resources/js/data/greenPark.js":
/*!****************************************!*\
  !*** ./resources/js/data/greenPark.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var greenPark = {
  title: 'Greenpark Estate',
  sub: 'Where Dreams Come Home',
  abt: 'Greenpark is a master-planned gated community with over 500 completed and occupied homes in Athi River, 30 km from the Nairobi CBD. The estate has two schools, a hotel with conference facilities, a retail strip mall, a restaurant and bar, a swimming pool, a gym, wedding grounds, a football turf, and a retirement village. Greenpark Estate is now the best gated community in East Africa.',
  type: [{
    name: '3 – Bedroom Maisonette',
    price: 'Ksh 13.95M',
    beds: '3',
    baths: '3',
    abt: 'This unit has two (2) adjoined units built on approximately ¼ acre, each enjoying a private garden. Each unit has a kitchen, lounge, dining area, separate dining, 3 bedrooms (master en-suite), a detached DSQ and parking for 2. The collective plinth area is 157 SQM.',
    img: '/images/shk_properties/greenpark/type/sd.jpg'
  }, {
    name: '4 - Bedroom Standard Bungalow',
    price: 'Ksh 19.28M',
    beds: '4',
    baths: '3',
    abt: 'A stand-alone 1-level unit built on approximately ¼ acre, with 4 bedrooms, 2 bedrooms all ensuite, a lounge, dining, a spacious garden, a home office and kitchen. The collective plinth area is 146 SQM.',
    img: '/images/shk_properties/greenpark/type/bu.jpg'
  }, {
    name: '4 – Bedroom Super Bungalow',
    price: '23.59M',
    beds: '4',
    baths: '3',
    abt: 'A spacious, all en-suite 4 bedroom stand-alone unit, built on approximately ¼ acre. Other spaces include a lounge, dining, open plan kitchen, laundry area, a spacious garden and a home office. The collective plinth area is 184 SQM.',
    img: '/images/shk_properties/greenpark/type/sp.jpg'
  }, {
    name: '4 – Bedroom Villa',
    price: 'Ksh 37.67M',
    beds: '4',
    baths: '4',
    abt: 'A 2-level all en-suite 4 bedroom unit built on approximately ¼ acre, with a spacious family room, detached DSQ, fitted kitchen, spacious garden, laundry area and dining room. The collective plinth area is 320 SQM.',
    img: '/images/shk_properties/greenpark/type/villa.jpg'
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (greenPark);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#map[data-v-e4be7848] {\n    height: 300px;\n    width: 100%;\n}\n.parallax-home[data-v-e4be7848] {\n    background-image: url('/images/shk_properties/GPhomepage.jpg');\n    height: 100vh;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_greenpark_vue_vue_type_style_index_0_id_e4be7848_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_greenpark_vue_vue_type_style_index_0_id_e4be7848_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_greenpark_vue_vue_type_style_index_0_id_e4be7848_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/properties/greenpark.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/properties/greenpark.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _greenpark_vue_vue_type_template_id_e4be7848_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greenpark.vue?vue&type=template&id=e4be7848&scoped=true */ "./resources/js/components/properties/greenpark.vue?vue&type=template&id=e4be7848&scoped=true");
/* harmony import */ var _greenpark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greenpark.vue?vue&type=script&lang=js */ "./resources/js/components/properties/greenpark.vue?vue&type=script&lang=js");
/* harmony import */ var _greenpark_vue_vue_type_style_index_0_id_e4be7848_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css */ "./resources/js/components/properties/greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css");




;
_greenpark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _greenpark_vue_vue_type_template_id_e4be7848_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_greenpark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-e4be7848"
/* hot reload */
if (false) {}

_greenpark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/properties/greenpark.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_greenpark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/properties/greenpark.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/properties/greenpark.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_greenpark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_greenpark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./greenpark.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/properties/greenpark.vue?vue&type=template&id=e4be7848&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/properties/greenpark.vue?vue&type=template&id=e4be7848&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_greenpark_vue_vue_type_template_id_e4be7848_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_greenpark_vue_vue_type_template_id_e4be7848_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./greenpark.vue?vue&type=template&id=e4be7848&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=template&id=e4be7848&scoped=true");


/***/ }),

/***/ "./resources/js/components/properties/greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/properties/greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_greenpark_vue_vue_type_style_index_0_id_e4be7848_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/properties/greenpark.vue?vue&type=style&index=0&id=e4be7848&scoped=true&lang=css");


/***/ })

}]);