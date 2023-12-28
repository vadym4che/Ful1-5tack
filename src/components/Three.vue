<template>
  <div class="three">
    <div class="card" v-for="{ name, stack, tags, path, white_bg }, i in three" :key="i">
      <div class="frame">
        <iframe :src="getPath(path)" frameborder="0" :class="{ white_bg: white_bg }"></iframe>
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
import { projects } from '@/assets/projects.js'
import getPath from '@/helpers/getPath.js'
import getThreeRandom from '@/helpers/getThreeRandom'

const three = getThreeRandom(projects)
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

  @media (orientation: landscape) {
    & {
      height: 75dvh;
    }
  }

  @media (orientation: portrait) {
    & {
      height: 37.5dvh;
    }
  }


  .card {
    @media (orientation: landscape) {
      & {
        width: 22rem;
        height: 51rem;
        grid-template-rows: 40rem 2rem 1rem;
      }
    }

    @media (orientation: portrait) {
      & {
        width: 16rem;
        height: 40rem;
        grid-template-rows: 29rem 2rem 1rem;
      }
    }
    overflow: hidden;
    gap: 2rem;

    display: grid;

    .frame {
      box-sizing: border-box;
      border: none;
      border-radius: 1rem !important;
      overflow: hidden !important;
      transform: none;
      position: relative;
      width: 100%;
      aspect-ratio: 9 / 16;

      iframe {
        box-sizing: border-box;
        border: none;
        width: 100%;
        aspect-ratio: 9 / 16;
        position: absolute;
        transform: scale(1.01) translate(0.5%, 0.5%);
      }
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