<template>
    <div>
        <section id="about" class="about-area" >
            <div class="container">
                <div class="row">
                    <div class="col-12 about-content-header">
                        <h2 class="block_title">About Me</h2>
                    </div>
                    <div class="col-md-6 about-content-left" v-view="inAbout">
                        <div class=" d-flex justify-content-center">
                            <a class="img-link" href="">
                                <img class="portrait" src="/images/portrait_img/stand-5126363_1920.jpg"   alt="" />
                                <div class="portrait_frame"></div>
                            </a>
                        </div>
                    </div>
                    <div class=" col-md-6  about-content-right text-center  text-md-left mt-5 mt-md-0">
                        <vue-typed-js :strings="['Web Developer', 'Web Designer','Freelancer'] " :typeSpeed="100" :backSpeed="50" :loop="true" :cursorChar="'_'">
                            <h5>Hey, I'm Rashid & I'm a <span class=" span-typing d-block d-xl-inline mt-3 mt-md-0"><span class="typing"></span></span></h5>
                        </vue-typed-js>
                        <span class="about-desc"
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam quis error eveniet non, adipisci facilis animi atque distinctio magnam quia eius odit libero
                            aspernatur earum explicabo? Doloremque reiciendis voluptates id? Sapiente eligendi dicta vel voluptas? Quis distinctio sunt, ut ducimus, labore quaerat aspernatur velit
                            illo, fugiat saepe ad libero? </span
                        ><br />
                        <button class="btn  down_cv btn-lg mt-5 mt-md-4 ">Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        inAbout() {
            this.$emit("inAbout");
        },
    }
};
</script>

<style lang="scss" scoped></style>
