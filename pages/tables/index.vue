<template>
  <div id="tables">
    <div class="section">
			<div class="container">
				Dummy table text goes here explaining each table
			</div>
		</div>
  </div>
</template>

<script>
	import {
		getPooledData,
		getEnvelopeData,
		getProjectData,
		getLocationData,
	} from '../helpers';
	import { mapState, mapMutations, mapActions } from 'vuex';

	export default {
		name: 'tables',
		fetch: getProjectData,
		computed: {
			...mapState({
				projects: state => state.projectsTable,
			}),
		},
	};
</script>
