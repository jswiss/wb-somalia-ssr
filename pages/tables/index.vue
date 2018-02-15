<template lang="html">
  <div id="topmost" class="container is-fluid">
    <table-tabs></table-tabs>
    <div id="table-text">
			Dummy text here (add columns dummy)
		</div>
  </div>
</template>

<script>
  import TableTabs from '~/components/TableTabs';
  import axios from 'axios';
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
  	name: 'tables',
  	components: {
  		TableTabs,
  	},
  	// fetch({ store, params }) {
  	// 	return axios
  	// 		.get('http://somalia-aid-flows.herokuapp.com/project-table')
  	// 		.then(res => {
  	// 			store.commit('getProjectData', res.data);
  	// 		});
  	// },
  	async asyncData({ query, error, store }) {
  		let [
  			envRes,
  			pooledRes,
  			loc2016Res,
  			loc2017Res,
  			loc2018Res,
  		] = await Promise.all([
  			axios.get('https://somalia-aid.herokuapp.com/envelopes'),
  			axios.get('http://somalia-aid.herokuapp.com/pooled'),
  			axios.get('https://somalia-aid.herokuapp.com/2016'),
  			axios.get('https://somalia-aid.herokuapp.com/2017'),
  			axios.get('https://somalia-aid.herokuapp.com/2018'),
  		]);
  		store.commit('SET_ENV_TABLE', envRes.data);
  		store.commit('SET_POOLED_TABLE', pooledRes.data);
  		store.commit('SET_2016_LOCATION_TABLE', loc2016Res.data);
  		store.commit('SET_2017_LOCATION_TABLE', loc2017Res.data);
  		store.commit('SET_2018_LOCATION_TABLE', loc2018Res.data);
  		return {
  			envs: envRes.data,
  			pools: pooledRes.data,
  			loc2016: loc2016Res.data,
  			loc2017: loc2017Res.data,
  			loc2018: loc2018Res.data,
  		};
  	},
  };
</script>
