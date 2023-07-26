<script>
import MyButton from './MyButton.vue';
import HeaderDropdowns from './HeaderDropdowns.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {store} from '../store.js'


export default {
    components: { 
        FontAwesomeIcon,
        MyButton,
        HeaderDropdowns,
     },
    name: "HeaderComponent",
    data() {
        return {
            store,
            countdownClock: null,
            countdownCounter: null,
            
        };
    },
    methods: {
        addZeroBefore(num) {
            if (num < 10) {
                num = `0${num}`;
            }
            return num;
        },
        setCountdown() {
            this.countdownClock = setInterval(() => {
                let now = new Date();
                let tomorrowCountdown = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
                let timeleft = tomorrowCountdown.getTime() - now.getTime();
                let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
                let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
                if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
                    clearInterval(this.countdownClock);
                    this.countdownCounter = "Time's Up";
                }
                else {
                    this.countdownCounter = `${this.addZeroBefore(days)}:${this.addZeroBefore(hours)}:${this.addZeroBefore(minutes)}:${this.addZeroBefore(seconds)}`;
                }
            }, 1000);
        }
    },
    created() {
        this.setCountdown();
    },

}
</script>

<template>

    <header id="to-the-top">
        <section id="header-top ">

            <div class="container mt-2">

                <div class="row justify-content-center align-items-center">

                    <div class="col-auto d-flex flex-grow align-items-center ">

                        <div  class="header-top-text ">
            
                            <small>
                                Starts TOMORROW! Our biggest event of the year... 
                            </small>
                            
                            <span>
                                <FontAwesomeIcon icon="fa-regular fa-clock " size="lg"/>
                            </span>

                            <span class="mx-2">
                                {{ countdownCounter }}
                            </span>
            
                        </div>
                        
                        <div class=" mx-2">
                            
                            <MyButton :text="'Get Ticket'" :btnclass="'primary'"/>
                            
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <section id="header-main">

            <div class="container py-3">

                <div class="row row-cols-3 justify-content-between align-items-center">

                    <div class="col-auto">

                        <div class="row align-items-center">

                            <div class="logo-container ">
                                <img src="../assets/img/dark-logo.png" class="img-fluid" alt="">
                            </div>

                        </div>
                        

                    </div>

                    <div class="col-auto">

                        <ul class="row row-cols-6 justify-content-between align-items-center my-0 ">
    
                            <li class="col-auto" v-for="(singleDropdown,i) in store.headerDropdowns" :key="i">
                               <HeaderDropdowns :dropdown="singleDropdown" :index="i"/>
                            </li>
    
                        </ul>
        
                    </div>

                    <div class="col-auto">

                        <div class="row align-items-center ">

                            <div class="col" v-for="(singleLink,i) in store.socialLinks" :key="i">

                                <a :href="singleLink.link">
                                    <FontAwesomeIcon :icon="singleLink.social" size="lg"/>
                                </a>
                            
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

#header-top{
    padding-top: 10px;
    background-color: #FBF9F6;

}

#header-main{
    .logo-container{
        height: 2rem;

        img{
            height: 100%;
        }
    }

    *{
        max-height: 100%;
    }
}
</style>