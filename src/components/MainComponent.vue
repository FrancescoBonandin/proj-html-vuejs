<script>
import MyButton from './MyButton.vue'
import BoxCards from './BoxCards.vue'
import CourseCards from './CourseCards.vue'
import ProfileCards from './ProfileCards.vue'
import BlogCards from './BlogCards.vue'
import EventCards from './EventCards.vue'
import {store} from '../store.js'

export default {
    name: "MainComponent",
    components:{
        MyButton,
        BoxCards,
        CourseCards,
        ProfileCards,
        BlogCards,
        EventCards,
    },
    data() {
        return {
            store,
            sliderCounter:0,
            clock:null
        }
    },
    methods: {

        startSlider(){

            this.clock = setInterval(() => {
                
                
                this.sliderCounter++

                if(this.sliderCounter==this.store.profiles.length){
                    this.sliderCounter=0
                }
                
            },2.5 * 1000);

        },

        stopSlider(){

            clearInterval(this.clock)
            
        }

    },
    mounted(){
        this.startSlider()
    }
}
</script>

<template>
    <main>
        <section id="hero-section">
            
            <div class="my-overlay">

                <img src="../assets/img/shapes/artist-shape-02-768x415.png" alt="" class="hero-shape zero-two">
                <img src="../assets/img/shapes/artist-shape-01-600x577.png" alt="" class="hero-shape zero-one">
                <img src="../assets/img/hero/artist-hero-image-03-204x300.png"  alt="" class="hero-shape zero-three">

                <div class=" left img-group">

                    <img src="../assets/img/shapes/artist-shape-03.png" alt="" class="shape-zero-three">
                    <img src="../assets/img/hero/artist-hero-image-02.jpg" alt="" class=" artist zero-two">
                    <img src="../assets/img/hero/artist-hero-image-01.jpg" alt="" class="artist zero-one">

                </div>

                <div class="central-hero-text text-center row justify-content-center">

                    <div class="col ">

                        <h2 class="display-4">Hello, i'm Matin</h2>
    
                        <div class="">
                            <h3 class="display-5 fw-semibold"> Artist coaching and mentoring</h3>
                            <h3 class="display-5 fw-semibold">might be for you</h3>
    
                        </div>

                        <div class="row justify-content-center mt-5">

                            <div class="col-auto">
    
                                <MyButton :text="'Get started today'" :btnclass="'primary'"/>
    
                            </div>

                        </div>
                        

                    </div>


                </div>

                <div class=" right img-group">
                    <img src="../assets/img/shapes/artist-shape-05.png" alt="" class="artist-shape-zero-five">
                    <img src="../assets/img/shapes/artist-shape-04.png" alt="" class="artist-shape-zero-four">
                    <img src="../assets/img/shapes/maxcoach-shape-12.png" alt="" class="artist-shape-twelve">
                    <img src="../assets/img/hero/artist-hero-image-04.jpg" alt="" class="artist zero-four">

                </div>
           
            </div>

        </section>
        
        <section id="artist-coaching">

            <div class="container">
                
                <div class="section-heading text-center my-5">
       
                    <h2 class="display-6  ">
                        Artist coaching
                    </h2>
        
                    <h3 class="">
                        I understand what it takes to create.
                    </h3>
        
                    <h3 class="">
                        I can help you with
                    </h3>

                </div>

                <div class="box-container row row-cols-4 flex-wrap justify-content-between align-items-center my-5">
    
                    <BoxCards  v-for="(singlecard,i) in store.boxImages" :key="i" :element="singlecard"/>

                </div>

                <div class="mentoring row  justify-content-between my-5">

                    <div class="col-6 left-col text-center">
               
    
                        <h3 class=" px-3 display-5 fw-semibold">
                            I coach and mentor visual artists, like you, to create like you mean it
            
                        </h3>

                        <h2 class='display-6'>
                            Martin Garrix
                        </h2>
                        
                    </div>

                    <div class="col-6 right-col">
                        <p class=" fs-5 fw-light">
                            As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action.
                            I help you back on track to being the productive, meaningfuland authenticartist you truly want to be.
                            I support artists in crafting and living creative lifes as well as feeling god about themselves and their art.
                            <br>
                            <br>
                            As an artist and an educator for nearly 30 years, i understand what it takes to create.
                        </p>

                        <div class="row">

                            <div class="col-auto">
                                
                                <MyButton :text="'Get started today'" :btnclass="'secondary'"/>

                            </div>

                        </div>
                    </div>

                </div>

                <div class="row justify-content-center">

                    <div class="col-auto">
           
                        <div class="video-container">
        
                            <img class="mx-auto d-block" src="../assets/img/artist-video-poster.jpg" alt="">
        
                            <div class="youtube-btn">
                                
                                <img src="../assets/img/icon-youtube-play.png"  alt="">
                                
                            </div>
        
                        </div>

                    </div>
                </div>

            </div>
            
        </section>

        <section id="testimonials-section" class="my-5">

            <div class="section-heading text-center my-5">
                
                <h2 class="display-6  ">
                    Testimonials
                </h2>

                <h3 class="display-6 fw-semibold">
                    Why do people love me?                
                </h3>

            </div>

 

            <div class="my-carousel " @mouseover="stopSlider()" @mouseout="startSlider()" >

                <div  class=" slider d-flex flex-nowrap ">

                    <div v-for="(profilesArr,i) in store.profiles" :key="i" class="card-container " >
                        
                        <div v-if="i==sliderCounter" class="row row-cols-3 mx-0 flex-wrap justify-content-around align-items-center g-2">
                            
                            <ProfileCards class="px-1"  v-for="(profile,index) in profilesArr" :single-profile="profile" :key="index"/>

                        </div>

                    </div>

                    <div class="indicator-container ">

                        <div @click="()=>{sliderCounter=i}" v-for="(profilesArr,i) in store.profiles" :key="i" :class=" i == sliderCounter ? 'active':''" class='indicator d-inline-block mx-1 align-middle rounded-circle'>
                        </div>

                    </div>
                    
                </div>

            </div>

        </section>

        <section id="course-shop">

            <div class="container">

                <div class="section-heading text-center my-5">
                    
                    <h2 class="display-6  ">
                        Artist Coaching
                    </h2>
    
                    <h3 class="display-6 fw-semibold">
                        Latest Online Courses                
                    </h3>
    
                </div>

                <div class="row flex-wrap row-cols-4 g-3 align-items-start">
                    <div v-for="(singleCourseCard,i) in store.courseCards" :key="i"  class="col p-3">
                        <CourseCards :singleCourse="singleCourseCard"/>
                    </div>
                </div>

                <div class="row justify-content-center">

                    <div class="col-auto py-2">

                        <MyButton :text="'View all courses &rightarrow;'" :btnclass="'secondary'"/>

                    </div>

                </div>


            </div>

        </section>

        <section id="blog-section">
            
            <div class="section-heading text-center my-5">
                    
                <h2 class="display-6  ">
                    Articles and Tips
                </h2>

                <h3 class="display-6 fw-semibold">
                    Latest From The Blog                
                </h3>
    
            </div>

            <div class="container my-4">

                <div class=" blogs row flex-wrap justify-content-around align-items-center gx-5">

                    <BlogCards v-for="(singleBlogPost,i) in store.blogPost" :key="i" :index='i' :singlePost="singleBlogPost"/>

                </div>

            </div>

            <div class="row justify-content-center g-1 py-1">

                <div class="col-auto ">

                    Get into Details now?

                </div>

                <div class="col-auto">
              
                    <a class="special-link" href="#nogo">
                        View all posts &rightarrow;
                    </a>

                </div>

            </div>

        </section>

        <section id="events-section">
            
            <div class="section-heading text-center my-5">
                    
                <h2 class="display-6  ">
                    Upcoming Events
                </h2>

                <h3 class="display-6 fw-semibold">
                    Let's Work Together
                </h3>
    
            </div>

            <div class="container">

                <div class="row row-cols-2 flex-wrap justify-content-between align-items-center">
                    <EventCards v-for="(singleEvent,i) in store.events" :key="i" :index="i" :singleSocialEvent="singleEvent" />
                </div>

            </div>

        </section>

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

h2{
    color: $text-section-title;

}

#hero-section{
    width: 100%;
    min-height: 80vh;
    background-color: #FBF9F6;

    .my-overlay{
        width: 100%;
        min-height: 80vh;
        position: relative;

        .hero-shape{
            position: absolute;

            &.zero-one{
                right:10%;
                top: 10%;
            }

            &.zero-two{
                left:0;
                top: 0;
            }
           
            &.zero-three{
                left: 22%;
                top: 50%;
            }

        }

        .central-hero-text{
            margin: 0 auto;
            width: calc(100% / 3);
            min-height: 80vh;
            position: relative;


            >*{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        
        .img-group{
            position: absolute;
            width: calc(100% / 3);
            min-height: 100%;

             img{
                position: absolute;
               &.artist{
                box-shadow: 0px 0px 10px 0px rgba($color: #000000, $alpha: 0.4);

               }
             }


            &.left{
                left: 0;
                top: 0;

                .shape-zero-three{
                    top: 20%;
                    left: 0;
                }

                .artist.zero-two{
                    top: 15%;
                    left:40%;
                }
                .artist.zero-one{
                    bottom: 10%;
                    left:15%;
                }

            }

            &.right{
                right: 0;
                top:0;
                overflow-x: hidden;
                .artist-shape-zero-four{
                    bottom: 49%;
                    left:59%;
                }
                .artist-shape-zero-five{
                    bottom: 3%;
                    left:33%;
                }
                .artist-shape-twelve{
                    bottom: 8%;
                    left:20%;
                }

                .artist.zero-four{
                    bottom: 10%;
                    left:15%;
                }
            }
        }

    }

}
    
#artist-coaching{
        
    .box-container{

        width: 100%;
        min-height:400px;

     
    }
    .mentoring{
        .left-col{

            position: relative;

            &::before{
                content: "";
                position:absolute;
                left: 50%;
                top: -2rem;
                transform: translateY(-50%);
                display: block;
                width: 50px;
                height: 50px;
                
                background-image: url('../assets/img/artist-quote-icon.png');
                background-repeat: no-repeat;
            }
        }

    }

    .video-container{
        width: 100%;
        position: relative;
        
        img{
            width: 100%;

        }
        .youtube-btn{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            filter: grayscale(100%);

            &:hover{
                filter:grayscale(0%)
            }
        }
    }


}

#testimonials-section{
    background-color: $page-background;
    .my-carousel{

        position: relative;
        .slider{
            width: 100%;
            // overflow-x: hidden;
            // .card-container{
            //     min-width: 100%;
            // }

        }

        .indicator-container{
            position: absolute;
            transform: translate(-50%,-50%);
            left: 50%;
            bottom:0;

            .indicator{
                width: 0.5rem;
                height: 0.5rem;
                background-color: #000000;
                opacity: 0.6;
                cursor: pointer;

                &.active{
                    opacity: 1;
                    width: 0.8rem;
                    height: 0.8rem;
                }
                
            }
        }

        
    }

}

// #course-shop{

// }

#blog-section{

    background-color: rgba($text-section-title, $alpha: 0.1);
    background-image: url('../assets/img/shapes/maxcoach-shape-03.png');
    background-repeat: no-repeat;
    background-position: center;
    .blogs{
        width: 100%;
        min-height: 700px;
    }

    a.special-link{
        display: block;
        color: $button-primary;
        border-bottom: 1px solid rgba($color: #333, $alpha: 0.4);

    }
}


</style>