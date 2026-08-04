<script setup lang="ts">
import { galleryItems } from '~/data/gallery'
</script>

<template>
  <section id="gallery" class="section">
    <div class="container">
      <SectionHeading title="Before and after gallery" description="Real completed-work photos will be added before launch." />
      <div v-if="galleryItems.length" class="gallery-grid">
        <GalleryItem v-for="item in galleryItems" :key="item.id" :item="item" />
      </div>
      <p v-else class="placeholder-note">Gallery awaiting approved business photos.</p>
    </div>
  </section>
</template>
