import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from '@/components/AboutMe.vue';
import Contact from '@/components/Contact.vue';
import Experiences from '@/components/Experiences.vue';
import Greeting from '@/components/Greeting.vue';
import Projects from '@/components/Projects.vue';

const routes = [
  { path: '/', redirect: '/greeting' },
  { path: '/greeting', name: 'greeting', component: Greeting },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/aboutme', name: 'aboutme', component: AboutMe },
  { path: '/experiences', name: 'experiences', component: Experiences },
  { path: '/projects', name: 'projects', component: Projects }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
