<template lang="html">
  <div id="topmost" class="container is-fluid">
    <table-tabs></table-tabs>
    <div id="table-text">
			Dummy text here (add columns dummy)
		</div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import axios from 'axios';
  import TableTabs from '~/components/TableTabs';

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
  		let [envRes, pooledRes, locRes] = await Promise.all([
  			axios.get('http://somalia-api.us-east-2.elasticbeanstalk.com/envelopes'),
  			axios.get('http://somalia-api.us-east-2.elasticbeanstalk.com/pooled'),
  			axios.get('http://somalia-api.us-east-2.elasticbeanstalk.com/locations'),
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
