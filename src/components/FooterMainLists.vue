<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    components:{FontAwesomeIcon},
    props:{
        singleList:Object,
        index:Number
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
    
   <div  :class=" index==3? 'col':'col-auto'">

    <h4>
        {{ singleList.name }}
        <span v-if="index==3">
            {{ singleList.at }}
        </span>
    </h4>

    <ul v-if="index==0" >
        <li>
            {{ singleList.listItems.address }}
        </li>

        <li>
            {{ singleList.listItems.phone }} {{ singleList.listItems.callHours }}
        </li>

        <li>
            {{ singleList.listItems.supportMail }}
        </li>

        <li class="row row-cols-4 my-3">

            <div v-for="singleLink in singleList.listItems.links" class="col-auto">

                <a :href="singleLink.link">
                    <FontAwesomeIcon :icon="singleLink.social" size="lg"/>
                </a>

            </div>

        </li>
    </ul>

    <ul v-else-if="index > 0 & index < singleList.listItems.length-1" >
        
        <li v-for="singleItem in singleList.listItems">
            <a :href="singleItem.link">{{ singleItem.name }}</a>
        </li>

  
    </ul>

    <ul v-else-if="index == 3" class="row" >

        <li v-for="singleItem in singleList.listItems" class="col">
            <a :href="singleItem.link">
                <img :src="getImagePath(singleItem.image)" class="img-fluid" alt="">
            </a>
        </li>

  
    </ul>



   </div>
    
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

h4{
    span{
        color:$color-primary ;
    }
}
.col,.col-auto{

    ul{
        
        li,a{
            color: grey;
        }

        a:hover{
            color: $color-primary;
        }
    }
}

</style>