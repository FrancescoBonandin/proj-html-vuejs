
<script>
export default {
    props:{
        dropdown:Object,
        index:Number,
    },
    data() {
        return {
            
        }
    },
    methods:{

    }
}
</script>

<template>
    
    <div class="dropdown">

        <a class=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ dropdown .name }}
        </a>
      
        <ul class="dropdown-menu">

            <li v-for="(singlevoice,i) in dropdown.menuVoices ">
                <a class="dropdown-item" :href="singlevoice.anchor">
                    {{singlevoice.voice}}
                </a>
            </li>


        </ul>

    </div>
    
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;


</style>