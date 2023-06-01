<script>
  import AppNavbar from './components/AppNavbar.vue'
  import AppJumbotron from './components/AppJumbotron.vue'
  import AppSection1 from './components/AppSection1.vue'
  import AppBanner1 from './components/AppBanner1.vue'
  import AppSection2 from './components/AppSection2.vue'
  import AppSlider from './components/AppSlider.vue'
  import AppSection3 from './components/AppSection3.vue'
  import AppCallToAction from './components/AppCallToAction.vue'
  import AppFooter from './components/AppFooter.vue'
  
  export default {
    name: "App",
    components: {
      AppNavbar,
      AppJumbotron,
      AppSection1,
      AppBanner1,
      AppSection2,
      AppSlider,
      AppSection3,
      AppCallToAction,
      AppFooter,
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
    <AppSlider />
    <AppSection3 />
    <AppCallToAction />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style scoped>

</style>
