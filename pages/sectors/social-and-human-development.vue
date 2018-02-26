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
          <h4 class="title is-4">{{ title }}: Disbursement of Funds by Location</h4>
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
                <td>Education</td>
                <td>9.3</td>
                <td>5.4</td>
                <td>9.0</td>
                <td>12.0</td>
                <td>9.7</td>
                <td>15.3</td>
                <td>9.3</td>
                <td>24.1</td>
                <td>24.0</td>
                <td>118.1</td>
              </tr>
              <tr>
                <td>Health</td>
                <td>10.4</td>
                <td>53.0</td>
                <td>32.2</td>
                <td>38.3</td>
                <td>40.1</td>
                <td>58.4</td>
                <td>32.8</td>
                <td>65.6</td>
                <td>67.9</td>
                <td>398.9</td>
              </tr>
              <tr>
                <td>WASH</td>
                <td>&nbsp;</td>
                <td>5.0</td>
                <td>2.5</td>
                <td>2.5</td>
                <td>2.6</td>
                <td>5.9</td>
                <td>2.5</td>
                <td>5.0</td>
                <td>&nbsp;</td>
                <td>26.2</td>
              </tr>
              <tr class="bold-row">
                <td>Total</td>
                <td>19.6</td>
                <td>63.5</td>
                <td>43.7</td>
                <td>52.8</td>
                <td>52.5</td>
                <td>79.6</td>
                <td>44.6</td>
                <td>94.8</td>
                <td>92.0</td>
                <td>543.2</td>
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
  	name: 'social-and-human-development',
  	layout: 'sectors',
  	data() {
  		return {
  			title: 'Social and Human Development',
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
  				{
  					x: 'NGOs',
  					value: 219302286.6,
  					normal: { fill: this.$store.state.color.blue },
  				},
  				{
  					x: 'Mix of implementers - involving government',
  					value: 186777137.6,
  					normal: { fill: this.$store.state.color.green },
  				},
  				{
  					x: 'UN',
  					value: 64232464.15,
  					normal: { fill: this.$store.state.color.yellow },
  				},
  				{
  					x: 'Private Sector',
  					value: 19542741.02,
  					normal: { fill: this.$store.state.color.tan },
  				},
  				{
  					x: 'Donor Agency',
  					value: 16527777.78,
  					normal: { fill: this.$store.state.color.violet },
  				},
  				{
  					x: 'Government',
  					value: 11718557,
  					normal: { fill: this.$store.state.color.brown },
  				},
  				{
  					x: 'Other',
  					value: 25085515.16,
  					normal: { fill: this.$store.state.color.pink },
  				},
  			],
  			socialHumanDevelopmentLocationData: [
  				['FGS', 9.3, 10.4, 0],
  				['Benadir', 5.4, 53, 5],
  				['Galmudug', 9, 32.2, 2.5],
  				['Hiirshabelle', 12, 38.3, 2.5],
  				['Jubaland', 9.7, 40.1, 2.6],
  				['Puntland', 15.3, 58.4, 5.9],
  				['South West', 9.3, 32.8, 2.5],
  				['Somaliland', 24.1, 65.6, 5],
  				['Unattributed', 24, 67.9, 0],
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
  				.fill(this.$store.state.color.blue)
  				.labels()
  				.enabled(true)
  				.format('${%Value}{groupsSeparator:\\,}');

  			chart.animation(true);

  			chart.title('Social & Human Development, 2016-2018 spend ($) ');

  			chart.yScale().minimum(0);

  			chart.tooltip().format('${%Value}{groupsSeparator:\\,}');

  			chart.interactivity().hoverMode('by-x');

  			chart
  				.yAxis()
  				.labels()
  				.enabled(true)
  				.format('${%Value}{groupsSeparator:\\,}');

  			chart.xAxis(true);

  			chart.container('bar-chart');

  			chart.draw();
  		},
  		renderStack() {
  			var chart = anychart.column();

  			const dataSet = anychart.data.set(this.socialHumanDevelopmentDataStack);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });

  			// create a chart
  			var chart = anychart.column();

  			/* enable the value stacking mode
          on the default primary value scale*/
  			chart.yScale().stackMode('value');

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
  			chart.title(
  				'Social & Human Development: Project Disbursements by Sector'
  			);

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
  		renderPie() {
  			const chart = anychart.pie(this.socialHumanDevelopmentDataPie);

  			chart.title('Key Implementers of Social & Human Development Projects');
  			chart.container('pie-chart');
  			chart.animation(true);
  			chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,}');

  			chart.draw();
  		},

  		renderCountryStack() {
  			var chart = anychart.column();

  			const dataSet = anychart.data.set(
  				this.socialHumanDevelopmentLocationData
  			);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });

  			/* enable the value stacking mode
          on the default primary value scale*/
  			chart.yScale().stackMode('value');

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
  			chart.title(
  				'Social & Human Development: Project Disbursements by Location'
  			);

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
  	},
  	mounted() {
  		this.renderChart();
  		this.renderStack();
  		this.renderPie();
  		this.renderCountryStack();
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
