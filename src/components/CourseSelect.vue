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
    import {dayNumsToString, secondsTimeToString} from '../util.js';
    import VueSelect from 'vue-select';
    import Vue from 'vue';
    Vue.component('v-select', VueSelect.VueSelect);

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
        components: { VueSelect },
        beforeMount() {
            for (let course of this.courses) {
                for (let section of course.sections) {
                    section.selected = true;
                }
            }
        },
        methods: {
            getDaysString(days) {
                return dayNumsToString(days);
            },
            getTimeString(start, end) {
                return secondsTimeToString(start, end);
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