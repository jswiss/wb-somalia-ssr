	<template>
    <div id="envelopes">
      <table-tabs></table-tabs>
      <div class="columns">
        <div class="column is-1"></div>
        <div id="table" class="column is-10">
          <h1 class="title is-4">{{ title }}</h1>
          <no-ssr placeholder="Loading...">
            <v-client-table
              :data="envelopes"
              :columns="columns"
              :options="options"
            >
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
              <template slot="2019" slot-scope="props">
                <div>
                  ${{ props.row['2019'] | currency }}
                </div>
              </template>
              <template slot="2020" slot-scope="props">
                <div>
                  ${{ props.row['2020'] | currency }}
                </div>
              </template>
              <template slot="Total 2016-18" slot-scope="props">
                <div>
                  ${{ props.row['Total 2016-18'] | currency }}
                </div>
              </template>
              <template slot="Trends" slot-scope="props">
                <div>
                  <trend :data="[props.row['2016'], props.row['2017'], props.row['2018'], props.row['2019'], props.row['2020'] ]" auto-draw smooth></trend>
                </div>
              </template>
            </v-client-table>
          </no-ssr>
        </div>
        <div class="column is-1"></div>
      </div>
    </div>
  </template>

  <script>
  import { mapState } from 'vuex';
  import { getEnvelopeData } from '../helpers';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'envelopes',
  	data() {
  		return {
  			title: 'Filter by agency, agency category, or aid flow category',
  			columns: [
  				'Agency',
  				'Agency Category',
  				'Aid Flow Category',
  				'2016',
  				'2017',
  				'2018',
  				'2019',
  				'2020',
  				'Total 2016-18',
  				'Trends',
  			],
  			options: {
  				highlightMatches: true,
  				filterable: ['Agency', 'Agency Category', 'Aid Flow Category'],
  			},
  		};
  	},
  	components: {
  		TableTabs,
  	},
  	computed: {
  		...mapState({
  			envelopes: state => state.envelopeTable,
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

