<template>
  <div class="flex-col-start projects-page">
    <div class="flex-col-start page-header padding-13">
      <h2 class="h2" style="left: -0.2rem;">
        My Works
        <high-light />
      </h2>
      <p class="p3">
        Showcase About Works
      </p>
    </div>

    <div class="projects-container">
      <div
        class="three"
        v-for="(a, index) in projectsToShow"
        :key="index"
        :id="'three-' + index"
      >
        <div v-for="(p, i) in a" :key="i" class="project">
          <async-frame 
            :iframeSrc="getPath(p.path)"
            :iframeClass="{
              vertical: p.orientation === '|',
              horizontal: p.orientation === '-',
              white_bg: p.white_bg,
              iframe: true
            }"
          />

          <p class="p3">
            {{ p.tags.join(' | ') }}
          </p>

          <router-link
            :to="{ name: 'project', params: { projectName: p.name }}"
            :title="`get '${p.name}' details`"
          >
            {{p.title}}
          </router-link>
        </div>
      </div>

      <button v-if="!isLimitReached" @click="handleLoadMore" class="load-more">LOAD MORE WORKS</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import HighLight from '@/components/HighLight.vue'
import AsyncFrame from '@/components/AsyncFrame.vue'
import { chunkedProjects } from '@/assets/projects.js'
import getPath from '@/helpers/getPath.js'

const itemsToShow = ref(2)
const projectsToShow = ref(chunkedProjects.slice(0, itemsToShow.value))
const isLimitReached = ref(projectsToShow.value.length === chunkedProjects.length)

const handleLoadMore = () => {
  if (chunkedProjects.length - 1 > itemsToShow.value) {
    itemsToShow.value += 2
    projectsToShow.value = chunkedProjects.slice(0, itemsToShow.value)
  } else if (chunkedProjects.length - 1 === itemsToShow.value) {
    projectsToShow.value = chunkedProjects.slice()
  }
  isLimitReached.value = projectsToShow.value.length === chunkedProjects.length
}

const handleScroll = () => {
  const lastElementId = `three-${projectsToShow.value.length - 2}`
  const lastElement = document.getElementById(lastElementId)

  if (lastElement) {
    lastElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => window.scrollTo(0, 0))
onUpdated(() => handleScroll())
</script>

<style lang="scss">
.projects-page {

  .projects-container {
    padding: 6.25rem 0 11rem;
    gap: 3rem;
  }
  .projects-container, .three {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
  }
  .three {
    gap: 1.5rem;
    max-width: 55.5rem;
  }

  .project {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 0.5rem;

    &:has(.vertical){
      height: calc(1.2 * 36.144rem);
    }

    &:has(.horizontal){
      height: calc(1.2 * 17.572rem);
    }
    .horizontal {
      aspect-ratio: 2 / 1;
      width: 36.144rem;
    }
    .vertical {
      aspect-ratio: 1 / 2;
      width: 17.572rem;
    }
    flex-shrink: 1;
    flex-grow: 0;
    height: auto;
    overflow: hidden;

    background: var(--bg50);
    border-radius: 1rem;
    text-align: center;

    .iframe {
      border-radius: 1rem;
    }
  }

  .project:nth-child(3n):has(.vertical) {
    position: absolute;
    top: 0;
    right: 0;
  }
  .project:nth-child(3n):has(.horizontal) {
    position: absolute;
    top: calc(50% + 0.5rem);
    right: 0.5rem;
  }

  .iframe {
    border: none;
  }

  @media (orientation: landscape) {
    .three:last-child {
      margin: 0 auto;
      align-self: center;
      justify-self: center;
    }
  }

  .load-more{
    height: 3.75rem;
    width: 15.125rem;
    color: var(--accent0);
    background-color: transparent;
    border-radius: 1.875rem;
    font-family: Inter;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.1rem;
    background: var(--bg50);
    border-color: var(--accent0);
    margin: 3.75rem auto 0;
  }
}
</style>
