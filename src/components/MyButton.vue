<script>
export default {
    props:{
        text:String,
        btnclass:String,
        anchor:{String,
                default:'#nogo'},
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>

    <div class="my-btn" :class=" btnclass">

        <a :href="anchor" class="btn-text">
            {{ text }}
        </a>

    </div>

    
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

.my-btn{

    border-radius: 0.6rem;
    a.btn-text{
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
        padding: 0.3rem 0.6rem;
        
        
    }
    &.primary{
        background-color:$button-primary;
        transition:all ease-in-out 0.3s;

        a.btn-text{
            color: white;
  
        }

        &:hover{
            background-color:$text-section-title;
        }
    }
    
    &.secondary{
        background-color:rgba( $button-primary, 0.2);
        transition:all ease-in-out 0.3s;
        
        a.btn-text{
            color: $button-primary;
  
        }

        &:hover{
            background-color:$button-primary;
            a.btn-text{
            color:white;
  
        }
        }
    }
    &.round{
        border-radius: 50%;
        background-color:$button-primary;
        opacity: 1;
        transition:all ease-in-out 0.3s;
        width: 50px;
        height: 50px;
        font-size: 40px;
        text-align: center;
        line-height: 50px;
        a.btn-text{
            color: white;
            padding: 0;
  
        }

        &:hover{
            background-color:$text-section-title;
        }
    }

}
</style>