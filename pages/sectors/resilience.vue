<template lang="html">
  <div id="sectors" class="container is-fluid">
    Resilience
    <div id="container"></div>
  </div>
</template>

<script>
  export default {
  	name: 'resilience',
  	layout: 'sectors',
  	data() {
  		return {
  			resilienceData: [
  				['Donor Agency', 18738364],
  				['Government', 20570204],
  				['IFI', 500000],
  				['Intergovernmental Organization', 13296978],
  				['Mix of implementers - involving government', 731665744],
  				['NGOs', 265460791],
  				['Other', 105031],
  				['Private Sector', 15600000],
  				['Regional Actors', 4164600],
  				['UN', 77620689],
  				['Unclear / TBD', 28888889],
  			],
  		};
  	},
  	methods: {
  		renderChart() {
  			const chart = anychart.cartesian();
  			const dataSet = anychart.data.set(this.resilienceData);

  			const seriesData = dataSet.mapAs({ x: 0, value: 1 });

  			const column = chart.column(seriesData);
  			column
  				.labels()
  				.enabled(true)
  				.format('${%Value}');

  			chart.animation(true);

  			chart.title('Resilience, 2016-2018 spend ($) ');

  			chart.yScale().minimum(0);

  			chart
  				.tooltip()
  				.displayMode('union')
  				.position('point')
  				.unionFormat(function() {
  					return `Plain: $${
  						this.points[1].value
  					} mln \n Fact: $${this.points[0].value} `;
  				});

  			chart.interactivity().hoverMode('by-x');

  			chart
  				.yAxis()
  				.labels()
  				.format('${%Value} mln');

  			chart.xAxis(true);

  			chart.container('container');

  			chart.draw();
  		},
  	},
  	mounted() {
  		this.renderChart();
  	},
  };
</script>

<style scoped>
  /* make sure div#id has a size defined, otherwise nothing will render */

  #container {
  	width: 100%;
  	height: 100%;
  	margin: 0;
  	padding: 0;
  }
</style>
