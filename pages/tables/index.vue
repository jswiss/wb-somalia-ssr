<template lang="html">
  <div id="section" class="section">
    <div class="container">
      <table-tabs></table-tabs>
      <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-6">
          <div id="table-text">
            Choose a table from the tabs above to view detailed aid flow data. In each of the tables, you can sort by columns and search most fields. The raw data is available for download in the <nuxt-link to="/documents">document library</nuxt-link>.
          </div>
        </div>
        <div class="column is-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'tables',
  	components: {
  		TableTabs,
  	},
  	async asyncData({ query, error, store }) {
  		if (store.state.envelopeTable.length !== 0) return;

  		let [envRes, pooledRes, locRes] = await Promise.all([
  			axios.get('https://api.80pco.com/envelopes'),
  			axios.get('https://api.80pco.com/pooled'),
  			axios.get('https://api.80pco.com/locations'),
  		]);
  		store.commit('SET_ENV_TABLE', envRes.data);
  		store.commit('SET_POOLED_TABLE', pooledRes.data);
  		store.commit('SET_LOCATION_TABLE', locRes.data);

  		return {
  			envs: envRes.data,
  			pools: pooledRes.data,
  			loc2016: locRes.data,
  		};
  	},
  	// methods: {
  	// 	setProjectLocationTable() {
  	// 		if (this.$store.state.projectLocationTable.length !== 0) return;
  	// 		this.$store.commit('SET_PROJECT_LOCATION');
  	// 	},
  	// },
  	// mounted() {
  	// 	this.setProjectLocationTable();
  	// },
  };
</script>

<style scoped>
  #table-text {
  	margin-top: 3%;
  }
</style>

