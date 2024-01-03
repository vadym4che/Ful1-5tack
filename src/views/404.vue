<template>
  <div class="flex-col-center not-found">
    <h2 class="h2">
      404
      <high-light />
      <br />
      <p class="p1">
        In the vast realm of possibilities,<br />
        the route <b>`{{ useRoute().path }}`</b> exists<br />
        in the twilight between creation and nonexistence.<br />
        <br />
        <i> It is a path not yet traveled or, perhaps, already forgotten... </i>
      </p>
    </h2>

    <active-element
      :action="goBack"
      :padding="'3rem 5rem'"
      :fontSize="'2.5rem'"
      :borderRadius="'6.25rem'"
      :bg="'var(--bg50)'"
      class="font-variant"
    >
      go back
    </active-element>
  </div>
</template>

<script setup>
import HighLight from "@/components/HighLight.vue"
import ActiveElement from "@/components/ActiveElement.vue"
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  top: -10rem;
  text-align: center;
  font-size: 20rem;
  position: relative;
  margin-bottom: -5rem;
  .highlight {
    position: absolute;
    top: -2rem;
    left: -5rem;
  }

  .p1 {
    font-size: 3rem;
    line-height: 3.5rem;

    b {
      color: var(--bg0);
      background: var(--color0);
    }
  }
}
</style>
