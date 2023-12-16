<template>
  <section class="header">
    <h1 class="h1">
      Crafting Digital Solutions<br>from End to End.
      <HighLight />
    </h1>

    <button>EXPLORE WORKS <ArrowRight /></button>
  </section>
  <section class="hero">
    <h2 class="h2">
      Let’s get know about me closer
    </h2>

    <p class="content">
      Hello, I'm Vadym Chervoniak, a dedicated full-stack developer based in Ukraine. With a strong emphasis on crafting modern UIs and prioritizing simplicity in the back-end, I specialize in creating seamless and innovative web solutions. My portfolio reflects a diverse array of projects, showcasing my proficiency in utilizing various technologies and my experience in integrating different web APIs.
    </p>

    <button>Discover More About Me</button>
  </section>
</template>

<script setup>
import ArrowRight from '@/components/ArrowRight.vue';
import HighLight from '@/components/HighLight.vue';
</script>

<style lang="scss" scoped>
.header {
  margin: 12rem 0 0;
  text-align: center;
  height: 100vmin;
}

.h1 {
  & .highlight {
    position: absolute;
    top: -15rem;
    right: -20rem;
  }
}

.hero {
  width: 44dvw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}
.h2 {
  font-family: Syne;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: normal;
  text-align: left;
}

.content {
  text-align: left;
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
  position: relative;
  z-index: 1;
}

.hero {
  margin-top: 14.5rem;
}
</style>