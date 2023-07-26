<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    components: { FontAwesomeIcon },
    props: {
        singleCourse: Object,
    },
    data() {
        return {
            
        }
    },
    methods: {
        getImagePath(path) {
            return new URL(path, import.meta.url).href;
        },
    },
}
</script>

<template>

    <div class="col card mx-auto border-0">
        
        <div class="card-img-top">
            <img :src="getImagePath(singleCourse.image)" class="img-fluid" alt="">
        </div>
        
        <div class="card-body p-2 align-items-start">

            <div class="content-container">

                <div class="card-text">
    
                    <h4 class="price">
                        ${{singleCourse.price}}
                    </h4>
            
                    <h4>
                        {{ singleCourse.courseName }}
                    </h4>
    
                </div>
        
    
                <div class="info row flex-wrap align-items-center">
    
                    <div class="col">
    
                        <div>
                            
                            <FontAwesomeIcon  icon="fa-regular fa-file-lines " size="lg"/>
    
                        </div>
    
                        <small>
    
                            {{ singleCourse.lessons }} lessons
                        </small>
    
                    </div>
    
                    <div class="col">
    
                        <div>
    
                            <FontAwesomeIcon  icon="fa-regular fa-user " size="lg"/>
    
                        </div>
    
                        <small>
    
                            {{ singleCourse.students }} students
    
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
    cursor: pointer;
    .card-img-top{
        width: 100%;
        img{
            width: 100%;
        }
    }
    
    .card-body{
        min-height:210px;
        .content-container{
            width: 100%;
            background-color: white;
            position: relative;
            top:60%;
            left: 0%;
            border: 1px solid transparent;
            
            transition: all ease-in-out 0.5s;

        }

        .card-text{
            min-height: 100px;
            max-height: 150px;
            padding:5px;
            h4{
                font-size: 1.3rem;
                
                
            }
            .price{
                color: $color-primary;
            }
            
        }
        
        
        .info{
            .col{
            
                >*{
                    display: inline-block;
                    padding: 5px;
                }

                small{
                    margin-left: 0.3rem;
                }

            }
        }
        
    }

    &:hover{
        .content-container{
            position: absolute;
            
            top: 50%;
            left: 0;
            border: 1px solid $color-primary;
        }
    }
}


</style>