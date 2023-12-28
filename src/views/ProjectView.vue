<template>
  <div class="flex-col-start">
    <div class="flex-col-start page-header padding-13">
      <h2 class="h2">
        Project Detail
        <HighLight />
      </h2>
      <p class="p3">
        Details About The Project
      </p>
    </div>

    <div class="project-details flex-col-start">
      <iframe
        :src="getPath(project.path)"
        frameborder="0"
        :class="{
          vertical: project.orientation === '|',
          horizontal: project.orientation === '-',
          white_bg: project.white_bg,
        }"
        class="preview"
      ></iframe>

      <div class="text flex-col-start">
        <h3 class="h3">{{ project.title }}</h3>

        <p class="p4">Category: {{ project.tags.join(' | ') }}</p>
        <p class="p4">Stack: {{ project.stack.join(', ') }}</p>
        <p class="p4">Source: <a :href="source" target="_blank">{{ source }}</a></p>
        <p class="p4" v-if="project.deps.length">
          Libraries usage:<br>
          {{ project.deps.join(', ') }}
        </p>
        <p class="p4" v-else>
          The project does not utilize any external libraries and relies solely on the standard built-in HTML, CSS, and JavaScript processing capabilities of modern browsers.
        </p>
        <p class="p4">Description:
          <br>
          <pre>
{{ project.desc }}
          </pre>
        </p>
      </div>
    </div>

    <div class="navigation">
      <router-link :to="{ name: 'project', params: { projectName: prev.name } }" class="nav-button prev">
        <ArrowNavigation />
        PREVIOUS WORK
      </router-link>

      <router-link :to="{ name: 'project', params: { projectName: next.name } }" class="nav-button next">
        NEXT WORK
        <ArrowNavigation />
      </router-link>
    </div>

    <div class="others flex-col-start">
      <h2 class="h1">Other Projects</h2>

      <div class="cards">
        <div class="card" v-for="p, i in others" :key="i">
          <router-link :to="{ name: 'project', params: { projectName: p.name } }" class="">
            <iframe
              :src="getPath(p.path)"
              frameborder="0"
              :class="{ white_bg: p.white_bg }" 
              class="other"
            >
            </iframe>

            <div class="other-text flex-col-start">
              <h4 class="h4">{{ p.title }}</h4>
              <p class="other-p">{{ p.stack.join(', ')}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/assets/projects.js'
import HighLight from '@/components/HighLight.vue'
import ArrowNavigation from '@/components/ArrowNavigation.vue'
import getPath from '@/helpers/getPath.js'
import getSrc from '@/helpers/getSrc.js'

const route = useRoute()
const projectName = ref(route.params.projectName)
const project = ref(getProjectDetails(projectName.value))
const source = computed(() => getSrc(projectName.value))
const curIdx = ref(getCurrentProjectIndex())
const prev = ref(getPreviousProject())
const next = ref(getNextProject())
const others = ref(getOtherProjects())

function getProjectDetails(projectName) {
  return projects.find(project => project.name === projectName) || {}
}

function getCurrentProjectIndex() {
  return projects.findIndex(p => p.name === project.value.name
    && p.orientation === project.value.orientation)
}

function getNextProject() {
  const nextIndex = curIdx.value < projects.length - 1 ? curIdx.value + 1 : 0
  return projects[nextIndex]
}

function getPreviousProject() {
  const prevIndex = curIdx.value > 0 ? curIdx.value - 1 : projects.length - 1
  return projects[prevIndex]
}

function getOtherProjects(currentIndex = curIdx.value) {
  const result = [];

  const isInvalidIndex = (index) => (
    index !== currentIndex &&
    projects[index].orientation !== project.value.orientation
  );

  while (result.length < 3) {
    const randomIndex = Math.floor(Math.random() * projects.length);

    if (isInvalidIndex(randomIndex) && !result.includes(randomIndex)) {
      result.push(randomIndex);
    }
  }

  return result.map(index => projects[index]);
}

watchEffect(() => {
  projectName.value = route.params.projectName
  project.value = getProjectDetails(projectName.value)
  curIdx.value = getCurrentProjectIndex()
  prev.value = getPreviousProject()
  next.value = getNextProject()
  others.value = getOtherProjects()
})

onMounted(() => window.scrollTo(0, 0))
</script>

<style lang="scss" scoped>
iframe.preview {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 1rem;
}
.project-details {
  margin-top: 7.5rem;
  align-items: center;
}

.text {
  width: 65%;
  gap: 1.875rem;
}
.h3 {
  margin-top: 4rem;
  font-size: 2rem;
}

pre {
  line-break: normal;
  text-wrap: wrap;
  font-family: inherit;
}

.navigation {
  margin-top: 9rem;
  display: flex;
  justify-content: space-between;
}

.nav-button {
  display: flex;
  height: 1.5625rem;
  font-family: 'Rubik', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 170%;
  justify-content: center;

  gap: 1.25rem;
}
.prev svg {
  align-self: flex-end;
}
.next svg {
  transform: rotate(180deg);
  align-self: flex-start;
}

.others {
  margin-top: 12rem;
  align-items: center;
}

.cards {
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-bottom: 3.125rem;
}

.card {
  position: relative;
  z-index: 1;
}

.card a {
  aspect-ratio: 3 / 5;
  display: inline-flex;
  flex-direction: column;
}
.other {
  position: relative;
  z-index: -1;
}

.other-text {
  padding-top: 1.6875rem;
  padding-left: 1.25rem;
  gap: 0.625rem;
}
iframe.other {
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 1rem;
}
</style>
