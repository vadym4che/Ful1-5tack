<template>
  <a href="http://bit.ly/Ful1-5tack" class="logo-link" :style="{ fontSize: size, lineHeight: size }" title="CV.pdf" :class="logoClass">
    <span class="logo-span vadym font-variant">
      vadym4
    </span>
      <img src="/logo.png" alt="logo" class="logo-image" :style="{ height: size }">
    <span class="logo-span he font-variant">
      he
    </span>
  </a>
</template>

<script setup>
import { defineProps } from 'vue'

const { size, logoClass } = defineProps(['size', 'logoClass'])
</script>

<style lang="scss">
.logo-link {
  letter-spacing: -0.1ch;
  background: var(--bg0);
  justify-self: start;
  align-self: start;
  display: inline-flex;
  padding: 0 0.5rem;
  border: 0.125rem dashed var(--color50);
  box-sizing: content-box;

  .logo-image {
    width: auto;
    margin-right: -0.1ch;
  }

  &:hover {
    filter: invert(1);
  }
}
</style>
