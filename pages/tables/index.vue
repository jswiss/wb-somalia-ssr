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
  		let [envRes, pooledRes, loc2016Res] = await Promise.all([
  			axios.get('https://somalia-aid.herokuapp.com/envelopes'),
  			axios.get('http://somalia-aid.herokuapp.com/pooled'),
  		]);
  		store.commit('SET_ENV_TABLE', envRes.data);
  		store.commit('SET_POOLED_TABLE', pooledRes.data);
  		return {
  			envs: envRes.data,
  			pools: pooledRes.data,
  		};
  	},
  };
</script>
