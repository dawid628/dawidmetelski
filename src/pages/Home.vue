<template>
  <div class="min-h-screen flex flex-col lg:flex-row gap-6 lg:p-6 mt-2">
    <SideWidget/>

    <div class="flex-1 space-y-8">
      <div class="bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-xl p-8 shadow-2xl">
        <div class="flex flex-col gap-6">
          <div class="space-y-8">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
              {{ $t('hi_i_am') }}
              <span class="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Dawid Metelski
              </span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div v-for="service in services" :key="service.name"
                   class="bg-gray-700/50 hover:bg-purple-700/50 rounded-lg p-4 transition-all hover:scale-105 border border-gray-600/50">
                <div class="text-center">
                  <div class="text-3xl mb-2" v-html="service.icon"></div>
                  <p class="text-sm font-medium">{{ $t(service.name) }}</p>
                  <p class="text-xs font-medium">{{ $t(service.description) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Umiejętności -->
      <div class="bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-xl p-8 shadow-2xl">
        <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <ion-icon name="code-slash-outline" class="text-orange-400 text-3xl"></ion-icon>
          {{ $t('technologies') }}
        </h3>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="technology in technologies" :key="technology.name"
               class="bg-gray-700/50 hover:bg-purple-700/50 rounded-lg p-4 transition-all hover:scale-105 border border-gray-600/50">
            <div class="text-center">
              <div class="text-3xl mb-2" v-html="technology.icon"></div>
              <p class="text-sm font-medium">{{ technology.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- TODO przemyslec języki i np biblioteki/narzędzia/skille jak deployment, git rabbit etc -->

      <!-- Statystyk -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="stat in stats" :key="stat.label"
             class="bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-xl p-6 shadow-2xl text-center">
          <div class="text-3xl font-bold text-orange-400 mb-2">{{ stat.value }}</div>
          <div class="text-gray-300 text-sm">{{ $t(stat.label) }}</div>
        </div>
      </div>

      <!-- Współpraca -->
      <div
          class="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-700 rounded-xl p-8 shadow-2xl">
        <div class="text-center space-y-4">
          <h3 class="text-2xl font-bold">{{ $t('ready_for_collab') }}</h3>
          <p class="text-gray-300">
            {{ $t('contact_me_desc') }}
          </p>
          <a
              href="mailto:dawidmetelski00@gmail.com"
              class="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:border-orange-700 inline-block hover:text-purple-100"
          >
            {{ $t('begin_collab') }}
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import SideWidget from "./partials/SideWidget.vue";

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

const technologies = ref([
  {name: 'Laravel', icon: '<ion-icon name="logo-laravel" class="text-red-400"></ion-icon>'},
  {name: 'Wordpress', icon: '<ion-icon name="logo-wordpress" class="text-blue-400"></ion-icon>'},
  {name: 'Vue.js', icon: '<ion-icon name="logo-vue" class="text-green-400"></ion-icon>'},
  {name: 'React', icon: '<ion-icon name="logo-react" class="text-blue-400"></ion-icon>'},
  {name: 'Flask', icon: '<ion-icon name="logo-python" class="text-yellow-300"></ion-icon>'},
  {name: 'Blockchain', icon: '<ion-icon name="cube-outline" class="text-purple-300"></ion-icon>'},
  {name: 'ASP.NET', icon: '<ion-icon name="globe-outline" class="text-purple-700"></ion-icon>'},
  {name: 'Docker', icon: '<ion-icon name="logo-docker" class="text-blue-600"></ion-icon>'},
])

// const languages = ref([
//   {name: 'PHP', icon: '<ion-icon name="code-outline" class="text-purple-400"></ion-icon>'},
//   {name: 'JavaScript', icon: '<ion-icon name="logo-javascript" class="text-yellow-400"></ion-icon>'},
//   {name: 'TypeScript', icon: '<ion-icon name="logo-nodejs" class="text-blue-500"></ion-icon>'},
//   {name: 'CSS3', icon: '<ion-icon name="logo-css3" class="text-blue-300"></ion-icon>'},
//   {name: 'HTML5', icon: '<ion-icon name="logo-html5" class="text-orange-600"></ion-icon>'},
//   {name: 'Python', icon: '<ion-icon name="logo-python" class="text-green-500"></ion-icon>'},
//   {name: 'C#', icon: '<ion-icon name="logo-apple-ar" class="text-blue-700"></ion-icon>'},
//   {name: 'Java', icon: '<ion-icon name="cafe-outline" class="text-red-700"></ion-icon>'},
// ])

const stats = ref([
  {value: '7+', label: 'projects'},
  {value: '2+', label: 'years_of_experience'},
  {value: '5+', label: 'satisfied_clients'},
  {value: '100%', label: 'engagement'}
])

const services = ref([
  {
    name: 'services.pages.title',
    icon: '<ion-icon name="laptop-outline" class="text-orange-400"></ion-icon>',
    description: "services.pages.description"
  },
  {
    name: 'services.apps.title',
    icon: '<ion-icon name="globe-outline" class="text-orange-400"></ion-icon>',
    description: "services.apps.description"
  },
  {
    name: 'services.integrations.title',
    icon: '<ion-icon name="logo-web-component" class="text-orange-400"></ion-icon>',
    description: "services.integrations.description"
  },
])
const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
})
</script>