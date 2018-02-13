<template>
  <div id="locations" class="container is-fluid">
    <table-tabs></table-tabs>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <label class="radio">
              <input type="radio" value="2016" name="2016" @click="toggle2016">
              XAF
            </label>
            <label class="radio">
              <input type="radio" value="2017" name="2017" @click="toggle2017">
              EUR
            </label>
            <label class="radio">
              <input type="radio" value="2018" name="2018" @click="toggle2018">
              USD
            </label>
          </div>
        </div>
      </div>
    <div id="table">
      <no-ssr placeholder="Loading...">
        <v-client-table
          :data="locationTable"
          :columns="columns"
          :options="options"
        >

      </v-client-table>
      </no-ssr>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import axios from 'axios';
  import { getLocationData } from '../helpers';
  import TableTabs from '~/components/TableTabs';
  // import VClientTable from 'vue-bulma-tables-2';

  export default {
  	name: 'locations',
  	data() {
  		return {
  			options: {
  				saveState: true,
  				storage: 'local',
  				highlightMatches: true,
  			},
  		};
  	},
  	components: {
  		TableTabs,
  	},
  	fetch: getLocationData,
  	computed: {
  		...mapState({
  			locationTable: state => state.locationsTable,
  			columns: state => state.locationsTableColumns,
  		}),
  	},
  };
</script>

<style scoped>
  label.label,
  div.control {
  	text-align: left;
  }
</style>

