<script>
    export default {
        name: "AppSection1",
        data() {
            return {
                items: [
                    {title: "Buildings", icon: `<i class="fa-regular fa-building"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
                    {title: "Renovate", icon: `<i class="fa-solid fa-arrows-rotate"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
                    {title: "Construct", icon: `<i class="fa-solid fa-house"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
                    {title: "Exclusive", icon: `<i class="fa-solid fa-truck"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
                ]
            }
        }
    }
</script>

<template>
    <section>
        <div class="container-fluid bg-yellow">
            <div class="container text-center">
                <div class="row p-4">
                    <div class="mb-3">
                        <p>Do You Have A Construction Project We Can Help With?</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="centered-button">GET A FREE QUOTE</button>
        <div class="container">
            <div class="row">
                <div class="text-center my-margin-top mb-5">
                    <h3>Specialists In Modern Construction</h3>
                    <div class="my-yellow-line my-4"></div>
                    <p class="my-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!</p>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="d-flex justify-content-evenly mt-5 mb-5">
                    <div v-for="card in items" class="d-flex flex-column my-card text-center align-items-center justify-content-center">
                        <div class="circle-icon mb-3">
                            <span v-html="card.icon"></span>
                        </div>
                        <h4 class="mb-3">{{ card.title }}</h4>
                        <p>{{ card.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
@use '../styles/mixins.scss' as *;

    section {
        position: relative;
    }

    .centered-button {
        position: absolute;
        top: 16.6%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .bg-yellow {
        background-color: $yellow;
        p {
            font-size: 2rem;
            font-weight: 400;
        }
    }

    button {
        @include button(15rem, 0.5rem, $black, $white);
        border: 2px solid $white;
    }
    button:hover {
        background-color: $white;
        color: $black;
        border: 2px solid $black;
    }

    .my-margin-top {
        margin-top: 7rem;
    }

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

    .my-card {
        width: 20rem;
    }

    .circle-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid rgb(145, 145, 145);
        span {
            color: rgb(145, 145, 145);
        }
    }

</style>