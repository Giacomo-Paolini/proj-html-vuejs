<script>
    export default {
        name: "AppCallToAction",
    }
</script>

<template>
    <div class="container-fluid mt-4">
        <div class="container">
            <div class="row">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="w-50">
                        <h3>Building Inspiring Spaces</h3>
                        <div class="my-line my-4"></div>
                        <p>Vivamus sed consectetur tellus dolor sit almet, consectetur adipiscing lorem elit sadip ipsum ets dicilis uns.</p>
                    </div>
                    <div>
                        <button>GET A FREE QUOTE</button>
                        <p class="text-center mt-3"><small>Only takes a few seconds!</small></p>
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
        background-image: url(../../src/assets/images-construction/imagesPush/about-call-to-action-57862405.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 85%;
        height: 30rem;
        color: $white;
        .row {
            height: 30rem;
        }
        .my-line {
            max-width: 12rem;
            height: 0.15rem;
            background-color: lightgray;
        }
        button {
            @include button(15rem, 0.5rem, $primary, $black);
        }
        button:hover {
            background-color: $deepGray;
            color: $white;
        }
    }
</style>