<script setup lang="ts">
import { business } from '~/data/business'
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <SectionHeading title="Request a quote" description="Send the vehicle type, requested service, location, condition, and photos when available." />
      <p>{{ business.weekdayAvailability }} {{ business.weekendAvailability }}.</p>
      <div class="button-group">
        <a class="button" :href="`tel:${business.phoneTel}`">Call {{ business.phoneDisplay }}</a>
        <a class="button button--secondary" :href="`sms:${business.phoneSms}`">Text for a quote</a>
      </div>
      <SocialLinks :links="business.socialLinks" />
    </div>
  </section>
</template>
