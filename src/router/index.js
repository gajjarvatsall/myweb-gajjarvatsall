import { createRouter, createWebHistory } from "vue-router";
import CoverView from "@/views/Index.vue";
import HomeView from "@/views/HomeView.vue";
import ExperienceView from "@/views/Experience.vue";
import ProjectsView from "@/views/Projects.vue";
import ContactView from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "cover",
      component: CoverView,
      meta: {
        label: "Vatsal Gajjar's Portfolio",
      },
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: {
        label: "README",
      },
    },
    {
      path: "/experience",
      name: "experience",
      component: ExperienceView,
      meta: {
        label: "Experience",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
      meta: {
        label: "Projects",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: {
        label: "Contact",
      },
    },
  ],
});

export default router;
