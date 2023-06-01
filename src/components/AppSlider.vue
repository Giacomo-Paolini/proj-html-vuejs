<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

    export default {
        name: "AppSlider",
        components: {
            Splide,
            SplideSlide,
        },
        data() {
            return {
                stories: [
                    {name: "HARRY SMITH - NEW HOME OWNER", story: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!", image: "../../src/assets/images-construction/imagesPush/home-testimonial-113165296.jpg"},
                    {name: "FRANCO - NEW HOME OWNER", story: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!", image: "../../src/assets/images-construction/imagesPush/home-testimonial-84268399.jpg"},
                ],
                splideOptions: {
                    arrows: false,
                }
            }
        }
    }
</script>

<template>
    <div class="container-fluid">
        <div class="curved-bands-top"></div>
        <div class="container">
            <div class="row d-flex align-items-center">
                <div>
                    <h3 class="text-center">Our Home Owners Say</h3>
                    <div class="my-line my-4"></div>
                    <Splide :options="splideOptions">
                        <SplideSlide class="my-slide">
                            <img :src="this.stories[0].image">
                            <p class="my-description text-center my-4"><em>{{ this.stories[0].story }}</em></p>
                            <p><strong>{{ this.stories[0].name }}</strong></p>
                        </SplideSlide>
                        <SplideSlide class="my-slide">
                            <img :src="this.stories[1].image">
                            <p class="my-description text-center my-4"><em>{{ this.stories[1].story }}</em></p>
                            <p><strong>{{ this.stories[1].name }}</strong></p>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
        <div class="curved-bands-bottom"></div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
@use '../styles/mixins.scss' as *;

    .container-fluid {
        background-image: url(../assets/images-construction/imagesPush/home-parallax-144609983.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 45rem;
        position: relative;
        padding: 0;
        .curved-bands-top {
            position: absolute;
            width: 100%;
            height: 6rem;
            background-color: $white;
            border-radius: 0 0 70% 70%;
        }
        .curved-bands-bottom {
            position: absolute;
            width: 100%;
            height: 6rem;
            bottom: -0px;
            background-color: $white;
            border-radius: 70% 70% 0 0;
        }
        .row {
            top: 0;
            height: 45rem;
        }
        h3 {
            color: $white;
        }
    }

    .my-line {
        max-width: 12rem;
        height: 0.15rem;
        margin: 0 auto;
        background-color: lightgray;
    }

    .my-description {
        margin-left: 15rem;
        margin-right: 15rem;
    }

    .my-slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: $white;
        img {
            width: 10rem;
            border-radius: 50%;
        }
    }

    .splide {
        height: 350px;
    }
</style>