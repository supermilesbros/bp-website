(window.webpackJsonp=window.webpackJsonp||[]).push([[15,36,39],{310:function(t,e,n){"use strict";n.r(e);n(2);var l=n(312),r=n.n(l),o={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new r.a(t)}))}},c=n(50),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shape scene",class:t.addClassName},[n("span",{attrs:{"data-depth":t.dataDepth}},[n("img",{attrs:{src:t.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);var l={name:"SectionTitle",props:["title","subTitle","addClassName"]},r=n(50),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title text-center",class:t.addClassName,attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);n(19),n(40),n(51);var l={components:{SectionTitle:function(){return Promise.resolve().then(n.bind(null,315))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,310))}}},r=n(50),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t110-b120 newsletter-section bg-cover",style:{backgroundImage:"url('/images/bg/newsletter.jpg')"},attrs:{"data-overlay":"0.7"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"cta-content text-center"},[n("SectionTitle",{attrs:{title:"Let’s find out how to work together","sub-title":"Ready to start your project? The contact information collected through this form will only be used to send a response to your inquiry.","add-class-name":"color-light"}}),t._v(" "),n("n-link",{staticClass:"btn btn-primary btn-hover-secondary mt-6",attrs:{to:"/contact-us"}},[t._v("Get Started")])],1)])])]),t._v(" "),n("ShapeWithAnimation",{attrs:{"add-class-name":"shape-1","data-depth":"1","img-src":"/images/shape-animation/newsletter-shape.png"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(315).default,ShapeWithAnimation:n(310).default})}}]);