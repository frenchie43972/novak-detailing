<script setup lang="ts">
import { faqItems } from '~/data/faq'
</script>

<template>
  <section id="faq" class="section section--muted">
    <div class="container">
      <SectionHeading title="Frequently asked questions" />
      <div class="faq-list">
        <details v-for="item in faqItems" :key="item.question">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
