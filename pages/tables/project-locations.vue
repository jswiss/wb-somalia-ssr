<template>
  <div id="locations" class="container is-fluid">
    <table-tabs></table-tabs>
    <div id="table" class="columns">
      <div class="column is-1"></div>
      <div class="column is-10 buffer">
        <h1 class="title">Projects by Location and Year</h1>
          <v-client-table
              :data="projectLocationTable"
              :columns="columns"
              :options="options"
            >
              <template slot="Value" slot-scope="props">
                <div>
                  ${{ props.row['Value'] | currency }}
                </div>
              </template>
            </v-client-table>
      </div>
      <div class="column is-1"></div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import axios from 'axios';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'locations',
  	data() {
  		return {
  			columns: [
  				'Location',
  				'Project Title',
  				'NDP Pillar',
  				'Sector',
  				'Year',
  				'Value',
  			],
  			options: {
  				saveState: true,
  				highlightMatches: true,
  				storage: 'local',
  				filterable: [
  					'Location',
  					'Year',
  					'Project Title',
  					'NDP Pillar',
  					'Sector',
  				],
  			},
  		};
  	},
  	components: {
  		TableTabs,
  	},
  	computed: {
  		...mapState({
  			projectLocationTable: state => state.projectLocationTable,
  		}),
  	},
  };
</script>

<style scoped>
  label.label,
  div.control {
  	text-align: left;
  }
  #table {
  	margin-top: 2%;
  }
  .center {
  	text-align: center;
  }
</style>

<style scoped>
  #table {
  	overflow: auto;
  }
</style>
