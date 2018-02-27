<template lang="html">
  <div id="topmost" class="container is-fluid">
    <table-tabs></table-tabs>
    <div id="table-text">
			Dummy text here (add columns dummy)
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
  };
</script>
