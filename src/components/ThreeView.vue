<template>
  <div class="three three-projects">
    <div
      class="card"
      v-for="{ title, name, stack, tags, path, white_bg }, i in three"
      :key="i"
    >
      <div class="frame">
        <async-frame
          :iframeSrc="getPath(path)"
          :iframeClass="{
            white_bg: white_bg,
            iframe: true
          }"
          :three="true"
        />
      </div>

      <h4 class="h4">
        <router-link
          :to="{ name: 'project', params: { projectName: name } }"
          class="text-wrap"
          :title="'View more details about `' + title + '`'"
        >
          {{ title }}
        </router-link>
      </h4>

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
import AsyncFrame from '@/components/AsyncFrame.vue'
import getPath from '@/helpers/getPath.js'
import getThreeRandom from '@/helpers/getThreeRandom'

const three = getThreeRandom(projects)
</script>

<style lang="scss">
.text-wrap {
  max-width: 100%;
  overflow: hidden;
  text-wrap: wrap;
}

.three-projects {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  gap: 2rem;
  height: calc(33.777dvw + 10rem);

  .card {
    overflow: hidden;
    display: grid;
    width: 15.75dvw;
    height: calc(28dvw + 7.75rem);
    grid-template-rows: 28dvw 4rem 2.75rem;
    gap: 0.5rem;
    flex-grow: 0;
    flex-shrink: 1;

    & .h4 {
      justify-self: start;
    }

    .frame {
      box-sizing: border-box;
      border: none;
      border-radius: 1rem !important;
      overflow: hidden !important;
      transform: none;
      position: relative;
      width: 100%;
      aspect-ratio: 9 / 16;

      .iframe {
        box-sizing: border-box;
        border: none;
        width: 100%;
        aspect-ratio: 9 / 16;
        position: absolute;

        &:not(.white_bg) {
          background-color: var(--bg50);
        }
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
