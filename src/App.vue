<script>
  import AppNavbar from './components/AppNavbar.vue'
  import AppJumbotron from './components/AppJumbotron.vue'
  import AppSection1 from './components/AppSection1.vue'
  
  export default {
    name: "App",
    components: {
      AppNavbar,
      AppJumbotron,
      AppSection1,
    }
  }
</script>

<template>
  <header>
    <AppNavbar />
    <AppJumbotron />
  </header>
  <main>
    <AppSection1 />
  </main>
</template>

<style scoped>

</style>
