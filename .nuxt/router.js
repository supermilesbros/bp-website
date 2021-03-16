import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c7b67c68 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _5c2b6710 = () => interopDefault(import('..\\pages\\blog-classic.vue' /* webpackChunkName: "pages/blog-classic" */))
const _610dae28 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _e2b7f960 = () => interopDefault(import('..\\pages\\blog-grid.vue' /* webpackChunkName: "pages/blog-grid" */))
const _53826abc = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _7cccac01 = () => interopDefault(import('..\\pages\\home-three.vue' /* webpackChunkName: "pages/home-three" */))
const _4a460f22 = () => interopDefault(import('..\\pages\\home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _23f954d0 = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _94c72ee6 = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _99d0b998 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _8846c6de = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _c7b67c68,
    name: "about"
  }, {
    path: "/blog-classic",
    component: _5c2b6710,
    name: "blog-classic"
  }, {
    path: "/blog-details",
    component: _610dae28,
    name: "blog-details"
  }, {
    path: "/blog-grid",
    component: _e2b7f960,
    name: "blog-grid"
  }, {
    path: "/contact-us",
    component: _53826abc,
    name: "contact-us"
  }, {
    path: "/home-three",
    component: _7cccac01,
    name: "home-three"
  }, {
    path: "/home-two",
    component: _4a460f22,
    name: "home-two"
  }, {
    path: "/project",
    component: _23f954d0,
    name: "project"
  }, {
    path: "/project-details",
    component: _94c72ee6,
    name: "project-details"
  }, {
    path: "/service",
    component: _99d0b998,
    name: "service"
  }, {
    path: "/",
    component: _8846c6de,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
