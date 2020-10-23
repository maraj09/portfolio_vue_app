<template>
    <div>
        <section id="testimonial" class="testimonial-area" >
            <div class="container">
                <div class="row" >
                <h2 class="col-12 block_title">Testimonials</h2>
                    <div class="col-xl-12"></div>
                    <carousel :items=1 :nav='false' id="testimonial-container" class="col-xl-12">
                        <div class="testimonila-block ">
                            <img  src="images/img//testimonial.jpg" alt="clients" class="selfshot" />
                            <p v-view="inTesti">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed mollitia illum! Molestiae dignissimos, hic dolorem et eius ut nobis. Corrupti totam amet aperiam
                                aut voluptate nobis dolor at soluta.
                            </p>
                            <strong>Habib Ur Rahman</strong>
                            <br />
                            <small>C.E.O</small>
                        </div>
                        <div class="testimonila-block">
                            <img src="images/img//testimonial2.jpg" alt="clients" class="selfshot" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed mollitia illum! Molestiae dignissimos, hic dolorem et eius ut nobis. Corrupti totam amet aperiam
                                aut voluptate nobis dolor at soluta.
                            </p>
                            <strong>Md Rabbu</strong>
                            <br />
                            <small>Project Manager</small>
                        </div>
                        <div class="testimonila-block">
                            <img src="images/img//testimonial3.jpg" alt="clients" class="selfshot" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed mollitia illum! Molestiae dignissimos, hic dolorem et eius ut nobis. Corrupti totam amet aperiam
                                aut voluptate nobis dolor at soluta.
                            </p>
                            <strong>Ohid Uz Zaman</strong>
                            <br />
                            <small>Developer</small>
                        </div>
                    </carousel>
                </div>
            </div>
        </section>
        <!-- testimonial -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel },
    methods: {
        inTesti() {
            this.$emit('inTesti')
        },
    },
};
</script>

<style lang="scss" scoped></style>
