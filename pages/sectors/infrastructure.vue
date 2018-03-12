<template lang="html">
  <div id="section" class="section">
    <div id="sectors" class="container is-fluid">
      <h1 class="title is-1">{{ title }}</h1>
      <h4 class="subtitle is-5">{{ subTitle }}</h4>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10 is-mobile">
          <div id="bar-chart"></div>
        </div>
        <div class="column is-1"></div>
      </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-4 is-mobile">
          <div id="pie-chart" class="column"></div>
        </div>
        <div class="column is-1"></div>
        <div class="column is-4 is-mobile">
          <div id="stack-chart" class="column"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10 is-mobile">
          <div id="country-stack"></div>
        </div>
        <div class="column is-1"></div>
      </div>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column is-8 is-mobile">
          <h4 class="title is-4">{{ title }}: Disbursement of Funds by Subsector & Location (Millions US$)</h4>
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
                <td>Energy and ICT</td>
                <td>5.4</td>
                <td>0.4</td>
                <td>0.5</td>
                <td>1.4</td>
                <td>0.5</td>
                <td>1.2</td>
                <td>0.5</td>
                <td>11</td>
                <td>2.8</td>
                <td>23.7</td>
              </tr>
              <tr>
                <td>Mixed Infrastructure</td>
                <td>5.9</td>
                <td>1.4</td>
                <td>1.1</td>
                <td>1.6</td>
                <td>2.6</td>
                <td>8.1</td>
                <td>6.1</td>
                <td>5.5</td>
                <td>&nbsp;</td>
                <td>32.3</td>
              </tr>
              <tr>
                <td>Transport: Roads, Ports, Airports</td>
                <td>0.5</td>
                <td>3.2</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>1.1</td>
                <td>6.4</td>
                <td>&nbsp;</td>
                <td>15.7</td>
                <td>0.2</td>
                <td>27.1</td>
              </tr>
              <tr>
                <td>Water and Sanitation (Urban)</td>
                <td>0.7</td>
                <td>0.4</td>
                <td>1.7</td>
                <td>1</td>
                <td>1.7</td>
                <td>4.6</td>
                <td>1.7</td>
                <td>20.2</td>
                <td>&nbsp;</td>
                <td>31.9</td>
              </tr>
              <tr class="bold-row">
                <td>Total</td>
                <td>12.5</td>
                <td>5.4</td>
                <td>3.3</td>
                <td>4</td>
                <td>5.8</td>
                <td>20.4</td>
                <td>8.3</td>
                <td>52.4</td>
                <td>2.9</td>
                <td>115</td>
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
  import { formatMillion } from '../helpers';

  export default {
  	name: 'infrastructure',
  	layout: 'sectors',
  	data() {
  		return {
  			title: 'Infrastructure',
  			subTitle: 'All values in millions US$',
  			infrastructureData: [
  				['Donor Agency', formatMillion(6138444)],
  				['Government', formatMillion(26602499)],
  				['IFI', formatMillion(889142)],
  				[
  					'Mix of implementers\n - involving government',
  					formatMillion(18076515),
  				],
  				['Mix of implementers\n - no government', formatMillion(0)],
  				['NGOs', formatMillion(12502249)],
  				['Private Sector', formatMillion(16468854)],
  				['UN', formatMillion(31369634)],
  				['Unclear / TBD', formatMillion(2944444)],
  			],
  			infrastructureDataStack: [
  				['2016', 11.1, 9.7, 13.0, 5.3],
  				['2017', 12.7, 14.0, 13.6, 10.7],
  				['2018', 8.1, 3.5, 5.7, 7.7],
  			],
  			infrastructureDataPie: [
  				{
  					x: 'UN',
  					value: formatMillion(31369634),
  					normal: { fill: this.$store.state.color.blue },
  				},
  				{
  					x: 'Government',
  					value: formatMillion(26602499),
  					normal: { fill: this.$store.state.color.green },
  				},
  				{
  					x: 'Mix of implementers\n - involving government',
  					value: formatMillion(18076515),
  					normal: { fill: this.$store.state.color.yellow },
  				},
  				{
  					x: 'Private Sector',
  					value: formatMillion(16468854),
  					normal: { fill: this.$store.state.color.tan },
  				},
  				{
  					x: 'NGOs',
  					value: formatMillion(12502249),
  					normal: { fill: this.$store.state.color.violet },
  				},
  				{
  					x: 'Donor Agencies',
  					value: formatMillion(6138444),
  					normal: { fill: this.$store.state.color.brown },
  				},
  				{
  					x: 'Other',
  					value: formatMillion(3833586),
  					normal: { fill: this.$store.state.color.pink },
  				},
  			],
  			infrastructureLocationStack: [
  				['FGS', 5.4, 5.9, 0.5, 0.7],
  				['Benadir', 0.4, 1.4, 3.2, 0.4],
  				['Galmudug', 0.5, 1.1, 0, 1.7],
  				['Hiirshabelle', 1.4, 1.6, 0, 1],
  				['Jubaland', 0.5, 2.6, 1.1, 1.7],
  				['Puntland', 1.2, 8.1, 6.4, 4.6],
  				['South West', 0.5, 6.1, 0, 1.7],
  				['Somaliland', 11, 5.5, 15.7, 20.2],
  				['Unattributed', 2.8, 0, 0.2, 0],
  			],
  		};
  	},
  	methods: {
  		renderChart() {
  			const chart = anychart.cartesian();
  			const dataSet = anychart.data.set(this.infrastructureData);

  			const seriesData = dataSet.mapAs({ x: 0, value: 1 });

  			const column = chart.column(seriesData);
  			column
  				.fill(this.$store.state.color.blue)
  				.stroke(null)
  				.labels()
  				.enabled(true)
  				.format('${%Value}{groupsSeparator:\\,} mln');

  			chart.animation(true);

  			chart.title('Infrastructure, 2016-2018 spend ($) ');

  			chart.yScale().minimum(0);

  			chart.tooltip().format('${%Value}{groupsSeparator:\\,} mln');

  			chart.interactivity().hoverMode('by-x');

  			chart
  				.yAxis()
  				.labels()
  				.format('${%Value}{groupsSeparator:\\,} mln');

  			chart
  				.xAxis()
  				.labels()
  				// .rotation(-60)
  				.fontSize(10);
  			// enabling stagger mode
  			chart.xAxis().staggerMode(true);
  			// adjusting settings for stagger mode
  			chart.xAxis().staggerLines(2);

  			chart.container('bar-chart');

  			chart.draw();
  		},
  		renderStack() {
  			var chart = anychart.column();

  			const dataSet = anychart.data.set(this.infrastructureDataStack);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });
  			var seriesData_4 = dataSet.mapAs({ x: 0, value: 4 });

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
  				.stroke(null)
  				.name('Water and Sanitation')
  				.tooltip()
  				.format('Water and Sanitation: ${%Value} mln');

  			chart
  				.column(seriesData_2)
  				.color(this.$store.state.color.green)
  				.stroke(null)
  				.name('Transport: Roads, Ports and Airports')
  				.tooltip()
  				.format('Transport: Roads, Ports and Airports: ${%Value} mln');

  			chart
  				.column(seriesData_3)
  				.color(this.$store.state.color.yellow)
  				.stroke(null)
  				.name('Mixed Infrastructure')
  				.tooltip()
  				.format('Mixed Infrastructure: ${%Value} mln');

  			chart
  				.column(seriesData_4)
  				.color(this.$store.state.color.tan)
  				.stroke(null)
  				.name('Energy and ICT')
  				.tooltip()
  				.format('Energy and ICT: ${%Value} mln');

  			// set the chart title
  			chart.title('Infrastructure: Project Disbursements by Sector');

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
  			const chart = anychart.pie(this.infrastructureDataPie);

  			chart.title('Key Implementers of Infrastructure Projects');
  			chart.container('pie-chart');
  			chart.animation(true);
  			chart.tooltip().format('${%Value}{groupsSeparator:\\,} mln');

  			chart.draw();
  		},
  		renderCountryStack() {
  			var chart = anychart.column();

  			const dataSet = anychart.data.set(this.infrastructureLocationStack);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });
  			var seriesData_4 = dataSet.mapAs({ x: 0, value: 3 });

  			/* enable the value stacking mode
                      on the default primary value scale*/
  			chart.yScale().stackMode('value');

  			chart.legend(true);
  			// create column series
  			chart
  				.column(seriesData_1)
  				.color(this.$store.state.color.blue)
  				.stroke(null)
  				.name('Water and Sanitation')
  				.tooltip()
  				.format('Water and Sanitation: ${%Value} mln');

  			chart
  				.column(seriesData_2)
  				.color(this.$store.state.color.green)
  				.stroke(null)
  				.name('Transport: Roads, Ports and Airports')
  				.tooltip()
  				.format('Transport: Roads, Ports and Airports: ${%Value} mln');

  			chart
  				.column(seriesData_3)
  				.color(this.$store.state.color.yellow)
  				.stroke(null)
  				.name('Mixed Infrastructure')
  				.tooltip()
  				.format('Mixed Infrastructure: ${%Value} mln');

  			chart
  				.column(seriesData_4)
  				.color(this.$store.state.color.tan)
  				.stroke(null)
  				.name('Energy and ICT')
  				.tooltip()
  				.format('Energy and ICT: ${%Value} mln');
  			// set the chart title
  			chart.title('Infrastructure: Project Disbursements by Location');

  			// set the container id
  			chart.container('country-stack');

  			chart
  				.xAxis()
  				.labels()
  				.rotation(-60)
  				.fontSize(10);
  			// enabling stagger mode
  			// chart.xAxis().staggerMode(true);
  			// adjusting settings for stagger mode
  			// chart.xAxis().staggerLines(2);

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
  	height: 400px;
  	margin: 0;
  	padding: 0;
  }
  #pie-chart,
  #stack-chart,
  #country-stack {
  	height: 370px;
  	width: 100%;
  }
  .bold-row {
  	font-weight: bold;
  }
  table {
  	overflow: auto;
  }
</style>
