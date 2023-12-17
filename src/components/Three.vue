<template>
  <div class="three">
    <div class="card" v-for="{ link, name, stack, tags }, i in three" :key="i">
      <div class="frame">
        <iframe :src="link" frameborder="0" :class="'frame' + i"></iframe>
      </div>

      <h4 class="h4">{{ name }}</h4>
      <p class="p3">
        <span class="dimmed">tech stack: &nbsp;</span>
        {{ stack.join(' | ') }}<br>
        <span class="dimmed">tech area: &nbsp;&nbsp;</span>
        {{ tags.join(', ') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import projects from '@/assets/projects.js'
const three = projects.slice(0, 3)
</script>

<style lang="scss" scoped>
.three {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  gap: 2rem;

  height: 75%;

  .card {
    width: calc(33.33% - 1.333rem);
    height: auto;
    overflow: hidden;
    gap: 2rem;

    display: grid;
    grid-template-rows: 10fr 1fr 1fr;

    .frame {
      border-radius: 1rem !important;
      overflow: hidden;

      iframe {
        width: 100%;
        aspect-ratio: 9 / 16;
      }
    }
    .frame0 {
      transform: scaleX(1.1);
    }

    .h4 {
      text-align: left;
      width: 100%;
      position: relative;

      &::after {
        position: absolute;
        content: '---------';
        width: 3rem;
        font-size: 1rem;
        letter-spacing: -0.25ch;
        color: var(--accent0);
        margin-left: 2rem;
      }
    }

  }
}

</style>