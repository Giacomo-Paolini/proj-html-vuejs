<script>
    export default {
        name: "AppFooter",
    }
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="my-separator"></div>
            <div class="d-flex my-max-width">
                <div class="my-card">
                    <img src="../assets/images-construction/imagesPush/footer-logo.png" alt="">
                    <p class="my-4 my-color-description lh-lg">We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>
                    <button>LEARN MORE</button>
                </div>
                <div class="my-card">
                    <h4 class="mb-5">LATEST TWEETS</h4>
                    <div class="d-flex text-light">
                        <div class="col-2">
                            <img class="w-75 img-fluid rounded-circle" src="../assets/images-construction/imagesPush/3a74ce3d0532b7773b174c45ca3bd05a_normal.png" alt="">
                        </div>
                        <div class="col-10">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <div>
                                        <h6>ThemeFusion</h6>
                                        <small>@Theme_Fusion</small>
                                    </div>
                                </div>
                                <div class="my-container-icon">
                                    <a href="#"><img src="../assets/images-construction/imagesPush/image (1).svg" alt=""></a>
                                </div>
                            </div>
                            <p>Do you need sublime WordPress hosting for your next website? Take advantage of exclusive partner offers that we have secured just for you, & launch your site in seconds with <a href="#">#avada</a> on WP Engine hosting & get 30% Off this Black Friday <a href="#">bit.ly/3kjLLE2#BlackFriday2020</a></p>
                            <img class="img-fluid my-3" src="../assets/images-construction/imagesPush/En2TRxLW4AEiWUN.jpeg" alt="">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <a href="#"><img class="me-4" src="../assets/images-construction/imagesPush/image (2).svg" alt=""></a>
                                    <a href="#"><img src="../assets/images-construction/imagesPush/image (3).svg" alt=""></a>
                                </div>
                                <div>
                                    <small class="my-color-description">22h</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-card">
                    <h4 class="mb-5">CONTACT US TODAY</h4>
                    <ul class="fa-ul">
                        <li><span class="fa-li"><i class="fa-solid fa-globe"></i></span>Corporate Location<br>1600 Amphitheatre Parkway<br>London WC1 1BA</li>
                        <li><span class="fa-li"><i class="fa-solid fa-house-chimney"></i></span>Residential Location<br>9521 Broadsberry Avenue<br>Paddington RC7 9ZA</li>
                        <li><span class="fa-li"><i class="fa-solid fa-phone"></i></span>1.800.458.556 / 1.800.532.2112</li>
                        <li><span class="fa-li"><i class="fa-solid fa-envelope"></i></span>info@your-domain.com</li>
                        <li><span class="fa-li"><i class="fa-solid fa-clock"></i></span>Monday - Friday: 9:00 AM - 6:00 PM</li>
                        <li><span class="fa-li"><i class="fa-solid fa-clock"></i></span>Saturday - Sunday: 9:00 AM - 12:00 PM</li>
                    </ul>
                </div>
                <div class="my-card">
                    <h4 class="mb-5">FIND US</h4>
                    <a href="#"><img class="img-fluid" src="../assets/images-construction/imagesPush/map.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
@use '../styles/mixins.scss' as *;

    .container-fluid {
        background-color: #1E1E1E;
    }

    .my-separator {
        height: 0.8rem;
        background-color: $deepGray;
    }

    .my-max-width {
        max-width: 1920px;
        margin: 0 auto;
    }

    button {
            @include button(15rem, 0.5rem, $yellow, $black);
    }
    button:hover {
        background-color: $deepGray;
        color: $white;
    }

    .my-card {
        width: calc(100% / 4);
        padding: 4rem;
        h4 {
            color: $yellow
        }
        a {
            text-decoration: none;
        }
        li {
            color: $description;
            margin-bottom: 1rem;
            span {
                --fa-li-width: 4rem;
            }
        }
        .my-color-description {
            color: $description;
        }
    }

    .my-container-icon {
        width: 1.5rem;
    }
</style>