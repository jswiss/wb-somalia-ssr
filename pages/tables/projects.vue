	<template>
    <div id="projects">
      <table-tabs></table-tabs>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10">
          <div id="table">
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
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'projects',
  	data() {
  		return {
  			columns: [
  				'Project Title',
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
  				highlightMatches: true,
  				storage: 'local',
  				dateColumns: ['Start Date', 'End Date'],
  				filterable: ['Project Title', 'NDP Pillar', 'Primary Sector'],
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
  #projects {
  	margin-top: 5%;
  }

  #table {
  	overflow: auto;
  }
</style>
