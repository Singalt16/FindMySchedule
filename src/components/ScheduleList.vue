<template>
    <div class="schedule-list">
        <table v-for="schedule in schedules" class="schedule-course-table">
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
    </div>
</template>

<script>
    import {dayNumsToString, secondsTimeToString} from '../util.js';
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
            }
        }
    }
</script>

<style scoped>
    .schedule-list {
        padding: 0 200px 0 200px;
    }

    .meet-times {
        list-style-type: none;
    }
</style>