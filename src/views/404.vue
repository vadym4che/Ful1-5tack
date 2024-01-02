<template>
  <div class="flex-col-center not-found">
    <h2 class="h2">
      404
      <high-light />
      <br>
      <p class="p1">
        In the vast realm of possibilities,<br>
        the route "{{ useRoute().path }}" exists<br>
        in the twilight between creation and nonexistence.<br>
        <br>
        It is a path not yet traveled or, perhaps, already forgotten.
      </p>
    </h2>
  </div>
</template>

<script setup>
import HighLight from '@/components/HighLight.vue'
import { useRoute } from 'vue-router'
</script>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  top: -10rem;
  text-align: center;
  font-size: 20rem;
  position: relative;
  .highlight {
    position: absolute;
    top: -2rem;
    left: -5rem;
  }
}
</style>
