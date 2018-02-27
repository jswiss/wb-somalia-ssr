<template>
  <div id="locations" class="container is-fluid">
    <table-tabs></table-tabs>
    <div id="table" class="columns">
      <div class="column is-1"></div>
      <div class="column is-10 buffer">
        <h1 class="title">Number of Projects and Total Project Disbursements by Year and Location</h1>
          <v-client-table
              :data="locationTable"
              :columns="columns"
              :options="options"
            >
              <template slot="2016 Total Disbursements" slot-scope="props">
                <div>
                  ${{ props.row['2016 Total Disbursements'] | currency }}
                </div>
              </template>
              <template slot="2017 Total Disbursements" slot-scope="props">
                <div>
                  ${{ props.row['2017 Total Disbursements'] | currency }}
                </div>
              </template>
              <template slot="2018 Total Disbursements" slot-scope="props">
                <div>
                  ${{ props.row['2018 Total Disbursements'] | currency }}
                </div>
              </template>
              <template slot="Number of Projects Trend" slot-scope="props">
                <div>
                  <trend :data="[props.row['2016 Count of Projects'], props.row['2017 Count of Projects'], props.row['2018 Count of Projects'] ]" auto-draw smooth></trend>
                </div>
              </template>
              <template slot="Total Disbursements by Location Trend" slot-scope="props">
                <div>
                  <trend :data="[props.row['2016 Total Disbursements'], props.row['2017 Total Disbursements'], props.row['2018 Total Disbursements'] ]" auto-draw smooth></trend>
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
  				'2016 Count of Projects',
  				'2017 Count of Projects',
  				'2018 Count of Projects',
  				'2016 Total Disbursements',
  				'2017 Total Disbursements',
  				'2018 Total Disbursements',
  				'Number of Projects Trend',
  				'Total Disbursements by Location Trend',
  			],
  			options: {
  				saveState: true,
  				highlightMatches: true,
  				storage: 'local',
  			},
  		};
  	},
  	components: {
  		TableTabs,
  	},
  	computed: {
  		...mapState({
  			locationTable: state => state.locationTable,
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
