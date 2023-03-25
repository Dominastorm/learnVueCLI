<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <RouterLink class="top-bar-link" to="/">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </RouterLink>
      <RouterLink class="top-bar-link" to="/products">
        <span>Products</span>
      </RouterLink>
      <RouterLink class="top-bar-link" to="/past-orders">
        <span>Past Orders</span>
      </RouterLink>
    </nav>
    <!-- <RouterLink @click="toggleSidebar()" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </RouterLink> -->
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
