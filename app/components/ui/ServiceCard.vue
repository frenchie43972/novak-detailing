<script setup lang="ts">
import type { Service } from '~/types/business'

defineProps<{ service: Service }>()
</script>

<template>
  <article class="card">
    <h3>{{ service.title }}</h3>
    <p>{{ service.description }}</p>
  </article>
</template>
