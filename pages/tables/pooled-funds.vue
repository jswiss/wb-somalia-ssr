	<template>
    <div id="pools">
      <table-tabs></table-tabs>
      <div class="columns">
        <div class="column is-3"></div>
        <div id="table" class="column is-6">
          <h1 class="title is-4">{{ title }}</h1>
          <no-ssr placeholder="loading">
            <v-client-table
              :data="pools"
              :columns="columns"
              :options="options"
            >
              <template slot="2015" slot-scope="props">
                <div>
                  ${{ props.row['2015'] | currency }}
                </div>
              </template>
              <template slot="2016" slot-scope="props">
                <div>
                  ${{ props.row['2016'] | currency }}
                </div>
              </template>
              <template slot="2017" slot-scope="props">
                <div>
                 ${{ props.row['2017'] | currency }}
                </div>
              </template>
              <template slot="2018" slot-scope="props">
                <div>
                  ${{ props.row['2018'] | currency }}
                </div>
              </template>
              <template slot="Trends" slot-scope="props">
                <div>
                  <trend :data="[props.row['2015'], props.row['2016'], props.row['2017'], props.row['2018'] ]" auto-draw smooth></trend>
                </div>
              </template>
            </v-client-table>
          </no-ssr>
        </div>
        <div class="column is-3"></div>
      </div>
    </div>
  </template>

  <script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { getEnvelopeData } from '../helpers';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'envelopes',
  	data() {
  		return {
  			title: 'Filter by agency, contributions to MDTFs, or Category',
  			columns: [
  				'Agency',
  				'Contributions to MDTFs',
  				'Category',
  				'2015',
  				'2016',
  				'2017',
  				'2018',
  				'Trends',
  			],
  			options: {
  				options: {
  					saveState: true,
  					highlightMatches: true,
  					storage: 'local',
  					filterable: ['Agency', 'Contributions to MDTFs', 'Category'],
  				},
  			},
  		};
  	},
  	components: {
  		TableTabs,
  	},
  	computed: {
  		...mapState({
  			pools: state => state.pooledTable,
  		}),
  	},
  };
</script>

<style scoped>
  #table {
  	overflow: auto;
  }
  .title {
  	margin-top: 2%;
  }
</style>
