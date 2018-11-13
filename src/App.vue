<template>
  <div id="app">
    <CourseSelect :courses="courses"/>
    <button v-on:click="test()"></button>
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
              }
            ]
          },
          {
            name: 'CSC270',
            sections: []
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
