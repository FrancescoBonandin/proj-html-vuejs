<script>
export default {
    props:{
        singleProfile:Object,
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

    <div class="col card border-0 rounded-0">

        <h5 class="card-title px-3">
            {{ singleProfile.title }}
        </h5>

        <div class="card-body m-2">

            <div class="card-text">
                {{ singleProfile.text }}
            </div>

            <div class="card-info row justify-content-between align-items-center">

                <div class=" col-auto img-container rounded-circle">
                    <img class="rounded-circle" :src="getImagePath(singleProfile.image)" alt="">
                </div>

                <div class=" col info">

                    <div class="name">
                        {{ singleProfile.name }}
                    </div>

                    <div class="role">
                        / {{ singleProfile.role }}
                    </div>

                </div>
                
            </div>
            
        </div>
        
    </div>

</template>

<style lang="scss" scoped>

.card{
    cursor:pointer;
    max-width: calc(100% / 3.5);
    background-color: white;
    transform: scale(0.8);
    filter: opacity(0.6);
    transition: all ease-in-out 0.5s;
    
    &:hover{
        transform: scale(1);
        filter: opacity(1);
    }
    .card-body{

        

        .card-info{
    
            .img-container{
                width: 20%;
                overflow: hidden;
                img{
                    width: 100%;
                    object-fit: cover;
                }
    
            }
    
            .info{
                .role{
                    font-size: 0.8em;
                    color:gray;
                }
            }
        }

    }
}
</style>