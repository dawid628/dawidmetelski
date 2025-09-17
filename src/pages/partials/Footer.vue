<template>
  <footer class="relative text-white overflow-hidden -mb-24 mt-4 font-sans">
    <div class="relative max-w-4xl mx-auto px-6 py-12">
      <div class="text-center mb-4">
        <div class="flex items-center justify-center mb-4">
          <div class="w-10 h-10 bg-gradient-to-r from-purple-700 to-purple-950 rounded-lg flex items-center justify-center mr-3">
            <span class="text-lg font-bold">{{ initials }}</span>
          </div>
          <h3 class="text-xl font-bold">{{ name }}</h3>
        </div>

        <p class="text-slate-300 text-sm leading-relaxed mb-4 hidden sm:block max-w-md mx-auto">
          Fullstack Software Developer
        </p>

        <div class="flex justify-center space-x-4 mb-4">
          <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              class="w-10 h-10 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-800 hover:text-purple-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <ion-icon :name="social.icon" class="text-lg"></ion-icon>
          </a>
        </div>

        <div class="space-y-2 text-sm text-slate-300">
          <div>
            <a href="mailto:dawidmetelski00@gmail.com" class="hover:text-white transition-colors">
              dawidmetelski00@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div class="w-16 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto mb-6"></div>

      <div class="text-center">
        <div class="text-slate-400 text-xs ">
          © {{ currentYear }} {{ name }}
        </div>
      </div>
    </div>

    <button
        @click="scrollToTop"
        class="fixed bottom-6 right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-violet-700 to-violet-600 rounded-full flex items-center justify-center
        text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border-none"
        aria-label="Przewiń do góry"
    >
      <ion-icon name="arrow-up-outline" class="text-3xl"></ion-icon>
    </button>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const name = 'Dawid Metelski'

const initials = computed(() => {
  return name.split(' ').map(n => n.charAt(0)).join('')
})

const currentYear = computed(() => {
  return new Date().getFullYear()
})

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/dawid628',
    icon: 'logo-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dawid-metelski-805709186/',
    icon: 'logo-linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:dawidmetelski00@gmail.com',
    icon: 'mail-outline'
  }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>