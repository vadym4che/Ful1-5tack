<template>
  <header>
    <menu>
      <span class="logo menu-item">
        <a href="http://bit.ly/Ful1-5tack" class="link logo-link">
          VADYM4<img src="/logo.png" alt="logo" class="logo-image">HE
        </a>
      </span>

      <li class="menu-item">
        <router-link to="/home" class="link">Home</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/about" class="link">About Me</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/projects" class="link">My Works</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/contact" class="link">Contact</router-link>
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
  padding: 0 0.5rem;
}

.logo-image {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.3rem;
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
  gap: 0.5rem;

  a {
    box-sizing: border-box;
    font-size: 1.5rem;
    padding: 1rem 2.25rem;
    opacity: 0.75;
    font-variant: small-caps;
    text-transform: uppercase;
    text-wrap: nowrap;
    border: 0.125rem solid transparent;
    width: fit-content;
    color: var(--color50);

    &.router-link-active {
      background: var(--bg50);
      border: 0.125rem solid var(--color50);
      border-radius: 2rem;
      opacity: 0.8;
      color: var(--color0);
      font-weight: bold;
      letter-spacing: -0.022ch;

      &:hover {
        color: var(--color0);
        box-shadow: none;

        &::after {
          box-shadow: none;
        }
      }
    }

    &:active {
      letter-spacing: -0.025ch;
    }

    &:not(.router-link-active, .logo-link) {
      color: var(--color50);
    }
  }
}

.menu-item {
  display: inline-flex;
  text-shadow: 0 0 2rem var(--bg0) !important;
  background: radial-gradient( var(--bg50), transparent, transparent);
}
</style>
