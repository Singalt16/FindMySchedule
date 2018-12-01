<template>
    <div>
        <label>{{courseInfo.name}}</label>
        <label>Sections</label>
        <div v-for="section in courseInfo.sections">
            <input type="checkbox">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'course',
        props: {
            courseInfo: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style scoped>

</style>