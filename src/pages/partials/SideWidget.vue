<template>
  <div
      class="w-full lg:w-auto bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-xl p-4 shadow-purple-950 shadow-2xl lg:sticky lg:top-4 lg:h-fit">
    <div class="flex flex-col items-center gap-4">
      <figure class="relative">
        <img src="/src/assets/me.jpg" alt="Twoje Imię"
             class="w-36 h-44 rounded-2xl object-cover bg-gradient-to-br from-gray-700 to-gray-800">
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

    <div class="mt-6 lg:block" :class="{ 'hidden': !showSidebarInfo && !isLargeScreen }">
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
            <a href="https://www.google.com/maps/place/19-411+Po%C5%82om/@53.9773722,22.2602596,15z/data=!3m1!4b1!4m6!3m5!1s0x46e1a2820824e1f3:0xcb7872e7a35e5ad0!8m2!3d53.9773605!4d22.2705593!16s%2Fm%2F05p8lgw?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank"
               class="text-white text-sm hover:text-orange-300 transition-colors">Połom, Polska</a>
          </div>
        </li>
      </ul>

      <div class="h-px bg-gray-700 my-6"></div>

      <div class="flex flex-wrap gap-3 justify-center">
        <a href="https://www.linkedin.com/in/dawid-metelski-805709186/" target="_blank"
           class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center
             hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg">
          <ion-icon name="logo-linkedin" class="text-white text-lg"></ion-icon>
        </a>
        <a href="https://github.com/dawid628" target="_blank"
           class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center
             hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg">
          <ion-icon name="logo-github" class="text-white text-lg"></ion-icon>
        </a>
        <a href="https://www.facebook.com/dawid.metelski/" target="_blank"
           class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center
             hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg">
          <ion-icon name="logo-facebook" class="text-white text-lg"></ion-icon>
        </a>
        <a href="https://www.instagram.com/dawid.metelski/" target="_blank"
           class="w-11 h-11 bg-gradient-to-br from-purple-950 to-gray-purple border border-purple-700 rounded-lg flex items-center justify-center
             hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg">
          <ion-icon name="logo-instagram" class="text-white text-lg"></ion-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const showSidebarInfo = ref(false);
const isLargeScreen = ref(false);

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024;
  if (!isLargeScreen.value) {
    showSidebarInfo.value = false;
  }
};

const toggleSidebarInfo = () => {
  showSidebarInfo.value = !showSidebarInfo.value;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>