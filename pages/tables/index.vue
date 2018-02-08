<template>
  <div id="tables">
    Tables here
  </div>
</template>

<script>
  import {
  	getPooledData,
  	getEnvelopeData,
  	getProjectData,
  	getLocationData,
  } from '../helpers';
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
  	name: 'tables',
  	fetch: getProjectData,
  	computed: {
  		...mapState({
  			projects: state => state.projectsTable,
  		}),
  	},
  };
</script>
