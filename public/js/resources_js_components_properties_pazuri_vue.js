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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/button */ "./node_modules/primevue/button/button.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Pazuri",
  components: {
    Button: primevue_button__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      logo: '/images/logos/logo_1.png',
      green_park: '/images/shk_properties/fadhili.jpg',
      pazuriData: _data_pazuri__WEBPACK_IMPORTED_MODULE_0__.default,
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
    this.initMap();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['emailSend'])),
  methods: {
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
      this.form.page = 'Pazuri at Vipingo Property';
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
  href: "#reserve"
};
var _hoisted_5 = {
  "class": "container"
};
var _hoisted_6 = {
  "class": "p-grid prop-top"
};
var _hoisted_7 = {
  "class": "p-col-12 p-md-12 p-lg-6 prop-desc"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "p-col-12 p-md-12 p-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  id: "map"
})], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "p-grid"
};
var _hoisted_10 = {
  "class": "p-col-12 p-md-6 p-lg-4"
};
var _hoisted_11 = {
  "class": "shk_property_type"
};
var _hoisted_12 = {
  "class": "image-wrap"
};
var _hoisted_13 = {
  "class": "tag"
};
var _hoisted_14 = {
  "class": "title"
};
var _hoisted_15 = {
  "class": "price"
};
var _hoisted_16 = {
  "class": "desc"
};
var _hoisted_17 = {
  "class": "icons"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/images/icons/bed.svg",
  alt: "bed-icon"
})], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "item"
};
var _hoisted_20 = {
  "class": "icons"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/images/icons/bath.svg",
  alt: "bathtub-icon"
})], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "item"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
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

var _hoisted_24 = {
  "class": "btn-sec"
};
var _hoisted_25 = {
  href: "#reserve"
};
var _hoisted_26 = {
  id: "reserve"
};
var _hoisted_27 = {
  "class": "cont-form-wrapper",
  style: {
    "margin": "30px 0 10px 0",
    "width": "100% !important"
  }
};
var _hoisted_28 = {
  "class": "form-title"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", null, "Send us an Inquiry")], -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "form-container"
};
var _hoisted_31 = {
  "class": "p-grid properties-cont"
};
var _hoisted_32 = {
  "class": "p-col-12 p-2 p-md-6 p-lg-6"
};
var _hoisted_33 = {
  key: 0,
  "class": "p-error"
};
var _hoisted_34 = {
  "class": "p-col-12 p-2 p-md-6 p-lg-6"
};
var _hoisted_35 = {
  key: 0,
  "class": "p-error"
};
var _hoisted_36 = {
  "class": "p-col-12 p-2 p-md-6 p-lg-6"
};
var _hoisted_37 = {
  key: 0,
  "class": "p-error"
};
var _hoisted_38 = {
  "class": "p-col-12 p-2 p-md-6 p-lg-6"
};
var _hoisted_39 = {
  key: 0,
  "class": "p-error"
};
var _hoisted_40 = {
  key: 0,
  "class": "p-error"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pazuriData.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pazuriData.sub), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "prop-btn",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.reserve($data.pazuriData.title);
    })
  }, " Reserve Now ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pazuriData.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pazuriData.sub), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pazuriData.abt), 1
  /* TEXT */
  )]), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.pazuriData.type, function (data) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
      src: data.img,
      alt: data.name
    }, null, 8
    /* PROPS */
    , ["src", "alt"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.price), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.abt), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.beds) + " Bedrooms ", 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.baths) + " Bathrooms ", 1
    /* TEXT */
    )]), _hoisted_23]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      "class": "properties-btn",
      onClick: function onClick($event) {
        return $options.reserve(data.name);
      }
    }, " Reserve ", 8
    /* PROPS */
    , ["onClick"])])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $data.logo,
    alt: "Superior homes logo"
  }, null, 8
  /* PROPS */
  , ["src"])]), _hoisted_29]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.firstname = $event;
    }),
    required: "",
    placeholder: "First Name"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.firstname]])]), $data.firstnameValid !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.firstnameValid) + ".", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.lastname = $event;
    }),
    required: "",
    placeholder: "Last Name"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.lastname]])]), $data.lastnameValid !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lastnameValid) + ".", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "email",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.email = $event;
    }),
    required: "",
    placeholder: "Email Address"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.email]])]), $data.emailValid !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.emailValid) + ".", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "number",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.phone = $event;
    }),
    required: "",
    placeholder: "Phone number"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.phone]])]), $data.phoneValid !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.phoneValid) + ".", 1
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.message]]), $data.messageValid !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.messageValid) + ".", 1
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