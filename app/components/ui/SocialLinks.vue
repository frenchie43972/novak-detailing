<script setup lang="ts">
import type { SocialLink } from '~/types/business'

defineProps<{ links: SocialLink[] }>()
</script>

<template>
  <ul v-if="links.length" class="social-links" aria-label="Social media">
    <li v-for="link in links" :key="link.url">
      <a :href="link.url" rel="noopener noreferrer" target="_blank">{{ link.label }}</a>
    </li>
  </ul>
</template>
