(window.webpackJsonp=window.webpackJsonp||[]).push([[33,37,39],{310:function(t,e,n){"use strict";n.r(e);n(2);var r=n(312),c=n.n(r),o={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new c.a(t)}))}},l=n(50),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shape scene",class:t.addClassName},[n("span",{attrs:{"data-depth":t.dataDepth}},[n("img",{attrs:{src:t.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);var r={props:["service","addClassName"]},c=n(50),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-box text-center",class:t.addClassName},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:t.service.iconSrc,alt:t.service.title}})]),t._v(" "),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v(t._s(t.service.title))]),t._v(" "),n("div",{staticClass:"desc"},[n("p",[t._v(t._s(t.service.text))])]),t._v(" "),n("n-link",{staticClass:"link",attrs:{to:"/project-details"}},[t._v("Learn More")])],1)])}),[],!1,null,null,null);e.default=component.exports},337:function(t){t.exports=JSON.parse('[{"id":1,"title":"Option 1 $X","text":"First impressions count! Make sure your brand works for you. We offer digital marketing.","iconSrc":"/images/svg/linea/linea-basic-target.svg"},{"id":2,"title":"Option 2 $X","text":"First impressions count! Make sure your brand works for you. We offer digital marketing.","iconSrc":"/images/svg/linea/linea-basic-picture-multiple.svg"},{"id":3,"title":"Option 3 $X","text":"First impressions count! Make sure your brand works for you. We offer digital marketing.","iconSrc":"/images/svg/linea/linea-basic-picture.svg"}]')},345:function(t,e,n){"use strict";n.r(e);n(19),n(40),n(51);var r=n(337),c={components:{ServiceItem:function(){return Promise.resolve().then(n.bind(null,326))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,310))}},data:function(){return{serviceData:r}}},o=n(50),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t90 section-padding-bottom"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 icon-box-shape-animation mtn-30"},[t._l(t.serviceData,(function(t,e){return n("div",{key:e,staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("ServiceItem",{attrs:{service:t,addClassName:"box-border"}})],1)})),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1","data-depth":"1",imgSrc:"/images/shape-animation/video-shape-1.png"}})],2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title text-center",attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title fz-32"},[t._v("Our Simple Pricing")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("We produce beautifully crafted creative solutions that transcend business goals. We provide the exceptional service we’d want to experience ourselves!")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ServiceItem:n(326).default,ShapeWithAnimation:n(310).default})}}]);