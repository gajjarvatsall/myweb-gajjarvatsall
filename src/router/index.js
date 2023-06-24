import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ExperienceView from "@/views/Experience.vue";
import ProjectsView from "@/views/Projects.vue";
import ContactView from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        label: "Readme",
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
router.beforeEach((from, to, next) => {
  const title = from.meta.label;
  // If the route has a title, set it as the page title of the document/page
  title
    ? (document.title = `${title} || Portfolio`)
    : "Vatsal Gajjar's Portfolio";

  // Continue resolving the route
  next();
});

export default router;
