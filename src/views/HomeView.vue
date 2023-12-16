<template>
  <section class="head content">
    <h1 class="h1">
      Crafting Digital Solutions<br>from End to End.
      <HighLight />
    </h1>

    <button>
      <router-link to="/works">
        EXPLORE WORKS <ArrowRight />
      </router-link>
    </button>
  </section>

  <section class="hero">
    <div class="left content">
      <div class="text">
        <h2 class="h2">
          <HighLight />
          Let’s get know<br>about me closer
        </h2>
  
        <p class="p">
          Hello, I'm Vadym Chervoniak, a dedicated full-stack developer based in Ukraine. With a strong emphasis on crafting modern UIs and prioritizing simplicity in the back-end, I specialize in creating seamless and innovative web solutions. My portfolio reflects a diverse array of projects, showcasing my proficiency in utilizing various technologies and my experience in integrating different web APIs.
        </p>
      </div>

      <button>
        <router-link to="/about">
          Discover More About Me
        </router-link>
      </button>
    </div>

    <div class="right">
    </div>
  </section>
</template>

<script setup>
import ArrowRight from '@/components/ArrowRight.vue';
import HighLight from '@/components/HighLight.vue';
</script>

<style lang="scss" scoped>
section {
  height: 100dvh;
  border: 1px solid var(--accent1);
}

.head {
  text-align: center;
  .h1 {
    position: relative;
    width: 18ch;
    height: 10rem;
  }
  & .highlight {
    position: absolute;
    top: -7.5rem;
    right: -5rem;
  }

  button {
    height: 4rem;
  }
}

.hero {
  display: grid;
  grid-template-columns: 4fr 3fr;
  width: 100%;
  gap: 6rem;
  align-items: center;
  .left {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;

    .h2 {
      position: relative;

      & .highlight {
        position: absolute;
        top: -7.5rem;
        left: -15rem;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    button {
      height: 3.5rem;
    }
  }

  .right {
    width: 100%;
    aspect-ratio: 9 / 10;
    background: url('@/assets/photo-main.jpg');
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2rem;
    position: relative;

    &::before,
    &::after {
      position: absolute;
      content: '';
      border: 0.125rem solid var(--accent0);
    }

    &::before {
      border-radius: 1.75rem;
      width: 3.5rem;
      height: 11rem;
      left: -2.5rem;
      bottom: 3rem;
    }

    &::after {
      border-radius: 1rem;
      width: 7rem;
      height: 2rem;
      right: 0;
      top: -1rem;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;
}


.head button,
.hero button {
  border-radius: 2rem;
  font-weight: 700;
  padding: 1rem 2rem;
  background: var(--accent0);
  border-color: transparent;
  position: relative;
  z-index: 1;

  & > * {
    color: var(--color0);
  }
}
</style>