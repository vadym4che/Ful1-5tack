<template>
  <header>
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
        <router-link to="/contact">Contact Me</router-link>
      </li>
    </menu>
  </header>
</template>

<script setup>

</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  z-index: 5;
}

menu {
  width: 100dvw;
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  a {
    padding: 1rem;

    &.router-link-active {
      border-radius: 1rem;
      background: var(--background);
      border: 1px solid var(--accent1);
    }
  }

}
</style>