<template>
  <button
    @click="toggleTheme"
    class="theme-toggler"
    :title="`Toggle theme to ${theme === 'light' ? 'dark' : 'light'}`"
  >
    <span
      id="spot"
      :style="{
        background: `radial-gradient(ellipse at ${offsetX}% ${offsetY}%, var(--accent1), var(--color0))`,
      }"
    >
      {{ theme === "light" ? "🌙" : "🌞" }}
    </span>

    <h2 style="display: none">
      {{ width }} {{ height }}<br />
      {{ x }} {{ y }}<br />
      {{ offsetX }} {{ offsetY }}
    </h2>
  </button>
</template>

<script setup>
import { ref, onMounted, watch, onUpdated } from "vue"
import { useMouse, useWindowSize } from "@vueuse/core"

const { x, y } = useMouse()
const { width, height } = useWindowSize()
const offsetX = ref(50)
const offsetY = ref(50)

const theme = ref(
  sessionStorage.getItem("theme")
    ? sessionStorage.getItem("theme")
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
)

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light"
  sessionStorage.setItem("theme", theme.value)
}

onMounted(() => {
  document.documentElement.setAttribute("data-theme", theme.value)
  sessionStorage.setItem("theme", theme.value)
})

onUpdated(() => {
  offsetX.value = (x.value / width.value) * 100 || 50
  offsetY.value = (y.value / height.value) * 100 || 50
})

watch(theme, (newTheme) =>
  document.documentElement.setAttribute("data-theme", newTheme)
)
</script>

<style lang="scss">
[data-theme="dark"] {
  --is-dark: 1;
  --is-white: 0;
  --bg0: #131313;
  --bg50: #13131388;
  --bg2: #1a1a1a;

  --color0: #ffffff;
  --color50: #ffffff88;

  --color1: #f4f7fa;
  --color2: #a8a8a8;
  --color3: #949494;

  --accent0: #4c4;
  --accent50: #4c48;
  --accent1: #cb43cb;
  --accent2: hsl(120, 57%, 69%);


  --scrollbar-thumb: rgb(54, 54, 54);
  --scrollbar-track: rgb(90, 90, 90);

  --scrollbar-thumb_hover: rgb(21, 21, 21);
  --scrollbar-track_hover: rgb(106, 106, 106);

  --loader-bg-blend-mode: multiply;
}

[data-theme="light"] {
  --is-dark: 0;
  --is-white: 1;
  --bg0: #ececec;
  --bg50: #ececec88;
  --bg2: #dbdbdb;

  --color0: #000000;
  --color50: #00000088;

  --color1: #0b0805;
  --color2: #575757;
  --color3: #6b6b6b;

  --bborder: rgba(255, 255, 2507 0.3);
  --bbg: rgba(3, 3, 4, 0.5);

  --accent0: #cb43cb;
  --accent50: #cb43cb88;
  --accent1: #4c4;
  --accent2: hsl(300, 57%, 69%);

  --scrollbar-thumb: rgb(145, 145, 145);
  --scrollbar-track: rgb(242, 242, 242);

  --scrollbar-thumb_hover: rgb(45, 45, 45);
  --scrollbar-track_hover: rgb(226, 226, 226);

  --loader-bg-blend-mode: screen;
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
  padding: 0 0.5rem;

  #spot {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color0);
    font-size: 1.5rem;
    line-height: 1.5rem;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at 0% 0%,
      var(--accent2),
      var(--accent1)
    );
  }
}
</style>
