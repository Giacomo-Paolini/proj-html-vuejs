import { reactive } from "vue";

export const store = reactive({
    navBar: [
        {label: "HOME", link: "#"},
        {label: "ABOUT", link: "#"},
        {label: "SERVICES", link: "#"},
        {label: "WORK", link: "#"},
        {label: "ARTICLES", link: "#"},
    ],
    cardSection1: [
        {title: "Buildings", icon: `<i class="fa-regular fa-building"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
        {title: "Renovate", icon: `<i class="fa-solid fa-arrows-rotate"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
        {title: "Construct", icon: `<i class="fa-solid fa-house"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
        {title: "Exclusive", icon: `<i class="fa-solid fa-truck"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
    ],
    itemBanner: [
        {title: "PLANNING APPLICATIONS", num: "3534", icon: `<i class="fa-solid fa-suitcase"></i>`},
        {title: "COMPLETED PROJECTS", num: "896", icon: `<i class="fa-regular fa-building"></i>`},
        {title: "TRAINED PROFESSIONALS", num: "172", icon: `<i class="fa-solid fa-users"></i>`},
        {title: "INTERNATIONAL OFFICES", num: "19", icon: `<i class="fa-solid fa-globe"></i>`},
    ],
    cardSection2: [
        {image: '../../src/assets/images-construction/imagesPush/project1-featured-294276386-600x600.jpg'},
        {image: '../../src/assets/images-construction/imagesPush/project2-featured-15013609-600x600.jpg'},
        {image: '../../src/assets/images-construction/imagesPush/project3-featured-189023420-600x600.jpg'},
    ],
    iconItems: [
        {style: "my-i-home", title: "Great Services", icon: `<i class="fa-solid fa-house"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
        {style: "my-i-gear", title: "Highest Standards", icon: `<i class="fa-solid fa-gear"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
        {style: "my-i-users", title: "Professional Team", icon: `<i class="fa-solid fa-users"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
        {style: "my-i-idea", title: "Creative Solutions", icon: `<i class="fa-regular fa-lightbulb"></i>`, description: "Quis autem vel eum iure reprederit qui in ea volupta e velit esse quam nihil molestiae consequatur."},
    ],
    stories: [
        {name: "HARRY SMITH - NEW HOME OWNER", story: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!", image: "../src/assets/images-construction/imagesPush/testimonial.jpg"},
        {name: "FRANCO - NEW HOME OWNER", story: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error asperiores dignissimos! Explicabo alias illo delectus beatae, necessitatibus reiciendis. Sequi ipsum reiciendis quod? Tempora et nisi iste. Fuga, nisi totam!", image: "../src/assets/images-construction/imagesPush/testimonial2.jpg"},
    ],
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
});