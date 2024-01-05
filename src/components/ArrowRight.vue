<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none" class="arrow-right" :style="{ height, width: parseInt(height) * 1.5 + 'rem' }">
    <path d="M1 5.5H17" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 1L17 6L12 11" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
const { height } = defineProps(['height'])
</script>

<style lang="scss" scoped>
.arrow-right {
  stroke: var(--color0);
}
</style>