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
</style>
