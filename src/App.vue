<template>
    <div>
        <Home @home_height="getHeight" @inHome="markHome" />
        <!-- Navigation area Start -->
        <section id="navigation" :class="{ 'nav-wrap': isScroll }">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-5 col-sm-6 pt-sm-2 ">
                        <div class="logo text-xl-center  text-left text-sm-left ">
                            <a data-scroll href="#body" class="logo-text">Rashid</a>
                        </div>
                    </div>
                    <div class="col-sm-4 col-5 ">
                        <div class="mid-nav d-flex justify-content-center justify-content-sm-end mt-4">
                            <div class="cv mr-3 mr-sm-5">
                                <a href="">C.V</a>
                            </div>
                            <div class="resu">
                                <a href="">Resume</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 col-2 side_nav">
                        <nav>
                            <div @click="toggleMenu()" :class="{ 'burger--active': isClicked }" class="burger  ">
                                <!-- Add class for change burger symbol -->
                                <div class="burger__patty"></div>
                            </div>
                            <ul class="nav__list " :class="{ 'nav__list--active': isClicked }">
                                <li title="Home" class="nav__item">
                                    <a href="#1" :class="{ nav__link__active: isHome }" class="nav__link c-blue">
                                        <!-- Add class for see which  page  is open -->
                                        <img src="images/menu_img/home-icon.png" alt />
                                        <span class="tooltiptext">Home</span>
                                    </a>
                                </li>
                                <li title="About" class="nav__item">
                                    <a href="#2" :class="{ nav__link__active: isAbout }" class="nav__link c-yellow scrolly">
                                        <!-- Add class for see which  page  is open -->
                                        <img src="images/menu_img/about-icon.png" alt />
                                        <span class="tooltiptext">About</span>
                                    </a>
                                </li>
                                <li title="Projects" class="nav__item">
                                    <a href="#3" :class="{ nav__link__active: isExperience }" class="nav__link c-red">
                                        <!-- Add class for see which  page  is open -->
                                        <img src="images/menu_img/exp.png" alt />
                                        <span class="tooltiptext">Experience</span>
                                    </a>
                                </li>
                                <li title="Contact" class="nav__item">
                                    <a href="#4" :class="{ nav__link__active: isProject }" class="nav__link c-green">
                                        <!-- Add class for see which  page  is open -->
                                        <img src="images/menu_img/projects-icon.png" alt />
                                        <span class="tooltiptext">Projects</span>
                                    </a>
                                </li>
                                <li title="Contact" class="nav__item">
                                    <a href="#4" :class="{ nav__link__active: isSkill }" class="nav__link c-green">
                                        <!-- Add class for see which  page  is open -->
                                        <img src="images/menu_img/skill.png" alt />
                                        <span class="tooltiptext">Skills</span>
                                    </a>
                                </li>
                                <li title="Contact" class="nav__item">
                                    <a href="#4" :class="{ nav__link__active: isTestimonial }" class="nav__link c-green">
                                        <!-- Add class for see which  page  is open -->
                                        <img src="images/menu_img/testi.png" alt />
                                        <span class="tooltiptext">Testimonial</span>
                                    </a>
                                </li>
                                <li title="Contact" class="nav__item">
                                    <a href="#4" :class="{ nav__link__active: isContact }" class="nav__link c-green">
                                        <!-- Add class for see which  page  is open -->
                                        <img src="images/menu_img/contact-icon.png" alt />
                                        <span class="tooltiptext">Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <!-- Navigation area End -->
        <About/>
        <Experience @inExperience="markExperience" />
        <Portfolio @inProject="markProject" />
        <Skills @inSkill="markSkill"/>
        <Testimonial @inTesti="markTesti"/>
        <Contact @inContact="markContact"/>
    </div>
</template>

<script>
import Home from "./components/Home.vue";
import Experience from "./components/Experience.vue";
import Portfolio from "./components/Portfolio.vue";
import Skills from "./components/Skills.vue";
import Testimonial from "./components/Testimonial.vue";
import Contact from "./components/Contact.vue";
import About from './components/About.vue';
export default {
    components: {
    About,
        Contact,
        Testimonial,
        Skills,
        Portfolio,
        Experience,
        Home,
    },
    data() {
        return {
            isClicked: false,
            isScroll: false,
            home_height: "",
            isHome: true,
            isAbout: false,
            isExperience: false,
            isProject: false,
            isSkill: false,
            isTestimonial: false,
            isContact: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isClicked = !this.isClicked;
        },
        getHeight(value) {
            this.home_height = value;
        },
        ifScroll() {
            var scrollPosition = window.pageYOffset;
            if (scrollPosition >= this.home_height / 1.25) {
                this.isScroll = true;
            } else {
                this.isScroll = false;
            }
        },
        mark_nothing() {
            this.isHome = false;
            this.isAbout = false;
            this.isExperience = false;
            this.isSkill = false;
            this.isProject = false;
            this.isTestimonial = false;
            this.isContact = false;
        },
        markHome() {
            this.mark_nothing();
            this.isHome = true;
        },
        markAbout() {
            this.mark_nothing();
            this.isAbout = true;
        },
        markExperience() {
            this.mark_nothing();
            this.isExperience = true;
        },
        markProject() {
            this.mark_nothing();
            this.isProject = true;
        },
        markSkill() {
            this.mark_nothing();
            this.isSkill = true;
        },
        markTesti() {
            this.mark_nothing();
            this.isTestimonial = true;
        },
        markContact() {
            this.mark_nothing();
            this.isContact = true;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.ifScroll);
    },
};
</script>

<style scoped>
.nav__list--active {
    visibility: visible;
    margin-top: 84px;
}
.nav__link__active {
    background: #e43d34;
}
@media (max-width: 575px) {
    .nav__list--active {
        margin-top: 75px;
    }
}
</style>
