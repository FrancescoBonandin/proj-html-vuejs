<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div >
    
    <HeaderComponent />
  
    <MainComponent />
  
    <FooterComponent />
    
  </div>
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Shadows+Into+Light&display=swap');

  *{
    font-family: 'Roboto', sans-serif;
  }

  h2{
    font-family: 'Shadows Into Light', cursive;  
  }

  ul{
    list-style-type: none;
  }
</style>
