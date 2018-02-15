<template lang="html">
  <div id="sectors" class="container is-fluid">
    Resilience
    <div id="container"></div>
    <div id="stack-chart"></div>
    <div id="pie-chart">Figure 29, wrong Pie is shown</div>
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
  			resilienceDataStack: [
  				['2016', 37.5, 20.4, 41.7, 5.5, 38.5, 21.3],
  				['2017', 43.5, 74.4, 400.3, 5.0, 49.0, 66.0],
  				['2018', 15.7, 13.2, 298.4, 3.0, 22.0, 20.4],
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
  						this.points[0].value
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
  		renderStack() {
  			var stackChart = anychart.column();

  			const dataSet = anychart.data.set(this.resilienceDataStack);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });
  			var seriesData_4 = dataSet.mapAs({ x: 0, value: 4 });
  			var seriesData_5 = dataSet.mapAs({ x: 0, value: 5 });
  			var seriesData_6 = dataSet.mapAs({ x: 0, value: 6 });

  			// create a chart
  			var stackChart = anychart.column();

  			/* enable the value stacking mode
        on the default primary value scale*/
  			stackChart.yScale().stackMode('value');

  			// create column series
  			stackChart.column(seriesData_1);
  			stackChart.column(seriesData_2);
  			stackChart.column(seriesData_3);
  			stackChart.column(seriesData_4);
  			stackChart.column(seriesData_5);
  			stackChart.column(seriesData_6);

  			// set the chart title
  			stackChart.title('Resilience: Project Disbursements by Sector');

  			// set the container id
  			stackChart.container('stack-chart');

  			// initiate drawing the chart
  			stackChart.draw();
  		},
  	},
  	mounted() {
  		this.renderChart();
  		this.renderStack();
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
