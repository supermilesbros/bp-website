exports.ids = [48,8,10,13,25,26,28,33,34,37,44,45];
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BreadcrumbOne.vue?vue&type=template&id=c3dc6c8e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-title-section section-padding-top bg-cover",style:({ backgroundImage: ("url(" + _vm.backgroundUrl + ")") }),attrs:{"data-overlay":"0.7"}},[_vm._ssrNode("<div class=\"page-title\"><div class=\"container\"><h1 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1></div></div> "),_vm._ssrNode("<div class=\"page-breadcrumb position-static\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_c('b-breadcrumb',{staticClass:"page-breadcrumb",attrs:{"items":_vm.items}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BreadcrumbOne.vue?vue&type=template&id=c3dc6c8e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BreadcrumbOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BreadcrumbOnevue_type_script_lang_js_ = ({
  props: ['items', 'title', 'backgroundUrl']
});
// CONCATENATED MODULE: ./components/BreadcrumbOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BreadcrumbOnevue_type_script_lang_js_ = (BreadcrumbOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BreadcrumbOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BreadcrumbOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4443841a"
  
)

/* harmony default export */ var BreadcrumbOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 110:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"How your sales can work together in account-based marketing\",\"date\":\"Apr 06, 2020\",\"view\":70,\"imgSrc\":\"/images/blog/370/blog-1.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-1.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"8\"},{\"id\":2,\"title\":\"The six things marketers need to understand about DTC marketing\",\"date\":\"Jun 26, 2020\",\"view\":92,\"imgSrc\":\"/images/blog/370/blog-2.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-2.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"9\"},{\"id\":3,\"title\":\"Eleven top tips for developing agile marketing\",\"date\":\"May 16, 2020\",\"view\":55,\"imgSrc\":\"/images/blog/370/blog-3.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-3.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"15\"},{\"id\":4,\"title\":\"Eleven top tips for developing agile marketing\",\"date\":\"Feb 14, 2020\",\"view\":36,\"imgSrc\":\"/images/blog/370/blog-4.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-1.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"40\"},{\"id\":5,\"title\":\"How your sales can work together in account-based marketing\",\"date\":\"Aug 26, 2020\",\"view\":46,\"imgSrc\":\"/images/blog/370/blog-5.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-2.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"32\"},{\"id\":6,\"title\":\"The six things marketers need to understand about DTC marketing\",\"date\":\"Jun 22, 2020\",\"view\":34,\"imgSrc\":\"/images/blog/370/blog-6.jpg\",\"bigImgSrc\":\"/images/blog/770/blog-3.jpg\",\"desc\":\"We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.\",\"comment\":\"64\"}]");

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToActionTwo.vue?vue&type=template&id=4fbbafb0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding-t110-b120 newsletter-section bg-cover",style:({ backgroundImage: "url('/images/bg/newsletter.jpg')" }),attrs:{"data-overlay":"0.7"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"cta-content text-center\">","</div>",[_c('SectionTitle',{attrs:{"title":"Let’s find out how to work together","sub-title":"Ready to start your project? The contact information collected through this form will only be used to send a response to your inquiry.","add-class-name":"color-light"}}),_vm._ssrNode(" "),_c('n-link',{staticClass:"btn btn-primary btn-hover-secondary mt-6",attrs:{"to":"/contact-us"}},[_vm._v("Get Started")])],2)])])]),_vm._ssrNode(" "),_c('ShapeWithAnimation',{attrs:{"add-class-name":"shape-1","data-depth":"1","img-src":"/images/shape-animation/newsletter-shape.png"}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CallToActionTwo.vue?vue&type=template&id=4fbbafb0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToActionTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CallToActionTwovue_type_script_lang_js_ = ({
  components: {
    SectionTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 101)),
    ShapeWithAnimation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 97))
  }
});
// CONCATENATED MODULE: ./components/CallToActionTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CallToActionTwovue_type_script_lang_js_ = (CallToActionTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CallToActionTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CallToActionTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1fec3a98"
  
)

/* harmony default export */ var CallToActionTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(101).default,ShapeWithAnimation: __webpack_require__(97).default})


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSidebar.vue?vue&type=template&id=1fcc7dc9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-widget-wrapper"},[_vm._ssrNode("<div class=\"sidebar-widget\"><div class=\"sidebar-widget-content\"><div class=\"sidebar-widget-search\"><form><input type=\"text\" placeholder=\"Search...\"> <button><i class=\"fas fa-search\"></i></button></form></div></div></div> "),_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<h3 class=\"sidebar-widget-title mb-2\">Categories</h3> "),_vm._ssrNode("<div class=\"sidebar-widget-content\">","</div>",[_vm._ssrNode("<ul class=\"sidebar-widget-cate-list\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_c('span',{staticClass:"text"},[_vm._v("App")]),_vm._v(" "),_c('span',{staticClass:"count"},[_vm._v("2")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_c('span',{staticClass:"text"},[_vm._v("Marketing")]),_vm._v(" "),_c('span',{staticClass:"count"},[_vm._v("8")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_c('span',{staticClass:"text"},[_vm._v("UX Design")]),_vm._v(" "),_c('span',{staticClass:"count"},[_vm._v("4")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_c('span',{staticClass:"text"},[_vm._v("Startup")]),_vm._v(" "),_c('span',{staticClass:"count"},[_vm._v("3")])])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<h3 class=\"sidebar-widget-title mb-2\">Popular Posts</h3> "),_vm._ssrNode("<div class=\"sidebar-widget-content\">","</div>",[_vm._ssrNode("<ul class=\"sidebar-widget-list-post\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<span class=\"cate\">Marketing</span> "),_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v(" How your sales can work together in account-based marketing")])],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<span class=\"cate\">Busniess</span> "),_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("The six things marketers need to understand about DTC marketing")])],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<span class=\"cate\">Marketing</span> "),_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Eleven top tips for developing agile marketing")])],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<span class=\"cate\">Agency</span> "),_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v(" How your sales can work together in account-based marketing")])],2)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<div class=\"sidebar-widget-content\">","</div>",[_vm._ssrNode("<div data-overlay=\"0.7\" class=\"sidebar-widget-banner bg-cover\""+(_vm._ssrStyle(null,{ backgroundImage: "url('/images/bg/breadcrumb-bg.jpg')" }, null))+">","</div>",[_vm._ssrNode("<h3 class=\"title\">Subscribe to our newsletter</h3> <p>All the latest marketing news, including updates on brand campaigns, and the most interesting insights</p> "),_c('n-link',{attrs:{"to":""}},[_vm._v("Subscribe Now")])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<h3 class=\"sidebar-widget-title\">Popular tags</h3> "),_vm._ssrNode("<div class=\"sidebar-widget-content\">","</div>",[_vm._ssrNode("<div class=\"tagcloud\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("App")]),_vm._ssrNode(" "),_c('n-link',{attrs:{"to":"/"}},[_vm._v("Branding")]),_vm._ssrNode(" "),_c('n-link',{attrs:{"to":"/"}},[_vm._v("Development")]),_vm._ssrNode(" "),_c('n-link',{attrs:{"to":"/"}},[_vm._v("Design")])],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogSidebar.vue?vue&type=template&id=1fcc7dc9&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogSidebar.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "47dba251"
  
)

/* harmony default export */ var BlogSidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog-details.vue?vue&type=template&id=ec719d52&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('TheHeader'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('SearchPopup'),_vm._ssrNode(" "),_c('BreadcrumbOne',{attrs:{"items":_vm.items,"title":"Find all our latest news, insights, and events","backgroundUrl":"/images/bg/breadcrumb-bg-four.jpg"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"section-padding fix\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row  mtn-50\">","</div>",[_vm._ssrNode("<div class=\"col-lg-8 col-12 order-lg-1 mt-50\"><div class=\"row row-cols-1 no-gutters\"><div data-aos=\"fade-up\" class=\"blog-3 blog-details col\"><div class=\"thumbnail\"><img src=\"/images/blog/770/blog-2.jpg\" alt=\"Blog Image\" class=\"w-100\"></div> <div class=\"info\"><h3 class=\"title\">Marketing just became invaluable: a new revenue marketing model for a new world</h3> <div class=\"desc\"><p><strong>We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p> <p>Even if it is a brave new world for everyone else, for marketers it's another day in the proverbial office.</p> <p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p> <p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p> <p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That wasn't ever close to the whole truth, of course, but past company structures — in which Marketing always played second fiddle to Sales — allowed that falsehood to persist.</p> <p>The pandemic has transformed what the marketing team means to an organization: It's given us agency. It's upended the customer journey. It's redefined how sales and marketing teams should interact. And it's forced businesses to see the value that marketers provide in a digital world.</p></div> <ul class=\"meta mb-0 mt-4\"><li><i class=\"fal fa-pencil-alt\"></i>Written by Admin, 10 Oct 2020</li> <li><i class=\"fas fa-tags\"></i>Marketing, UX Design</li> <li><i class=\"fas fa-comments\"></i>4 Comments</li> <li class=\"media\"><a href=\"#\"><i class=\"fas fa-share-alt\"></i>Share this post</a> <div class=\"list\"><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a> <a href=\"#\"><i class=\"fab fa-twitter\"></i></a> <a href=\"#\"><i class=\"fab fa-linkedin\"></i></a> <a href=\"#\"><i class=\"fab fa-tumblr-square\"></i></a></div></li></ul></div></div> <div class=\"entry-author\"><div class=\"author-info\"><div class=\"author-avatar\"><img src=\"/images/blog/blog-author.png\" alt=\"image\"></div> <div class=\"author-description\"><h6 class=\"author-name\">Eloise Smith</h6> <span class=\"designation\">CEO at Flow</span> <div class=\"author-biographical-info\">\n                                        She is a lawyer, podcaster, speaker, and writer. As an educational content director, she helps develop HasThemes' premium training products.\n                                    </div></div></div></div> <div class=\"blog-nav-links\"><h4 class=\"title\">Related Posts </h4> <div class=\"nav-list\"><div class=\"nav-item prev\"><div class=\"inner\"><a href=\"#\"><div class=\"hover-bg has-thumbnail\""+(_vm._ssrStyle(null,{backgroundImage: "url('/images/pagination/blog-pagination.jpg')"}, null))+"></div> <span class=\"cate\">Marketing</span> <h6>Eleven top tips for developing agile marketing strategies that work</h6></a></div></div> <div class=\"nav-item next\"><div class=\"inner\"><a href=\"#\"><div class=\"hover-bg has-thumbnail\""+(_vm._ssrStyle(null,{backgroundImage: "url('/images/pagination/blog-pagination-2.jpg')"}, null))+"></div> <span class=\"cate\">Startup</span> <h6>Growing a startup involves balancing out the financial stack</h6></a></div></div></div></div> <div class=\"comment-list-wrapper\"><div class=\"row\"><div class=\"col-lg-12\"><h4 class=\"title\">Comments (4) </h4></div> <div class=\"col-lg-12\"><ul class=\"comment-list\"><li class=\"comment\"><div class=\"comment-2\"><div class=\"comment-author vcard\"><img alt src=\"/images/comment/comment1.png\"></div> <div class=\"comment-content\"><div class=\"meta\"><h6 class=\"fn\">Thomas Smith</h6> <div class=\"comment-datetime\"> 10 Oct, 2019. 10:00AM </div></div> <div class=\"comment-text\"><p>An interesting article​ about ​content marketing. It has evolved moving from If you are interested in content marketing, have a look at the article's traditional media into the digital landscape.</p></div> <div class=\"comment-actions\"><a href=\"javascript:void(0)\" class=\"comment-reply-link\">Reply</a></div></div></div></li> <li class=\"children comment\"><div class=\"comment-6\"><div class=\"comment-author vcard\"><img alt src=\"/images/comment/comment2.png\"></div> <div class=\"comment-content\"><div class=\"meta\"><h6 class=\"fn\">Eloise Smith</h6> <div class=\"comment-datetime\">10 Oct, 2019. 10:00AM</div></div> <div class=\"comment-text\"><p>An interesting article​ about ​content marketing. It has evolved moving from If you are interested in content marketing, have a look at the article's traditional media into the digital landscape.</p></div> <div class=\"comment-actions\"><a href=\"javascript:void(0)\" class=\"comment-reply-link\">Reply</a></div></div></div></li> <li class=\"comment\"><div class=\"comment-2\"><div class=\"comment-author vcard\"><img alt src=\"/images/comment/comment3.png\"></div> <div class=\"comment-content\"><div class=\"meta\"><h6 class=\"fn\">Stella Smith</h6> <div class=\"comment-datetime\"> 10 Oct, 2019. 10:00AM </div></div> <div class=\"comment-text\"><p>An interesting article​ about ​content marketing. It has evolved moving from If you are interested in content marketing, have a look at the article's traditional media into the digital landscape.</p></div> <div class=\"comment-actions\"><a href=\"javascript:void(0)\" class=\"comment-reply-link\">Reply</a></div></div></div></li> <li class=\"comment\"><div class=\"comment-5\"><div class=\"comment-author vcard\"><img alt src=\"/images/comment/comment4.png\"></div> <div class=\"comment-content\"><div class=\"meta\"><h6 class=\"fn\">Vincent Smith</h6> <div class=\"comment-datetime\">10 Oct, 2019. 10:00AM</div></div> <div class=\"comment-text\"><p>An interesting article​ about ​content marketing. It has evolved moving from If you are interested in content marketing, have a look at the article's traditional media into the digital landscape.</p></div> <div class=\"comment-actions\"><a href=\"javascript:void(0)\" class=\"comment-reply-link\">Reply</a></div></div></div></li></ul></div></div></div> <div class=\"comment-form-wrap\"><div class=\"comment-respond\"><h3 class=\"title\">Leave a Reply</h3> <form action=\"#\" method=\"post\"><div class=\"row\"><div class=\"col-md-6 col-12 mb-3\"><input type=\"text\" placeholder=\"Your Name *\" name=\"name\"></div> <div class=\"col-md-6 col-12 mb-3\"><input type=\"email\" placeholder=\"Email *\" name=\"email\"></div> <div class=\"col-12 mb-3\"><textarea name=\"message\" placeholder=\"Your Comment\"></textarea></div> <div class=\"col-12 text-left\"><button class=\"btn btn-primary btn-hover-secondary\">Submit</button></div></div></form></div></div></div></div> "),_vm._ssrNode("<div class=\"col-lg-4 col-12 order-lg-2 mt-50\">","</div>",[_c('BlogSidebar')],1)],2)])]),_vm._ssrNode(" "),_c('CallToActionTwo'),_vm._ssrNode(" "),_c('TheFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog-details.vue?vue&type=template&id=ec719d52&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog-details.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var blog_detailsvue_type_script_lang_js_ = ({
  components: {
    TheHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 105)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 106)),
    SearchPopup: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 107)),
    BreadcrumbOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 109)),
    BlogSidebar: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 120)),
    CallToActionTwo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 111)),
    TheFooter: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 108))
  },

  data() {
    return {
      blogData: blog,
      items: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Blog Details',
        active: true
      }]
    };
  },

  head() {
    return {
      title: 'Blog Details'
    };
  }

});
// CONCATENATED MODULE: ./pages/blog-details.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blog_detailsvue_type_script_lang_js_ = (blog_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog-details.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blog_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a26503e8"
  
)

/* harmony default export */ var blog_details = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheHeader: __webpack_require__(105).default,OffCanvasMobileMenu: __webpack_require__(106).default,SearchPopup: __webpack_require__(107).default,BreadcrumbOne: __webpack_require__(109).default,BlogSidebar: __webpack_require__(120).default,CallToActionTwo: __webpack_require__(111).default,TheFooter: __webpack_require__(108).default})


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
//# sourceMappingURL=blog-details.js.map