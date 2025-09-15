<template>
  <Menu @page-change="currentPage = $event"/>
  <div>
    <Home v-if="currentPage === 'home'" />
    <About v-if="currentPage === 'about'" />
    <Projects v-if="currentPage === 'projects'" />
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

import Menu from "./components/Menu.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Projects from "./pages/Projects.vue";

const currentPage = ref('home')
</script>