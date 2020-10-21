<template>
    <div>
        <section  class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards" >
            <div class="container pt-5">
                <div class="row my-auto">
                    <div class="col-12">
                        <h2 class="  text-center">Experience</h2>
                        <div class="mb-5 heading-border"></div>
                    </div>
                    <div class="main-award" id="award-box">
                        <div class="award">
                            <div class="award-icon"></div>
                            <div class="award-content " style="border-color:#39b3ff;">
                                <div class="award-content-date mb-2">
                                    <span>December 2018 </span>
                                </div>
                                <div class="award-content-header">
                                    <h4 class="mb-3"><i class="fas fa-globe-asia mr-3 "></i> Senior Web Developer</h4>
                                </div>
                                <div class="award-content-body">
                                    <p>
                                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
                                        Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="award" v-view="inExperience">
                            <div class="award-icon"></div>
                            <div class="award-content" style="border-color: #ffc107;">
                                <div class="award-content-date mb-2">
                                    <span>December 2018 </span>
                                </div>
                                <div class="award-content-header">
                                    <h4 class="mb-3"><i class="fa fa-laptop mr-3 "></i> Web Developer</h4>
                                </div>
                                <div class="award-content-body">
                                    <p>
                                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
                                        Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="award" >
                            <div class="award-icon"></div>
                            <div class="award-content" style="border-color: #28a745;">
                                <div class="award-content-date mb-2">
                                    <span>December 2018 </span>
                                </div>
                                <div class="award-content-header">
                                    <h4 class="mb-3"><i class="fa fa-camera  mr-3 "></i> Junior Web Designer</h4>
                                </div>
                                <div class="award-content-body">
                                    <p>
                                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
                                        Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="award">
                            <div class="award-icon"></div>
                            <div class="award-content" style="border-color: rgb(212, 0, 255)">
                                <div class="award-content-date mb-2">
                                    <span>December 2018 </span>
                                </div>
                                <div class="award-content-header">
                                    <h4 class="mb-3"><i class="fas fa-chart-area mr-3 "></i> Web Design Intern</h4>
                                </div>
                                <div class="award-content-body">
                                    <p>
                                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
                                        Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        inExperience() {
            this.$emit('inExperience')
        }
    },
};
</script>

<style lang="scss" scoped></style>
