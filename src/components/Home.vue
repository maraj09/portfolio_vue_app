<template>
    <div>
        <header id="header" ref="homeHeight" v-view="inHome">
            <div class="container">
                <div class="row center">
<!--                    <div class="col-md-1 col-xl-1">-->
<!--                        <i class="fas fa-quote-left text-danger"></i>-->
<!--                    </div>-->
<!--                    <div class="col-md-10 col-xl-10">-->
<!--                        <h1 class="bigheadline">The power of imagination makes us infinite.</h1>-->
<!--                        <span>- John Muir</span>-->
<!--                    </div>-->
                    <div class="col-md-12 col-xl-12 notepaper">
                        <figure class="quote" style="margin: 0;">
                            <blockquote class="curly-quotes" cite="" style="margin: 0;">
                                The power of imagination makes us infinite.
                            </blockquote>
                            <figcaption class="quote-by">— John Muir</figcaption>
                        </figure>
                    </div>
                    <div class="col-md-12 col-xl-12 text-center w-100" style="margin-top: 6rem;">
<!--                        <div class="">-->
                            <h1 class="bigheadline">Shamsiar Hamid</h1>
                            <h4 class="subheadline">Full Stack Web Developer</h4>
<!--                        </div>-->
                    </div>

                </div>
                <div class="bottom">
                    <a data-scroll href="#navigation" class="scrollDown animated pulse" id="scrollToContent"><i class="pe-7s-angle-down-circle pe-va"></i></a>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    methods: {
        home_height() {
            var height = this.$refs.homeHeight.clientHeight;
            this.$emit("home_height", height);
        },
        inHome() {
            this.$emit("inHome");
        },
    },
    mounted() {
        window.addEventListener("scroll", this.home_height);
    },
};
</script>

<style lang="scss" scoped></style>
