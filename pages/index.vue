<template>
  <div class="app">
    <main>
      <div>
        <SearchInput v-model="searchKeyword" @search="searchProducts" />
      </div>
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)">
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name" />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
  import SearchInput from "@/components/SearchInput";
  import { fetchProductsByKeyword } from "~/api";
  export default {
    components: { SearchInput },
    async asyncData() {
      const response = await fetchProductsByKeyword();
      const products = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }));
      return { products };
    },
    data() {
      return {
        searchKeyword: "",
      };
    },
    methods: {
      moveToDetailPage(id) {
        this.$router.push(`products/${id}`);
      },
      async searchProducts() {
        const response = await fetchProductsByKeyword(this.searchKeyword);
        // map은 해당 배열의 값을 전부 꺼내서 개별로 계산해준다
        this.products = response.data.map((item) => ({
          // ...item은 명시된 key(imageUrl)을 제외한 나머지 key들을 의미 (생략해줌)
          //  해당 코드는 response.data의 배열들([item,item,item])을 개별로 꺼내서 imageUrl만 수정해주는 것
          ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        }));
      },
      moveToCartPage() {
        this.$router.push("/cart");
      },
    },
  };
</script>

<style scoped>
  p {
    margin: 0;
  }

  .flex {
    display: flex;
    justify-content: center;
  }
  .item {
    display: inline-block;
    width: 400px;
    height: 300px;
    text-align: center;
    margin: 0 0.5rem;
    cursor: pointer;
  }
  .product-image {
    width: 400px;
    height: 250px;
  }
  .app {
    position: relative;
  }
  .cart-wrapper {
    position: sticky;
    float: right;
    bottom: 50px;
    right: 50px;
  }
  .cart-wrapper .btn {
    display: inline-block;
    height: 40px;
    font-size: 1rem;
    font-weight: 500;
  }
</style>
