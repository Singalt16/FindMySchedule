<template>
    <div>
        <div v-for="schedule in schedules">
            <ul>
                <li v-for="course in schedule">
                    {{course.course}} - {{course.section.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "schedule-list",
        props: {
            schedules: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>

</style>