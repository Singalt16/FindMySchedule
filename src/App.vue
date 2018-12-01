<template>
    <div id="app">
        <CourseSelect :courses="courses"/>
    </div>
</template>

<script>
    import CourseSelect from './components/CourseSelect.vue'

    export default {
        name: 'app',
        components: {
            CourseSelect
        },
        data() {
            return {
                courses: [
                    {
                        name: 'CSC220',
                        sections: [
                            {
                                name: "01",
                                instructor: "Sarah Pulimood",
                                meetTimes: [
                                    {
                                        days: [1, 5],
                                        start: 36000,
                                        end: 39600
                                    }
                                ]
                            },
                            {
                                name: "02",
                                instructor: "Michael Bloodgood",
                                meetTimes: [
                                    {
                                        days: [2, 4],
                                        start: 38000,
                                        end: 41600
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'CSC270',
                        sections: [
                            {
                                name: "01",
                                instructor: "Andrea Salgian",
                                meetTimes: [
                                    {
                                        days: [1, 5],
                                        start: 36000,
                                        end: 39600
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'HIS100',
                        sections: []
                    }
                ]
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
