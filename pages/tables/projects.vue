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
  				'2016 Disbursements (USD)',
  				'2017 Disbursements (USD)',
  				'2018 Disbursements (USD)',
  				'Project Value - (2016-18)',
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
