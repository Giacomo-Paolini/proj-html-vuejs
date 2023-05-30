<script>
    export default {
        name: "AppNavbar",
        data() {
            return {
                navBar: [
                    {label: "HOME", link: "#"},
                    {label: "ABOUT", link: "#"},
                    {label: "SERVICES", link: "#"},
                    {label: "WORK", link: "#"},
                    {label: "ARTICLES", link: "#"},
                ]    
            }
        }
    }
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="p-4 d-flex justify-content-between align-items-center">
                <div>
                    <a href="#"><img src="../assets/images-construction/imagesPush/construction_logo.png" alt="logo"></a>
                </div>
                <div>
                    <ul class="d-flex align-items-center gap-4 list-style-none list-inline">
                        <li v-for="item in navBar">
                            <a :href="item.link" class="link-unstyled">{{ item.label }}</a>
                        </li>
                        <button><a>GET QUOTE</a></button>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
@use '../styles/mixins.scss' as *;

    a {
        color: $black;
        text-decoration: none;
        font-weight: 400;
    }
    a:hover {
        color: $yellow;
        text-decoration: none;
    }

    button {
        @include button(10rem, 0.5rem, $yellow, $black);
        border: none;
    }
    button:hover {
        background-color: $black;
        color: $white;
    }

</style>
