<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
  }
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="error-page">
    <p>{{ props.error.statusCode || 500 }}</p>
    <h1>{{ props.error.statusMessage || 'Something went wrong.' }}</h1>
    <button type="button" class="button" @click="handleError">
      Return home
    </button>
  </main>
</template>
