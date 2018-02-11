<template>
  <div id="locations" class="container is-fluid">
    <table-tabs></table-tabs>
    <div id="table">
      <no-ssr placeholder="...Loading...">
        <v-client-table
          :data="locationTable"
          :columns="columns"
          :options="options"
        >

      </v-client-table>
      </no-ssr>
    </div>
  </div>
</template>
  
<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { getLocationData } from '../helpers';
  import TableTabs from '~/components/TableTabs';
  import VClientTable from 'vue-bulma-tables-2';

  export default {
  	name: 'locations',
  	data() {
  		return {
  			options: {
  				saveState: true,
  				storage: 'local',
  				highlightMatches: true,
  			},
  		};
  	},
  	components: {
  		TableTabs,
  	},
  	fetch: getLocationData,
  	computed: {
  		...mapState({
  			locationTable: state => state.locationsTable,
  			columns: state => state.locationsTableColumns,
  		}),
  	},
  };
</script>
  