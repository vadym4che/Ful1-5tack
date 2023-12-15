<template>
  <section class="header">
    <h1 class="h1">
      Full-stack Web Development<br>
      for Your Brand

      <HighLight />
    </h1>

    <button>EXPLORE WORKS <ArrowRight /></button>

    <div class="hero">
      hero
    </div>
  </section>
</template>

<script setup>
import ArrowRight from '../components/ArrowRight.vue';
import HighLight from '../components/HighLight.vue';
</script>

<style lang="scss" scoped>
.header {
  margin: 12rem 0 0;
  text-align: center;
}

.h1 {
  font-family: Syne;
  font-size: 5rem;
  line-height: 5rem;
  font-weight: 700;
  margin: 0 auto;
  width: 60dvw;
  position: relative;

  & .highlight {
    position: absolute;
    top: -25dvw;
    right: -25dvw;
  }
}

button {
  margin-top: 6rem;
  height: 4rem;
  border-radius: 2rem;
  font-weight: 700;
  color: var(--color0);
  padding: 1rem 2rem;
  background: var(--accent0);
  border-color: transparent;
}

.hero {
  margin-top: 14.5rem;
}
</style>