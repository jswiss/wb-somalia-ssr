	<template>
    <div id="pools">
      <table-tabs></table-tabs>
      <div class="columns">
        <div class="column is-3"></div>
        <div id="table" class="column is-6">
          <no-ssr>
            <v-client-table
              :data="pools"
              :columns="columns"
              :options="options"
            >
              <template slot="2015" slot-scope="props">
                <div>
                  $ {{ props.row['2015'] | currency }}
                </div>
              </template>
              <template slot="2016" slot-scope="props">
                <div>
                  $ {{ props.row['2016'] | currency }}
                </div>
              </template>
              <template slot="2017" slot-scope="props">
                <div>
                 $  {{ props.row['2017'] | currency }}
                </div>
              </template>
              <template slot="2018" slot-scope="props">
                <div>
                  $ {{ props.row['2018'] | currency }}
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
  			pools: state => state.pooledTable,
  			columns: state => state.poolTableColumns,
  		}),
  	},
  };
</script>
