<script setup lang="ts">
import type { GalleryItem } from '~/types/business'

defineProps<{ item: GalleryItem }>()
</script>

<template>
  <figure class="gallery-item">
    <NuxtImg :src="item.beforeSrc" :alt="`Before: ${item.alt}`" loading="lazy" />
    <NuxtImg :src="item.afterSrc" :alt="`After: ${item.alt}`" loading="lazy" />
    <figcaption>{{ item.title }}</figcaption>
  </figure>
</template>
