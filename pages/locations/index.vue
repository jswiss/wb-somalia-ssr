<template>
  <div class="section is-fluid">
    <div class="container is-mobile">
      <h1 class="title is-3">Disbursements by Location, Pillar, Sector, and Project</h1>
      <h1 class="subtitle is-6">Choose from the menu at the left for location-specific aid information.</h1>
      <div class="columns">
        <div class="column is-10 is-mobile">
          <div class="field">
            <p class="control" id="radios">
              <label class="radio">
                <input type="radio" name="question" value="2018" @click="tree = 2018, tree2017 = false">
                2018
              </label>
              <label class="radio">
                <input type="radio" name="question" value="2017" @click="tree = 2017, tree2017 = true" checked>
                2017
              </label>
              <label class="radio">
                <input type="radio" name="question" value="2016" @click="tree = 2016, tree2017 = false">
                2016
              </label>
            </p>
          </div>
          <div class="instructions">
            <p class="is-size-7 has-text-grey-light">
              Click on the treemap to see the breakdown of aid disbursements by location, NDP pillar, sector, and project. Click the top bar of the chart to go up a level.
            </p>
          </div>
        </div>
        <div class="column is-1 is-mobile"></div>
      </div>
      <div class="columns is-narrow">
        <div class="column is-10 is-mobile">
          <tree-map-2016 v-if="tree === 2016"></tree-map-2016>
          <tree-map-2018 v-if="tree === 2018"></tree-map-2018>
          <tree-map-2017 v-if="tree2017"></tree-map-2017>
        </div>
        <div class="column is-1 is-mobile"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import LocationsMenu from '~/components/LocationsMenu';
  import TreeMap2016 from '~/components/TreeMap2016';
  import TreeMap2017 from '~/components/TreeMap2017';
  import TreeMap2018 from '~/components/TreeMap2018';

  export default {
  	name: 'locations',
  	layout: 'locations',
  	data() {
  		return {
  			tree2017: true,
  			tree: '',
  		};
  	},
  	components: {
  		TreeMap2016,
  		TreeMap2017,
  		TreeMap2018,
  	},
  	// async asyncData({ query, error, store }) {
  	// 	if (store.state.treeMap2016.length !== 0) return;

  	// 	let [tree2016, tree2017, tree2018] = await Promise.all([
  	// 		axios.get('https://api.80pco.com/2016'),
  	// 		axios.get('https://api.80pco.com/2017'),
  	// 		axios.get('https://api.80pco.com/2018'),
  	// 	]);
  	// 	store.commit('SET_TREE_2016', tree2016.data);
  	// 	store.commit('SET_TREE_2017', tree2017.data);
  	// 	store.commit('SET_TREE_2018', tree2018.data);

  	// 	return {
  	// 		tree2016: tree2016.data,
  	// 		tree2017: tree2017.data,
  	// 		tree2018: tree2018.data,
  	// 	};
  	// },
  };
</script>

<style scoped>
  label.radio {
  	margin-left: 20%;
  	text-align: center;
  }
  input[type='radio'] {
  	margin-right: 10px;
  }
  .instructions {
  	font-style: italic;
  	text-align: center;
  }
</style>


