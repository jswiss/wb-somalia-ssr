<template>
  <div id="locations" class="container is-fluid">
    <table-tabs></table-tabs>
    <div id="table" class="columns">
      <div class="column is-4 buffer">
        <h1 class="title">2016</h1>
        <h2 class="subtitle">Count and Value of Projects by Location</h2>
        <no-ssr placeholder="Loading...">
          <v-client-table
            name="location-table-2016"
            :data="location2016Table"
            :columns="columns"
            :options="options"
          >
          </v-client-table>
        </no-ssr>
      </div>
      <div class="column is-4 buffer">
        <h1 class="title">2017</h1>
        <h2 class="subtitle">Count and Value of Projects by Location</h2>
        <no-ssr>
          <v-client-table
            name="location-table-2017"
            :data="location2017Table"
            :columns="columns"
            :options="options"
          >
          </v-client-table>
        </no-ssr>
      </div>
      <div class="column is-4 buffer">
        <h1 class="title">2018</h1>
        <h2 class="subtitle">Count and Value of Projects by Location</h2>
        <no-ssr>
          <v-client-table
            name="location-table-2018"
            :data="location2018Table"
            :columns="columns"
            :options="options"
          >
          </v-client-table>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import axios from 'axios';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'locations',
  	data() {
  		return {
  			options: {
  				saveState: true,
  				storage: 'local',
  				highlightMatches: true,
  				pagination: false,
  			},
  		};
  	},
  	components: {
  		TableTabs,
  	},
  	computed: {
  		...mapState({
  			location2016Table: state => state.location2016Table,
  			location2017Table: state => state.location2017Table,
  			location2018Table: state => state.location2018Table,
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

