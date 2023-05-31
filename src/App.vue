<script>
  import AppNavbar from './components/AppNavbar.vue'
  import AppJumbotron from './components/AppJumbotron.vue'
  import AppSection1 from './components/AppSection1.vue'
  import AppBanner1 from './components/AppBanner1.vue'
  import AppSection2 from './components/AppSection2.vue'

  
  export default {
    name: "App",
    components: {
      AppNavbar,
      AppJumbotron,
      AppSection1,
      AppBanner1,
      AppSection2,
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
    <AppBanner1 />
    <AppSection2 />
  </main>
</template>

<style scoped>

</style>
