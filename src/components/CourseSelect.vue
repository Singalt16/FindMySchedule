<template>
  <div>
    <vue-select :options="options"/>
  </div>
</template>

<script>
  import VueSelect from 'vue-select';
  import Vue from 'vue';
  Vue.component('v-select', VueSelect.VueSelect);

  let items = [1, 2, 3];
  export default {
    name: "course-select",
    data: function() {
      return {
        options: items
      }
    },
    components: { VueSelect }
  }
</script>

<style scoped>
</style>