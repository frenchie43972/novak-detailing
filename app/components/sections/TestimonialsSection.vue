<script setup lang="ts">
import { testimonials } from '~/data/testimonials'
</script>

<template>
  <section v-if="testimonials.length" id="testimonials" class="section">
    <div class="container">
      <SectionHeading title="Customer testimonials" />
      <blockquote v-for="testimonial in testimonials" :key="testimonial.quote" class="card">
        <p>“{{ testimonial.quote }}”</p>
        <footer>— {{ testimonial.customer }}</footer>
      </blockquote>
    </div>
  </section>
</template>
