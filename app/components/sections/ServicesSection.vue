<script setup lang="ts">
import { services } from '~/data/services'
</script>

<template>
  <section id="services" class="section">
    <div class="container">
      <SectionHeading title="Detailing services" description="Initial service descriptions will be refined during the content and design build." />
      <div class="card-grid">
        <ServiceCard v-for="service in services" :key="service.title" :service="service" />
      </div>
    </div>
  </section>
</template>
