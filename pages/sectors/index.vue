<template lang="html">
  <div id="sectors" class="container is-fluid">
    <div id="container"></div>
  </div>
</template>

<script>
  export default {
  	name: 'sectors',
  	layout: 'sectors',
  	data() {
  		return {
  			testData: [
  				['Jan', 11.5, 9.3],
  				['Feb', 12, 10.5],
  				['Mar', 11.7, 11.2],
  				['Apr', 12.4, 11.2],
  				['May', 13.5, 12.7],
  				['Jun', 11.9, 13.1],
  				['Jul', 14.6, 12.2],
  				['Aug', 17.2, 12.2],
  				['Sep', 16.9, 10.1],
  				['Oct', 15.4, 14.5],
  				['Nov', 16.9, 14.5],
  				['Dec', 17.2, 15.5],
  			],
  		};
  	},
  	methods: {
  		renderChart() {
  			// assign anychart type
  			const testChart = anychart.cartesian();
  			// bring testChart data (testData) from above and set it in Anychart
  			const dataSet = anychart.data.set(this.testData);

  			// Assign series (only necessary if using multiple series!)
  			const seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			const seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });

  			// assign first series to column and format
  			const column = testChart.column(seriesData_1);
  			column
  				.labels()
  				.enabled(true)
  				// Gotcha! watch out here, as the '${%Value}' looks like es2015 string interpolation, but is Anychart formatting
  				.format('${%Value} mln');

  			// assign second series to line and format
  			testChart.jumpLine(seriesData_2).stroke('2 #60727B');

  			testChart.animation(true);

  			testChart.title('Combo Column and Jump Line Chart');

  			testChart.yScale().minimum(0);

  			testChart
  				.tooltip()
  				.displayMode('union')
  				.positionMode('point')
  				.unionFormat(function() {
  					return `Plain: $${
  						this.points[1].value
  					} mln \n Fact: $${this.points[0].value} mln`;
  				});

  			testChart.interactivity().hoverMode('by-x');

  			// again, watch out for pseudo string interpolation here
  			testChart
  				.yAxis()
  				.labels()
  				.format('${%Value} mln');

  			testChart.xAxis(true);

  			// tells what ID to look for in HTML
  			testChart.container('container');

  			// render chart
  			testChart.draw();
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

