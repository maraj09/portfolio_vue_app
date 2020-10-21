<template>
    <div>
        <section class="resume-section p-3 p-lg-5 d-flex flex-column">
            <div class="container" >
                <div class="row my-auto" id="contact">
                    <div class="col-md-8 ">
                        <div class="contact-cont">
                            <h3>CONTACT Us</h3>
                            <div class="heading-border-light"></div>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                has a more-or-less normal distribution of letters, as opposed to using Content here.
                            </p>
                        </div>
                        <div v-view="inContact" class="row con-form">
                            <div class="col-md-12">
                                <input type="text" name="full-name" placeholder="Full Name" class="form-control" />
                            </div>
                            <div class="col-md-12">
                                <input type="text" name="email" placeholder="Email Id" class="form-control" />
                            </div>
                            <div class="col-md-12">
                                <input type="text" name="subject" placeholder="Subject" class="form-control" />
                            </div>
                            <div class="col-md-12"><textarea name="" id=""></textarea></div>
                            <div class="col-md-12 sub-but"><button class="btn btn-primary btn-lg px-4" role="button">Send</button></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 mt-5 pl-5 ">
                        <div class="contact-cont2">
                            <div class="contact-add contact-box-desc">
                                <h3><i class="fas fa-map-marker-alt fa-2x contact_icon"></i>Address</h3>
                                <p>
                                    25, Dist town Street, Logn <br />
                                    California, US <br />
                                </p>
                            </div>
                            <div class="contact-phone contact-side-desc contact-box-desc">
                                <h3><i class="fa fa-phone cl-atlantis fa-2x contact_icon"></i> Phone</h3>
                                <p>800 123 3456 <br />900 123 3457</p>
                            </div>
                            <div class="contact-mail contact-side-desc contact-box-desc">
                                <h3><i class="far fa-envelope fa-2x  contact_icon"></i> Email</h3>
                                <address class="address-details-f">
                                    Fax: 800 123 3456 <br />
                                    Email: <a href="mailto:info@themsbit.com" class="">info@themsbit.com</a>
                                </address>
                                <ul class="list-inline social-icon-f top-data">
                                    <li>
                                        <a href="#" target="_empty"><i class="fab fa-2x top-social fa-facebook" style="color: #4267b2; border-color:#4267b2;"></i></a>
                                    </li>
                                    <li class="pl-3">
                                        <a href="#" target="_empty"><i class="fab fa-2x  top-social fa-twitter" style="color: #4AB3F4; border-color:#4AB3F4;"></i></a>
                                    </li>
                                    <li class="pl-3">
                                        <a href="#" target="_empty"><i class="fab fa-2x  top-social fa-google-plus" style="color: #e24343; border-color:#e24343;"></i></a>
                                    </li>
                                </ul>
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
        inContact() {
            this.$emit("inContact");
        },
    },
};
</script>

<style lang="scss" scoped></style>
