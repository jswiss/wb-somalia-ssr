<template lang="html">
  <div id="section" class="section">
    <div id="sectors" class="container is-fluid">
      <h1 class="title is-1">{{ title }}</h1>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="pie-chart" class="column"></div>
        </div>
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="bar-chart"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="country-stack"></div>
        </div>
        <div class="column is-1"></div>
        <div class="column is-5">
          <div id="stack-chart"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column is-8 is-mobile">
          <h4 class="title is-4">{{ title }}: Disbursement of Funds by Subsector & Location</h4>
          <table id="table" class="table is-striped is-hoverable is-bordered is-narrow is-mobile">
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
              <tr class="bold-row">
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
        <div class="column is-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'resilience',
  	layout: 'sectors',
  	data() {
  		return {
  			title: 'Resilience',
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
  			resilienceDataPie: [
  				{
  					x: 'Mix of implementers - involving government',
  					value: 731665744,
  					normal: { fill: this.$store.state.color.blue },
  				},
  				{
  					x: 'NGOs',
  					value: 265460791,
  					normal: { fill: this.$store.state.color.green },
  				},
  				{
  					x: 'UN',
  					value: 77620689,
  					normal: { fill: this.$store.state.color.yellow },
  				},
  				{
  					x: 'Other',
  					value: 101864066,
  					normal: { fill: this.$store.state.color.tan },
  				},
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
  				.fill(this.$store.state.color.blue)
  				.labels()
  				.enabled(true)
  				.format('${%Value}{groupsSeparator:\\,}');

  			chart.animation(true);

  			chart.title('Resilience, 2016-2018 spend ($) ');

  			chart.yScale().minimum(0);

  			chart.tooltip().format('${%Value}{groupsSeparator:\\,}');

  			chart.interactivity().hoverMode('by-x');

  			chart
  				.yAxis()
  				.labels()
  				.format('${%Value}{groupsSeparator:\\,}');

  			chart.xAxis(true);

  			chart.container('bar-chart');

  			chart.draw();
  		},
  		renderStack() {
  			var chart = anychart.column();

  			const dataSet = anychart.data.set(this.resilienceDataStack);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });
  			var seriesData_4 = dataSet.mapAs({ x: 0, value: 4 });
  			var seriesData_5 = dataSet.mapAs({ x: 0, value: 5 });
  			var seriesData_6 = dataSet.mapAs({ x: 0, value: 6 });

  			// create a chart
  			var chart = anychart.column();

  			/* enable the value stacking mode
              on the default primary value scale*/
  			chart.yScale().stackMode('value');

  			chart.animation(true);

  			chart.legend(true);
  			// create column series
  			chart
  				.column(seriesData_1)
  				.color(this.$store.state.color.blue)
  				.name('Cross-cutting resilience')
  				.tooltip()
  				.format('Cross-cutting resilience: ${%Value} mln');

  			chart
  				.column(seriesData_2)
  				.color(this.$store.state.color.green)
  				.name('Lifesaving humanitarian - cross-cutting')
  				.tooltip()
  				.format('Lifesaving humanitarian - cross-cutting: ${%Value} mln');

  			chart
  				.column(seriesData_3)
  				.color(this.$store.state.color.yellow)
  				.name('Food Security')
  				.tooltip()
  				.format('Food Security: ${%Value} mln');

  			chart
  				.column(seriesData_4)
  				.color(this.$store.state.color.tan)
  				.name('Social Protection')
  				.tooltip()
  				.format('Sociak Protection: ${%Value} mln');

  			chart
  				.column(seriesData_5)
  				.color(this.$store.state.color.violet)
  				.name('Natural Resources Management')
  				.tooltip()
  				.format('Natural Resources Management: ${%Value} mln');

  			chart
  				.column(seriesData_6)
  				.color(this.$store.state.color.brown)
  				.name('Migration, Displacement, Refugees and Durable Solutions')
  				.tooltip()
  				.format(
  					'Migration, Displacement, Refugees and Durable Solutions: ${%Value} mln'
  				);

  			// set the chart title
  			chart.title('Resilience: Project Disbursements by Sector');

  			// set the container id
  			chart.container('stack-chart');

  			var labels = chart.xAxis().labels();
  			labels.enabled(true);

  			chart
  				.yAxis()
  				.labels()
  				.format('${%value} mln');

  			// initiate drawing the chart
  			chart.draw();
  		},

  		renderCountryStack() {
  			var chart = anychart.column();

  			const dataSet = anychart.data.set(this.resilienceLocationDataStack);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });
  			var seriesData_4 = dataSet.mapAs({ x: 0, value: 4 });
  			var seriesData_5 = dataSet.mapAs({ x: 0, value: 5 });
  			var seriesData_6 = dataSet.mapAs({ x: 0, value: 6 });

  			/* enable the value stacking mode
              on the default primary value scale*/
  			chart.yScale().stackMode('value');

  			// create column series
  			chart.legend(true);
  			// create column series
  			chart
  				.column(seriesData_1)
  				.color(this.$store.state.color.blue)
  				.name('Cross-cutting resilience')
  				.tooltip()
  				.format('Cross-cutting resilience: ${%Value} mln');

  			chart
  				.column(seriesData_2)
  				.color(this.$store.state.color.green)
  				.name('Lifesaving humanitarian - cross-cutting')
  				.tooltip()
  				.format('Lifesaving humanitarian - cross-cutting: ${%Value} mln');

  			chart
  				.column(seriesData_3)
  				.color(this.$store.state.color.yellow)
  				.name('Food Security')
  				.tooltip()
  				.format('Food Security: ${%Value} mln');

  			chart
  				.column(seriesData_4)
  				.color(this.$store.state.color.tan)
  				.name('Social Protection')
  				.tooltip()
  				.format('Sociak Protection: ${%Value} mln');

  			chart
  				.column(seriesData_5)
  				.color(this.$store.state.color.violet)
  				.name('Natural Resources Management')
  				.tooltip()
  				.format('Natural Resources Management: ${%Value} mln');

  			chart
  				.column(seriesData_6)
  				.color(this.$store.state.color.brown)
  				.name('Migration, Displacement, Refugees and Durable Solutions')
  				.tooltip()
  				.format(
  					'Migration, Displacement, Refugees and Durable Solutions: ${%Value} mln'
  				);

  			// set the chart title
  			chart.title('Resilience: Project Disbursements by Location');

  			chart.animation(true);

  			// set the container id
  			chart.container('country-stack');

  			var labels = chart.xAxis().labels();
  			labels.enabled(true);

  			chart
  				.yAxis()
  				.labels()
  				.format('${%value} mln');

  			// initiate drawing the chart
  			chart.draw();
  		},

  		renderPie() {
  			const chart = anychart.pie(this.resilienceDataPie);

  			chart.title('Key Implementers of Reslience Projects');
  			chart.container('pie-chart');
  			chart.animation(true);
  			chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,}');

  			chart.draw();
  		},
  	},
  	mounted() {
  		this.renderChart();
  		this.renderStack();
  		this.renderCountryStack();
  		this.renderPie();
  	},
  };
</script>

<style scoped>
  /* make sure div#id has a size defined, otherwise nothing will render */

  #bar-chart {
  	width: 100%;
  	height: 100%;
  	margin: 0;
  	padding: 0;
  }
  #pie-chart,
  #stack-chart,
  #country-stack {
  	height: 370px;
  }
  .bold-row {
  	font-weight: bold;
  }
  table {
  	overflow: auto;
  }
</style>

