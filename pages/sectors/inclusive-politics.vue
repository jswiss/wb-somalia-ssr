<template lang="html">
  <div id="sectors" class="container is-fluid">
    Inclusive Politics
    <div class="columns is-multiline">

      <div class="column is-half">
        <div id="pie-chart" class="column"></div>
        <div class="column"></div>
      </div>


      <div class="column is-half">
        <div id="container" class="column"></div>
      </div>
    </div>

    <div id="country-stack"></div>
    <table id="table" class="table is-striped is-hoverable is-bordered">
      <thead>
        <tr>
          <th>
          </th>
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
          <td>2016</td>
          <td>17.6</td>
          <td>6.2</td>
          <td>8.3</td>
          <td>6.5</td>
          <td>15.9</td>
          <td>6.7</td>
          <td>7</td>
          <td>18</td>
          <td>9.9</td>
          <td>96.1</td>
        </tr>
        <tr>
          <td>2017</td>
          <td>12.8</td>
          <td>3.3</td>
          <td>2.1</td>
          <td>2.8</td>
          <td>9.4</td>
          <td>4</td>
          <td>9.7</td>
          <td>9.7</td>
          <td>11.9</td>
          <td>65.7</td>
        </tr>
        <tr>
          <td>2018</td>
          <td>4</td>
          <td>1</td>
          <td>0.4</td>
          <td>1.1</td>
          <td>4.6</td>
          <td>1.8</td>
          <td>4.7</td>
          <td>4</td>
          <td>6.7</td>
          <td>28.3</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>34.4</td>
          <td>10.6</td>
          <td>10.8</td>
          <td>10.4</td>
          <td>29.9</td>
          <td>12.5</td>
          <td>21.4</td>
          <td>31.7</td>
          <td>28.4</td>
          <td>190.2</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
  	name: 'inclusive-politics',
  	layout: 'sectors',
  	data() {
  		return {
  			inclusivePoliticsData: [
  				['Academic / Research Institutions', 1969387],
  				['Government', 1861751],
  				['IFI', 2749769],
  				['Mix of implementers - involving government', 329659],
  				['Mix of implementers - no government', 3589589],
  				['NGOs', 81895424],
  				['Private Sector', 36028311],
  				['Regional Actors', 944444],
  				['UN', 57038475],
  				['Unclear / TBD', 3787340],
  			],
  			inclusivePoliticsChart: [
  				['2016', 96124800],
  				['2017', 65736375],
  				['2018', 28332975],
  			],
  			inclusivePoliticsLocationStack: [
  				['FGS', 4.0, 12.8, 17.6],
  				['Benadir', 1.0, 3.3, 6.2],
  				['Galmudug', 0.4, 2.1, 8.3],
  				['Hiirshabelle', 1.1, 2.8, 6.5],
  				['Jubaland', 4.6, 9.4, 15.9],
  				['Puntland', 1.8, 4.0, 6.7],
  				['South West', 4.7, 9.7, 7.0],
  				['Somaliland', 4.0, 9.7, 18.0],
  				['Unattributed', 6.7, 11.9, 9.9],
  			],
  			inclusivePoliticsPie: [
  				{
  					x: 'NGOs',
  					value: 81895424,
  					normal: { fill: this.$store.state.color.blue },
  				},
  				{
  					x: 'UN',
  					value: 57038475,
  					normal: { fill: this.$store.state.color.green },
  				},
  				{
  					x: 'Private Sector',
  					value: 36028311,
  					normal: { fill: this.$store.state.color.yellow },
  				},
  				{
  					x: 'Other',
  					value: 15231941,
  					normal: { fill: this.$store.state.color.tan },
  				},
  			],
  		};
  	},
  	methods: {
  		renderChart() {
  			const chart = anychart.cartesian();
  			const dataSet = anychart.data.set(this.inclusivePoliticsChart);

  			const seriesData = dataSet.mapAs({ x: 0, value: 1 });

  			const column = chart.column(seriesData);
  			column
  				.fill(this.$store.state.color.blue)
  				.labels()
  				.enabled(true)
  				.format('${%Value}{groupsSeparator:\\,}');

  			chart.animation(true);

  			chart.title('Inclusive Politics: Project Disbursements Reported in 2017');

  			chart.yScale().minimum(0);

  			// chart
  			chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,}');

  			// .tooltip()
  			// .displayMode('union')
  			// .positionMode('point')
  			// .unionFormat(function(){
  			//   return `Plain: $${
  			//     this.points[0].value
  			//   } mln \n Fact: $${this.points[0].value} `;
  			// });

  			chart.interactivity().hoverMode('by-x');

  			chart
  				.yAxis()
  				.labels()
  				.format('${%Value}{groupsSeparator:\\,}');

  			chart.xAxis(true);

  			chart.container('container');

  			chart.draw();
  		},
  		renderPie() {
  			const chart = anychart.pie(this.inclusivePoliticsPie);

  			chart.title('Inclusive Politics: Key Implementers');
  			chart.container('pie-chart');
  			chart.animation(true);
  			chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,}');

  			chart.draw();
  		},
  		renderCountryStack() {
  			var chart = anychart.column();

  			const dataSet = anychart.data.set(this.inclusivePoliticsLocationStack);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });

  			// create a chart
  			var chart = anychart.column();

  			/* enable the value stacking mode
        on the default primary value scale*/
  			chart.yScale().stackMode('value');

  			// create column series
  			chart.legend(true);

  			// create column series
  			chart
  				.column(seriesData_1)
  				.color(this.$store.state.color.blue)
  				.name('2018')
  				.tooltip()
  				.format('2018: ${%Value} mln');

  			chart
  				.column(seriesData_2)
  				.color(this.$store.state.color.green)
  				.name('2017')
  				.tooltip()
  				.format('2017: ${%Value} mln');

  			chart
  				.column(seriesData_3)
  				.color(this.$store.state.color.yellow)
  				.name('2016')
  				.tooltip()
  				.format('2016: ${%Value} mln');

  			// set the chart title
  			chart.title('Inclusive Politics: Project Disbursements by Location');

  			// set the container id
  			chart.container('country-stack');

  			var labels = chart.xAxis().labels();
  			labels.enabled(true);

  			chart
  				.yAxis()
  				.labels()
  				.format('${%value} mln');
  			chart.animation(true);

  			// initiate drawing the chart
  			chart.draw();
  		},
  	},
  	mounted() {
  		this.renderChart();
  		this.renderPie();
  		this.renderCountryStack();
  	},
  };
</script>

<style scoped>
  #container {
  	width: 100%;
  	height: 100%;
  	margin: 0;
  	padding: 0;
  }

  #country-stack {
  	height: 370px;
  }

  #pie-chart {
  	width: 100%;
  	height: 370px;
  	margin: 0;
  	padding: 0;
  }

  #table {
  	margin-top: 50px;
  }
</style>
