<template>
  <div id="tree"></div>
</template>

<script>
  import { mapState } from 'vuex';
  import { capitalizeString } from '../pages/helpers';

  export default {
  	name: 'TreeMap2017',
  	computed: {
  		...mapState({
  			treeData: state => state.treeMap2017,
  		}),
  	},
  	methods: {
  		treeChart() {
  			const chart = anychart.treeMap(this.treeData);

  			chart
  				.headers()
  				.format('{%name} :: Disbursements: ${%value}{groupsSeparator:\\,}');
  			chart.headers().fontSize(15);
  			chart.headers().fontWeight('bold');
  			chart.labels().format('{%name}');
  			chart.labels().fontSize(11);
  			chart.labels().fontWeight(900);
  			chart.labels().fontColor('White');
  			chart.tooltip().titleFormat('{%name}');
  			chart.tooltip().format('${%Value}{groupsSeparator:\\,}');
  			chart.hintOpacity(0.7);
  			chart.listen('pointClick', e => {
  				const newValue = e.point.get('url');
  				if (newValue) {
  					window.open(newValue, '_self');
  				}
  			});
  			chart.maxDepth(1);
  			chart.colorRange(true);

  			chart.container('tree');
  			chart.draw();
  		},
  	},
  	mounted() {
  		this.treeChart();
  	},
  };
</script>

<style scoped>
  #tree {
  	width: auto;
  	height: 450px;
  }
</style>
