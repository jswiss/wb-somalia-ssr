	<template>
    <div id="locations">
      <table-tabs></table-tabs>
      <div id="table">
        {{ locations }}
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { getLocationData } from '../helpers';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'locations',
  	components: {
  		TableTabs,
  	},
  	fetch: getLocationData,
  	computed: {
  		...mapState({
  			locations: state => state.locationsTable,
  		}),
  	},
  };
</script>
  