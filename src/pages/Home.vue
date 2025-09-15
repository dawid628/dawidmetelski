<template>
  <div class="min-h-screen flex flex-col lg:flex-row gap-6 lg:p-6 mt-12">
    <!-- Lewa kolumna - Kontakt -->
    <div
        class="w-full lg:w-auto bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-xl p-4 shadow-purple-950 shadow-2xl lg:sticky lg:top-4 lg:h-fit">
      <div class="flex flex-col items-center gap-4">
        <figure class="relative">
          <img src="/src/assets/me.jpg" alt="Twoje Imię"
               class="w-24 h-32 rounded-2xl object-cover bg-gradient-to-br from-gray-700 to-gray-800">
          <span class="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-800"
                title="Dostępny do pracy!"></span>
        </figure>
        <div class="text-center">
          <h1 class="text-white text-xl font-semibold" title="Twoje Imię">Dawid Metelski</h1>
          <p class="text-orange-300 text-sm bg-purple-950 px-3 py-1 rounded-lg mt-2">Software Developer</p>
        </div>

        <button
            @click="toggleSidebarInfo"
            class="lg:hidden w-1/2 mt-4 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-xs
hover:border-purple-600"
        >
          <ion-icon :name="showSidebarInfo ? 'chevron-up-outline' : 'chevron-down-outline'" class="text-xs"></ion-icon>
          {{ showSidebarInfo ? $t('hide') : $t('show') }}
        </button>
      </div>

      <!-- Sekcja kontaktowa -->
      <div class="mt-6 lg:block" :class="{ 'hidden': !showSidebarInfo && windowWidth < 1024 }">
        <div class="h-px bg-gray-700 mb-6"></div>
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <div
                class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <ion-icon name="mail-outline" class="text-orange-300 text-lg"></ion-icon>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-gray-400 text-xs uppercase tracking-wider">Email</p>
              <a href="mailto:dawidmetelski00@gmail.com"
                 class="text-white text-sm hover:text-orange-300 transition-colors break-all">dawidmetelski00@gmail.com</a>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
                class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <ion-icon name="phone-portrait-outline" class="text-orange-300 text-lg"></ion-icon>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-gray-400 text-xs uppercase tracking-wider">{{ $t('phone') }}</p>
              <a href="https://www.whatsapp.com/" target="_blank"
                 class="text-white text-sm hover:text-orange-300 transition-colors">+48 536 383 528</a>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
                class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <ion-icon name="location-outline" class="text-orange-300 text-lg"></ion-icon>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-gray-400 text-xs uppercase tracking-wider">{{ $t('location') }}</p>
              <a href="https://www.google.com/maps/place/Warsaw,+Poland" target="_blank"
                 class="text-white text-sm hover:text-orange-300 transition-colors">Połom, Polska</a>
            </div>
          </li>
        </ul>

        <div class="h-px bg-gray-700 my-6"></div>

        <div class="flex flex-wrap gap-3 justify-center">
          <a href="https://www.linkedin.com/in/dawid-metelski-805709186/" target="_blank"
             class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg">
            <ion-icon name="logo-linkedin" class="text-white text-lg"></ion-icon>
          </a>
          <a href="https://github.com/dawid628" target="_blank"
             class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg">
            <ion-icon name="logo-github" class="text-white text-lg"></ion-icon>
          </a>
          <a href="https://www.facebook.com/dawid.metelski/" target="_blank"
             class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all shadow-lg">
            <ion-icon name="logo-facebook" class="text-white text-lg"></ion-icon>
          </a>
          <a href="https://www.instagram.com/dawid.metelski/" target="_blank"
             class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center hover:from-blue-400 hover:to-blue-500 transition-all shadow-lg">
            <ion-icon name="logo-instagram" class="text-white text-lg"></ion-icon>
          </a>
        </div>
      </div>
    </div>

    <!-- Prawa kolumna -->
    <div class="flex-1 space-y-8">
      <div class="bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-xl p-8 shadow-2xl">
        <div class="flex flex-col gap-6">
          <div class="space-y-8">
            <h2 class="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {{ $t('hi_i_am') }}
              <span class="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Dawid Metelski
              </span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div v-for="service in services" :key="services.name"
                   class="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-4 transition-all hover:scale-105 border border-gray-600/50">
                <div class="text-center">
                  <div class="text-3xl mb-2" v-html="service.icon"></div>
                  <p class="text-white text-sm font-medium">{{ $t(service.name) }}</p>
                  <p class="text-white text-xs font-medium text-gray-500">{{ $t(service.description) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sekcja umiejętności -->
      <div class="bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-xl p-8 shadow-2xl">
        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <ion-icon name="code-slash-outline" class="text-orange-400 text-3xl"></ion-icon>
          {{ $t('technologies') }}
        </h3>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="technology in technologies" :key="technology.name"
               class="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-4 transition-all hover:scale-105 border border-gray-600/50">
            <div class="text-center">
              <div class="text-3xl mb-2" v-html="technology.icon"></div>
              <p class="text-white text-sm font-medium">{{ technology.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sekcja statystyk -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="stat in stats" :key="stat.label"
             class="bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-xl p-6 shadow-2xl text-center">
          <div class="text-3xl font-bold text-orange-400 mb-2">{{ stat.value }}</div>
          <div class="text-gray-300 text-sm">{{ $t(stat.label) }}</div>
        </div>
      </div>

      <!-- Sekcja CTA -->
      <div
          class="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-8 shadow-2xl">
        <div class="text-center space-y-4">
          <h3 class="text-2xl font-bold text-white">{{ $t('ready_for_collab') }}</h3>
          <p class="text-gray-300">
            {{ $t('contact_me_desc') }}
          </p>
          <button
              class="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
            {{ $t('begin_collab') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'

const showSidebarInfo = ref(false)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

const yearsOfExperience = ref(2)

const technologies = ref([
  {name: 'Laravel', icon: '<ion-icon name="logo-laravel" class="text-red-400"></ion-icon>'},
  {name: 'Wordpress', icon: '<ion-icon name="logo-wordpress" class="text-blue-400"></ion-icon>'},
  {name: 'Vue.js', icon: '<ion-icon name="logo-vue" class="text-green-400"></ion-icon>'},
  {name: 'React', icon: '<ion-icon name="logo-react" class="text-blue-400"></ion-icon>'},
  {name: 'Flask', icon: '<ion-icon name="logo-python" class="text-yellow-300"></ion-icon>'},
  {name: 'Blockchain', icon: '<ion-icon name="cube-outline" class="text-purple-300"></ion-icon>'},
  {name: 'Flutter', icon: '<ion-icon name="phone-portrait-outline" class="text-orange-400"></ion-icon>'},
  {name: 'Docker', icon: '<ion-icon name="logo-docker" class="text-blue-600"></ion-icon>'},
])

const languages = ref([
  {name: 'PHP', icon: '<ion-icon name="code-outline" class="text-purple-400"></ion-icon>'},
  {name: 'JavaScript', icon: '<ion-icon name="logo-javascript" class="text-yellow-400"></ion-icon>'},
  {name: 'TypeScript', icon: '<ion-icon name="logo-nodejs" class="text-blue-500"></ion-icon>'},
  {name: 'CSS3', icon: '<ion-icon name="logo-css3" class="text-blue-300"></ion-icon>'},
  {name: 'HTML5', icon: '<ion-icon name="logo-html5" class="text-orange-600"></ion-icon>'},
  {name: 'Python', icon: '<ion-icon name="logo-python" class="text-green-500"></ion-icon>'},
  {name: 'C#', icon: '<ion-icon name="logo-apple-ar" class="text-blue-700"></ion-icon>'},
  {name: 'Java', icon: '<ion-icon name="cafe-outline" class="text-red-700"></ion-icon>'},
])

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

const toggleSidebarInfo = () => {
  showSidebarInfo.value = !showSidebarInfo.value
}

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