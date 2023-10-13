<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
    <!-- <Item-card></Item-card> -->
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

</style>
