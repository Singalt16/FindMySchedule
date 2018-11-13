<template>
  <div id="app">
    <CourseSelect/>
  </div>
</template>

<script>
import CourseSelect from './components/CourseSelect.vue'

export default {
  name: 'app',
  components: {
    CourseSelect
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
