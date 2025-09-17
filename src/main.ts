import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'

// Tłumaczenia
import { createI18n } from 'vue-i18n'
import en from './lang/en.ts'
import pl from './lang/pl.ts'

const i18n = createI18n({
    legacy: false,
    locale: 'pl',
    fallbackLocale: 'en',
    messages: {
        en,
        pl
    }
})

createApp(App).use(i18n).mount('#app')
