	<template>
    <div id="pools">
      <table-tabs></table-tabs>
      <div id="table">
        {{ pools }}
      </div>
    </div>
  </template>

  <script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { getPooledData } from '../helpers';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'pooled',
  	components: {
  		TableTabs,
  	},
  	computed: {
  		...mapState({
  			pools: state => state.pooledTable,
  			columns: state => state.pooledTableColumns,
  		}),
  	},
  };
</script>
