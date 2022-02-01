<template>
  <div id="app">
    <navbar />  
    <hero />
    <phone />
    <Footer />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue';
import hero from '@/components/home/Hero.vue';
import phone from '@/components/home/Phone.vue';
import Footer from '@/components/home/Footer.vue';
export default {
  name: 'App',
  components: {
    navbar, 
    hero, 
    phone,     
    Footer
  },
};

</script>

<style lang="less">

</style>
