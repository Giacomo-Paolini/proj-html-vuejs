<script>
    export default {
        name: "AppSection3",
        data() {
            return {
                articles: [
                    {title: "Redeveloping Florida's Remote Southern Coast", date: "December 7th 2015", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!", image: '../../src/assets/images-construction/imagesPush/blog-post-134132600-600x362.jpg'},
                    {title: "How We Manage Large Construction Projects", date: "December 7th 2015", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!", image: '../../src/assets/images-construction/imagesPush/blog-post-92486644-600x362.jpg'},
                    {title: "Future proofing a modern home", date: "December 6th 2015", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!", image: '../../src/assets/images-construction/imagesPush/blog-post-332773904-600x362.jpg'},
                ],
                partners: [
                    {logo: "../src/assets/images-construction/imagesPush/home-logo11-219096700-320x202.png" },
                    {logo: "../src/assets/images-construction/imagesPush/home-logo10-219096700-320x202.png" },
                    {logo: "../src/assets/images-construction/imagesPush/home-logo2-219096700-320x202.png" },
                    {logo: "../src/assets/images-construction/imagesPush/home-logo1-219096700-320x202.png" },
                    {logo: "../src/assets/images-construction/imagesPush/home-logo9-219096700-320x202.png"},
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
                    <h3>Latest News</h3>
                    <div class="my-line my-4"></div>
                    <p class="my-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!</p>
                </div>
                <div class="d-flex justify-content-between">
                    <template v-for="card in articles">
                        <div class="my-card">
                            <img :src="card.image" class="img-fluid">
                            <div class="my-body-card d-flex flex-column justify-content-center align-items-center text-center">
                                <div class="d-flex justify-content-center">
                                    <a href="#"><i class="fa-solid fa-link my-icon-link"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass my-icon-search"></i></a>
                                </div>
                                <p class="my-4">Redeveloping Florida's Remote<br>Southern Coast</p>
                                <small>Architecture, Buildings, Construction, News</small>
                            </div>
                            <div class="p-5">
                                <h4 class="mt-2">{{ card.title }}</h4>
                                <p class="mt-2 text-color-gray"><small>{{ card.date }}</small></p>
                                <hr>
                                <p class="mt-4 text-color-gray">{{ "Technology is Here to Stay " + card.description }}</p>
                            </div>
                        </div>
                    </template>
                </div>
                <span class="d-flex justify-content-center my-5">
                    <button>VIEW ALL ARTICLES</button>
                </span>
            </div>
        </div>
        <div class="container">
            <div class="row my-margin-top">
                <div class="text-center">
                    <h3>Trusted Partners</h3>
                    <div class="my-line my-4"></div>
                    <p class="my-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-evenly mt-3 mb-3">
                    <div v-for="card in partners" class="d-flex flex-column my-card text-center align-items-center justify-content-center">
                        <div>
                            <img :src="card.logo" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
@use '../styles/mixins.scss' as *;

    .my-line {
        max-width: 12rem;
        height: 0.15rem;
        margin: 0 auto;
        color: $primary;
        background-color: lightgray;
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
    width: calc(100% / 3 - 1rem) ;
    position: relative;
    overflow: hidden;
        .my-body-card {
            position: absolute;
            width: 100%;
            height: 38%;
            padding: 2rem;
            left: 0;
            top: -100%;
            background-color: $card-hover;
            transition: 0.5s;
        }
        .my-icon-link {
            @include icon(1.4rem, 1.4rem);
            background-color: $deepGray;
            color: $primary;
            padding: 0.8rem;
            margin-right: 0.5rem;
        }
        .my-icon-search {
            @include icon(1.4rem, 1.4rem);
            background-color: $deepGray;
            color: $primary;
            padding: 0.8rem;
            margin-left: 0.5rem;
        }
    }
    .my-card:hover .my-body-card {
        top: 0;
    }

    .text-color-gray {
        color: $description;
    }

    a {
        color: $black;
        text-decoration: none;
        font-weight: 400;
    }
    a:hover {
        color: $primary;
        text-decoration: none;
    }
    
    button {
        @include button(15rem, 0.5rem, $primary, $black);
    }
    button:hover {
        background-color: $black;
        color: $white;
    }

</style>