<template>
  <header>
    <span class="logo">
      VADYM4<img src="@/../public/logo.png" alt="logo" class="logo-image">HE
    </span>
    <menu>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About Me</router-link>
      </li>
      <li>
        <router-link to="/works">My Works</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </menu>
  </header>
</template>

<script setup>
import ThemeToggler from '@/components/ThemeToggler.vue'
</script>

<style lang="scss">
header {
  box-sizing: border-box;
  top: 0;
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 78dvw;
  gap: 2rem;
  font-weight: 500;
}

.logo {
  letter-spacing: 0.25rem;
  font-size: 1.25rem;
}

.logo-image {
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
}

menu {
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    font-size: 1rem;
    color: var(--color);
    padding: 1rem 2.25rem;
    opacity: 0.5;
    font-variant: small-caps;
    text-transform: uppercase;
    border: 0.125rem solid transparent;

    &.router-link-active {
      background: var(--bbg);
      border: 0.125rem solid var(--bborder);
      border-radius: 2rem;
      opacity: 0.8;
    }
  }

}
</style>