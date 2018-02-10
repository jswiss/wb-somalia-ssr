	<template>
    <div id="projects">
      <table-tabs></table-tabs>
      <div id="table">
        <!-- {{ projects }} -->
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { getProjectData } from '../helpers';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'locations',
  	components: {
  		TableTabs,
  	},
  	fetch: getProjectData,
  	computed: {
  		...mapState({
  			projects: state => state.projectsTable,
  		}),
  	},
  };
</script>

<style scoped>
  #projects {
  	margin-top: 5%;
  }
</style>
