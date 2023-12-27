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

    <div class="project-details">
      <h3 class="h3">{{ project.name }}</h3>
      <iframe
        :src="getPath(project.path)"
        frameborder="0"
        :class="{ vertical: project.orientation === '|', horizontal: project.orientation === '-' }"
        ></iframe>
      <div>
        <p>Description: {{ project.desc }}</p>
        <p>Stack: {{ project.stack.join(', ') }}</p>
        <!-- Add more details as needed -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/assets/projects.js'
import HighLight from '@/components/HighLight.vue'
import getPath from '@/helpers/getPath.js'

const route = useRoute()
const projectName = ref(route.params.projectName)
const project = ref(getProjectDetails(projectName.value))

function getProjectDetails(projectName) {
  return projects.find(project => project.name === projectName) || {}
}

watchEffect(() => {
  projectName.value = route.params.projectName
  project.value = getProjectDetails(projectName.value)
})
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  aspect-ratio: 1 / 1;
}
.project-details {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
