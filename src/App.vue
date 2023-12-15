<template>
  <theme-toggler />
  <header-view />
  <span
    id="pointer"
    :style="{
      'left': x + 'px',
      'top': y + 'px',
        'background': `radial-gradient(var(--accent0) 5%, transparent)`
      }"
  ></span>

  <router-view />

  <footer-view />
</template>

<script setup>
import { useMouse } from '@vueuse/core'
import ThemeToggler from '@/components/ThemeToggler.vue'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

const { x, y } = useMouse()
</script>

<style lang="scss">
#pointer {
  position: absolute;
  display: inline-block;
  width: 100vmax;
  height: 100vmax;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform:  translate3d(-50%, -50%, 0);
  filter: opacity(0.3) blur(10rem);
}
</style>
