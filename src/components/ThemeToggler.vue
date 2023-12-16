<template>
  <button
    @click="toggleTheme"
    class="theme-toggler"
    :title="`Toggle theme to ${theme === 'light' ? 'dark' : 'light'}`"
  >
    <span id="spot" :style="{background: `radial-gradient(ellipse at ${offsetX}% ${offsetY}%, var(--accent1), var(--color0))`}">{{theme === 'light' ? '🌙' : '🌞'}}</span>
    <h2 style="display: none;">
      {{ width }} {{ height }}<br>
      {{ x }} {{ y }}<br>
      {{ offsetX }} {{ offsetY }}
    </h2>
  </button>
</template>

<script setup>
import { ref, onMounted, watch, onUpdated } from 'vue'
import { useMouse, useWindowSize } from '@vueuse/core'

const { x, y } = useMouse()
const { width, height } = useWindowSize()
const offsetX = ref(50)
const offsetY = ref(50)

onUpdated(() => {
  offsetX.value = (x.value / width.value) * 100 || 50
  offsetY.value = (y.value / height.value) * 100 || 50
})

const theme = ref(
  localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  )

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}

watch(theme, (newTheme) => document.documentElement.setAttribute('data-theme', newTheme))
onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
})
</script>

<style lang="scss">
[data-theme="dark"] {
  --bg0: #131313;
  --bg50: #13131388;
  --bg2: #1a1a1a;

  --color0: #ffffff;
  --color50: #ffffff88;

  --color1: #f4f7fa;
  --color2: #a8a8a8;
  --color3: #949494;

  --accent0: #cb43cb;

  --accent1: #4c4;
  --accent2: hsl(120, 57%, 66%);

  transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -webkit-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -moz-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -ms-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -o-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
}

[data-theme="light"] {
  --bg0: #ececec;
  --bg50: #ececec88;
  --bg2: rgb(26, 26, 26);
  --color0: #000000;
  --color50: #00000088;
  --color1: #f4f7fa;
  --color2: #a8a8a8;
  --color3: #949494;

  --bborder: rgba(255, 255, 255, 0.30);
  --bbg: rgba(3, 3, 4, 0.50);

  --accent0: #4c4;

  --accent1: #cb43cb;
  --accent2: hsl(300, 60%, 80%);

  transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -webkit-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -moz-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -ms-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -o-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
}

.theme-toggler {
  background-color: transparent;
  border: none;
  z-index: 1;
  transition: transform 0.5s;
  cursor: pointer;
  opacity: 0.75;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 4rem;

  #spot {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color0);
    font-size: 1rem;
    line-height: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: radial-gradient(ellipse at 0% 0%, var(--accent2), var(--accent1));
  }
}
</style>