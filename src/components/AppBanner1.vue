<script>
    export default {
        name: "AppBanner1",
        data() {
            return {
                items: [
                    {title: "PLANNING APPLICATIONS", num: "3534", icon: `<i class="fa-solid fa-suitcase"></i>`},
                    {title: "COMPLETED PROJECTS", num: "896", icon: `<i class="fa-regular fa-building"></i>`},
                    {title: "TRAINED PROFESSIONALS", num: "172", icon: `<i class="fa-solid fa-users"></i>`},
                    {title: "INTERNATIONAL OFFICES", num: "19", icon: `<i class="fa-solid fa-globe"></i>`},
                ]
            }
        }
    }
</script>

<template>
    <div class="container-fluid">
        <div class="curved-bands-top"></div>
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="my-card d-flex flex-column" v-for="card in items">
                    <span v-html="card.icon" class="my-icon-size"></span>
                    <span class="my-number-size">{{ card.num }}</span>
                    <p>{{ card.title }}</p>
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
        background-image: url(../../src/assets/images-construction/imagesPush/home-244125289.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 30rem;
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
            height: 30rem;
        }
        .my-card {
            text-align: center;
            width: calc(100% / 4);
            color: $yellow;
            .my-icon-size {
                font-size: 4rem;
            }
            .my-number-size {
                margin-top: -1rem;
                font-size: 3rem;
                font-weight: 500;
            }
            p {
                color: $white;
            }
        }
    }



</style>