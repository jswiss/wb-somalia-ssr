<template lang="html">
  <div id="sectors" class="container is-fluid">
    Resilience
    <div id="container"></div>
    <div id="stack-chart"></div>
    <div id="pie-chart">Figure 29, wrong Pie is shown</div>
    <div id="country-stack"></div>

    <table class="table is-striped is-hoverable is-bordered">
      <thead>
        <tr>
          <th></th>
          <th>FGS</th>
          <th>Benadir</th>
          <th>Galmudug</th>
          <th>Hiirshabelle</th>
          <th>Jubaland</th>
          <th>Puntland</th>
          <th>South West</th>
          <th>Somaliland</th>
          <th>Unattributed</th>
          <th>Pillar Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Migration, Displacement, Refugees and Durable Solutions</td>
          <td>4.3</td>
          <td>19.7</td>
          <td>12.6</td>
          <td>8.2</td>
          <td>24.3</td>
          <td>14.3</td>
          <td>16.5</td>
          <td>5.5</td>
          <td>3.2</td>
          <td>108.6</td>
        </tr>
        <tr>
          <td>Natural Resources Management</td>
          <td>0.1</td>
          <td>11.8</td>
          <td>9</td>
          <td>8.6</td>
          <td>9.4</td>
          <td>21</td>
          <td>9.9</td>
          <td>36.2</td>
          <td>3.4</td>
          <td>109.4</td>
        </tr>
        <tr>
          <td>Social Protection</td>
          <td>1.1</td>
          <td>0.4</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>10</td>
          <td>0.5</td>
          <td>&nbsp;</td>
          <td>0.4</td>
          <td>1.1</td>
          <td>13.5</td>
        </tr>
        <tr>
          <td>Cross-cutting resilience</td>
          <td>&nbsp;</td>
          <td>8.3</td>
          <td>5.3</td>
          <td>10.9</td>
          <td>22.1</td>
          <td>3.7</td>
          <td>21.6</td>
          <td>13.5</td>
          <td>11.1</td>
          <td>96.7</td>
        </tr>
        <tr>
          <td>Food Security</td>
          <td>21.8</td>
          <td>42.5</td>
          <td>62.1</td>
          <td>15</td>
          <td>24.3</td>
          <td>100.5</td>
          <td>59.3</td>
          <td>86.6</td>
          <td>328.5</td>
          <td>740.4</td>
        </tr>
        <tr>
          <td>Lifesaving humanitarian - cross-cutting</td>
          <td>1.7</td>
          <td>21.3</td>
          <td>21.2</td>
          <td>31.1</td>
          <td>31</td>
          <td>&nbsp;</td>
          <td>1.7</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>108</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>28.9</td>
          <td>103.9</td>
          <td>110.1</td>
          <td>73.8</td>
          <td>121.2</td>
          <td>140.1</td>
          <td>109</td>
          <td>142.3</td>
          <td>347.3</td>
          <td>1176.6</td>
        </tr>
      </tbody>
    </table>

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
  			resilienceLocationDataStack: [
  				['FGS', 4.3, 0.1, 1.1, 0, 21.8, 1.7],
  				['Benadir', 19.7, 11.8, 0.4, 8.3, 42.5, 21.3],
  				['Galmudug', 12.6, 9, 0, 5.3, 62.1, 21.2],
  				['Hiirshabelle', 8.2, 8.6, 0, 10.9, 15, 31.1],
  				['Jubaland', 24.3, 9.4, 10, 22.1, 24.3, 31],
  				['Puntland', 14.3, 21, 0.5, 3.7, 100.5, 0],
  				['South West', 16.5, 9.9, 0, 21.6, 59.3, 1.7],
  				['Somaliland', 5.5, 36.2, 0.4, 13.5, 86.6, 0],
  				['Unattributed', 3.2, 3.4, 1.1, 11.1, 328.5, 0],
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

  		renderCountryStack() {
  			var stackChart = anychart.column();

  			const dataSet = anychart.data.set(this.resilienceLocationDataStack);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });
  			var seriesData_4 = dataSet.mapAs({ x: 0, value: 4 });
  			var seriesData_5 = dataSet.mapAs({ x: 0, value: 5 });
  			var seriesData_6 = dataSet.mapAs({ x: 0, value: 6 });

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
  			stackChart.title('Resilience: Project Disbursements by Location');

  			// set the container id
  			stackChart.container('country-stack');

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
