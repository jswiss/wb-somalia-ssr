<template lang="html">
  <div id="sectors" class="container is-fluid">
    Gender and Human Rights
    <div id="container"></div>
    <div id="stack-chart"></div>
    <div id="pie-chart">Figure 32, wrong Pie is shown</div>
  </div>
</template>

<script>
  export default {
  	name: 'gender-and-human-rights',
  	layout: 'sectors',
  	data() {
  		return {
  			genderHumanRightsData: [
  				['Government', 172342],
  				['Mix of implementers - involving government', 3700000],
  				['NGOs', 31539718],
  				['Private Sector', 695274],
  			],
  			genderHumanRightsDataChart: [
  				['2016', 16.0],
  				['2017', 13.0],
  				['2018', 7.1],
  			],
  		};
  	},
  	methods: {
  		renderChart() {
  			const chart = anychart.cartesian();
  			const dataSet = anychart.data.set(this.genderHumanRightsData);

  			const seriesData = dataSet.mapAs({ x: 0, value: 1 });

  			const column = chart.column(seriesData);
  			column
  				.labels()
  				.enabled(true)
  				.format('${%Value}');

  			chart.animation(true);

  			chart.title('Gender & Human Rights, 2016-2018 spend ($) ');

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
  		renderYearChart() {
  			const chart = anychart.cartesian();
  			const dataSet = anychart.data.set(this.genderHumanRightsDataChart);

  			const seriesData = dataSet.mapAs({ x: 0, value: 1 });

  			const column = chart.column(seriesData);
  			column
  				.labels()
  				.enabled(true)
  				.format('${%Value}');

  			chart.animation(true);

  			chart.title('Gender & Human Rights: Project Disbursements ');

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

  			chart.container('stack-chart');

  			chart.draw();
  		},
  	},
  	mounted() {
  		this.renderChart();
  		this.renderYearChart();
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
