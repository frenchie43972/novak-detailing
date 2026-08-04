<script setup lang="ts">
import { business } from '~/data/business'
</script>

<template>
  <div class="mobile-contact-bar" aria-label="Contact Novak Detailing">
    <a :href="`tel:${business.phoneTel}`">Call</a>
    <a :href="`sms:${business.phoneSms}`">Text</a>
  </div>
</template>
