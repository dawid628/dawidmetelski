<template>
  <div class="min-h-screen flex flex-col lg:flex-row gap-6 lg:p-6 mt-2">
    <SideWidget/>

    <div class="flex-1 space-y-8">
      <!-- O mnie -->
      <div class="bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-xl px-4 md:p-8 shadow-2xl">
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
            {{ $t('about_me_1') }}<span class="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {{ $t('about_me_2') }}
            </span>
          </h2>
          <div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
        </div>

        <div class="prose prose-lg max-w-none">
          <p class="leading-relaxed mb-6">
            {{ $t('hi_i_am') }} <span class="text-orange-400 font-semibold">Dawid 🫡</span>! {{ $t('about_me_p1') }}
          </p>

          <p class="leading-relaxed mb-6">
            {{ $t('about_me_p2') }}
          </p>

          <p class="leading-relaxed mb-6">
            {{ $t('about_me_p3') }}
          </p>

          <p class="leading-relaxed">
            {{ $t('about_me_p4') }}
          </p>
        </div>
      </div>

      <div class="bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-xl p-4 md:p-8 shadow-2xl">
        <div class="flex items-center gap-4 mb-8">
          <h3 class="text-3xl lg:text-4xl font-bold leading-tight">
            {{ $t('career_1')}}<span class="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{{ $t('career_2')}}
            </span>
          </h3>
          <div class="flex-1 h-px bg-gradient-to-r from-orange-400/50 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 class="text-xl font-bold mb-6 flex items-center gap-3">
              <ion-icon name="briefcase-outline" class="text-orange-400 text-2xl"></ion-icon>
              {{ $t('experience') }}
            </h4>

            <div class="space-y-4">
              <div v-for="(exp, index) in experiencesCompact" :key="index"
                   class="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30 hover:bg-purple-700/50 transition-all">
                <div class="flex items-start justify-between mb-2">
                  <div class="flex-1">
                    <h5 class="font-semibold">{{ exp.position }}</h5>
                    <p class="text-orange-300 text-sm">{{ exp.company }}</p>
                  </div>
                  <span class="bg-purple-900/50 px-2 py-1 rounded text-xs ml-3">
                    {{ exp.duration }}
                  </span>
                </div>
                <div class="flex flex-wrap gap-1 mt-3">
                  <span v-for="tech in exp.mainTech" :key="tech"
                        class="bg-gray-600/50 text-gray-200 text-xs px-2 py-1 rounded-full">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-xl font-bold mb-6 flex items-center gap-3">
              <ion-icon name="school-outline" class="text-orange-400 text-2xl"></ion-icon>
              {{ $t('education') }}
            </h4>

            <div class="space-y-4">
              <div v-for="(edu, index) in educationCompact" :key="index"
                   class="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30 hover:bg-purple-700/50 transition-all">
                <div class="flex items-start justify-between mb-2">
                  <div class="flex-1">
                    <h5 class="font-semibold">{{ edu.degree }}</h5>
                    <p class="text-orange-300 text-sm">{{ edu.school }}</p>
                    <p class="text-gray-400 text-xs">{{ edu.location }}</p>
                  </div>
                  <span class="bg-purple-900/50 px-2 py-1 rounded text-xs ml-3">
                    {{ edu.duration }}
                  </span>
                </div>
                <div v-if="edu.status" class="mt-2">
                  <span class="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full">
                    {{ edu.status }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certyfikaty -->
        <div class="mt-8 pt-6 border-t border-gray-600/30">
          <h4 class="text-lg font-bold mb-4 flex items-center gap-3">
            <ion-icon name="ribbon-outline" class="text-orange-400 text-xl"></ion-icon>
            {{ $t('additional_education') }}
          </h4>
          <div class="flex flex-wrap gap-3">
            <span v-for="cert in certificatesCompact" :key="cert"
                  class="bg-orange-500/10 text-orange-300 text-sm px-3 py-2 rounded-lg border border-orange-500/20 hover:bg-orange-500/20 transition-all">
              {{ cert }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SideWidget from "./partials/SideWidget.vue";
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

const experiencesCompact = ref([
  {
    position: 'Full-Stack Developer',
    company: 'Lunchspot, Warszawa',
    duration: '2025.08 - obecnie',
    mainTech: ['Vue.js', 'Laravel']
  },
  {
    position: 'Freelancer',
    company: locale.value == 'pl' ? 'Projekty na zlecenia' : 'Freelance projects',
    duration: '2024.09 - obecnie',
    mainTech: ['Laravel', 'Vue.js', 'WordPress', 'Bagisto']
  },
  {
    position: 'Full-Stack Developer',
    company: 'Sempai, Białystok',
    duration: '2023.10 - 2025.07',
    mainTech: ['Laravel', 'WordPress', 'Vue.js', 'React', 'Python', 'RabbitMQ', 'REST API', locale.value == 'pl' ? 'Mikroserwisy' : 'Microservices']
  },
  {
    position: 'Full-Stack Developer',
    company: 'Centrum informatyki ZETO',
    duration: '2023.07 - 2023.10',
    mainTech: ['WordPress', 'PHP', 'JavaScript']
  },
  {
    position:  locale.value == 'pl' ? 'Praktykant' : 'Intern',
    company: 'NET Innovation Software',
    duration: '2021.07 - 2021.08',
    mainTech: ['Laravel', 'PHP']
  }
])

const educationCompact = ref([
  {
    degree: locale.value == 'pl' ? 'Informatyka (Magister)' : 'MSc in Computer Science',
    school: locale.value == 'pl' ?  'Uniwersytet w Białymstoku' : 'University of Białystok',
    location: 'Białystok, Polska',
    duration: '2022.10 - 2024.06',
    status: locale.value == 'pl' ? 'Ukończone' : 'Finished'
  },
  {
    degree: locale.value == 'pl' ? 'Informatyka (Licencjat)' : 'BSc in Computer Science',
    school: locale.value == 'pl' ?  'Uniwersytet w Białymstoku' : 'University of Białystok',
    location: 'Białystok, Polska',
    duration: '2019.10 - 2022.07',
    status: locale.value == 'pl' ? 'Ukończone' : 'Finished'
  }
])

const certificatesCompact = ref([
  'Oracle Academy - Database Design and Programming with SQL',
  'Oracle Academy - Database Programming with PL/SQL',
])

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  console.log(locale.value)
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