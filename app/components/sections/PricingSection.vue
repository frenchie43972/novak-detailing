<script setup lang="ts">
import { pricing } from '~/data/pricing'
</script>

<template>
  <section id="pricing" class="section section--muted">
    <div class="container">
      <SectionHeading title="Typical pricing" description="Final quotes depend on the vehicle, condition, and requested work." />
      <div class="card-grid">
        <PriceCard v-for="priceRange in pricing" :key="priceRange.title" :price-range="priceRange" />
      </div>
    </div>
  </section>
</template>
