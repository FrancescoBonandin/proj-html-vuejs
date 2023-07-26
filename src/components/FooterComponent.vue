<script>
import FooterMainLists from './FooterMainLists.vue';
import MyButton from './MyButton.vue';
import {store} from '../store.js'

export default {
    components:{ FooterMainLists, MyButton },
    name: "FooterComponent",
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<template>
    <footer>

        <section id="footer-top">

            <div class="container my-4">

                <div class="row justify-content-center align-items-center">

                    <div class="col-5 text-end p-4">

                        <h3 class='display-6' >
                            Newsletter To Get <br> in Touch
                        </h3>

                    </div>

                    <div class="col-7 p-4">

                        <form  @submit.prevent="" action="">

                            
                            <div class="input-group mb-0">

                                <div class="form-floating">

                                    <input id="email" type="Email" class="form-control border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent " placeholder="your Email" aria-label="Your Email" aria-describedby="basic-addon1">
                                    <label for="email" class="bg-transparent border-0 rounded-0 fs-5"> Your e-mail</label>

                                </div>

                                <span @click="" class="fs-5 input-group-text border-top-0 border-start-0 border-end-0 rounded-0 bg-transparent " id="basic-addon1">&rightarrow;</span>
                            
                            </div>

                        </form>

                    </div>

                </div>

            </div>
            
        </section>

        <section id="footer-main" class="my-5">

            <div class="container my-3">

                <div class="row row-cols-4 justify-content-between">

                    <FooterMainLists v-for="(singleList,i) in store.footerInfo" :index="i" :singleList="singleList"/>
                
                </div>

                <div class="row justify-content-center">

                    <div class="col-auto copyright">

                        <small>

                            &copy;2020 MaxCoach.All Rights Reserved

                            <MyButton class="fixed-btn" :text="'&uparrow;'" :btnclass="'round'" :anchor="'#to-the-top'"/>

                        </small>

                    </div>

                </div>

            </div>

        </section>

    </footer>
</template>

<style lang="scss" scoped>
#footer-top{
    background-color: #244186;
    height:170px ;
    position: relative;
    &::before{
        position:absolute;
        display: block;
        width: 300px;
        height: 170px;
        top: 0;
        left: 0;
        z-index: 1;
        content: '';
        background-image: url('../assets/img/shapes/artist-shape-color-paint-top-left-300x170.png');
        background-repeat:no-repeat ;
    }
    &::after{
        position:absolute;
        display: block;
        width: 300px;
        height: 153px;
        bottom: 0;
        right: 0;
        z-index: 1;
        content: '';
        background-image: url('../assets/img/shapes/artist-shape-color-paint-bottom-right-300x153.png');
        background-repeat:no-repeat ;

    }

    .container{
        height: 100%;
        .row{
            height: 100%;

            *{
                color: white;
            }

            .col-5{
                h3{
                    font-family: 'Times New Roman', Times, serif;

                }
            }

            .col-7{
                form{
                    width: 70%;
                    .span{
                        cursor: pointer;
                    }
                }
            }
        }
    }

}

#footer-main{

    .copyright{
        margin-top: 3rem;
        padding: 0.5rem;
        color: grey;
    }

    .fixed-btn{
        position: fixed;
        z-index: 1;
        bottom: 20px;
        right: 20px;
        transform: translate(-50%,-50%);
    }
}

</style>