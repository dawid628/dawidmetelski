<template>
  <header class="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
    <nav>
      <div class="flex justify-center items-center px-2 py-3 rounded-3xl bg-gray-500/50">
        <ul class="flex space-x-2 list-none m-0 p-0 text-sm text-zinc-300">

          <MenuLink
              @click="changePage('home')"
              :active="activePage === 'home'"
          >
            {{ t('home') }}
          </MenuLink>
          <MenuLink
              @click="changePage('about')"
              :active="activePage === 'about'"
          >
            {{ t('about') }}
          </MenuLink>
          <MenuLink
              @click="changePage('projects')"
              :active="activePage === 'projects'"
          >
            {{ t('projects') }}
          </MenuLink>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import MenuLink from './MenuLink.vue'

const { t } = useI18n()
const activePage = ref('home')

const emit = defineEmits<{
  'page-change': [page: string]
}>()

const changePage = (page: string) => {
  activePage.value = page
  emit('page-change', page)
}
</script>
