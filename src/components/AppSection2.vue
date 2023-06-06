<script>
    import {store} from '../data/store'

    export default {
        name: "AppSection2",
        data() {
            return {
                store,
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
                    <div class="my-line my-4"></div>
                    <p class="my-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!</p>
                </div>
                <div class="d-flex justify-content-between">
                    <template v-for="card in this.store.cardSection2">
                        <div class="my-card">
                            <img :src="card.image" class="img-fluid">
                            <div class="my-body-card d-flex flex-column justify-content-center align-items-center">
                                <div class="d-flex justify-content-center">
                                    <a href="#"><i class="fa-solid fa-link my-icon-link"></i></a>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass my-icon-search"></i></a>
                                </div>
                                <p class="my-4">Florida Health Facility</p>
                                <p>Commercial</p>
                            </div>
                        </div>
                    </template>
                </div>
                <span class="d-flex justify-content-center my-5">
                    <button>VIEW ALL PROJECTS</button>
                </span>
            </div>
        </div>
        <div class="container my-margin-top">
            <div class="row">
                <div class="text-center">
                    <h3>Our Core Values</h3>
                    <div class="my-line my-4"></div>
                    <p class="my-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-evenly mt-5 mb-5">
                    <div v-for="card in this.store.iconItems" class="d-flex flex-column my-card-icon text-center align-items-center justify-content-center">
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

    .my-line {
        max-width: 12rem;
        height: 0.13rem;
        margin: 0 auto;
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

    .my-card-icon {
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


    .my-card {
        width: calc(100% / 3 - 1rem) ;
        position: relative;
        overflow: hidden;
        .my-body-card {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 2rem;
            top: 0;
            right: -100%;
            background-color: $card-hover;
            transition: 0.5s;
        }
        .my-icon-link {
            @include icon(1.7rem, 1.7rem);
            background-color: $deepGray;
            color: $primary;
            padding: 0.8rem;
            margin-right: 0.5rem;
        }
        .my-icon-search {
            @include icon(1.7rem, 1.7rem);
            background-color: $deepGray;
            color: $primary;
            padding: 0.8rem;
            margin-left: 0.5rem;
        }
    }
    .my-card:hover .my-body-card {
        right: 0;
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