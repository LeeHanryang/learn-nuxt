<template>
  <div>
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader.vue";
  export default {
    components: { AppHeader },
  };
</script>
