<template>
  <div>
    <ul v-for="product in products" :key="product.id">
      <li>{{ product }}</li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    async asyncData() {
      const response = await axios.get("http://localhost:3000/products");
      const products = response.data;
      return { products };
    },
  };
</script>

<style></style>
