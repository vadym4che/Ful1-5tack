<template>
  <section class="flex-col-center tech-stack">
    <h2 class="h2 text-center">Technologies I like to use and keep diving in deeper</h2>

    <vueper-slides :fixed-height="true" bullets-outside autoplay class="no-shadow" ref="slider">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="slide.id"
        :title="slide.title"
        :content="slide.content"
        :style="'font-size: 3rem'"
      />
      <template #pause>
        <i class="icon pause_circle_outline"></i>
      </template>
    </vueper-slides>
  </section>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import slides from '@/assets/slides.js';

const slider = ref()

const setSlideContentGrid = () => {
  // Get all content elements inside VueperSlides
  const contentElements = document.querySelectorAll('.vueperslide__content');

  // Apply inline styles to each content element
  contentElements.forEach((element) => {
    // Create a style attribute with the desired styles
    element.setAttribute(
      'style',
      'display: grid !important; grid-template-columns: repeat(3, 1fr) !important; width: 100% !important; transition: none !important;'
    );
  });
}

onMounted(() => {
  setSlideContentGrid()
  // Use the $refs property to access the methods of the Vueper Slides component
  slider.value.goToSlide(4);
});
onUpdated(() => {
  setSlideContentGrid()
});
</script>

<style lang="scss">
.vueperslides--fixed-height { height: 25rem; }
.tech-stack {
  gap: 6rem;
}
.vueperslides {
  width: 100%;
  .vueperslide__content-wrapper {
  }
}
.vueperslide__content {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  width: 100% !important;

  /* These styles are already added in `src\assets\slides.js` */
  .content {}
  .image {}
}
</style>
