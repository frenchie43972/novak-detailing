<script setup lang="ts">
import type { PriceRange } from '~/types/business'

defineProps<{ priceRange: PriceRange }>()
</script>

<template>
  <article class="card">
    <h3>{{ priceRange.title }}</h3>
    <p class="price-card__price">{{ priceRange.price }}</p>
    <p>{{ priceRange.note }}</p>
  </article>
</template>
