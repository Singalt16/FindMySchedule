<template>
    <div id="app">
        <CourseSelect :courses="courses" :selected-courses="selectedCourses" :update-selection="updateSelection"/>
        <button v-on:click="findSchedules">Find Schedules</button>
        <vue-tabs>
            <v-tab title="1">
                Content
            </v-tab>
            <v-tab title="2">
                No Content
            </v-tab>
        </vue-tabs>
    </div>
</template>

<script>
    import CourseSelect from './components/CourseSelect.vue';
    import {VueTabs, VTab} from 'vue-nav-tabs';
    import 'vue-nav-tabs/themes/vue-tabs.css'

    function meetTimesOverlap(m1, m2) {
        for (let day1 of m1.days) {
            for (let day2 of m2.days) {
                if (day1 === day2) {
                    if (m1.end > m2.start && m2.end > m1.start) return true;
                }
            }
        }
        return false;
    }

    function sectionsOverlap(s1, s2) {
        for (let meetTime1 of s1.meetTimes) {
            for (let meetTime2 of s2.meetTimes) {
                if (meetTimesOverlap(meetTime1, meetTime2)) return true;
            }
        }
        return false;
    }

    function timeConflict(combo) {
        for (let i = 0; i < combo.length - 1; i++) {
            for (let j = i + 1; j < combo.length; j++) {
                if (sectionsOverlap(combo[i].section, combo[j].section)) return true;
            }
        }
        return false;
    }

    function allCombos(sections) {
        if (sections.length < 1) return sections;
        let combinations = sections[0].map(x => [x]);
        for (let i = 1; i < sections.length; i++) {
            let tmp = [];
            for (let j = 0; j < sections[i].length; j++) {
                for (let combo of combinations) {
                    tmp.push([...combo, sections[i][j]])
                }
            }
            combinations = tmp;
        }
        return combinations;
    }

    export default {
        name: 'app',
        components: {
            CourseSelect,
            VueTabs,
            VTab
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
                ],
                selectedCourses: [],
                refactorThisName: []
            }
        },
        methods: {
            updateSelection: function() {
                this.refactorThisName = this.selectedCourses.map(c => {
                    let course = Object.assign({}, c);
                    course.sections = c.sections.filter(s => s.selected);
                    return course;
                });
            },
            findSchedules: function() {
                let sections = this.refactorThisName.map(
                    c => c.sections.map(
                        s => {return {course: c.name, section: s}}
                    )
                );
                let combos = allCombos(sections);
                let filteredCombos = combos.filter(c => !timeConflict(c));
                console.log(filteredCombos);
                return filteredCombos;
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