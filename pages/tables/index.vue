	<template>
    <div id="projects">
      <table-tabs></table-tabs>
      <div class="columns">

        <div class="column is-1"></div>
        <div class="column is-10">
            <div id="table">
              <!-- <h1 class="title is-4">{{ title }}</h1> -->
              <no-ssr placeholder="Loading...">
                <v-client-table
                  :data="projects"
                  :columns="columns"
                  :options="options"
                >
                  <template slot="Project Title" slot-scope="props">
                    <div>
                      <nuxt-link :to="`/tables/project/${props.row.id}`">{{ props.row['Project Title'] }}</nuxt-link>
                    </div>
                  </template>
                  <template slot="Start Date" slot-scope="props">
                    <div>
                      {{ props.row['Start Date'] }}
                    </div>
                  </template>
                  <template slot="End Date" slot-scope="props">
                    <div>
                      {{ props.row['End Date'] }}
                    </div>
                  </template>
                  <template slot="2016 Disbursements" slot-scope="props">
                    <div>
                      ${{ props.row['2016 Disbursements'] | currency }}
                    </div>
                  </template>
                  <template slot="2017 Disbursements" slot-scope="props">
                    <div>
                      ${{ props.row['2017 Disbursements'] | currency }}
                    </div>
                  </template>
                  <template slot="2018 Disbursements" slot-scope="props">
                    <div>
                      ${{ props.row['2018 Disbursements'] | currency }}
                    </div>
                  </template>
                  <template slot="Total Project Value" slot-scope="props">
                    <div>
                      ${{ props.row['Total Project Value'] | currency }}
                    </div>
                  </template>
                  <template slot="Trends" slot-scope="props">
                  <div>
                    <trend :data="[props.row['2016 Disbursements'], props.row['2017 Disbursements'], props.row['2018 Disbursements'] ]" auto-draw smooth></trend>
                  </div>
                </template>
              </v-client-table>
            </no-ssr>
          </div>
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
  	name: 'projects',
  	async asyncData({ query, error, store }) {
  		if (store.state.pooledTable.length !== 0) return;

  		let pooledRes = await axios.get('https://api.80pco.com/pooled');
  		store.commit('SET_POOLED_TABLE', pooledRes.data);

  		return {
  			pools: pooledRes.data,
  		};
  	},
  	data() {
  		return {
  			title: 'Filter by title, objective, NDP pillar, or sector',
  			columns: [
  				'Project Title',
  				'Locations',
  				'Objective',
  				'Start Date',
  				'End Date',
  				'NDP Pillar',
  				'Primary Sector',
  				'2016 Disbursements',
  				'2017 Disbursements',
  				'2018 Disbursements',
  				'Total Project Value',
  				'Trends',
  			],
  			options: {
  				saveState: true,
  				// columnsDropdown: true,
  				highlightMatches: true,
  				filterByColumn: true,
  				storage: 'local',
  				// dateColumns: ['Start Date', 'End Date'],
  				filterable: [
  					'Project Title',
  					'Locations',
  					'NDP Pillar',
  					'Primary Sector',
  					'Objective',
  				],
  			},
  		};
  	},
  	components: {
  		TableTabs,
  	},
  	computed: {
  		...mapState({
  			projects: state => state.projectsTable,
  		}),
  	},
  };
</script>

<style scoped>
  .title {
  	margin-top: 2%;
  }
  #download_button {
  	font-size: 13px;
  }
</style>
