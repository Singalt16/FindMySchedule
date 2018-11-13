<template>
  <div>
    <vue-select label="name" :options="courses"/>
  </div>
</template>

<script>
  import VueSelect from 'vue-select';
  import Vue from 'vue';
  Vue.component('v-select', VueSelect.VueSelect);

  export default {
    name: "course-select",
    props: {
      courses: {
        type: Array,
        default: []
      }
    },
    components: { VueSelect }
  }
</script>

<style scoped>
</style>