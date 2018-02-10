	<template>
    <div id="envelopes">
      <table-tabs></table-tabs>
      <div id="table">
        {{ envelopes }}
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { getEnvelopeData } from '../helpers';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'locations',
  	components: {
  		TableTabs,
  	},
  	fetch: getEnvelopeData,
  	computed: {
  		...mapState({
  			envelopes: state => state.envelopeTable,
  		}),
  	},
  };
</script>