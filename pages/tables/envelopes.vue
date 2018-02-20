	<template>
    <div id="envelopes">
      <table-tabs></table-tabs>
      <div class="columns">
        <div class="column is-1"></div>
        <div id="table" class="column is-10">
          <no-ssr>
            <v-client-table
              :data="envelopes"
              :columns="columns"
              :options="options"
            >
              <template slot="2016" slot-scope="props">
                <div>
                  $ {{ props.row['2016'] | currency }}
                </div>
              </template>
              <template slot="2017" slot-scope="props">
                <div>
                  $ {{ props.row['2017'] | currency }}
                </div>
              </template>
              <template slot="2018" slot-scope="props">
                <div>
                 $  {{ props.row['2018'] | currency }}
                </div>
              </template>
              <template slot="2019" slot-scope="props">
                <div>
                  $ {{ props.row['2019'] | currency }}
                </div>
              </template>
              <template slot="2020" slot-scope="props">
                <div>
                  $ {{ props.row['2020'] | currency }}
                </div>
              </template>
              <template slot="Total 2016-18" slot-scope="props">
                <div>
                  $ {{ props.row['Total 2016-18'] | currency }}
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
  			options: {
  				options: {
  					saveState: true,
  					highlightMatches: true,
  					storage: 'local',
  				},
  			},
  		};
  	},
  	components: {
  		TableTabs,
  	},
  	computed: {
  		...mapState({
  			envelopes: state => state.envelopeTable,
  			columns: state => state.envTableColumns,
  		}),
  	},
  };
</script>
