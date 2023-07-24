<script>
export default {
    name: "MainComponent",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <main>
        <section class="hero-section">
            
            <div class="my-overlay">

                <img src="../assets/img/shapes/artist-shape-02-768x415.png" alt="" class="hero-shape zero-two">
                <img src="../assets/img/shapes/artist-shape-01-600x577.png" alt="" class="hero-shape zero-one">
                <img src="../assets/img/hero/artist-hero-image-03-204x300.png"  alt="" class="hero-shape zero-three">

                <div class=" left img-group">

                    <img src="../assets/img/shapes/artist-shape-03.png" alt="" class="shape-zero-three">
                    <img src="../assets/img/hero/artist-hero-image-02.jpg" alt="" class=" artist zero-two">
                    <img src="../assets/img/hero/artist-hero-image-01.jpg" alt="" class="artist zero-one">

                </div>

                <div class="central-hero-text text-center ">

                    <div>

                        <h2>Hello, i'm Matin</h2>
    
                        <div>
                            <p> Artist coaching and mentoring</p>
                            <p>might be for you</p>
    
                            <div class="button">
                                <a href="#nogo">get started today</a>
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
        MAIN
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

.hero-section{
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
</style>