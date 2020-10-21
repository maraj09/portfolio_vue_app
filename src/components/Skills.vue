<template>
    <div>
        <section class=" d-flex flex-column" id="skills" v-view="viewHandler">
            <div class="p-lg-5 p-3 skill-cover">
                <h3 class="text-center text-white">Coding Skills</h3>
                <div class="row text-center my-auto" v-if="show_skill">
                    <div class="col-md-3 col-sm-6">
                        <div class="skill-item">
                            <i class="fab fa-html5 fa-5x"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="85" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>HTML5</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="skill-item">
                            <i class="fab fa-css3 fa-5x"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="85" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>CSS3</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="skill-item">
                            <i class="fa fa-code fa-5x"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="85" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>JQuery</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="skill-item">
                            <i class="fa fa-globe fa-5x"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="85" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show_skill: false
        };
    },
    methods: {
        viewHandler() {
            this.$emit('inSkill');
            var scroll = window.pageYOffset;
            if (scroll > 100) {
                this.show_skill = true;
            }
        }
    },
    mounted() {
        // Auto Calling A method when scroll the page
    }
};
</script>

<style lang="scss" scoped></style>
