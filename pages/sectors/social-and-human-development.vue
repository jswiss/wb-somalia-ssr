<template lang="html">
  <div id="sectors" class="container is-fluid">
    Social and Human Development
    <div id="container"></div>
    <div id="stack-chart"></div>
    <div id="pie-chart"></div>
  </div>
</template>

<script>
  export default {
  	name: 'social-and-human-development',
  	layout: 'sectors',
  	data() {
  		return {
  			socialHumanDevelopmentData: [
  				['Academic / Research Institutions', 3733435],
  				['Donor Agency', 16527778],
  				['Government', 11718557],
  				['IFI', 799, 565],
  				['Intergovernmental Organization', 194500],
  				['Mix of implementers - involving government', 186777138],
  				['Mix of implementers - no government', 7961733],
  				['NGOs', 219302287],
  				['Other', 2022044],
  				['Private Sector', 19542741],
  				['UN', 64232464],
  				['Unclear / TBD', 10, 374, 238],
  			],
  			socialHumanDevelopmentDataStack: [
  				['2016', 1.8, 138.5, 55.4],
  				['2017', 23.9, 176.3, 53.3],
  				['2018', 0.5, 84.1, 9.4],
  			],
  			socialHumanDevelopmentDataPie: [
  				{ x: 'NGOs', value: 219302286.6 },
  				{ x: 'Mix of implementers - involving government', value: 186777137.6 },
  				{ x: 'UN', value: 64232464.15 },
  				{ x: 'Private Sector', value: 19542741.02 },
  				{ x: 'Donor Agency', value: 16527777.78 },
  				{ x: 'Government', value: 11718557 },
  				{ x: 'Other', value: 25085515.16 },
  			],
  		};
  	},
  	methods: {
  		renderChart() {
  			const chart = anychart.cartesian();
  			const dataSet = anychart.data.set(this.socialHumanDevelopmentData);

  			const seriesData = dataSet.mapAs({ x: 0, value: 1 });

  			const column = chart.column(seriesData);
  			column
  				.labels()
  				.enabled(true)
  				.format('${%Value}');

  			chart.animation(true);

  			chart.title('Social & Human Development, 2016-2018 spend ($) ');

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

  			const dataSet = anychart.data.set(this.socialHumanDevelopmentDataStack);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });

  			// create a chart
  			var stackChart = anychart.column();

  			/* enable the value stacking mode
        on the default primary value scale*/
  			stackChart.yScale().stackMode('value');

  			// create column series
  			stackChart.column(seriesData_1);
  			stackChart.column(seriesData_2);
  			stackChart.column(seriesData_3);

  			// set the chart title
  			stackChart.title(
  				'Social & Human Development: Project Disbursements by Sector'
  			);

  			// set the container id
  			stackChart.container('stack-chart');

  			// initiate drawing the chart
  			stackChart.draw();
  		},
  		renderPie() {
  			const pieChart = anychart.pie(this.socialHumanDevelopmentDataPie);

  			pieChart.title('Key Implementers of Social & Human Development Projects');
  			pieChart.container('pie-chart');
  			pieChart.draw();
  		},
  	},
  	mounted() {
  		this.renderChart();
  		this.renderStack();
  		this.renderPie();
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
