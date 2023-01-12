<template>
  <div>
    <h1>메인 페이지</h1>
    <ProductList></ProductList>
  </div>
</template>

<script>
  // import axios from "axios";
  import ProductList from "~/components/ProductList.vue";
  export default {
    components: { ProductList },
    // async asyncData() {
    //   const response = await axios.get("http://localhost:3000/products");
    //   const products = response.data;
    //   return { products };
    // },
    // data() {
    //   return {
    //     products: [],
    //   };
    // },
    // async created() {},
  };
</script>

<style></style>
