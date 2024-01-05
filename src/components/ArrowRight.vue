<template>
  <strong
    class="arrow-right"
    :style="{ height, width: parseInt(height) * 1.5 + 'rem' }"
  >
    ->
  </strong>
</template>

<script setup>
import { defineProps } from 'vue'

const { height } = defineProps(['height'])
</script>

<style lang="scss" scoped>
.arrow-right {
  font-family: 'Victor Mono', monospace;
  text-wrap: nowrap;
}
</style>
