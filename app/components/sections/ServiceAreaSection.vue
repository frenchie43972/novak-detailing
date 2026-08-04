<script setup lang="ts">
import { business } from '~/data/business'
</script>

<template>
  <section id="service-area" class="section">
    <div class="container">
      <SectionHeading title="Service area and options" />
      <p>{{ business.serviceArea }}.</p>
      <p>Choose mobile service, warehouse detailing, or pickup and return by arrangement.</p>
    </div>
  </section>
</template>
