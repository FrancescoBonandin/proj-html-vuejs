<script>
export default {
    props:{
        element:Object,
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
    
    <div class="col card mx-auto border-0">
        
        <div class="card-img-top">
            <img :src="getImagePath(element.image)" class="img-fluid" alt="">
        </div>
    
        <div class="card-body align-items-start">
    
            <h4>
                {{element.title}}
            </h4>
    
            <p>
                {{ element.text }}
            </p>
    
        </div>
    
    </div>
    
</template>

<style lang="scss" scoped>



</style>