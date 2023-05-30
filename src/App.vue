<script>
  import AppNavbar from './components/AppNavbar.vue'
  import AppJumbotron from './components/AppJumbotron.vue'
  
  export default {
    name: "App",
    components: {
      AppNavbar,
      AppJumbotron
    }
  }
</script>

<template>
  <header>
    <AppNavbar />
    <AppJumbotron />
  </header>
</template>

<style scoped>

</style>
