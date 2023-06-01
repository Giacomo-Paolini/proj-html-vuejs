<script>
    export default {
        name: "AppSection2",
        data() {
            return {
                cards: [
                    {image: '../../src/assets/images-construction/imagesPush/project1-featured-294276386-600x600.jpg'},
                    {image: '../../src/assets/images-construction/imagesPush/project2-featured-15013609-600x600.jpg'},
                    {image: '../../src/assets/images-construction/imagesPush/project3-featured-189023420-600x600.jpg'},
                ],
                items: [
                    {style: "my-i-home", title: "Great Services", icon: `<i class="fa-solid fa-house"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
                    {style: "my-i-gear", title: "Highest Standards", icon: `<i class="fa-solid fa-gear"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
                    {style: "my-i-users", title: "Professional Team", icon: `<i class="fa-solid fa-users"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
                    {style: "my-i-idea", title: "Creative Solutions", icon: `<i class="fa-regular fa-lightbulb"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
                ]
            }
        },
    }
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="text-center my-5">
                    <h3>Explore Recent Work</h3>
                    <div class="my-yellow-line my-4"></div>
                    <p class="my-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!</p>
                </div>
                <div class="d-flex justify-content-between">
                    <template v-for="card in cards">
                        <div class="my-image-card">
                            <img :src="card.image" class="img-fluid">
                        </div>
                    </template>
                </div>
                <span class="d-flex justify-content-center my-5">
                    <a href="#">VIEW ALL PROJECTS</a>
                </span>
            </div>
        </div>
        <div class="container my-margin-top">
            <div class="row">
                <div class="text-center">
                    <h3>Our Core Values</h3>
                    <div class="my-yellow-line my-4"></div>
                    <p class="my-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-evenly mt-5 mb-5">
                    <div v-for="card in items" class="d-flex flex-column my-card text-center align-items-center justify-content-center">
                        <div class="mb-3">
                            <span v-html="card.icon" :class="card.style"></span>
                        </div>
                        <h4>{{ card.title }}</h4>
                        <div class="my-little-line my-3"></div>
                        <p class="my-description-icon">{{ card.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
@use '../styles/mixins.scss' as *;

    .my-yellow-line {
        max-width: 12rem;
        height: 0.15rem;
        margin: 0 auto;
        color: $yellow;
        background-color: $yellow;
    }

    .my-description {
        margin-left: 15rem;
        margin-right: 15rem;
        color: $description;
    }

    .my-margin-top {
        margin-top: 10rem;
    }

    .my-card {
        width: 20rem;
        padding: 2rem;
        .my-i-home {
            @include icon(6rem, 6rem);
            background-color: #21A6B5;
            color: $white;
            font-size: 3rem;
        }
        .my-i-gear {
            @include icon(6rem, 6rem);
            background-color: #517AD2;
            color: $white;
            font-size: 3rem;
        }
        .my-i-users {
            @include icon(6rem, 6rem);
            background-color: #FE813E;
            color: $white;
            font-size: 3rem;
        }
        .my-i-idea {
            @include icon(6rem, 6rem);
            background-color: #84CB01;
            color: $white;
            font-size: 3rem;
        }
        .my-description-icon {
        color: $description;
    }
    }

    .my-little-line {
        width: 2rem;
        height: 0.15rem;
        background-color: lightgray;
    }


    .my-image-card {
        width: calc(100% / 3);
        padding: 1rem;
    }

    a {
        color: $black;
        text-decoration: none;
        font-weight: 400;
    }
    a:hover {
        color: $yellow;
        text-decoration: none;
    }

</style>