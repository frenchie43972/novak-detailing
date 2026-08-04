<script setup lang="ts">
import { business } from '~/data/business'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <p>&copy; {{ year }} {{ business.name }}. All rights reserved.</p>
    </div>
  </footer>
</template>
