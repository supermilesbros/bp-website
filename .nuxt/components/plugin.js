import Vue from 'vue'

const components = {
  AboutFour: () => import('../..\\components\\AboutFour.vue' /* webpackChunkName: "components/about-four" */).then(c => c.default || c),
  AboutOne: () => import('../..\\components\\AboutOne.vue' /* webpackChunkName: "components/about-one" */).then(c => c.default || c),
  AboutThree: () => import('../..\\components\\AboutThree.vue' /* webpackChunkName: "components/about-three" */).then(c => c.default || c),
  AboutTwo: () => import('../..\\components\\AboutTwo.vue' /* webpackChunkName: "components/about-two" */).then(c => c.default || c),
  AccordionStyleOne: () => import('../..\\components\\AccordionStyleOne.vue' /* webpackChunkName: "components/accordion-style-one" */).then(c => c.default || c),
  BlogGridItem: () => import('../..\\components\\BlogGridItem.vue' /* webpackChunkName: "components/blog-grid-item" */).then(c => c.default || c),
  BlogSectionOne: () => import('../..\\components\\BlogSectionOne.vue' /* webpackChunkName: "components/blog-section-one" */).then(c => c.default || c),
  BlogSidebar: () => import('../..\\components\\BlogSidebar.vue' /* webpackChunkName: "components/blog-sidebar" */).then(c => c.default || c),
  BrandLogoCarousel: () => import('../..\\components\\BrandLogoCarousel.vue' /* webpackChunkName: "components/brand-logo-carousel" */).then(c => c.default || c),
  BreadcrumbOne: () => import('../..\\components\\BreadcrumbOne.vue' /* webpackChunkName: "components/breadcrumb-one" */).then(c => c.default || c),
  CallToActionOne: () => import('../..\\components\\CallToActionOne.vue' /* webpackChunkName: "components/call-to-action-one" */).then(c => c.default || c),
  CallToActionThree: () => import('../..\\components\\CallToActionThree.vue' /* webpackChunkName: "components/call-to-action-three" */).then(c => c.default || c),
  CallToActionTwo: () => import('../..\\components\\CallToActionTwo.vue' /* webpackChunkName: "components/call-to-action-two" */).then(c => c.default || c),
  CallToActionVideo: () => import('../..\\components\\CallToActionVideo.vue' /* webpackChunkName: "components/call-to-action-video" */).then(c => c.default || c),
  ContactForm: () => import('../..\\components\\ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => c.default || c),
  ContactSectionOne: () => import('../..\\components\\ContactSectionOne.vue' /* webpackChunkName: "components/contact-section-one" */).then(c => c.default || c),
  ContactSectionTwo: () => import('../..\\components\\ContactSectionTwo.vue' /* webpackChunkName: "components/contact-section-two" */).then(c => c.default || c),
  FaqOne: () => import('../..\\components\\FaqOne.vue' /* webpackChunkName: "components/faq-one" */).then(c => c.default || c),
  FeatureOne: () => import('../..\\components\\FeatureOne.vue' /* webpackChunkName: "components/feature-one" */).then(c => c.default || c),
  FunfactWithTitle: () => import('../..\\components\\FunfactWithTitle.vue' /* webpackChunkName: "components/funfact-with-title" */).then(c => c.default || c),
  FunFcat: () => import('../..\\components\\FunFcat.vue' /* webpackChunkName: "components/fun-fcat" */).then(c => c.default || c),
  HeroFixedBanner: () => import('../..\\components\\HeroFixedBanner.vue' /* webpackChunkName: "components/hero-fixed-banner" */).then(c => c.default || c),
  HeroSliderOne: () => import('../..\\components\\HeroSliderOne.vue' /* webpackChunkName: "components/hero-slider-one" */).then(c => c.default || c),
  HeroSliderTwo: () => import('../..\\components\\HeroSliderTwo.vue' /* webpackChunkName: "components/hero-slider-two" */).then(c => c.default || c),
  MobileNavigation: () => import('../..\\components\\MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => c.default || c),
  Navigation: () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => c.default || c),
  Newsletter: () => import('../..\\components\\Newsletter.vue' /* webpackChunkName: "components/newsletter" */).then(c => c.default || c),
  OffCanvasMobileMenu: () => import('../..\\components\\OffCanvasMobileMenu.vue' /* webpackChunkName: "components/off-canvas-mobile-menu" */).then(c => c.default || c),
  PortfolioGallery: () => import('../..\\components\\PortfolioGallery.vue' /* webpackChunkName: "components/portfolio-gallery" */).then(c => c.default || c),
  PortfolioGalleryTwo: () => import('../..\\components\\PortfolioGalleryTwo.vue' /* webpackChunkName: "components/portfolio-gallery-two" */).then(c => c.default || c),
  PricingWrapper: () => import('../..\\components\\PricingWrapper.vue' /* webpackChunkName: "components/pricing-wrapper" */).then(c => c.default || c),
  ProjectWrapper: () => import('../..\\components\\ProjectWrapper.vue' /* webpackChunkName: "components/project-wrapper" */).then(c => c.default || c),
  SearchPopup: () => import('../..\\components\\SearchPopup.vue' /* webpackChunkName: "components/search-popup" */).then(c => c.default || c),
  SectionTitle: () => import('../..\\components\\SectionTitle.vue' /* webpackChunkName: "components/section-title" */).then(c => c.default || c),
  ServiceItem: () => import('../..\\components\\ServiceItem.vue' /* webpackChunkName: "components/service-item" */).then(c => c.default || c),
  ServiceWrapper: () => import('../..\\components\\ServiceWrapper.vue' /* webpackChunkName: "components/service-wrapper" */).then(c => c.default || c),
  ShapeWithAnimation: () => import('../..\\components\\ShapeWithAnimation.vue' /* webpackChunkName: "components/shape-with-animation" */).then(c => c.default || c),
  SkillWithVideo: () => import('../..\\components\\SkillWithVideo.vue' /* webpackChunkName: "components/skill-with-video" */).then(c => c.default || c),
  SuccessStory: () => import('../..\\components\\SuccessStory.vue' /* webpackChunkName: "components/success-story" */).then(c => c.default || c),
  TeamMember: () => import('../..\\components\\TeamMember.vue' /* webpackChunkName: "components/team-member" */).then(c => c.default || c),
  TeamOne: () => import('../..\\components\\TeamOne.vue' /* webpackChunkName: "components/team-one" */).then(c => c.default || c),
  TestimonialItem: () => import('../..\\components\\TestimonialItem.vue' /* webpackChunkName: "components/testimonial-item" */).then(c => c.default || c),
  TestimonialSectionOne: () => import('../..\\components\\TestimonialSectionOne.vue' /* webpackChunkName: "components/testimonial-section-one" */).then(c => c.default || c),
  TheFooter: () => import('../..\\components\\TheFooter.vue' /* webpackChunkName: "components/the-footer" */).then(c => c.default || c),
  TheHeader: () => import('../..\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
