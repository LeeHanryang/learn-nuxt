<template>
  <div class="input-wrapper flex">
    <input
      type="text"
      :value="value"
      class="search-input"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="searchProducts" />
    <button class="btn" type="button" @click="searchProducts">search</button>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: () => "",
      },
    },
    methods: {
      searchProducts() {
        this.$emit("search");
      },
    },
  };
</script>

<style scoped>
  .input-wrapper {
    height: 40px;
    margin: 1rem 0;
  }
  .search-input {
    width: 200px;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .btn {
    font-size: 1.2rem;
    font-weight: 500;
  }
</style>
