<template>
  <div class="min-h-screen flex flex-col lg:flex-row gap-6 lg:p-6 mt-2">

    <div class="flex-1 space-y-8">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
            v-for="project in projects"
            :key="project.id"
            class="group bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 hover:border-orange-400 rounded-xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 md:hover:scale-[1.02] relative flex flex-col">

          <div
              v-if="project.badge"
              class="absolute top-4 right-4 z-10">
            <div
                class="relative transform -rotate-12 hover:rotate-0 transition-transform duration-300"
                :class="project.badge.style">
              <div class="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 rounded-lg transform rotate-1 opacity-80"></div>
              <div class="relative bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-600 px-4 py-2 rounded-lg shadow-lg border-2 border-yellow-300">
                <span class="text-xs font-bold text-yellow-900 drop-shadow-sm tracking-wide">
                  {{ $t(project.badge.text) }}
                </span>
              </div>
            </div>
          </div>

          <div class="absolute top-4 left-4 z-10">
            <div class="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/20">
              {{ project.date }}
            </div>
          </div>

          <div class="relative overflow-hidden h-64 lg:h-80">
            <img
                :src="project.image"
                :alt="$t(project.name)"
                class="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-110"
                @error="handleImageError($event)"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-purple-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div class="p-4 md:p-8 space-y-6 flex-1 flex flex-col">
            <div class="text-center flex-grow">
              <h3 class="text-2xl lg:text-3xl font-bold mb-4 transition-colors">
                {{ $t(project.name) }}
              </h3>
              <p class="text-gray-300 text-base leading-relaxed">
                {{ $t(project.description) }}
              </p>
            </div>

            <div class="space-y-3">
              <div class="flex flex-wrap gap-2">
                <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="bg-gray-700/50 text-gray-200 text-sm px-3 py-2 rounded-3xl">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="flex flex-wrap gap-3 pt-4 mt-auto">
              <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white flex-1 min-w-[140px] max-w-[160px] bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-center py-3 px-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                <ion-icon name="eye-outline" class="mr-2"></ion-icon>
                {{ $t('view_demo') }}
              </a>

              <template v-if="project.codeUrls && project.codeUrls.length > 1">
                <a
                    v-for="repo in project.codeUrls"
                    :key="repo.label"
                    :href="repo.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-white flex-1 min-w-[140px] bg-gray-700/50 hover:bg-gray-700 text-center py-3 px-4 rounded-lg font-medium transition-all border border-gray-600/50 hover:border-gray-500">
                  <ion-icon name="logo-github" class="mr-2"></ion-icon>
                  {{ $t(repo.label) }}
                </a>
              </template>

              <a
                  v-else-if="project.codeUrl"
                  :href="project.codeUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white flex-1 min-w-[140px] max-w-[160px] bg-gray-700/50 hover:bg-gray-700 text-center py-3 px-4 rounded-lg font-medium transition-all border border-gray-600/50 hover:border-gray-500">
                <ion-icon name="logo-github" class="mr-2"></ion-icon>
                {{ $t('view_code') }}
              </a>

              <a
                  v-if="project.pdfUrl"
                  :href="project.pdfUrl"
                  download
                  class="flex-1 min-w-[140px] max-w-[160px] bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-center py-3 px-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:text-white">
                <ion-icon name="download-outline" class="mr-2"></ion-icon>
                {{ $t('download_thesis') }}
              </a>

              <div
                  v-if="project.inProgress && !project.demoUrl && !project.codeUrl"
                  class="flex-1 bg-purple-900/30 text-purple-300 text-center py-3 px-6 rounded-lg border border-purple-700/50">
                <ion-icon name="construct-outline" class="mr-2"></ion-icon>
                {{ $t('in_development') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n';

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

import reactChessImg from '../assets/react-chess.png'
import mondImg from '../assets/mond.png'
import mikipodnosnikiImg from '../assets/mikipodnosniki.png'
import smakImg from '../assets/smaktradycji.png'
import timsyImg from '../assets/timsy.png'
import checkersImg from '../assets/checkers.png'
import masterImg from '../assets/masterthesis.png'
import bachelorPdf from '../assets/pdf/bachelor.pdf'
import masterPdf from '../assets/pdf/master.pdf'

const { locale } = useI18n()

const projects = ref([
  {
    id: 1,
    name: 'myProjects.project_6.title',
    description: 'myProjects.project_6.description',
    image: timsyImg,
    technologies: ['Vue.js', 'Laravel', 'TailwindCSS', 'AI Agent Development'],
    demoUrl: 'https://timsy.soobdev.pl/home',
    codeUrl: null,
    date: locale.value == 'pl' ? 'w trakcie' : 'in progress',
    inProgress: true,
  },
  {
    id: 2,
    name: 'myProjects.project_4.title',
    description: 'myProjects.project_4.description',
    image: mikipodnosnikiImg,
    technologies: ['WordPress', 'PHP', 'Javascript', 'TailwindCSS'],
    demoUrl: 'https://mikipodnosniki.pl/',
    codeUrl: null,
    date: '2025-09',
    inProgress: false,
  },
  {
    id: 3,
    name: 'myProjects.project_3.title',
    description: 'myProjects.project_3.description',
    image: mondImg,
    technologies: ['WordPress', 'PHP', 'Javascript', 'TailwindCSS'],
    demoUrl: 'https://marketingopartynadanych.pl/',
    codeUrl: null,
    date: '2025-03',
    inProgress: false,
  },
  {
    id: 4,
    name: 'myProjects.project_5.title',
    description: 'myProjects.project_5.description',
    image: smakImg,
    technologies: ['Bagisto', 'Laravel', 'Vue.js', 'Tailwind CSS'],
    demoUrl: 'https://smaktradycji.net/',
    codeUrl: null,
    date: '2024-11',
    inProgress: false,
  },
  {
    id: 5,
    name: 'myProjects.project_7.title',
    description: 'myProjects.project_7.description',
    image: checkersImg,
    technologies: ['Blazor', 'Entity Framework', 'C#', 'ASP.NET Identity', 'SignalR'],
    demoUrl: null,
    codeUrl: 'https://github.com/dawid628/CheckersApp-Blazor',
    pdfUrl: bachelorPdf,
    date: '2022-06',
    badge: {
      text: 'bachelor_thesis',
    },
    inProgress: false,
  },
  {
    id: 6,
    name: 'myProjects.project_8.title',
    description: 'myProjects.project_8.description',
    image: masterImg,
    technologies: ['Blockchain', 'Hyperledger Fabric', 'Flask', 'Typescript', 'Go'],
    demoUrl: null,
    codeUrls: [
      {
        label: 'blockchain_repo',
        url: 'https://github.com/dawid628/Master-Thesis-Blockchain'
      },
      {
        label: 'frontend_repo',
        url: 'https://github.com/dawid628/Master-Thesis-Flask'
      }
    ],
    pdfUrl: masterPdf,
    date: '2024-06',
    badge: {
      text: 'master_thesis',
      style: ''
    },
    inProgress: false,
  },
  {
    id: 8,
    name: 'myProjects.project_2.title',
    description: 'myProjects.project_2.description',
    image: reactChessImg,
    technologies: ['React', 'CSS3', 'JavaScript'],
    demoUrl: 'https://dawid628.github.io/chess-react/',
    codeUrl: 'https://github.com/dawid628/chess-react',
    date: '2023-04',
    inProgress: false,
  }
])

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg=='
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