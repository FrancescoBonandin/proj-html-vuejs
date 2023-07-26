<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FontAwesomeIcon,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div >

    <ul class="nav flex-column nav-tabs  offcanvas-trigger">

      <li class="nav-item">

        <a class="nav-link " data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvasExample">
          <FontAwesomeIcon icon="fa-solid fa-ruler-combined" size="lg"/>
        </a>

      </li>

      <li class="nav-item">

        <a class="nav-link " data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvasExample">
          <FontAwesomeIcon icon="fa-regular fa-life-ring" size="lg"/>
        </a>

      </li>

      <li class="nav-item">

        <a class="nav-link " data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvasExample">
          <FontAwesomeIcon icon="fa-solid fa-book" size="lg"/>
        </a>

      </li>

      <li class="nav-item">

        <a class="nav-link " data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvasExample">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="lg"/>
        </a>

      </li>

    </ul>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      
      <div class="offcanvas-header">

          <h5 class="offcanvas-title" id="offcanvasLabel">
            Offcanvas
          </h5>

          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">

          </button>

      </div>

        <div class="offcanvas-body">

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quas in dolorem velit reprehenderit odit alias nisi minus esse, 
            perferendis labore dignissimos pariatur ratione magni.
            Maiores maxime perspiciatis perferendis veniam saepe!
          </div>
          
        </div>
    </div>
    
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
    .col,.col-auto{

      a{
        color: black;
        text-decoration: none;
        &:visited{
          color: inherit;
          text-decoration: inherit;
        }
        &:hover{
          color: $button-primary;
        }
      }
  
      ul{
        padding: 0;
      }

    }


  }

  body{
    max-width: calc(100vw - 15px);
    overflow-x: hidden;
  }

  h2{
    font-family: 'Shadows Into Light', cursive;  
  }

  ul{
    list-style-type: none;
  }

  img{
    display: block;
  }

  .offcanvas-trigger{
    position: fixed;
    top: 100px;
    right: 0;
    z-index:1;
    border: solid 1px grey;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    background-color: whitesmoke;
    a{
      color: black;
      text-decoration: none;
    }

    ul{
      padding: 0;
      li{
        border: 1px solid black;
      }
    }
  }
</style>
