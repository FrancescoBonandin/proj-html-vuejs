<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    components: { FontAwesomeIcon },
    props:{
        singleSocialEvent:Object,
        index:Number,
    },
    data() {
        return {

        }
    },
    methods: {
        
        getImagePath(path){

            return new URL(path, import.meta.url).href

        },

    }
}
</script>

<template>

    <div class="col py-3">

        <div class=" card border-0">

            <div class="row row-cols-2 align-items-center">

                <div class="col img-container " :class="index <= 1 ? 'order-0':'order-1'">
                    <img :src="getImagePath(singleSocialEvent.image)" class="" alt="">
                </div>
            
                <div class="col card-body p-0" :class="index > 1 ? 'order-0 text-end ':'order-1'">
    
                    <h5 >
                        {{ singleSocialEvent.date }}
                    </h5>
            
                    <h4>
                        {{singleSocialEvent.title}}
                    </h4>
                    
                    <div>

                        <span>

                            <FontAwesomeIcon class="mx-1" icon=" fa-solid fa-location-dot" size="lg"/>

                        </span>

                        <small>
                            {{ singleSocialEvent.location }}
                        </small>

                    </div>
            
                </div>

            </div>
            
        
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

.card{

    .row{
        .col{

            &.img-container{
    
                img{
                    display: block;
                    margin: 0 auto;
                }
    
                
            }
            &.card-body{
                min-width: 250px;

                div:last-child,h5:first-child{
                  color: grey;
                }

            }
        }

    }
}



</style>