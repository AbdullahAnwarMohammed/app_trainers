<template>
    <div id="app-appilcation">
      <Navbar />
      <Nuxt />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  
  export default {
    components: {
      Navbar
    },
    mounted() {
      new this.$wow.WOW().init()
    }
  }
  </script>