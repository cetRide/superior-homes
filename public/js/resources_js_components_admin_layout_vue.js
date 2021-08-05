(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_layout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/layout.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/layout.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router/router */ "./resources/js/router/router.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "layout",
  directives: {
    'tooltip': primevue_tooltip__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      open: true,
      close: false
    };
  },
  computed: {
    routeName: function routeName() {
      return this.$route.name;
    }
  },
  methods: {
    handleMenu: function handleMenu(name) {
      _router_router__WEBPACK_IMPORTED_MODULE_1__.default.push({
        name: name
      });
    },
    w3_open: function w3_open() {
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("mySidebar").style.width = "250px";
      var items = document.getElementsByClassName("nav-desc");

      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "block";
      }

      this.open = false;
      this.close = true;
    },
    w3_close: function w3_close() {
      document.getElementById("main").style.marginLeft = "50px";
      document.getElementById("mySidebar").style.width = "50px";
      var items = document.getElementsByClassName("nav-desc");

      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }

      this.open = true;
      this.close = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/layout.vue?vue&type=template&id=32450696&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/layout.vue?vue&type=template&id=32450696&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-32450696");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-32450696");

var _hoisted_1 = {
  id: "main"
};
var _hoisted_2 = {
  "class": "admin-top-bar"
};
var _hoisted_3 = {
  "class": "admin-left-items"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "brand-item"
}, " SHK - ADMIN ", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-window-maximize"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-window-minimize"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "admin-right-items"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "contents-wrap"
};
var _hoisted_9 = {
  "class": "breadcrumb-admin"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Superior Homes Kenya");

var _hoisted_11 = {
  id: "mySidebar",
  "class": "admin-side-nav"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "logo-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "the-nav-item"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icon-side"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-compass"
})], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "nav-desc"
}, " Dashboard ", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr")], -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icon-side"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-tags"
})], -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "nav-desc"
}, " Properties ", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr")], -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icon-side"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-info-circle"
})], -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "nav-desc"
}, " About Us ", -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr")], -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icon-side"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-th-large"
})], -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "nav-desc"
}, " Media ", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr")], -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "the-nav-item"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icon-side"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-briefcase"
})], -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "nav-desc"
}, " Careers ", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr")], -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "the-nav-item"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icon-side"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-users"
})], -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "nav-desc"
}, " System Users ", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, $data.open ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    key: 0,
    "class": "icon-toggle",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.w3_open();
    })
  }, [_hoisted_5])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.close ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    key: 1,
    "class": "icon-toggle",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.w3_close();
    })
  }, [_hoisted_6])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, " | " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.routeName), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [_hoisted_14, _hoisted_15], 512
  /* NEED_PATCH */
  ), [[_directive_tooltip, 'Dashboard']]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "the-nav-item",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.handleMenu('Property Listing');
    })
  }, [_hoisted_17, _hoisted_18], 512
  /* NEED_PATCH */
  ), [[_directive_tooltip, 'Listings']]), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "the-nav-item",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.handleMenu('Team');
    })
  }, [_hoisted_20, _hoisted_21], 512
  /* NEED_PATCH */
  ), [[_directive_tooltip, 'About us']]), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "the-nav-item",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.handleMenu('Admin-Videos');
    })
  }, [_hoisted_23, _hoisted_24], 512
  /* NEED_PATCH */
  ), [[_directive_tooltip, 'Media']]), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [_hoisted_27, _hoisted_28], 512
  /* NEED_PATCH */
  ), [[_directive_tooltip, 'Careers']]), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_30, [_hoisted_31, _hoisted_32], 512
  /* NEED_PATCH */
  ), [[_directive_tooltip, 'Users']])])]);
});

/***/ }),

/***/ "./node_modules/primevue/tooltip/tooltip.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/primevue/tooltip/tooltip.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/utils */ "./node_modules/primevue/utils/utils.esm.js");


function bindEvents(el) {
    const modifiers = el.$_ptooltipModifiers;
    if (modifiers.focus) {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    }
    else {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
        el.addEventListener('click', onClick);
    }
}

function unbindEvents(el) {
    const modifiers = el.$_ptooltipModifiers;
    if (modifiers.focus) {
        el.removeEventListener('focus', onFocus);
        el.removeEventListener('blur', onBlur);
    }
    else {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
        el.removeEventListener('click', onClick);
    }
}

function bindScrollListener(el) {
    if (!el.$_ptooltipScrollHandler) {
        el.$_ptooltipScrollHandler = new primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ConnectedOverlayScrollHandler(el, function() {
            hide(el);
        });
    }

    el.$_ptooltipScrollHandler.bindScrollListener();
}

function unbindScrollListener(el) {
    if (el.$_ptooltipScrollHandler) {
        el.$_ptooltipScrollHandler.unbindScrollListener();
    }
}

function onMouseEnter(event) {
    show(event.currentTarget);
}

function onMouseLeave(event) {
    hide(event.currentTarget);
}

function onFocus(event) {
    show(event.currentTarget);
}

function onBlur(event) {
    hide(event.currentTarget);
}

function onClick(event) {
    hide(event.currentTarget);
}

function show(el) {
    if (!el.$_ptooltipValue) {
        return;
    }

    let tooltipElement = create(el);
    align(el);
    primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.fadeIn(tooltipElement, 250);

    window.addEventListener('resize', function onWindowResize() {
        hide(el);
        this.removeEventListener('resize', onWindowResize);
    });

    bindScrollListener(el);
    primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.set('tooltip', tooltipElement, el.$_ptooltipZIndex);
}

function hide(el) {
    remove(el);
    unbindScrollListener(el);
    primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.clear(el);
}

function getTooltipElement(el) {
    return document.getElementById(el.$_ptooltipId);
}

function create(el) {
    const id = (0,primevue_utils__WEBPACK_IMPORTED_MODULE_0__.UniqueComponentId)() + '_tooltip';
    el.$_ptooltipId = id;

    let container = document.createElement('div');
    container.id = id;

    let tooltipArrow = document.createElement('div');
    tooltipArrow.className = 'p-tooltip-arrow';
    container.appendChild(tooltipArrow);

    let tooltipText = document.createElement('div');
    tooltipText.className = 'p-tooltip-text';
    tooltipText.innerHTML = el.$_ptooltipValue;

    container.appendChild(tooltipText);
    document.body.appendChild(container);

    container.style.display = 'inline-block';

    return container;
}

function remove(el) {
    if (el) {
        let tooltipElement = getTooltipElement(el);
        if (tooltipElement && tooltipElement.parentElement) {
            document.body.removeChild(tooltipElement);
        }
        el.$_ptooltipId = null;
    }
}

function align(el) {
    const modifiers = el.$_ptooltipModifiers;

    if (modifiers.top) {
        alignTop(el);
        if (isOutOfBounds(el)) {
            alignBottom(el);
        }
    }
    else if (modifiers.left) {
        alignLeft(el);
        if (isOutOfBounds(el)) {
            alignRight(el);

            if (isOutOfBounds(el)) {
                alignTop(el);

                if (isOutOfBounds(el)) {
                    alignBottom(el);
                }
            }
        }
    }
    else if (modifiers.bottom) {
        alignBottom(el);
        if (isOutOfBounds(el)) {
            alignTop(el);
        }
    }
    else {
        alignRight(el);
        if (isOutOfBounds(el)) {
            alignLeft(el);

            if (isOutOfBounds(el)) {
                alignTop(el);

                if (isOutOfBounds(el)) {
                    alignBottom(el);
                }
            }
        }
    }
}

function getHostOffset(el) {
    let offset = el.getBoundingClientRect();
    let targetLeft = offset.left + primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getWindowScrollLeft();
    let targetTop = offset.top + primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getWindowScrollTop();

    return {left: targetLeft, top: targetTop};
}

function alignRight(el) {
    preAlign(el, 'right');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left + primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(el);
    let top = hostOffset.top + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(tooltipElement)) / 2;
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function alignLeft(el) {
    preAlign(el, 'left');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(tooltipElement);
    let top = hostOffset.top + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(tooltipElement)) / 2;
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function alignTop(el) {
    preAlign(el, 'top');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(tooltipElement)) / 2;
    let top = hostOffset.top - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(tooltipElement);
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function alignBottom(el) {
    preAlign(el, 'bottom');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(tooltipElement)) / 2;
    let top = hostOffset.top + primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(el);
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function preAlign(el, position) {
    let tooltipElement = getTooltipElement(el);
    tooltipElement.style.left = -999 + 'px';
    tooltipElement.style.top = -999 + 'px';
    tooltipElement.className = 'p-tooltip p-component p-tooltip-' + position;
}

function isOutOfBounds(el) {
    let tooltipElement = getTooltipElement(el);
    let offset = tooltipElement.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(tooltipElement);
    let height = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(tooltipElement);
    let viewport = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getViewport();

    return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);
}

function getTarget(el) {
    return primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.hasClass(el, 'p-inputwrapper') ? primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.findSingle(el, 'input'): el;
}

const Tooltip = {
    beforeMount(el, options) {
        let target = getTarget(el);
        target.$_ptooltipModifiers = options.modifiers;
        target.$_ptooltipValue = options.value;
        target.$_ptooltipZIndex = options.instance.$primevue && options.instance.$primevue.config && options.instance.$primevue.config.zIndex.tooltip;
        bindEvents(target);
    },
    unmounted(el) {
        let target = getTarget(el);
        remove(target);
        unbindEvents(target);

        if (target.$_ptooltipScrollHandler) {
            target.$_ptooltipScrollHandler.destroy();
            target.$_ptooltipScrollHandler = null;
        }

        primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.clear(el);
    },
    updated(el, options) {
        let target = getTarget(el);
        target.$_ptooltipModifiers = options.modifiers;
        target.$_ptooltipValue = options.value;
    },

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);


/***/ }),

/***/ "./resources/js/components/admin/layout.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/admin/layout.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_vue_vue_type_template_id_32450696_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=32450696&scoped=true */ "./resources/js/components/admin/layout.vue?vue&type=template&id=32450696&scoped=true");
/* harmony import */ var _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js */ "./resources/js/components/admin/layout.vue?vue&type=script&lang=js");



_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _layout_vue_vue_type_template_id_32450696_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-32450696"
/* hot reload */
if (false) {}

_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/admin/layout.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/admin/layout.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/admin/layout.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/layout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/admin/layout.vue?vue&type=template&id=32450696&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/layout.vue?vue&type=template&id=32450696&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_template_id_32450696_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_template_id_32450696_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./layout.vue?vue&type=template&id=32450696&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/layout.vue?vue&type=template&id=32450696&scoped=true");


/***/ })

}]);