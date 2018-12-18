<template>
    <div class="schedule-list">
        <div v-for="schedule in schedules" class="schedule">
            <table class="schedule-course-table">
                <tr>
                    <th>Course</th>
                    <th>Section</th>
                    <th>Instructor</th>
                    <th>Meeting Times</th>
                </tr>
                <tr v-for="course in schedule">
                    <td>
                        {{course.course}}
                    </td>
                    <td>
                        {{course.section.name}}
                    </td>
                    <td>
                        {{course.section.instructor}}
                    </td>
                    <td>
                        <ul class="meet-times">
                            <li v-for="time in course.section.meetTimes">
                                    <span>
                                    {{getDaysString(time.days)}}
                                </span>
                                <span>
                                    {{getTimeString(time.start, time.end)}}
                                </span>
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>
            <button v-on:click="displayCalendar(schedule)" class="display-calendar-button">
                calendar view
            </button>
        </div>
    </div>
</template>

<script>
    import {dayNumsToString, secondsTimeToString, militaryTime} from '../util.js';
    export default {
        name: "schedule-list",
        props: {
            schedules: {
                type: Array,
                default: []
            }
        },
        methods: {
            getDaysString(days) {
                return dayNumsToString(days);
            },
            getTimeString(start, end) {
                return secondsTimeToString(start, end);
            },
            displayCalendar(schedule) {
                let events = [];
                schedule.forEach(course => {
                    course.section.meetTimes.forEach(m => {
                        let title = course.course + "-" + course.section.name;
                        let start = militaryTime(m.start);
                        let end = militaryTime(m.end);
                        let dow = m.days;
                        events.push({
                            title: title,
                            start: start,
                            end: end,
                            dow: [dow]
                        });
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .schedule-list {
        padding: 0 200px 0 200px;
    }

    .schedule {
        border: 5px #dedec8	inset;
        background-color: beige;
        padding: 20px;
    }

    .display-calendar-button {

    }

    .meet-times {
        list-style-type: none;
    }
</style>