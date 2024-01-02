<template>
  <section class="head content flex-col-center">
    <h1 class="h1">
      Crafting Digital Solutions<br>from End to End.
      <high-light />
    </h1>

    <active-element
      path="projects"
      :padding="'1.5rem 2.5rem'"
      :fontSize="'1.625rem'"
      :borderRadius="'6.5rem'"
      :bg="'var(--accent0)'"
      class="font-variant"
    >
      explore works <b style="display: inline-block; transform: scale(1.5, 2.5) translate(25%, 0%); position: relative; top: -12%;" content="→">→</b>
    </active-element>
  </section>

  <section class="hero">
    <div class="left content flex-col-center">
      <div class="text">
        <h2 class="h2">
          <high-light />
          Let’s get know<br>about me closer
        </h2>

        <p class="p3">
          Hello, I am Vadym Chervoniak, a Full-stack developer based in Ukraine. My expertise includes HTML, CSS, JavaScript, React, Vue, Node.js, various databases, cloud computing, and integrating with different APIs, helping me to deliver complex web development solutions.
        </p>
      </div>

      <active-element
        path="about"
        :padding="'1.5rem 3rem'"
        :fontSize="'1.25rem'"
        :borderRadius="'2rem'"
        :bg="'var(--accent0)'"
        class="font-variant"
      >
        Discover More About Me
      </active-element>
    </div>

    <div class="right">
    </div>
  </section>

  <section class="projects flex-col-center">
    <h2 class="h2">
      My Projects Highlight
      <high-light />
    </h2>

    <active-element
      path="projects"
      :padding="'1.5rem 2.5rem'"
      :fontSize="'1.33rem'"
      :borderRadius="'6.5rem'"
      :bg="'var(--bg50)'"
      class="font-variant"
    >
      explore more <b style="display: inline-block; transform: scale(1.5, 2.5) translate(25%, 0%); position: relative; top: -0.2rem;" content="→">→</b>
    </active-element>

    <three />
  </section>

  <tech-stack />
</template>

<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import HighLight from '@/components/HighLight.vue'
import ActiveElement from '@/components/ActiveElement.vue'

const Three = defineAsyncComponent(() => import('@/components/Three.vue'))
const TechStack = defineAsyncComponent(() => import('@/components/TechStack.vue'))

onMounted(() => window.scrollTo(0, 0))
</script>

<style lang="scss" scoped>
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
      border-radius: 2rem;
      border-width: 0.125rem;
      font-weight: 700;
      padding: 1.5rem 3rem;
      position: relative;
      z-index: 1;
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
  gap: 6rem;
}

button {
  padding: 1.25rem 3.125rem;
  border-radius: 2rem;
  border-width: 0.125rem;
  font-weight: 700;
  background: var(--accent0);
  color: var(--color0);
}

.hero button {
  background: var(--accent0);
  border-color: transparent;
}

.projects {
  padding: 2rem 0;
  .h2 {
    text-align: center;
    position: relative;

    & .highlight {
      position: absolute;
      top: -10rem;
      right: -12rem;
    }
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-width: 0.125rem;
    font-weight: 700;
    padding: 1.5rem 3rem;
    color: var(--accent0);
    border-radius: 1.875rem;
    font-family: Inter;
    text-align: center;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.1rem;
    background: var(--bg50);
    border-color: var(--accent0);
    margin: 1.5rem 0 2.5rem 0;
  }
}
</style>
