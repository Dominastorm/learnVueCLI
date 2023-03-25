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
    <div @click="toggleSidebar()" class="top-bar-cart-link">;
        <i class="icofont-cart-alt icofont-1x"></i>;
        <span>Cart ({{ totalQuantity }})</span>;
    </div>
  </header>

  <RouterView :inventory="inventory" :addToCart="addToCart"/>

  <SideBar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import food from '@/data/food.json';


export default {
  components: {
    SideBar
  },
  data() {
    return {
      showSidebar: false,
      inventory: food,
      cart: {}
    }
  },
  computed: {
      totalQuantity() {
        return Object.values(this.cart).reduce((total, quantity) => total + quantity, 0);
      }
  },
  methods: {
    addToCart(name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    removeItem(name) {
      delete this.cart[name]
    }
  }
}
</script>
