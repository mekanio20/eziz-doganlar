import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/TestView.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/works",
      name: "Project",
      component: () => import("@/views/ProjectView.vue"),
    },
    {
      path: "/works/:id",
      name: "ProjectDetail",
      component: () => import("@/views/ProjectDetailView.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/views/ContactView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      const element = document.querySelector(to.hash)
      if (element) {
        return window.scrollTo({
          top: element.offsetTop - 100,
          behavior: "smooth",
        })
      }
    }
  },
})

export default router
