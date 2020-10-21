<template>
    <div>
        <header id="header" ref="homeHeight" v-view="inHome">
            <div class="container">
                <div class="center">
                    <i class="fas fa-quote-left text-danger "></i>
                    <h1 class="bigheadline mt-md-5">The power of imagination makes us infinite.</h1>
                    <span>- John Muir</span>
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
