<template>
  <section class="flex-col-center tech-stack">
    <h2 class="h2 text-center">Technologies I like to use and keep dive in deeper</h2>

    <v-swiper>
      <div class="arrow prev">&lt;</div>

      <v-slide v-for="(slide, index) in slides.slice(0, 2)" :key="index">
        <h4 class="h4 text-center">{{ slide.title }}</h4>
        <div class="info">
          <div class="item" v-for="{ name, path }, idx in slide.items" :key="idx">
            <div :style="{backgroundImage: `url(${path})`}" class="image"></div>
            <p class="p2">{{name}}</p>
          </div>
        </div>
      </v-slide>

      <div class="arrow next">&gt;</div>

      <div class="pagination">
        <div class="page" v-for="(slide, index) in slides.slice(0, 2)" :key="index">
          {{index + 1}}
        </div>
      </div>
    </v-swiper>

  </section>
</template>

<script setup>
import VSwiper from '@/components/VSwiper.vue';
import VSlide from '@/components/VSlide.vue';
import slides from '@/assets/slides.js';
</script>

<style lang="scss" scoped>
.tech-stack {
  gap: 6rem;
}
.v-swiper {
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
  width: 100% !important;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .item {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 5rem;
    .image {
      width: 100%;
      height: 10rem;
      background-position: center;
      background-size: contain;
      object-fit: contain;
      background-repeat: no-repeat;
    }
  }
}
</style>