<template>
  <button
    @click="toggleTheme"
    class="theme-toggler"
    :title="{theme}"
  >
    to
    <span id="spot">
      <!-- {{ theme === 'light' ? 'dark' : 'light' }} -->
    </span>
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

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
  --background: hsl(300, 60%, 5%);
  --color: hsl(120, 57%, 90%);
  --accent0: #cb43cb;
  --accent1: #4c4;
  --accent2: hsl(300, 60%, 80%);
  
  transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -webkit-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -moz-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -ms-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -o-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
}

[data-theme="light"] {
  --background: hsl(120, 57%, 95%);
  --color: hsl(300, 60%, 10%);
  --accent0: #4c4;
  --accent1: #cb43cb;
  --accent2: hsl(120, 57%, 66%);

  transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -webkit-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -moz-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -ms-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
  -o-transition: color 1s, background 1s, backgroundColor 1s, boxShadow 1s;
}

@keyframes spherify {
  0% {
    background: radial-gradient(ellipse at 0% 0%, var(--accent2), var(--accent1));
  }
  10% {
    background: radial-gradient(ellipse at 10% 10%, var(--accent2), var(--accent1));
  }
  20% {
    background: radial-gradient(ellipse at 20% 20%, var(--accent2), var(--accent1));
  }
  30% {
    background: radial-gradient(ellipse at 30% 30%, var(--accent2), var(--accent1));
  }
  40% {
    background: radial-gradient(ellipse at 40% 40%, var(--accent2), var(--accent1));
  }
  50% {
    background: radial-gradient(ellipse at center, var(--accent2), var(--accent1));
  }
  60% {
    background: radial-gradient(ellipse at 60% 60%, var(--accent2), var(--accent1));
  }
  70% {
    background: radial-gradient(ellipse at 70% 70%, var(--accent2), var(--accent1));
  }
  80% {
    background: radial-gradient(ellipse at 80% 80%, var(--accent2), var(--accent1));
  }
  90% {
    background: radial-gradient(ellipse at 90% 90%, var(--accent2), var(--accent1));
  }
  100% {
    background: radial-gradient(ellipse at 100% 100%, var(--accent2), var(--accent1));
  }
}

@keyframes spherify1 {
  0% {
    background: radial-gradient(ellipse at 0% 0%, var(--accent2), var(--accent1));
  }
  5% {
    background: radial-gradient(ellipse at 10% 10%, var(--accent2), var(--accent1));
  }
  10% {
    background: radial-gradient(ellipse at 20% 20%, var(--accent2), var(--accent1));
  }
  15% {
    background: radial-gradient(ellipse at 30% 30%, var(--accent2), var(--accent1));
  }
  20% {
    background: radial-gradient(ellipse at 40% 40%, var(--accent2), var(--accent1));
  }
  25% {
    background: radial-gradient(ellipse at center, var(--accent2), var(--accent1));
  }
  30% {
    background: radial-gradient(ellipse at 60% 60%, var(--accent2), var(--accent1));
  }
  35% {
    background: radial-gradient(ellipse at 70% 70%, var(--accent2), var(--accent1));
  }
  40% {
    background: radial-gradient(ellipse at 80% 80%, var(--accent2), var(--accent1));
  }
  45% {
    background: radial-gradient(ellipse at 90% 90%, var(--accent2), var(--accent1));
  }
  50% {
    background: radial-gradient(ellipse at 100% 100%, var(--accent2), var(--accent1));
  }
  55% {
    background: radial-gradient(ellipse at 90% 90%, var(--accent2), var(--accent1));
  }
  60% {
    background: radial-gradient(ellipse at 80% 80%, var(--accent2), var(--accent1));
  }
  65% {
    background: radial-gradient(ellipse at 70% 70%, var(--accent2), var(--accent1));
  }
  70% {
    background: radial-gradient(ellipse at 60% 60%, var(--accent2), var(--accent1));
  }
  75% {
    background: radial-gradient(ellipse at center, var(--accent2), var(--accent1));
  }
  80% {
    background: radial-gradient(ellipse at 40% 40%, var(--accent2), var(--accent1));
  }
  85% {
    background: radial-gradient(ellipse at 30% 30%, var(--accent2), var(--accent1));
  }
  90% {
    background: radial-gradient(ellipse at 20% 20%, var(--accent2), var(--accent1));
  }
  95% {
    background: radial-gradient(ellipse at 10% 10%, var(--accent2), var(--accent1));
  }
  100% {
    background: radial-gradient(ellipse at 0% 0%, var(--accent2), var(--accent1));
  }
}

.theme-toggler {
  background-color: transparent;
  border: none;
  color: var(--accent0);
  padding: 1rem;
  font-size: 4rem;
  z-index: 0;
  transition: transform 0.5s;
  position: relative;

  #spot {
    color: var(--accent1);

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background: radial-gradient(var(--accent1), var(--background));

      animation: spherify 1s linear forwards;
    }

  }

  &:hover #spot:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    animation: spherify1 2s linear infinite;
  }
}

.theme-toggler:hover {
  transform: scale(1.2);
}
</style>