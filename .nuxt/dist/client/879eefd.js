(window.webpackJsonp=window.webpackJsonp||[]).push([[54,12,19,23,27,28,30,33,35,37,39,46,47],{310:function(t,e,n){"use strict";n.r(e);n(2);var l=n(312),o=n.n(l),r={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new o.a(t)}))}},c=n(50),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shape scene",class:t.addClassName},[n("span",{attrs:{"data-depth":t.dataDepth}},[n("img",{attrs:{src:t.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("30fa31d0",content,!0,{sourceMap:!1})},313:function(t,e,n){"use strict";n(311)},314:function(t,e,n){var l=n(42)(!1);l.push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#3963af}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#3963af}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=l},316:function(t,e,n){"use strict";n.r(e);var l={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=t.querySelectorAll(".menu-expand"),o=l.length,r=0;r<o;r++)l[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},o=(n(313),n(50)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Project")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Blog")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/blog-grid"}},[t._v("Blog Grid")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-classic"}},[t._v("Blog Classic")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);var l=n(50),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"site-main-menu"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pricing"}},[t._v("Pricing")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-classic"}},[t._v("Blog")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])}),[],!1,null,null,null);e.default=component.exports},318:function(t){t.exports=JSON.parse('{"footerAboutWidget":{"logoSrc":"/images/logo/bp-logo-menu.png","telephone":"(+1) 212-946-2701","email":"info@balanceperiod.com","fbUrl":"https://www.facebook.com/","twitterUrl":"https://twitter.com/","instagramUrl":"https://www.instagram.com/"},"footerLinkTitleOne":"Services","navListOne":[{"navTitle":"Marketing","navUrl":"/"},{"navTitle":"SEO/SEM","navUrl":"/"},{"navTitle":"Development","navUrl":"/"},{"navTitle":"UX Design","navUrl":"/"}],"footerLinkTitleTwo":"Products","navListTwo":[{"navTitle":"Elementor Guru","navUrl":"/"},{"navTitle":"WooLentor Pro","navUrl":"/"},{"navTitle":"Plugins","navUrl":"/"},{"navTitle":"Page Builder","navUrl":"/"}],"footerLinkTitleThree":"About","navListThree":[{"navTitle":"Features","navUrl":"/"},{"navTitle":"Our Partners","navUrl":"/"},{"navTitle":"Affiliate Program","navUrl":"/"},{"navTitle":"Pricing","navUrl":"/"}],"footerLinkTitleFour":"Contact","navListFour":[{"navTitle":"Support Ticket","navUrl":"/"},{"navTitle":"Help Desk","navUrl":"/"},{"navTitle":"Live Chat","navUrl":"/"},{"navTitle":"FAQs","navUrl":"/"}]}')},319:function(t,e,n){"use strict";n.r(e);n(19),n(40),n(51);var l={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,317))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=n(50),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-section header-transparent",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"container position-relative"},[n("div",{staticClass:"row justify-content-between align-items-center"},[n("div",{staticClass:"col-xl-2 col-auto order-0"},[n("div",{staticClass:"header-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/bp-logo3.png",alt:"Agency Logo"}}),t._v(" "),n("img",{staticClass:"light-logo",attrs:{src:"/images/logo/bp-logo-menu.png",alt:"Agency Logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1"},[n("div",{staticClass:"menu-column-area d-none d-xl-block position-static"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"header-search-area"},[n("div",{staticClass:"header-search"},[n("a",{staticClass:"header-search-toggle",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleClass("addClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-search pe-2x pe-va"})])])]),t._v(" "),n("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[n("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("i",{staticClass:"icon-top"}),t._v(" "),n("i",{staticClass:"icon-middle"}),t._v(" "),n("i",{staticClass:"icon-bottom"})])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2"},[n("n-link",{staticClass:"btn btn-light btn-hover-primary",attrs:{to:"/"}},[t._v("Shop Now")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(317).default})},320:function(t,e,n){"use strict";n.r(e);n(19),n(40),n(51);var l={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,316))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=n(50),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner custom-scrollbar"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo.png",alt:"site logo"}})])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(316).default})},321:function(t,e,n){"use strict";n.r(e);var l={methods:{toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=n(50),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-search-active",attrs:{id:"search-popup"}},[n("div",{staticClass:"sidebar-search-icon"},[n("button",{staticClass:"search-close",on:{click:function(e){return t.toggleClass("removeClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-close"})])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-search-input"},[n("form",[n("div",{staticClass:"form-search"},[n("input",{staticClass:"input-text",attrs:{id:"search",value:"",placeholder:"",type:"search"}}),t._v(" "),n("button",[n("i",{staticClass:"fa fa-search"})])])]),t._v(" "),n("p",{staticClass:"form-description"},[t._v("Hit enter to search")])])}],!1,null,null,null);e.default=component.exports},322:function(t,e,n){"use strict";n.r(e);var footer=n(318),l={data:function(){return{footerData:footer}}},o=n(50),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-section",style:{backgroundColor:"#253f70"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row section-padding pt-0 mtn-30"},[n("div",{staticClass:"col-md-4 col-sm-6 col-12 mt-30"},[n("div",{staticClass:"footer-widget"},[n("div",{staticClass:"footer-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:t.footerData.footerAboutWidget.logoSrc,alt:"Logo"}})])],1),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:"tel:(+1)212-946-2701"}},[t._v(t._s(t.footerData.footerAboutWidget.telephone))])]),t._v(" "),n("p",[n("a",{attrs:{href:"mailto:ray@balanceperiod.com"}},[t._v(t._s(t.footerData.footerAboutWidget.email))])])]),t._v(" "),n("div",{staticClass:"footer-social-inline"},[n("a",{attrs:{href:t.footerData.footerAboutWidget.twitterUrl,target:"_blank"}},[n("i",{staticClass:"fab fa-twitter-square"})]),t._v(" "),n("a",{attrs:{href:t.footerData.footerAboutWidget.fbUrl,target:"_blank"}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:t.footerData.footerAboutWidget.instagramUrl,target:"_blank"}},[n("i",{staticClass:"fab fa-instagram"})])])])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleOne))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListOne,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleTwo))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListTwo,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleThree))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListThree,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleFour))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListFour,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("p",{staticClass:"copyright"},[t._v("Copyright © 2021 Balance Period All Rights Reserved.")])])])}],!1,null,null,null);e.default=component.exports},323:function(t,e,n){"use strict";n.r(e);var l={props:["items","title","backgroundUrl"]},o=n(50),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url("+t.backgroundUrl+")"},attrs:{"data-overlay":"0.7"}},[n("div",{staticClass:"page-title"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))])])]),t._v(" "),n("div",{staticClass:"page-breadcrumb position-static"},[n("div",{staticClass:"container"},[n("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:t.items}})],1)])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);var l={props:["service","addClassName"]},o=n(50),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-box text-center",class:t.addClassName},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:t.service.iconSrc,alt:t.service.title}})]),t._v(" "),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v(t._s(t.service.title))]),t._v(" "),n("div",{staticClass:"desc"},[n("p",[t._v(t._s(t.service.text))])]),t._v(" "),n("n-link",{staticClass:"link",attrs:{to:"/project-details"}},[t._v("Learn More")])],1)])}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);n(19),n(40),n(51);var l={components:{ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,310))}}},o=n(50),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding contact-section fix bg-cover",style:{backgroundImage:"url('/images/bg/contact-bg.jpg')"},attrs:{"data-overlay":"0.7"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row row-cols-lg-2 row-cols-1 align-items-center"},[t._m(0),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"contact-form-area box-shadow"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1","data-depth":"1",imgSrc:"/images/shape-animation/contact-shape.png"}})],1)])])]),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1","data-depth":"1",imgSrc:"/images/shape-animation/newsletter-shape.png"}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("div",{staticClass:"contact-Information mr-xl-7"},[n("div",{staticClass:"section-title-two color-light"},[n("span",{staticClass:"sub-title"},[t._v("Innovative & cutting-edge technology")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("We use latest technologies that are proven and practical")])]),t._v(" "),n("div",{staticClass:"contact-info info-light",attrs:{"data-vivus-hover":""}},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:"/images/svg/linea/linea-basic-map.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"title"},[t._v("Our Locations")]),t._v(" "),n("span",{staticClass:"info-text"},[t._v(" 110 W 34th St, NYC. / 67 Madison Avenue.")])])]),t._v(" "),n("div",{staticClass:"contact-info info-light",attrs:{"data-vivus-hover":""}},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:"/images/svg/linea/linea-basic-message-txt.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"title"},[t._v("Give Us A Call")]),t._v(" "),n("span",{staticClass:"info-text"},[t._v(" (+1) 212-946-2701 / (+1) 212-946-2702")])])]),t._v(" "),n("div",{staticClass:"contact-info info-light",attrs:{"data-vivus-hover":""}},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:"/images/svg/linea/linea-basic-mail-open-text.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"title"},[t._v(" Help Desk")]),t._v(" "),n("span",{staticClass:"info-text"},[n("a",{attrs:{href:"mailto:hello@hasthemes.com"}},[t._v("hello@hasthemes.com")]),t._v(",\n                                "),n("a",{attrs:{href:"mailto:sales@hasthemes.com"}},[t._v("sales@hasthemes.com")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title text-center mb-7"},[n("h2",{staticClass:"title fz-28"},[t._v("Let’s talk about you")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("We have made it easy for clients to reach us and get their solutions")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("div",{staticClass:"row mb-n4"},[n("div",{staticClass:"col-md-12 col-12 mb-4"},[n("input",{attrs:{type:"text",placeholder:"Your Name *",name:"name"}})]),t._v(" "),n("div",{staticClass:"col-md-12 col-12 mb-4"},[n("input",{attrs:{type:"email",placeholder:"Email *",name:"email"}})]),t._v(" "),n("div",{staticClass:"col-12 mb-30"},[n("textarea",{attrs:{name:"message",placeholder:"Message"}})]),t._v(" "),n("div",{staticClass:"col-12 text-center mb-4"},[n("button",{staticClass:"btn btn-primary btn-hover-secondary"},[t._v("Get a free consultation")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ShapeWithAnimation:n(310).default})},335:function(t,e,n){"use strict";n.r(e);var l=n(50),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"section-padding-t90 section-padding-bottom",style:{backgroundColor:"#f8faff"}},[t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"section-title text-center",attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title fz-32"},[t._v("We help our clients solve business problems, increase "),n("br"),t._v(" visibility, and achieve unexpected results")])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 mx-auto"},[n("div",{staticClass:"row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"},[n("div",{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"funfact"},[n("div",{staticClass:"number"},[n("span",{staticClass:"counter"},[t._v("20")]),t._v("+")]),t._v(" "),n("h6",{staticClass:"text"},[t._v("Years Experience")])])]),t._v(" "),n("div",{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"funfact"},[n("div",{staticClass:"number"},[n("span",{staticClass:"counter"},[t._v("15")])]),t._v(" "),n("h6",{staticClass:"text"},[t._v("Active Projects")])])]),t._v(" "),n("div",{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"funfact"},[n("div",{staticClass:"number"},[n("span",{staticClass:"counter"},[t._v("130")])]),t._v(" "),n("h6",{staticClass:"text"},[t._v("Projects Done")])])]),t._v(" "),n("div",{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"funfact"},[n("div",{staticClass:"number"},[n("span",{staticClass:"counter"},[t._v("200")]),t._v("+")]),t._v(" "),n("h6",{staticClass:"text"},[t._v("Satisfied Clients")])])])])])])])}],!1,null,null,null);e.default=component.exports},337:function(t){t.exports=JSON.parse('[{"id":1,"title":"Option 1 $X","text":"First impressions count! Make sure your brand works for you. We offer digital marketing.","iconSrc":"/images/svg/linea/linea-basic-target.svg"},{"id":2,"title":"Option 2 $X","text":"First impressions count! Make sure your brand works for you. We offer digital marketing.","iconSrc":"/images/svg/linea/linea-basic-picture-multiple.svg"},{"id":3,"title":"Option 3 $X","text":"First impressions count! Make sure your brand works for you. We offer digital marketing.","iconSrc":"/images/svg/linea/linea-basic-picture.svg"}]')},345:function(t,e,n){"use strict";n.r(e);n(19),n(40),n(51);var l=n(337),o={components:{ServiceItem:function(){return Promise.resolve().then(n.bind(null,326))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,310))}},data:function(){return{serviceData:l}}},r=n(50),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t90 section-padding-bottom"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 icon-box-shape-animation mtn-30"},[t._l(t.serviceData,(function(t,e){return n("div",{key:e,staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("ServiceItem",{attrs:{service:t,addClassName:"box-border"}})],1)})),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1","data-depth":"1",imgSrc:"/images/shape-animation/video-shape-1.png"}})],2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title text-center",attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title fz-32"},[t._v("Our Simple Pricing")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("We produce beautifully crafted creative solutions that transcend business goals. We provide the exceptional service we’d want to experience ourselves!")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ServiceItem:n(326).default,ShapeWithAnimation:n(310).default})},365:function(t,e,n){"use strict";n.r(e);n(19),n(40),n(51);var l={components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,319))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,320))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,321))},BreadcrumbOne:function(){return Promise.resolve().then(n.bind(null,323))},PricingWrapper:function(){return Promise.resolve().then(n.bind(null,345))},SuccessStory:function(){return n.e(61).then(n.bind(null,341))},AboutFour:function(){return n.e(60).then(n.bind(null,327))},FunfactWithTitle:function(){return Promise.resolve().then(n.bind(null,335))},ContactSectionTwo:function(){return Promise.resolve().then(n.bind(null,332))},TheFooter:function(){return Promise.resolve().then(n.bind(null,322))}},data:function(){return{items:[{text:"Home",to:"/"},{text:"Pricing",active:!0}]}},head:function(){return{title:"Pricing"}}},o=n(50),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("TheHeader"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),n("SearchPopup"),t._v(" "),n("BreadcrumbOne",{attrs:{items:t.items,title:"Our Simple Pricing",backgroundUrl:"/images/bg/breadcrumb-bg-three.jpg"}}),t._v(" "),n("PricingWrapper"),t._v(" "),n("FunfactWithTitle"),t._v(" "),n("ContactSectionTwo"),t._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(319).default,OffCanvasMobileMenu:n(320).default,SearchPopup:n(321).default,BreadcrumbOne:n(323).default,PricingWrapper:n(345).default,FunfactWithTitle:n(335).default,ContactSectionTwo:n(332).default,TheFooter:n(322).default})}}]);