<template>
  <div class="main">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
 

  export default {
    components: {
      Navbar
    }  
  }
</script>

<style lang="scss" scoped>
  .main {
    max-width: 1440px;
    margin: 0 auto;
  }
</style>
