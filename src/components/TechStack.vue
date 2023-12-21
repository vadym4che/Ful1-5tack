<template>
  <section class="flex-col-center tech-stack">
    <h2 class="h2 text-center">Technologies I like to use and keep diving in deeper</h2>

    <v-swiper v-show="false">
      <div class="arrow prev" @click="goToPrev">&lt;</div>

      <div class="wrapper" ref="swiperWrapper">
        <!-- Duplicate the slides for infinite carousel -->
        <v-slide v-for="(slide, index) in infiniteSlides" :key="index">
          <h4 class="h4 text-center">{{ slide.title }}</h4>
          <div class="info">
            <div class="item" v-for="{ name, path }, idx in slide.items" :key="idx">
              <div :style="{backgroundImage: `url(${path})`}" class="image"></div>
              <p class="p2">{{ name }}</p>
            </div>
          </div>
        </v-slide>
      </div>

      <div class="arrow next" @click="goToNext">&gt;</div>

      <div class="pagination">
        <div class="page" v-for="(slide, index) in slides" :key="index">
          {{ index + 1 }}
        </div>
      </div>
    </v-swiper>

    <vueper-slides autoplay>
      <vueper-slide v-for="(slide, i) in slides"
        :key="slide.id"
        :title="slide.title"
        :content="slide.content"
         />
      <template #pause>
        <i class="icon pause_circle_outline"></i>
      </template>
    </vueper-slides>
  </section>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

// import VSwiper from '@/components/VSwiper.vue';
// import VSlide from '@/components/VSlide.vue';
import slides from '@/assets/slides.js';

// import { ref, computed } from 'vue';

// // Function to clone slides for infinite carousel
// const cloneSlides = (slides) => [...slides, ...slides, ...slides];

// const slidesRef = ref(slides);
// const infiniteSlides = computed(() => cloneSlides(slidesRef.value));

// // Function to navigate to the previous slide
// const goToPrev = () => {
//   const swiper = document.querySelector('.wrapper');
//   const slideWidth = swiper.clientWidth;
//   swiper.scrollLeft -= slideWidth;
//   checkScrollPosition();
// };

// // Function to navigate to the next slide
// const goToNext = () => {
//   const swiper = document.querySelector('.wrapper');
//   const slideWidth = swiper.clientWidth;
//   swiper.scrollLeft += slideWidth;
//   checkScrollPosition();
// };

// // Function to check and adjust scroll position for infinite effect
// const checkScrollPosition = () => {
//   const swiper = document.querySelector('.wrapper');
//   const slideWidth = swiper.clientWidth;

//   if (swiper.scrollLeft <= 0) {
//     // If at the beginning, scroll to the end (before the duplicated slides)
//     swiper.scrollLeft = swiper.scrollWidth - slideWidth * 3;
//   } else if (swiper.scrollLeft >= swiper.scrollWidth - swiper.clientWidth) {
//     // If at the end, scroll to the beginning (after the duplicated slides)
//     swiper.scrollLeft = slideWidth;
//   }
// };
</script>

<style lang="scss" scoped>

.vueperslides {
  width: 100%;
}
/* .tech-stack {
  gap: 6rem;
}

.v-swiper, .wrapper {
  width: 100%;
  text-align: center;
  max-height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
}

.arrow {
  font-size: 4rem;
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 1;

  &:hover {
    box-shadow: 0 0 0.75rem 0.25rem var(--accent0);
  }

  &.next {
    right: 0;
  }
}

.pagination {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .item {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    box-sizing: border-box;
  }

  .image {
    width: 100%;
    height: 10rem;
    background-position: center;
    background-size: contain;
    object-fit: contain;
    background-repeat: no-repeat;
  }
} */

.item {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  box-sizing: border-box;
}

.image {
  width: 100%;
  height: 10rem;
  background-position: center;
  background-size: contain;
  object-fit: contain;
  background-repeat: no-repeat;
}
</style>
