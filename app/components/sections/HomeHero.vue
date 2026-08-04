<script setup lang="ts">
import { business } from '~/data/business'
</script>

<template>
  <section id="top" class="section hero">
    <div class="container">
      <p class="eyebrow">Akron–Canton Area</p>
      <h1>Professional car detailing with flexible service options.</h1>
      <p>Mobile detailing, warehouse service, and vehicle pickup available by arrangement.</p>
      <div class="button-group">
        <a class="button" :href="`tel:${business.phoneTel}`">Call {{ business.phoneDisplay }}</a>
        <a class="button button--secondary" :href="`sms:${business.phoneSms}`">Request a quote by text</a>
      </div>
    </div>
  </section>
</template>
