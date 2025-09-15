<template>
  <li>
    <a
        @click.prevent="$emit('click')"
        class="hover:text-blue-500 no-underline cursor-pointer"
    >
      <slot />
    </a>
  </li>
</template>

<script setup lang="ts">
defineEmits<{
  click: []
}>()
</script>