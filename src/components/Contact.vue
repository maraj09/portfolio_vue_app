<template>
    <div>
        <section class="contact-section">
            <div class="container">
                <div class="row">
                    <div class=" col-12" id="contact">
                        <h3 class="block_title col-12">CONTACT ME</h3>
                    </div>
                    <div v-view="inContact" class="col-lg-6 contact-left pr-0">
                        <div class=" contact-left-header  d-flex justify-content-between mb-5">
                            <h2>Drop me a line</h2>
                            <img src="../../public/images/menu_img/mail-send (3).png" alt="" />
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Name is required">
                            <span class="label-input100">Enter Your Name</span>
                            <input class="input100" type="text" name="name" placeholder="Enter Your Name" />
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Eamil is required">
                            <span class="label-input100">Enter Your Email Address</span>
                            <input class="input100" type="email" name="email" placeholder="Enter Your Email" />
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Subject is required">
                            <span class="label-input100">Subject</span>
                            <input class="input100" type="text" name="Subject" placeholder="Enter The Topic" />
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Message is required">
                            <span class="label-input100">Message</span>
                            <textarea class="input100" name="message" placeholder="Your Message Here..."></textarea>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="mt-5">
                            <a href="">
                                <button class=" btn  btn-outline- send_btn btn-lg">Let Us Know <i class="fas fa-paper-plane"></i></button>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 pl-0 pr-0">
                        <div class=" contact-right">
                            <div class="contact-right-body">
                                <div class="contact-right-heading">
                                    <h2 class="text-center">More About Me</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugit, voluptatibus corporis debitis corrupti ab repellendus facere. Expedita cum velit officia iure voluptate facilis, quam quo impedit voluptatum sapiente quas.
                                    </p>
                                </div>
                                <div class="contact-right-content  text-white mt-5 ">
                                    <div class="mb-5">
                                        <h3><i class="fas fa-map-marker-alt fa-2x contact_icon"></i>Address</h3>
                                        <p>
                                            Sector-12, Road-12<br />
                                            Uttara, Dhaka <br />
                                        </p>
                                    </div>
                                    <div class="mb-5">
                                        <h3><i class="fa fa-phone cl-atlantis fa-2x contact_icon"></i> Phone</h3>
                                        <p>800 123 3456 <br />900 123 3457</p>
                                    </div>
                                    <div class="mb-5">
                                        <h3><i class="far fa-envelope fa-2x  contact_icon"></i> Email</h3>
                                        <address class="address-details-f">
                                            Fax: 800 123 3456 <br />
                                            Email: <a class="">md.marajrashid@gmail.com</a>
                                        </address>
                                    </div>
                                    <div class="">
                                        <ul class="d-flex  list-inline social-icon-f top-data">
                                            <li class="">
                                                <a href="https://www.facebook.com/" target="_empty"><i class="fab fa-2x top-social fa-facebook" style="color: #4267b2; border-color:#4267b2;"></i></a>
                                            </li>
                                            <li class="ml-5">
                                                <a href="#" target="_empty"><i class="fab fa-2x  top-social fa-twitter" style="color: #4AB3F4; border-color:#4AB3F4;"></i></a>
                                            </li>
                                            <li class="ml-5">
                                                <a href="#" target="_empty"><i class="fab fa-github fa-2x"  style="color: white"></i></a>
                                            </li>
                                            <li class="ml-5">
                                                <a href="#" target="_empty"><i class="fab fa-instagram fa-2x"  style="color: #833AB4"></i></a>
                                            </li>
                                        </ul>
                                    </div>
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
        inContact() {
            this.$emit("inContact");
        },
    },
};
</script>

<style lang="scss" scoped></style>
