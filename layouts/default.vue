<template>
  <div>
    <header>
      <h1>{{ $route.name }} 페이지</h1>
      <NuxtLink to="/">홈페이지</NuxtLink>
      <NuxtLink to="/main">메인페이지</NuxtLink>
      <NuxtLink to="products">상품페이지</NuxtLink>
    </header>
    <Nuxt />
  </div>
</template>

<script>
  export default {
    created() {},
  };
</script>
