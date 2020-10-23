<template>
    <div>
        <section id="portfolio" class="portfolio-area">
            <div class="container">
                <h2 class="block_title">My Works</h2>
                <div class="row port cs-style-3">
                    <div class="col-12 col-md-6 col-lg-4 item-space" v-view="inProject">
                        <figure>
                            <img src="images/img/portfolio1.jpg" alt="img04" />
                            <figcaption>
                                <h3>Settings</h3>
                                <span>May 2020</span>
                                <a class="button modal_img" data-toggle="modal" data-target=".bd-example-modal-xl" data-work-name="Settings" data-img="images/img/portfolio1.jpg">Take a look</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 item-space">
                        <figure>
                            <img src="images/img/portfolio2.jpg" alt="img01" />
                            <figcaption>
                                <h3>Camera</h3>
                                <span>May 2020</span>
                                <a class="button modal_img" data-toggle="modal" data-target=".bd-example-modal-xl" data-work-name="Camera" data-img="images/img/portfolio2.jpg">Take a look</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 item-space">
                        <figure>
                            <img src="images/img/portfolio3.jpg" alt="img02" />
                            <figcaption>
                                <h3>Music</h3>
                                <span>May 2020</span>
                                <a class="button modal_img" data-toggle="modal" data-target=".bd-example-modal-xl" data-work-name="Music" data-img="images/img/portfolio3.jpg">Take a look</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 item-space">
                        <figure>
                            <img src="images/img/portfolio4.jpg" alt="img04" />
                            <figcaption>
                                <h3>Settings</h3>
                                <span>May 2020</span>
                                <a class="button modal_img" data-toggle="modal" data-target=".bd-example-modal-xl" data-work-name="Settings" data-img="images/img/portfolio4.jpg">Take a look</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 item-space">
                        <figure>
                            <img src="images/img/portfolio5.jpg" alt="img01" />
                            <figcaption>
                                <h3>Camera</h3>
                                <span>May 2020</span>
                                <a class="button modal_img" data-toggle="modal" data-target=".bd-example-modal-xl" data-work-name="Camera" data-img="images/img/portfolio5.jpg">Take a look</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 item-space">
                        <figure>
                            <img src="images/img//portfolio6.jpg" alt="img02" />
                            <figcaption>
                                <h3>Music</h3>
                                <span>May 2020</span>
                                <a class="button modal_img" data-toggle="modal" data-target=".bd-example-modal-xl" data-work-name="Music" data-img="images/img/portfolio6.jpg">Take a look</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="col-xl-12">
                        <div class="btn-center" id="skill"><a href="#skill" class="big button">Discover More</a></div>
                    </div>
                </div>
            </div>
            <!-- modal Start -->
            <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">My Projects</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body py-lg-5">
                            <div class="container">
                                <div class="row ">
                                    <div class="col-12 col-lg-7">
                                        <div class="left_modal   mb-4 mb-lg-0">
                                            <div class="left_modal_body d-flex justify-content-center ">
                                                <img id="my_image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-5">
                                        <div class="right_modal ">
                                            <div class="right_modal_body">
                                                <div class="right_modal_body_des mb-2 mb-lg-4  justify-content-center ">
                                                    <span>
                                                        Our new Project every processes had become fragmented; meaning quality and service were inconsistent. This lack of standardization was adversely
                                                        impacting operating costs, productivity and customer satisfaction. For several years now Payfast has worked strategically with innovations as a
                                                        means of developing new solutions, products and services. In line with this vision, Success was approached to find new payments solutions to
                                                        offer Payfast customers on their website, including open invoice and partial payments options.
                                                    </span>
                                                </div>
                                                <div class="right_modal_body_date">
                                                    <h3 class="modal_work_name" id="modal_work_name">Settings</h3>
                                                    <p class="text-white">Date : May 2020</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- modal End -->
        </section>
    </div>
</template>

<script>
import $ from "jquery";
//Jquery For Bootstrap Modal
$(document).on("click", ".modal_img", function() {
    var imgsrc = $(this).data("img");
    var work_name = $(this).data("work-name");
    $("#my_image").attr("src", imgsrc);
    $("#modal_work_name").text(work_name);
});
export default {
    methods: {
        inProject() {
            this.$emit("inProject");
        },
    },
};
</script>

<style scoped>
.modal-header {
    background: rgb(230, 72, 72);
    color: white;
    border-bottom: none;
}
.close {
    font-size: 40px;
    color: white;
    opacity: 1;
    margin-top: -18px;
}
.modal-title {
    font-size: 25px;
    font-weight: 600;
}
.modal-body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.750);
}
.modal-body {
    position: relative;
    background: url(/images/portrait_img/typewriter-5626841_1920.jpg);
    background-size: cover;
    background-position: bottom;
}
</style>
