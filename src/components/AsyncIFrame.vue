<template>
  <!-- <IFrame /> -->
  <iframe :src="src" :class="iframeClass" frameborder="0" :title="path"></iframe>
</template>

<script setup>
import { defineProps, defineAsyncComponent, ref } from 'vue';
const { src, class: iframeClass, path } = defineProps(['src', 'class', 'path']);
</script>

<style lang="scss" scoped>
/* Your styles here */
</style>