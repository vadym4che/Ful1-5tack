<template>
  <header>
    <menu>
      <span class="logo menu-item">
        VADYM4<img src="/logo.png" alt="logo" class="logo-image">HE
      </span>

      <li class="menu-item">
        <router-link to="/home">Home</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/about">About Me</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/works">My Works</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/contact">Contact</router-link>
      </li>

      <theme-toggler />
    </menu>
  </header>
</template>

<script setup>
import ThemeToggler from '@/components/ThemeToggler.vue'
</script>

<style lang="scss">
header {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 5;
  height: 5rem;
  width: 100dvw;
  background: linear-gradient(180deg, var(--bg0), var(--bg50), transparent);
}

.logo {
  letter-spacing: 0.25rem;
  font-size: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
}

.logo-image {
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
}

menu {
  width: 100%;
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  font-weight: 500;
  height: 5rem;

  a {
    box-sizing: border-box;
    font-size: 1rem;
    font-size: 1.25rem;
    color: var(--color);
    padding: 1rem 2.25rem;
    opacity: 0.5;
    font-variant: small-caps;
    text-transform: uppercase;
    text-wrap: nowrap;
    border: 0.125rem solid transparent;
    width: fit-content;

    &.router-link-active {
      background: var(--bg50);
      border: 0.125rem solid var(--color50);
      border-radius: 2rem;
      opacity: 0.8;
    }
  }
}

.menu-item {
  display: inline-flex;
  text-shadow: 0 0 2rem var(--bg0) !important;
  background: radial-gradient( var(--bg50), transparent, transparent);
}

.menu-item:hover {
}
</style>