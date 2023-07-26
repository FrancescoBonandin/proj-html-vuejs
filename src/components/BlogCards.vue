<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
    components: { FontAwesomeIcon },
    props:{
        singlePost:Object,
        index:Number
    },
    data() {
        return {

        }
    },
    methods: {
        getImagePath(path) {
            return new URL(path, import.meta.url).href;
        },
    }
}
</script>

<template>

    <div class="col">

        <div class="card mx-auto border-0" > 
            
          
            <img :src="getImagePath(singlePost.image)" class="img-fluid card-img-top" alt="">
            
        
            <div class="card-body px-2">
    
                <h4>
                    Artist
                </h4>
        
                <h4>
                    {{singlePost.title}}
                </h4>
        
                <div class="info row row-cols-2 flex-wrap align-items-center">
    
                    <div class="col">
    
                        <div>
                            
                            <FontAwesomeIcon  icon="fa-regular fa-calendar " size="lg"/>
    
                        </div>
    
                        <small>
    
                            {{ singlePost.date }} 
                        </small>
    
                    </div>
    
                    <div class="col">
    
                        <div>
    
                            <FontAwesomeIcon  icon="fa-regular fa-eye " size="lg"/>
    
                        </div>
    
                        <small>
    
                            {{ singlePost.views }} views
    
                        </small>
    
                    </div>
    
                </div>
        
            </div>
        
        </div>

    </div>


</template>

<style lang="scss" scoped>

.col,.col-auto{

    &:nth-child(1){
        align-self: flex-end;
    }

    &:nth-child(3){
        align-self: flex-start;

    }

    &:nth-child(odd){
        flex-grow: 1;
        .card{
                cursor: pointer; 
            .card-img-top{
                width: 100%;
                margin: 0 auto;

            }
    
            .card-body{
                background-color: white;
    
                h4{
                    font-size: large;
                    font-weight: normal;
    
                    &:first-child{
                        color: grey;
                    }
                }
    
                .info{
                    .col{
    
                        >*{
                            display: inline-block;
                            color: grey;

                            &:nth-child(2){
                                padding-left: 0.2rem;
                            }
                        }
    
                    }
                }
            }
        }
    }
    &:nth-child(2){
        flex-grow: 1.8;
        .card{
            cursor: pointer; 
            align-self: center;
            position: relative;
            .card-body{
                position: absolute;
                left: 0;
                bottom: 0;
                color: white;
                background-color: transparent;
                h4{
                    color: inherit;
                    &:first-child{
                        color: inherit;
                    }

                }

                .info{
                    .col{
                        >*{
                            display: inline-block;
                            color: inherit;

                            &:nth-child(2){
                                padding-left: 0.2rem;

                            }
                        }
                    }

                }
    
            }       
        }
    }
    
}

</style>