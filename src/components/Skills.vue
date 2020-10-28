<template>
    <div>
        <section class=" d-flex flex-column" id="skills" v-view="viewHandler">
            <div class="p-lg-5 p-3 skill-cover">
                <h3 class=" container block_title text-white">Coding Skills</h3>
                <div class="row text-center my-auto" v-if="show_skill">
                    <div class="col-md-3 col-sm-6">
                        <div class="skill-item">
                            <i class="fab fa-html5 fa-5x skill_icon"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="95" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>HTML5</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="skill-item">
                            <i class="fab fa-css3 fa-5x skill_icon"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="90" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>CSS3</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="skill-item">
                            <i class="fab fa-bootstrap fa-5x skill_icon"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="87" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="skill-item">
                            <i class="fab fa-js fa-5x skill_icon"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="80" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>JavaScript & JQuery</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="skill-item">
                            <i class="fa fa-globe fa-5x skill_icon"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="85" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>PHP</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="skill-item">
                            <i class="fab fa-laravel fa-5x skill_icon"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="60" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>Laravel</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 skill_icon">
                        <div class="skill-item">
                            <i class="fab fa-vuejs fa-5x"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="75" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>Vue Js</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 skill_icon">
                        <div class="skill-item">
                            <i class="fas fa-database fa-5x"></i>
                            <h2>
                                <span >
                                    <number :from="0" :to="80" :duration="5" />
                                </span>
                                <span>%</span>
                            </h2>
                            <p>MySQL</p>
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
