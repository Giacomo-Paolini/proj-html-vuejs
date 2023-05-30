<script>
    export default {
        name: "AppJumbotron",
    }
</script>

<template>
    <div class="container-fluid my-bg">
        <div class="container">
            <div class="row">
                <div class="jumbotron text-center d-flex flex-column justify-content-center align-items-center">
                    <h2 class="display-4">BUILDING INSPIRING SPACES</h2>
                    <p class="lead">We build Residential & Commercial Spaces</p>
                    <div class="d-flex gap-3">
                        <button id="btnLeft">EXPLORE RECENT WORK</button>
                        <button id="btnRight">GET A QUOTE TODAY</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
@use '../styles/mixins.scss' as *;

    .container-fluid {
        background-image: url('../assets/images-construction/imagesPush/home-slider-62528242.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 40rem;
        .jumbotron {
            height: 40rem;
        }
        h2 {
            color: $white;
            font-weight: 600;
        }
        p {
            color: $yellow;
        }
        #btnLeft {
            @include button(15rem, 0.5rem, $deepGray, $white);
        }
        #btnRight {
            @include button(15rem, 0.5rem, $yellow, $deepGray);
        }
    }
</style>