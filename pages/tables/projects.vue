	<template>
    <div id="projects">
      <table-tabs></table-tabs>
      <div id="table">
        <no-ssr>
          <v-client-table
            :data="projects"
            :columns="columns"
            :options="options"
          >
            <template slot="Project title" slot-scope="props">
              <div>
                <a :href="`localhost:3000/projects/${props.row['Project title']}`" target="_blank">{{ props.row['Project title'] }}</a>
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
                $ {{ props.row['2016 Disbursements'] | currency }}
              </div>
            </template>
            <template slot="2017 Disbursements" slot-scope="props">
              <div>
                $ {{ props.row['2017 Disbursements'] | currency }}
              </div>
            </template>
            <template slot="2018 Disbursements" slot-scope="props">
              <div>
                $ {{ props.row['2018 Disbursements'] | currency }}
              </div>
            </template>
            <template slot="Total Project Value" slot-scope="props">
              <div>
                $ {{ props.row['Total Project Value'] | currency }}
              </div>
            </template>
          </v-client-table>
        </no-ssr>
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
  			// projectTable: this.projects,
  			columns: [
  				'Project title',
  				'Start Date',
  				'End Date',
  				'NDP Pillar',
  				'Primary Sector',
  				'2016 Disbursements',
  				'2017 Disbursements',
  				'2018 Disbursements',
  				'Total Project Value',
  			],
  			options: {
  				saveState: true,
  				highlightMatches: true,
  				storage: 'local',
  				dateColumns: ['Start Date', 'End Date'],
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
</style>
