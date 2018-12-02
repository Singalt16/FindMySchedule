<template>
    <div>
        <vue-select v-model="selectedCourses" label="name" :options="courses" multiple/>
        <div v-for="course in selectedCourses">
            <label>{{course.name}}</label>
            <div v-for="section in course.sections">
                <input type="checkbox" v-model="section.selected" v-on:change="updateSelection" checked>
                <label>Section: {{section.name}}</label>
                <div v-for="time in section.meetTimes">
                    <span>{{getDaysString(time.days)}}</span>
                    <span>{{getTimeString(time.start, time.end)}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueSelect from 'vue-select';
    import Course from './Course.vue';
    import Vue from 'vue';
    Vue.component('v-select', VueSelect.VueSelect);

    const secondsTo12HrClock = seconds => {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let AMorPM = (hours >= 12) ? 'PM' : 'AM';
        let hoursStr = (hours > 12) ? hours - 12 : hours;
        let minutesStr = (minutes > 10) ? minutes : '0' + minutes;

        return hoursStr + ':' + minutesStr + AMorPM;
    };

    const numToDay = day => {
        switch(day) {
            case 1: return "Mo";
            case 2: return "Tu";
            case 3: return "We";
            case 4: return "Th";
            case 5: return "Fr";
            case 6: return "Sa";
            case 7: return "Su";
            default: return "N/A";
        }
    };

    export default {
        name: 'course-select',
        props: {
            courses: {
                type: Array,
                default: () => []
            },
            selectedCourses: {
                type: Array,
                default: () => []
            },
            updateSelection: {}
        },
        components: { VueSelect, Course },
        beforeMount() {
            for (let course of this.courses) {
                for (let section of course.sections) {
                    section.selected = true;
                }
            }
        },
        methods: {
            getDaysString(days) {
                let str = "";
                for (let day of days) {
                    str += numToDay(day);
                }
                return str;
            },
            getTimeString(start, end) {
                return secondsTo12HrClock(start) + "-" + secondsTo12HrClock(end);
            }
        },
        watch: {
            selectedCourses: function () {
                this.updateSelection();
            }
        }
    }
</script>

<style scoped>
</style>