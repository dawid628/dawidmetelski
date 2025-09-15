<template>
  <li>
    <a
        @click.prevent="$emit('click')"
        :class="[
          'no-underline cursor-pointer px-2 py-2 rounded-3xl hover:bg-zinc-300/30 hover:text-zinc-300',
          active ? 'bg-zinc-300/30 text-zinc-300' : ''
        ]"
    >
      <slot />
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>
