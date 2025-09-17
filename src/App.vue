<template>
  <div class="app-container text-purple-100 font-sans">
    <div class="top-0 right-0 z-50 p-4 flex gap-2">
      <button
          @click="changeLanguage('pl')"
          :class="{ 'ring-2 ring-purple-400 bg-purple-900/50': currentLanguage === 'pl' }"
          class="w-10 h-10 bg-purple-900/30 border-2 border-purple-500/30 rounded-full backdrop-blur-sm hover:border-purple-400 hover:bg-purple-800/40 transition-all duration-300 flex items-center justify-center text-lg"
          title="Polski"
      >
        🇵🇱
      </button>
      <button
          @click="changeLanguage('en')"
          :class="{ 'ring-2 ring-purple-400 bg-purple-900/50': currentLanguage === 'en' }"
          class="w-10 h-10 bg-purple-900/30 border-2 border-purple-500/30 rounded-full backdrop-blur-sm hover:border-purple-400 hover:bg-purple-800/40 transition-all duration-300 flex items-center justify-center text-lg"
          title="English"
      >
        🇺🇸
      </button>
    </div>

    <div class="animated-background">
      <div class="dark-base"></div>

      <div class="lightning-container">
        <div v-for="i in 6" :key="'lightning-' + i" class="lightning-bolt" :style="getLightningStyle(i)"></div>
      </div>

      <div class="neon-rings">
        <div v-for="i in 4" :key="'ring-' + i" class="neon-ring" :style="getRingStyle(i)"></div>
      </div>

      <div class="code-streams">
        <div v-for="i in 12" :key="'stream-' + i" class="code-stream" :style="getStreamStyle(i)">
          <span v-for="j in 8" :key="j" class="code-char">{{ getRandomChar() }}</span>
        </div>
      </div>

      <div class="energy-field">
        <div v-for="i in 40" :key="'particle-' + i" class="energy-particle" :style="getParticleStyle(i)"></div>
      </div>

      <div class="scan-lines">
        <div class="scan-line scan-horizontal"></div>
        <div class="scan-line scan-vertical"></div>
      </div>
    </div>

    <div class="app-content">
      <Menu @page-change="currentPage = $event"/>
      <main class="main-content">
        <Home v-if="currentPage === 'home'" />
        <About v-if="currentPage === 'about'" />
        <Projects v-if="currentPage === 'projects'" />
      </main>
    </div>
  </div>
  <Footer/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useI18n } from 'vue-i18n';

import Menu from "./components/Menu.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Projects from "./pages/Projects.vue";
import Footer from "./pages/partials/Footer.vue";

const { locale } = useI18n();
const currentPage = ref('home');
const currentLanguage = ref(locale.value || 'en');

const changeLanguage = (lang: string) => {
  locale.value = lang;
  currentLanguage.value = lang;
  localStorage.setItem('preferred-language', lang);
}

const chars = '01AB$@EF%HIJ#LMN&PQR!TUVWXYZ</>{}[]()';

const getRandomChar = () => {
  return chars[Math.floor(Math.random() * chars.length)];
}

const getLightningStyle = (index: number) => {
  const delay = Math.random() * 8;
  const duration = 0.1 + Math.random() * 0.3;
  const angle = (index * 60) % 360;

  return {
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    transform: `rotate(${angle}deg)`,
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
  }
}

const getRingStyle = (index: number) => {
  const size = 100 + (index * 80);
  const delay = index * 1.5;

  return {
    width: size + 'px',
    height: size + 'px',
    animationDelay: delay + 's',
    left: 20 + (index * 15) + '%',
    top: 20 + (index * 10) + '%',
  }
}

const getStreamStyle = (index: number) => {
  const delay = Math.random() * 5;
  const duration = 3 + Math.random() * 4;
  const left = (index * 8) % 100;

  return {
    left: left + '%',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
  }
}

const getParticleStyle = (index: number) => {
  const size = 2 + Math.random() * 4;
  const delay = Math.random() * 10;
  const duration = 4 + Math.random() * 6;

  return {
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    width: size + 'px',
    height: size + 'px',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
  }
}
</script>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
}

@keyframes pulseGlow {
  from {
    box-shadow:
        0 0 25px rgba(168, 85, 247, 0.6),
        inset 0 0 20px rgba(168, 85, 247, 0.3);
  }
  to {
    box-shadow:
        0 0 35px rgba(168, 85, 247, 0.8),
        inset 0 0 30px rgba(168, 85, 247, 0.4);
  }
}

.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.dark-base {
  position: absolute;
  width: 100%;
  height: 100%;
  background:
      radial-gradient(ellipse at 30% 20%, rgba(15, 1, 26, 0.8) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 80%, rgba(15, 1, 26, 0.9) 0%, transparent 50%),
      linear-gradient(180deg, #0a0012 0%, #0f011a 50%, #050008 100%);
}

.lightning-container {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.lightning-bolt {
  position: absolute;
  width: 2px;
  height: 150px;
  background: linear-gradient(0deg,
  transparent 0%,
  #9333ea 30%,
  #ffffff 50%,
  #9333ea 70%,
  transparent 100%);
  box-shadow:
      0 0 10px #9333ea,
      0 0 20px #9333ea,
      0 0 40px #9333ea;
  animation: lightning 8s infinite;
  opacity: 0;
}

.neon-rings {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.neon-ring {
  position: absolute;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, #a855f7, transparent, #7c3aed, transparent);
  background-clip: padding-box;
  animation: ringPulse 6s ease-in-out infinite;
  opacity: 0.4;
  box-shadow:
      inset 0 0 20px rgba(168, 85, 247, 0.3),
      0 0 20px rgba(168, 85, 247, 0.2);
}

.code-streams {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.code-stream {
  position: absolute;
  top: -100px;
  width: 20px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #22c55e;
  animation: codeRain infinite linear;
  text-shadow: 0 0 8px #22c55e;
}

.code-char {
  display: block;
  margin-bottom: 8px;
  opacity: 0.7;
  animation: charFlicker 2s infinite;
}

.code-char:nth-child(odd) {
  color: #9333ea;
  text-shadow: 0 0 8px #9333ea;
}

.energy-field {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.energy-particle {
  position: absolute;
  background: #fbbf24;
  border-radius: 50%;
  box-shadow:
      0 0 10px #fbbf24,
      0 0 20px #fbbf24,
      0 0 30px #fbbf24;
  animation: energyFloat 8s ease-in-out infinite;
}

.energy-particle:nth-child(3n) {
  background: #a855f7;
  box-shadow:
      0 0 10px #a855f7,
      0 0 20px #a855f7,
      0 0 30px #a855f7;
}

.energy-particle:nth-child(5n) {
  background: #06b6d4;
  box-shadow:
      0 0 10px #06b6d4,
      0 0 20px #06b6d4,
      0 0 30px #06b6d4;
}

.scan-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.scan-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, #9333ea, transparent);
  box-shadow: 0 0 20px #9333ea;
  opacity: 0.6;
}

.scan-horizontal {
  width: 100%;
  height: 2px;
  animation: scanHorizontal 4s ease-in-out infinite;
}

.scan-vertical {
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, #a855f7, transparent);
  box-shadow: 0 0 20px #a855f7;
  animation: scanVertical 5s ease-in-out infinite;
}

.app-content {
  position: relative;
  z-index: 1;
}

.main-content {
  min-height: calc(100vh - 140px);
}

@keyframes lightning {
  0%, 90%, 100% {
    opacity: 0;
    transform: scaleY(0);
  }
  92%, 94% {
    opacity: 1;
    transform: scaleY(1);
  }
  93% {
    opacity: 0.5;
    transform: scaleY(0.8);
  }
}

@keyframes ringPulse {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.2;
    filter: hue-rotate(0deg);
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
    filter: hue-rotate(90deg);
  }
}

@keyframes codeRain {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(calc(100vh + 100px));
    opacity: 0;
  }
}

@keyframes charFlicker {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes energyFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.5;
  }
  25% {
    transform: translateY(-20px) translateX(15px) scale(1.2);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-5px) translateX(-10px) scale(0.8);
    opacity: 0.6;
  }
  75% {
    transform: translateY(15px) translateX(20px) scale(1.1);
    opacity: 0.9;
  }
}

@keyframes scanHorizontal {
  0% {
    top: -2px;
  }
  50% {
    top: 50%;
  }
  100% {
    top: 100%;
  }
}

@keyframes scanVertical {
  0% {
    left: -2px;
  }
  50% {
    left: 50%;
  }
  100% {
    left: 100%;
  }
}

@media (max-width: 768px) {
  .language-switcher {
    top: 15px;
    right: 15px;
    gap: 6px;
  }

  .flag-button {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  .lightning-bolt {
    height: 100px;
  }

  .neon-ring {
    width: 80px !important;
    height: 80px !important;
  }

  .code-stream {
    font-size: 12px;
    width: 15px;
  }

  .energy-particle:nth-child(n+25) {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animated-background * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>