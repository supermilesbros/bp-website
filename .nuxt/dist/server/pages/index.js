exports.ids = [51,4,6,7,16,19,20,22,25,26,28,30,33,34,37,38,42,43,44,45];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#3963af}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#3963af}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:\"\";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=template&id=915617ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-title text-center",class:_vm.addClassName,attrs:{"data-aos":"fade-up"}},[_vm._ssrNode("<h2 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> <p class=\"sub-title\">"+_vm._ssrEscape(_vm._s(_vm.subTitle))+"</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=template&id=915617ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var SectionTitlevue_type_script_lang_js_ = ({
  name: 'SectionTitle',
  props: ["title", "subTitle", "addClassName"]
});
// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionTitlevue_type_script_lang_js_ = (SectionTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SectionTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SectionTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5565b40c"
  
)

/* harmony default export */ var SectionTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=template&id=ebbbd27e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-navigation"},[_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">","</nav>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("About Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/service"}},[_vm._v("Services")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Project")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/project"}},[_vm._v("Project")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/project-details"}},[_vm._v("Project Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item-has-children\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Blog")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-grid"}},[_vm._v("Blog Grid")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-classic"}},[_vm._v("Blog Classic")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Blog Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact-us"}},[_vm._v("Contact Us")])],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=template&id=ebbbd27e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MobileNavigationvue_type_script_lang_js_ = ({
  name: 'MobileNavMenu',

  mounted() {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = e => {
      e.currentTarget.parentElement.classList.toggle('active');
    };

    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
      offcanvasMobileMenu.classList.remove('active');
    };
  }

});
// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavigationvue_type_script_lang_js_ = (MobileNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MobileNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "07e18822"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=eef8ad04&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"site-main-menu"},[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("About Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/service"}},[_vm._v("Services")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/pricing"}},[_vm._v("Pricing")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-classic"}},[_vm._v("Blog")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact-us"}},[_vm._v("Contact Us")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=eef8ad04&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "18e8f76d"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 104:
/***/ (function(module) {

module.exports = JSON.parse("{\"footerAboutWidget\":{\"logoSrc\":\"/images/logo/bp-logo-menu.png\",\"telephone\":\"(+1) 212-946-2701\",\"email\":\"info@balanceperiod.com\",\"fbUrl\":\"https://www.facebook.com/\",\"twitterUrl\":\"https://twitter.com/\",\"instagramUrl\":\"https://www.instagram.com/\"},\"footerLinkTitleOne\":\"Services\",\"navListOne\":[{\"navTitle\":\"Marketing\",\"navUrl\":\"/\"},{\"navTitle\":\"SEO/SEM\",\"navUrl\":\"/\"},{\"navTitle\":\"Development\",\"navUrl\":\"/\"},{\"navTitle\":\"UX Design\",\"navUrl\":\"/\"}],\"footerLinkTitleTwo\":\"Products\",\"navListTwo\":[{\"navTitle\":\"Elementor Guru\",\"navUrl\":\"/\"},{\"navTitle\":\"WooLentor Pro\",\"navUrl\":\"/\"},{\"navTitle\":\"Plugins\",\"navUrl\":\"/\"},{\"navTitle\":\"Page Builder\",\"navUrl\":\"/\"}],\"footerLinkTitleThree\":\"About\",\"navListThree\":[{\"navTitle\":\"Features\",\"navUrl\":\"/\"},{\"navTitle\":\"Our Partners\",\"navUrl\":\"/\"},{\"navTitle\":\"Affiliate Program\",\"navUrl\":\"/\"},{\"navTitle\":\"Pricing\",\"navUrl\":\"/\"}],\"footerLinkTitleFour\":\"Contact\",\"navListFour\":[{\"navTitle\":\"Support Ticket\",\"navUrl\":\"/\"},{\"navTitle\":\"Help Desk\",\"navUrl\":\"/\"},{\"navTitle\":\"Live Chat\",\"navUrl\":\"/\"},{\"navTitle\":\"FAQs\",\"navUrl\":\"/\"}]}");

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=template&id=003be20d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-section header-transparent",class:{'is-sticky': _vm.isSticky}},[_vm._ssrNode("<div class=\"header-inner\">","</div>",[_vm._ssrNode("<div class=\"container position-relative\">","</div>",[_vm._ssrNode("<div class=\"row justify-content-between align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-xl-2 col-auto order-0\">","</div>",[_vm._ssrNode("<div class=\"header-logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"dark-logo",attrs:{"src":"/images/logo/bp-logo3.png","alt":"Agency Logo"}}),_vm._v(" "),_c('img',{staticClass:"light-logo",attrs:{"src":"/images/logo/bp-logo-menu.png","alt":"Agency Logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1\">","</div>",[_vm._ssrNode("<div class=\"menu-column-area d-none d-xl-block position-static\">","</div>",[_c('Navigation')],1),_vm._ssrNode(" <div class=\"header-search-area\"><div class=\"header-search\"><a href=\"javascript:void(0)\" class=\"header-search-toggle\"><i class=\"pe-7s-search pe-2x pe-va\"></i></a></div></div> <div class=\"header-mobile-menu-toggle d-xl-none ml-sm-2\"><button class=\"toggle\"><i class=\"icon-top\"></i> <i class=\"icon-middle\"></i> <i class=\"icon-bottom\"></i></button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2\">","</div>",[_c('n-link',{staticClass:"btn btn-light btn-hover-primary",attrs:{"to":"/"}},[_vm._v("Shop Now")])],1)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=template&id=003be20d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({
  components: {
    Navigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 103))
  },

  data() {
    return {
      isSticky: false
    };
  },

  mounted() {
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;

      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },

  methods: {
    // offcanvas mobilemenu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    //offcanvas search 
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector('#search-popup');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "18ac8915"
  
)

/* harmony default export */ var TheHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(103).default})


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=538fd771&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{"id":"offcanvas-menu"}},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"inner custom-scrollbar\">","</div>",[_vm._ssrNode("<div class=\"mobile-header\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/logo/logo.png","alt":"site logo"}})])],1),_vm._ssrNode(" <button class=\"mobile-close-btn\"></button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"menu-content\">","</div>",[_c('MobileNavigation')],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=538fd771&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({
  components: {
    MobileNavigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 102))
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1a3a731f"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileNavigation: __webpack_require__(102).default})


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=template&id=f0b2216a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-search-active",attrs:{"id":"search-popup"}},[_vm._ssrNode("<div class=\"sidebar-search-icon\"><button class=\"search-close\"><i class=\"pe-7s-close\"></i></button></div> <div class=\"sidebar-search-input\"><form><div class=\"form-search\"><input id=\"search\" value placeholder type=\"search\" class=\"input-text\"> <button><i class=\"fa fa-search\"></i></button></div></form> <p class=\"form-description\">Hit enter to search</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=template&id=f0b2216a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SearchPopupvue_type_script_lang_js_ = ({
  methods: {
    // offcanvas search close
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector('#search-popup');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchPopupvue_type_script_lang_js_ = (SearchPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SearchPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35e5b7db"
  
)

/* harmony default export */ var SearchPopup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=fb215422&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer-section",style:({backgroundColor: '#253f70'})},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row section-padding pt-0 mtn-30\">","</div>",[_vm._ssrNode("<div class=\"col-md-4 col-sm-6 col-12 mt-30\">","</div>",[_vm._ssrNode("<div class=\"footer-widget\">","</div>",[_vm._ssrNode("<div class=\"footer-logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":_vm.footerData.footerAboutWidget.logoSrc,"alt":"Logo"}})])],1),_vm._ssrNode(" <div class=\"footer-widget-content\"><div class=\"content\"><p><a href=\"tel:(+1)212-946-2701\">"+_vm._ssrEscape(_vm._s(_vm.footerData.footerAboutWidget.telephone))+"</a></p> <p><a href=\"mailto:ray@balanceperiod.com\">"+_vm._ssrEscape(_vm._s(_vm.footerData.footerAboutWidget.email))+"</a></p></div> <div class=\"footer-social-inline\"><a"+(_vm._ssrAttr("href",_vm.footerData.footerAboutWidget.twitterUrl))+" target=\"_blank\"><i class=\"fab fa-twitter-square\"></i></a> <a"+(_vm._ssrAttr("href",_vm.footerData.footerAboutWidget.fbUrl))+" target=\"_blank\"><i class=\"fab fa-facebook-square\"></i></a> <a"+(_vm._ssrAttr("href",_vm.footerData.footerAboutWidget.instagramUrl))+" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a></div></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"footer-widget\">","</div>",[_vm._ssrNode("<h4 class=\"footer-widget-title\">"+_vm._ssrEscape(_vm._s(_vm.footerData.footerLinkTitleOne))+"</h4> "),_vm._ssrNode("<div class=\"footer-widget-content\">","</div>",[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.footerData.navListOne),function(nav,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":nav.navUrl}},[_vm._v(_vm._s(nav.navTitle))])],1)}),0)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"footer-widget\">","</div>",[_vm._ssrNode("<h4 class=\"footer-widget-title\">"+_vm._ssrEscape(_vm._s(_vm.footerData.footerLinkTitleTwo))+"</h4> "),_vm._ssrNode("<div class=\"footer-widget-content\">","</div>",[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.footerData.navListTwo),function(nav,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":nav.navUrl}},[_vm._v(_vm._s(nav.navTitle))])],1)}),0)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"footer-widget\">","</div>",[_vm._ssrNode("<h4 class=\"footer-widget-title\">"+_vm._ssrEscape(_vm._s(_vm.footerData.footerLinkTitleThree))+"</h4> "),_vm._ssrNode("<div class=\"footer-widget-content\">","</div>",[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.footerData.navListThree),function(nav,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":nav.navUrl}},[_vm._v(_vm._s(nav.navTitle))])],1)}),0)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"footer-widget\">","</div>",[_vm._ssrNode("<h4 class=\"footer-widget-title\">"+_vm._ssrEscape(_vm._s(_vm.footerData.footerLinkTitleFour))+"</h4> "),_vm._ssrNode("<div class=\"footer-widget-content\">","</div>",[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.footerData.navListFour),function(nav,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":nav.navUrl}},[_vm._v(_vm._s(nav.navTitle))])],1)}),0)])],2)])],2),_vm._ssrNode(" <div class=\"row\"><div class=\"col\"><p class=\"copyright\">Copyright © 2021 Balance Period All Rights Reserved.</p></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=fb215422&

// EXTERNAL MODULE: ./data/footer.json
var footer = __webpack_require__(104);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({
  data() {
    return {
      footerData: footer
    };
  }

});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "110bb5ba"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 110:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"How your sales can work together in account-based marketing\",\"date\":\"Apr 06, 2020\",\"view\":70,\"imgSrc\":\"/images/blog/370/blog-1.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-1.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"8\"},{\"id\":2,\"title\":\"The six things marketers need to understand about DTC marketing\",\"date\":\"Jun 26, 2020\",\"view\":92,\"imgSrc\":\"/images/blog/370/blog-2.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-2.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"9\"},{\"id\":3,\"title\":\"Eleven top tips for developing agile marketing\",\"date\":\"May 16, 2020\",\"view\":55,\"imgSrc\":\"/images/blog/370/blog-3.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-3.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"15\"},{\"id\":4,\"title\":\"Eleven top tips for developing agile marketing\",\"date\":\"Feb 14, 2020\",\"view\":36,\"imgSrc\":\"/images/blog/370/blog-4.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-1.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"40\"},{\"id\":5,\"title\":\"How your sales can work together in account-based marketing\",\"date\":\"Aug 26, 2020\",\"view\":46,\"imgSrc\":\"/images/blog/370/blog-5.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-2.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"32\"},{\"id\":6,\"title\":\"The six things marketers need to understand about DTC marketing\",\"date\":\"Jun 22, 2020\",\"view\":34,\"imgSrc\":\"/images/blog/370/blog-6.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-3.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"64\"}]");

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialItem.vue?vue&type=template&id=674d11b6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"static-testimonial mb-30"},[_vm._ssrNode("<div class=\"testimonial-image\"><img"+(_vm._ssrAttr("src",_vm.testimonial.imgSrc))+(_vm._ssrAttr("alt",_vm.testimonial.name))+"></div> <div class=\"testimonial-content\"><p>"+_vm._ssrEscape(_vm._s(_vm.testimonial.text))+"</p></div> <div class=\"author-info\"><div class=\"cite\"><h6 class=\"name\">"+_vm._ssrEscape(_vm._s(_vm.testimonial.name))+"</h6> <span class=\"position\">"+_vm._ssrEscape(_vm._s(_vm.testimonial.position))+"</span></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestimonialItem.vue?vue&type=template&id=674d11b6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TestimonialItemvue_type_script_lang_js_ = ({
  props: ['testimonial']
});
// CONCATENATED MODULE: ./components/TestimonialItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialItemvue_type_script_lang_js_ = (TestimonialItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TestimonialItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6cc351c9"
  
)

/* harmony default export */ var TestimonialItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogGridItem.vue?vue&type=template&id=4b501f34&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog"},[_vm._ssrNode("<div class=\"thumbnail\">","</div>",[_c('n-link',{staticClass:"image",attrs:{"to":"/blog-details"}},[_c('img',{attrs:{"src":_vm.blog.imgSrc,"alt":_vm.blog.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_vm._ssrNode("<ul class=\"meta\"><li><i class=\"far fa-calendar\"></i>"+_vm._ssrEscape(_vm._s(_vm.blog.date))+"</li> <li><i class=\"far fa-eye\"></i>"+_vm._ssrEscape(_vm._s(_vm.blog.view)+" Views")+"</li></ul> "),_vm._ssrNode("<h3 class=\"title\">","</h3>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v(_vm._s(_vm.blog.title))])],1),_vm._ssrNode(" "),_c('n-link',{staticClass:"link",attrs:{"to":"/blog-details"}},[_c('mark',[_vm._v("Read More")])])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogGridItem.vue?vue&type=template&id=4b501f34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogGridItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogGridItemvue_type_script_lang_js_ = ({
  props: ['blog']
});
// CONCATENATED MODULE: ./components/BlogGridItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogGridItemvue_type_script_lang_js_ = (BlogGridItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogGridItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogGridItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79bb0ed4"
  
)

/* harmony default export */ var BlogGridItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 116:
/***/ (function(module) {

module.exports = JSON.parse("{\"portfolios\":[{\"id\":1,\"imgSrc\":\"/images/portfolio/portfolio-1.jpg\",\"title\":\"Digital marketing\",\"category\":\"development\"},{\"id\":2,\"imgSrc\":\"/images/portfolio/portfolio-2.jpg\",\"title\":\"App Development\",\"category\":\"app design\"},{\"id\":3,\"imgSrc\":\"/images/portfolio/portfolio-3.jpg\",\"title\":\"Graphics Design\",\"category\":\"marketing\"},{\"id\":4,\"imgSrc\":\"/images/portfolio/portfolio-4.jpg\",\"title\":\"Web Development\",\"category\":\"software\"},{\"id\":5,\"imgSrc\":\"/images/portfolio/portfolio-5.jpg\",\"title\":\"Construction Project\",\"category\":\"design\"},{\"id\":6,\"imgSrc\":\"/images/portfolio/portfolio-6.jpg\",\"title\":\"Illustration Design\",\"category\":\"app\"}]}");

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialSectionOne.vue?vue&type=template&id=f6b2822c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"testimonial-section section-padding-t90 section-padding-bottom"},[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title fz-32\">What our customers are saying about our services</h2> <p class=\"sub-title\">Get your company heading in the right direction with our digital marketing strategist</p></div> "),_vm._ssrNode("<div data-aos=\"fade-up\" class=\"testimonial-slider\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.testimonialData),function(testimonial,index){return _c('div',{key:index,staticClass:"swiper-slide"},[_c('TestimonialItem',{attrs:{"testimonial":testimonial}})],1)}),0),_vm._ssrNode(" <div class=\"swiper-pagination text-center\"></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestimonialSectionOne.vue?vue&type=template&id=f6b2822c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialSectionOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TestimonialSectionOnevue_type_script_lang_js_ = ({
  components: {
    TestimonialItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 114))
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        spaceBetween: 50,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          1499: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      },
      testimonialData: [{
        id: 1,
        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
        imgSrc: "/images/testimonial/author-1.png",
        name: "Uzzal Hossain",
        position: "Frontend Developer"
      }, {
        id: 2,
        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
        imgSrc: "/images/testimonial/author-2.png",
        name: "Tasnim Akter",
        position: "Marketing Manager"
      }, {
        id: 3,
        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
        imgSrc: "/images/testimonial/author-3.png",
        name: "Yeasin Hossain",
        position: "Team Leader"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/TestimonialSectionOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialSectionOnevue_type_script_lang_js_ = (TestimonialSectionOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TestimonialSectionOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialSectionOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6958f277"
  
)

/* harmony default export */ var TestimonialSectionOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TestimonialItem: __webpack_require__(114).default})


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutTwo.vue?vue&type=template&id=4d1a664e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-lg-6\"><div class=\"about-content-area\"><div class=\"section-title-two\"><span class=\"sub-title\">Web design and digital marketing</span> <h3 class=\"title\">We think strategy, UX design, <br> and web development</h3></div> <div class=\"row mtn-30\"><div data-aos=\"fade-up\" class=\"col-md-5 col-sm-6 col-12 mt-30\"><div class=\"about-funfact\"><div class=\"number\"><span class=\"counter\">110</span>+</div> <h6 class=\"text\">Happy Clients</h6> <p>We help our clients increase profits by increasing their visibility online.</p></div></div> <div data-aos=\"fade-up\" class=\"col-md-5 col-sm-6 col-12 mt-30\"><div class=\"about-funfact\"><div class=\"number\"><span class=\"counter\">130</span>+</div> <h6 class=\"text\">Completed projects</h6> <p>We help our clients increase profits by increasing their visibility online.</p></div></div></div></div></div> "),_vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-lg-6\">","</div>",[_vm._ssrNode("<div class=\"about-image-area about-two about-shape-animation right-0 mr-0\">","</div>",[_vm._ssrNode("<div class=\"about-image js-tilt\"><img src=\"/images/about/about-1.jpg\" alt=\"image\"></div> <div class=\"about-image js-tilt\"><img src=\"/images/about/about-2.jpg\" alt=\"image\"></div> "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-1","data-depth":"1","imgSrc":"/images/shape-animation/video-shape-1.png"}})],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutTwo.vue?vue&type=template&id=4d1a664e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutTwo.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "02fddb98"
  
)

/* harmony default export */ var AboutTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(97).default})


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureOne.vue?vue&type=template&id=2ae1a03e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding-t90-b100"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('SectionTitle',{attrs:{"title":"We create a unique action plan for brands","sub-title":"Get your company heading in the right direction with our digital marketing strategist","add-class-name":"mb-60"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30\">","</div>",_vm._l((_vm.features),function(feature,index){return _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col mt-30\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("icon-box text-center",_vm.addClassName))+">","</div>",[_vm._ssrNode("<div class=\"icon\"><img"+(_vm._ssrAttr("src",feature.iconSrc))+(_vm._ssrAttr("alt",feature.title))+" class=\"svgInject\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<h3 class=\"title\">"+_vm._ssrEscape(_vm._s(feature.title))+"</h3> <div class=\"desc\"><p>"+_vm._ssrEscape(_vm._s(feature.text))+"</p></div> "),_c('n-link',{staticClass:"link",attrs:{"to":"/about"}},[_vm._v("Learn More")])],2)],2)])}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FeatureOne.vue?vue&type=template&id=2ae1a03e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeatureOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FeatureOnevue_type_script_lang_js_ = ({
  props: ["addClassName"],
  components: {
    SectionTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 101))
  },

  data() {
    return {
      features: [{
        id: 1,
        title: "Branding",
        text: "First impressions count! Make sure your brand works for you. We offer digital marketing.",
        iconSrc: "/images/svg/linea/linea-basic-target.svg"
      }, {
        id: 2,
        title: "UX Design",
        text: "First impressions count! Make sure your brand works for you. We offer digital marketing.",
        iconSrc: "/images/svg/linea/linea-basic-picture-multiple.svg"
      }, {
        id: 3,
        title: "Strategy",
        text: "First impressions count! Make sure your brand works for you. We offer digital marketing.",
        iconSrc: "/images/svg/linea/linea-basic-picture.svg"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/FeatureOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeatureOnevue_type_script_lang_js_ = (FeatureOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FeatureOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeatureOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "45101ee9"
  
)

/* harmony default export */ var FeatureOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(101).default})


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SkillWithVideo.vue?vue&type=template&id=bd321692&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-xl-5 col-lg-6 col-12\">","</div>",[_vm._ssrNode("<div class=\"skill-with-video-content\">","</div>",[_vm._ssrNode("<div class=\"section-title-two\"><span class=\"sub-title\">Development that converts and delivers</span> <h3 class=\"title\">\n                            We offer the tools and skills that your company deserves\n                        </h3></div> <ul class=\"agency-list\"><li class=\"item\"><div class=\"icon\"><i class=\"fas fa-check\"></i></div> <div class=\"text\">Select &amp; customize courses to your preferences</div></li> <li class=\"item\"><div class=\"icon\"><i class=\"fas fa-check\"></i></div> <div class=\"text\">Change the tutor and make arrangements</div></li> <li class=\"item\"><div class=\"icon\"><i class=\"fas fa-check\"></i></div> <div class=\"text\">Participate in events to join others</div></li> <li class=\"item\"><div class=\"icon\"><i class=\"fas fa-check\"></i></div> <div class=\"text\">Get the desired certificate delivered at house</div></li></ul> "),_c('n-link',{staticClass:"btn btn-primary btn-hover-secondary",attrs:{"to":"/contact-us"}},[_vm._v("\n                        Get started for free\n                    ")])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"offset-xl-1 col-xl-6 col-lg-6 col-12\">","</div>",[_vm._ssrNode("<div class=\"video-popup-area\">","</div>",[_vm._ssrNode("<div class=\"skill-video\">","</div>",[_c('client-only',[_c('silent-box',{attrs:{"image":_vm.videos[0]},scopedSlots:_vm._u([{key:"silentbox-item",fn:function(){return [_c('img',{staticClass:"image",attrs:{"src":"/images/video/skill-video.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"icon video-popup"},[_c('i',{staticClass:"fas fa-play"})])]},proxy:true}])})],1)],1),_vm._ssrNode(" "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-1","data-depth":"1","imgSrc":"/images/shape-animation/video-shape-1.png"}})],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SkillWithVideo.vue?vue&type=template&id=bd321692&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SkillWithVideo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SkillWithVideovue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 97))
  },

  data() {
    return {
      videos: [{
        src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/SkillWithVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SkillWithVideovue_type_script_lang_js_ = (SkillWithVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SkillWithVideo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SkillWithVideovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d428cdd"
  
)

/* harmony default export */ var SkillWithVideo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(97).default})


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioGalleryTwo.vue?vue&type=template&id=1c68ce1f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding"},[_vm._ssrNode("<div class=\"container-fluid px-0\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" class=\"section-title text-center\"><h2 class=\"title\">Great even greater creative works</h2> <p class=\"sub-title\">Get your company heading in the right direction with our digital marketing strategist</p></div> <div class=\"messonry-button text-center mb-60\"><button data-filter=\"all\"><span class=\"filter-text\">All</span></button> <button data-filter=\".app\"><span class=\"filter-text\">App</span></button> <button data-filter=\".development\"><span class=\"filter-text\">Development</span></button> <button data-filter=\".marketing\"><span class=\"filter-text\">Marketing</span></button> <button data-filter=\".software\"><span class=\"filter-text\">Software</span></button> <button data-filter=\".design\"><span class=\"filter-text\">Design</span></button></div> "),_vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 no-gutters box\">","</div>",_vm._l((_vm.portfolioData.portfolios),function(portfolio,index){return _vm._ssrNode("<div"+(_vm._ssrClass("col mix",portfolio.category))+">","</div>",[_vm._ssrNode("<div class=\"single-portfolio\">","</div>",[_vm._ssrNode("<div class=\"thumbnail\"><img"+(_vm._ssrAttr("src",portfolio.imgSrc))+(_vm._ssrAttr("alt",portfolio.title))+" class=\"img-fluid\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<h5 class=\"title\">","</h5>",[_c('n-link',{attrs:{"to":"/project-details"}},[_vm._v(_vm._s(portfolio.title))])],1)])],2)])}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PortfolioGalleryTwo.vue?vue&type=template&id=1c68ce1f&

// EXTERNAL MODULE: ./data/portfolios.json
var portfolios = __webpack_require__(116);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioGalleryTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PortfolioGalleryTwovue_type_script_lang_js_ = ({
  data() {
    return {
      portfolioData: portfolios,
      mixer: null
    };
  },

  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector('.box');
      this.mixer = new this.mixitup(containerEl);
    });
  }

});
// CONCATENATED MODULE: ./components/PortfolioGalleryTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PortfolioGalleryTwovue_type_script_lang_js_ = (PortfolioGalleryTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PortfolioGalleryTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PortfolioGalleryTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "48d366f9"
  
)

/* harmony default export */ var PortfolioGalleryTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSectionOne.vue?vue&type=template&id=152a592a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding-t90-b100"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('SectionTitle',{attrs:{"title":"We are a full-service creative agency","sub-title":"Our team of designers, developers and creatives are perfectionists who love what they do and love"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-60\">","</div>",_vm._l((_vm.blogData.slice(0, 3)),function(blog,index){return _vm._ssrNode("<div class=\"col mt-30\">","</div>",[_c('BlogGridItem',{attrs:{"blog":blog}})],1)}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogSectionOne.vue?vue&type=template&id=152a592a&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSectionOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BlogSectionOnevue_type_script_lang_js_ = ({
  data() {
    return {
      blogData: blog
    };
  },

  components: {
    BlogGridItem: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 115)),
    SectionTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 101))
  }
});
// CONCATENATED MODULE: ./components/BlogSectionOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogSectionOnevue_type_script_lang_js_ = (BlogSectionOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogSectionOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogSectionOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "15004fdc"
  
)

/* harmony default export */ var BlogSectionOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(101).default,BlogGridItem: __webpack_require__(115).default})


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactSectionOne.vue?vue&type=template&id=679522c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding contact-section"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row row-cols-lg-2 row-cols-1 align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col\"><div class=\"contact-Information mr-xl-7\"><div class=\"section-title-two\"><span class=\"sub-title\">Innovative &amp; cutting-edge technology</span> <h3 class=\"title\">We use latest technologies that are proven and practical</h3></div> <div data-vivus-hover class=\"contact-info ct-info-two\"><div class=\"icon\"><img src=\"/images/svg/linea/linea-basic-map.svg\" alt class=\"svgInject\"></div> <div class=\"info\"><h4 class=\"title\">Our Locations</h4> <span class=\"info-text\"> 110 W 34th St, NYC. / 67 Madison Avenue.</span></div></div> <div data-vivus-hover class=\"contact-info ct-info-two\"><div class=\"icon\"><img src=\"/images/svg/linea/linea-basic-message-txt.svg\" alt class=\"svgInject\"></div> <div class=\"info\"><h4 class=\"title\">Give Us A Call</h4> <span class=\"info-text\"> (+1) 212-946-2701 / (+1) 212-946-2702</span></div></div> <div data-vivus-hover class=\"contact-info ct-info-two\"><div class=\"icon\"><img src=\"/images/svg/linea/linea-basic-mail-open-text.svg\" alt class=\"svgInject\"></div> <div class=\"info\"><h4 class=\"title\"> Help Desk</h4> <span class=\"info-text\"><a href=\"mailto:hello@hasthemes.com\">hello@hasthemes.com</a>,\n                                <a href=\"mailto:sales@hasthemes.com\">sales@hasthemes.com</a></span></div></div></div></div> "),_vm._ssrNode("<div class=\"col\">","</div>",[_vm._ssrNode("<div class=\"contact-form-area box-shadow\">","</div>",[_vm._ssrNode("<div class=\"section-title text-center mb-7\"><h2 class=\"title fz-28\">Let’s talk about your project</h2> <p class=\"sub-title\">We have made it easy for clients to reach us and get their solutions weaved</p></div> <form><div class=\"row mb-n4\"><div class=\"col-md-12 col-12 mb-4\"><input type=\"text\" placeholder=\"Your Name *\" name=\"name\"></div> <div class=\"col-md-12 col-12 mb-4\"><input type=\"email\" placeholder=\"Email *\" name=\"email\"></div> <div class=\"col-12 mb-30\"><textarea name=\"message\" placeholder=\"Message\"></textarea></div> <div class=\"col-12 text-center mb-4\"><button class=\"btn btn-primary btn-hover-secondary\">Get a free consultation</button></div></div></form> "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-1","data-depth":"1","imgSrc":"/images/shape-animation/contact-shape.png"}})],2)])],2)]),_vm._ssrNode(" "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-1","data-depth":"1","imgSrc":"/images/shape-animation/contact-shape.png"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ContactSectionOne.vue?vue&type=template&id=679522c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactSectionOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ContactSectionOnevue_type_script_lang_js_ = ({
  components: {
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 97))
  }
});
// CONCATENATED MODULE: ./components/ContactSectionOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactSectionOnevue_type_script_lang_js_ = (ContactSectionOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactSectionOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactSectionOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d54b3890"
  
)

/* harmony default export */ var ContactSectionOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(97).default})


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroFixedBanner.vue?vue&type=template&id=563a6a39&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intro-slider"},[_vm._ssrNode("<div class=\"intro-section overlay bg-cover\""+(_vm._ssrStyle(null,{ backgroundImage: "url('/images/hero-image/hero-3.jpg')" }, null))+">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row row-cols-lg-1 row-cols-1\">","</div>",[_vm._ssrNode("<div class=\"col align-self-center\">","</div>",[_vm._ssrNode("<div class=\"intro-content m-auto text-center\">","</div>",[_c('vue-typed-js',{staticClass:"justify-content-center",attrs:{"strings":['Positively', 'Intensively', 'Extensively'],"loop":true,"typeSpeed":150,"backSpeed":80,"showCursor":false}},[_c('h2',{staticClass:"title"},[_vm._v("Expand Your Business "),_c('span',{staticClass:"typing"})])]),_vm._ssrNode(" <div class=\"desc\"><p>We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.</p></div> "),_c('n-link',{staticClass:"btn btn-primary btn-hover-secondary",attrs:{"to":"/about"}},[_vm._v("Get Started")]),_vm._ssrNode(" "),_c('n-link',{staticClass:"btn btn-outline-white btn-hover-primary",attrs:{"to":"/about"}},[_vm._v("Learn More")])],2)])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeroFixedBanner.vue?vue&type=template&id=563a6a39&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeroFixedBanner.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4748dedd"
  
)

/* harmony default export */ var HeroFixedBanner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFcat.vue?vue&type=template&id=6231ae12&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding"},[_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-12 mx-auto\"><div class=\"row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30\"><div data-aos=\"fade-up\" class=\"col mt-30\"><div class=\"funfact\"><div class=\"number\"><span class=\"counter\">20</span>+</div> <h6 class=\"text\">Years Experience</h6></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\"><div class=\"funfact\"><div class=\"number\"><span class=\"counter\">15</span></div> <h6 class=\"text\">Active Projects</h6></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\"><div class=\"funfact\"><div class=\"number\"><span class=\"counter\">130</span></div> <h6 class=\"text\">Projects Done</h6></div></div> <div data-aos=\"fade-up\" class=\"col mt-30\"><div class=\"funfact\"><div class=\"number\"><span class=\"counter\">200</span>+</div> <h6 class=\"text\">Satisfied Clients</h6></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FunFcat.vue?vue&type=template&id=6231ae12&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FunFcat.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56041474"
  
)

/* harmony default export */ var FunFcat = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5df6318e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('TheHeader'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('SearchPopup'),_vm._ssrNode(" "),_c('HeroFixedBanner'),_vm._ssrNode(" "),_c('AboutTwo'),_vm._ssrNode(" "),_c('FunFcat'),_vm._ssrNode(" "),_c('FeatureOne',{style:({backgroundColor: '#f8faff'})}),_vm._ssrNode(" "),_c('SkillWithVideo'),_vm._ssrNode(" "),_c('PortfolioGalleryTwo',{style:({backgroundColor: '#f8faff'})}),_vm._ssrNode(" "),_c('TestimonialSectionOne'),_vm._ssrNode(" "),_c('BlogSectionOne',{style:({backgroundColor: '#f8faff'})}),_vm._ssrNode(" "),_c('ContactSectionOne'),_vm._ssrNode(" "),_c('TheFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5df6318e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    TheHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 105)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 106)),
    SearchPopup: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 107)),
    HeroFixedBanner: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 143)),
    AboutTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 119)),
    FunFcat: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 144)),
    FeatureOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 136)),
    SkillWithVideo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 137)),
    PortfolioGalleryTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 138)),
    TestimonialSectionOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 117)),
    BlogSectionOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 139)),
    ContactSectionOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 140)),
    TheFooter: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 108))
  },

  head() {
    return {
      title: 'Balance Period - Home'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4129b5a6"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheHeader: __webpack_require__(105).default,OffCanvasMobileMenu: __webpack_require__(106).default,SearchPopup: __webpack_require__(107).default,HeroFixedBanner: __webpack_require__(143).default,AboutTwo: __webpack_require__(119).default,FunFcat: __webpack_require__(144).default,FeatureOne: __webpack_require__(136).default,SkillWithVideo: __webpack_require__(137).default,PortfolioGalleryTwo: __webpack_require__(138).default,TestimonialSectionOne: __webpack_require__(117).default,BlogSectionOne: __webpack_require__(139).default,ContactSectionOne: __webpack_require__(140).default,TheFooter: __webpack_require__(108).default})


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=template&id=dd860e6a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shape scene",class:_vm.addClassName},[_vm._ssrNode("<span"+(_vm._ssrAttr("data-depth",_vm.dataDepth))+"><img"+(_vm._ssrAttr("src",_vm.imgSrc))+" alt=\"shape image\"></span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=template&id=dd860e6a&

// EXTERNAL MODULE: external "parallax-js"
var external_parallax_js_ = __webpack_require__(96);
var external_parallax_js_default = /*#__PURE__*/__webpack_require__.n(external_parallax_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var ShapeWithAnimationvue_type_script_lang_js_ = ({
  props: ['addClassName', 'imgSrc', 'dataDepth'],

  mounted() {
    var scene = document.querySelectorAll('.scene');

    if (scene) {
      scene.forEach((el, i) => {
        new external_parallax_js_default.a(el);
      });
    }

    ;
  }

});
// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShapeWithAnimationvue_type_script_lang_js_ = (ShapeWithAnimationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShapeWithAnimationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "77de11d4"
  
)

/* harmony default export */ var ShapeWithAnimation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("30fa31d0", content, true, context)
};

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=index.js.map