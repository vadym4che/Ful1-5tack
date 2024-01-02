<template>
  <iframe
    v-show="isLoaded"
    :src="iframeSrc"
    :class="iframeClass"
    :style="iframeStyle"
    frameborder="0"
    ref="frame"
    @load="setLoaded"
  ></iframe>
  <Loader
    v-show="!isLoaded"
    :class="iframeClass"
    :style="iframeStyle"
    class="placeholder"
  />
</template>

<script setup>
import { ref, defineProps } from 'vue'
import Loader from '@/components/Loader.vue'

const { iframeSrc, iframeStyle, iframeClass } = defineProps(['iframeSrc', 'iframeStyle', 'iframeClass'])
const isLoaded = ref(false)
const setLoaded = () => setTimeout(() => isLoaded.value = true, 0)
</script>

<style lang="scss" scoped>
.placeholder {
  background-color: var(--bg50);
}
</style>
