<template>
  <header class="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
    <nav>
      <div class="flex justify-center items-center px-4 py-3 border rounded-3xl opacity-80">
        <ul class="flex space-x-4 list-none m-0 p-0 text-sm">
          <MenuLink @click="changePage('home')">{{ t('home') }}</MenuLink>
          <MenuLink @click="changePage('about')">{{ t('about') }}</MenuLink>
          <MenuLink @click="changePage('projects')">{{ t('projects') }}</MenuLink>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import MenuLink from './MenuLink.vue'

const { t, locale } = useI18n()

const emit = defineEmits<{
  'page-change': [page: string]
}>()

const changePage = (page: string) => {
  emit('page-change', page)
}
</script>