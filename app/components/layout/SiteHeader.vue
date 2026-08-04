<script setup lang="ts">
import { business } from '~/data/business'
import { testimonials } from '~/data/testimonials'

const navigation = computed(() => [
  { label: 'Services', href: '#services', visible: true },
  { label: 'Pricing', href: '#pricing', visible: true },
  { label: 'Gallery', href: '#gallery', visible: true },
  { label: 'About', href: '#about', visible: true },
  { label: 'Testimonials', href: '#testimonials', visible: testimonials.length > 0 },
  { label: 'FAQ', href: '#faq', visible: true },
  { label: 'Contact', href: '#contact', visible: true },
])
</script>

<template>
  <header class="site-header">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="container site-header__inner">
      <a class="site-header__brand" href="#top">{{ business.name }}</a>
      <nav aria-label="Primary navigation">
        <ul class="site-header__nav">
          <li v-for="item in navigation.filter(item => item.visible)" :key="item.href">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
