<template>
  <div class="flex-col-start projects-page">
    <div class="flex-col-start page-header padding-13">
      <h2 class="h2" style="left: -0.2rem">
        My Works
        <high-light />
      </h2>
      <p class="p3">Showcase About Works</p>
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
              iframe: true,
            }"
          />

          <div class="title-box">
            <p class="t3">
              {{ p.tags.join(" | ") }}
            </p>

            <router-link
              class="t2"
              :to="{ name: 'project', params: { projectName: p.name } }"
              :title="'View more details about `' + p.title + '`'"
            >
              {{ p.title }}
            </router-link>
          </div>
        </div>
      </div>

      <active-element
        v-if="!isLimitReached"
        :padding="'1.5rem 2.5rem'"
        :fontSize="'1.33rem'"
        :borderRadius="'6.5rem'"
        :bg="'var(--bg50)'"
        class="font-variant load-more"
        :action="handleLoadMore"
      >
        load more works
      </active-element>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue"
import HighLight from "@/components/HighLight.vue"
import AsyncFrame from "@/components/AsyncFrame.vue"
import ActiveElement from "@/components/ActiveElement.vue"
import { chunkedProjects } from "@/assets/projects.js"
import getPath from "@/helpers/getPath.js"

const itemsToShow = ref(2)
const projectsToShow = ref(chunkedProjects.slice(0, itemsToShow.value))
const isLimitReached = ref(
  projectsToShow.value.length === chunkedProjects.length
)

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
    lastElement.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

onMounted(() => window.scrollTo(0, 0))
onUpdated(() => handleScroll())
</script>

<style lang="scss">
.projects-page {
  .projects-container {
    padding: 6.25rem 0 10rem;
    gap: 3rem;
  }

  .projects-container,
  .three {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
  }

  .three {
    margin: 0 auto;
    gap: 1.5rem;

    @media (orientation: landscape) {
      & {
        width: calc(50% - 1.5rem);
      }
    }

    @media (orientation: portrait) {
      & {
        width: 100%;
      }
    }
  }

  .project {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 0.5rem;

    &:has(.vertical) {
      @media (orientation: landscape) {
        & {
          height: calc(1.2 * (40dvw * 0.666 - 1.5rem));
          width: calc(40dvw * 0.333 - 1.5rem);
        }
      }
      @media (orientation: portrait) {
        & {
          height: calc(1.2 * (80dvw * 0.666 - 1rem));
          width: calc(80dvw * 0.333 - 1rem);
        }
      }
    }

    &:has(.horizontal) {
      @media (orientation: landscape) {
        & {
          height: calc(1.24 * (40dvw * 0.333 - 1.6rem));
          width: calc(40dvw * 0.666 - 1.6rem);
        }
      }
      @media (orientation: portrait) {
        & {
          height: calc(1.2 * (80dvw * 0.333333 - 1rem));
          width: calc(80dvw * 0.666666 - 0.5rem);
        }
      }
    }
    .horizontal,
    .vertical {
      width: 100%;
    }

    .horizontal {
      aspect-ratio: 2 / 1;
    }

    &:has(.vertical) .title-box {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: space-between;
    }

    @media (max-width: 1000px) {
      &:has(.horizontal) .title-box {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
      }
    }

    .vertical {
      aspect-ratio: 1 / 2;
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
    right: 0;
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

  .load-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent0);
    font-family: Inter;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    margin: 3.75rem auto 0;
  }
}
</style>
