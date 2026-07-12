import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import CvPage from '../views/CvPage.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'
import ContactPage from '@/views/ContactPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: MainPage
    },
    {
      path: '/about',
      name: 'aboutpage',
      component: AboutPage
    },
    {
      path: '/cv',
      name: 'cvpage',
      component: CvPage
    },
    {
      path: '/projects',
      name: 'projectspage',
      component: ProjectsPage
    },
    {
      path: '/contact',
      name: 'contactpage',
      component: ContactPage
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'mainpage' }
    }
  ]
})

router.options.scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(savedPosition)
      }, 600)
    })
  } else {
    return { top: 0, left: 0 }
  }
}

export default router
