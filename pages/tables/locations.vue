<template>
  <div id="locations" class="container is-fluid">
    <table-tabs></table-tabs>
    <div id="table" class="columns">
      <div class="column is-4 buffer">
        <h1 class="title">2016</h1>
        <h2 class="subtitle">Count and Value of Projects by Location</h2>
          <v-client-table
              :data="locationTable"
              :columns="columns"
              :options="options"
            >

            </v-client-table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import axios from 'axios';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'locations',
  	components: {
  		TableTabs,
  	},
  	computed: {
  		...mapState({
  			locationTable: state => state.location2016Table,
  			columns: state => state.locationTableColumns,
  		}),
  	},
  };
</script>

<style scoped>
  label.label,
  div.control {
  	text-align: left;
  }
  #table {
  	margin-top: 2%;
  }
  .center {
  	text-align: center;
  }
</style>

