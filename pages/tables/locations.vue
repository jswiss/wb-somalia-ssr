<template>
  <div id="locations" class="container is-fluid">
    <table-tabs></table-tabs>
    <div id="table" class="columns">
      <div class="column is-4 buffer">
        <h1 class="title">2016</h1>
        <h2 class="subtitle">Count and Value of Projects by Location</h2>
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>Location</th>
              <th>Count of Projects</th>
              <th>Total Value of Projects</th>
            </tr>
          </thead>
          <tbody v-for="item in location2016Table" :key="item['Location:']">
            <td>{{ item['Location: '] }}</td>
            <td class="center">{{ item.Count }}</td>
            <td>$ {{ item['Total: '] | currency }}</td>
          </tbody>
        </table>
      </div>
      <div class="column is-4 buffer">
        <h1 class="title">2017</h1>
        <h2 class="subtitle">Count and Value of Projects by Location</h2>
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>Location</th>
              <th>Count of Projects</th>
              <th>Total Value of Projects</th>
            </tr>
          </thead>
          <tbody v-for="item in location2017Table" :key="item['Location:']">
            <td>{{ item['Location: '] }}</td>
            <td class="center">{{ item.Count }}</td>
            <td>$ {{ item['Total: '] | currency }}</td>
          </tbody>
        </table>
      </div>
      <div class="column is-4 buffer">
        <h1 class="title">2018</h1>
        <h2 class="subtitle">Count and Value of Projects by Location</h2>
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>Location</th>
              <th>Count of Projects</th>
              <th>Total Value of Projects</th>
            </tr>
          </thead>
          <tbody v-for="item in location2018Table" :key="item['Location:']">
            <td>{{ item['Location: '] }}</td>
            <td class="center">{{ item.Count }}</td>
            <td>$ {{ item['Total: '] | currency }}</td>
          </tbody>
        </table>
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
  #table {
  	margin-top: 2%;
  }
  .center {
  	text-align: center;
  }
</style>

