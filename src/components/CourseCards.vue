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
        
        <div class="card-body p-3 align-items-start">

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
                        
                        <font-awesome-icon  icon="fa-regular fa-file-lines "/>

                    </div>

                    <small>

                        {{ singleCourse.lessons }} lessons
                    </small>

                </div>

                <div class="col">

                    <div>

                        <font-awesome-icon  icon="fa-regular fa-user "/>

                    </div>

                    <small>

                        {{ singleCourse.students }} students

                    </small>

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
        
        background-color: white;
        position: relative;
        top:100%;
        left: 0%;
        border: 1px solid transparent;
        
        transition: all ease-in-out 0.5s;

        .card-text{
            min-height: 150px;
            max-height: 200px;
            h4{
                font-size: 1.3rem;
                
                
            }
            .price{
                color: $button-primary;
            }
            
        }
        
        
        .info{
            .col{

                >*{
                    display: inline-block;
                }

                small{
                    margin-left: 0.3rem;
                }

            }
        }
        
    }

    &:hover{
        height: 80%;
        .card-body{
            position: absolute;
            top: 80%;
            left: 0;
            border: 1px solid $button-primary;
        }
    }
}


</style>