import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state() {
      return {
        lang: 'en'
      }
    },
    mutations: {
      changeLang(state) {
        state.lang = state.lang === 'en' ? 'pl' : 'en'
      }
    },
    plugins: [createPersistedState()]
  })

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
