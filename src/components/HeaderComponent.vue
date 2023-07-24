<script>
export default {
    name: "HeaderComponent",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>

    <header>
        <section id="header-top">

            <div class="container">

                <div class="row justify-content-center align-items-start">

                    <div class="col-auto d-flex flex-grow ">

                        <div class="header-top text ">
            
                            <span>
                                Starts TOMORROW! Our biggest event of the year... 
                            </span>
                
                            <span class="mx-2">
                                clock icon/ Days/Hours/Min/Seconds
                            </span>
            
                        </div>
            
                        <div class="custom-button mx-2">
            
                            <a href="#nogo">
                                get ticket
                            </a>
            
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <section class="header-main">

            <div class="container py-3">

                <div class="row row-cols-3 justify-content-between align-items-center">

                    <div class="col-auto">
                        
                        <div class="logo-container">
                            <img src="../assets/img/dark-logo.png" alt="">
                        </div>

                    </div>

                    <div class="col-auto">

                        <ul class="row justify-content-between align-items-center">
    
                            <li class="col-auto" v-for="x in 6">
                                text &DownArrow;
                            </li>
    
                        </ul>
        
                    </div>

                    <div class="col-auto">

                        <div class="row align-items-center ">

                            <div class="col">

                                tweet
                                FB 
                                IG 
                                LNKDN
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </header>
</template>

<style lang="scss" scoped>
</style>