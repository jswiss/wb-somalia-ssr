<template lang="html">
  <div id="section" class="section">
    <div id="rule-of-law" class="container is-fluid">
      <h1 class="title is-1">{{ title }}</h1>
      <h4 class="subtitle is-5">{{ subTitle }}</h4>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10 is-mobile">
          <div id="country-stack"></div>
        </div>
        <div class="column is-1"></div>
      </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-2 is-mobile">
          <div id="pie-chart" class="column"></div>
        </div>
        <div class="column is-1"></div>
        <div class="column is-3 is-mobile">
          <div id="bar-chart"></div>
        </div>
        <div class="column is-1"></div>
      </div>

      <div class="columns">
        <div class="column is-2"></div>
        <div class="column is-8 is-mobile">
          <h4 class="title is-4">{{ title }}: Disbursement of Funds by Year & Location (Millions US$)</h4>
          <table id="table" class="table is-striped is-hoverable is-bordered is-narrow is-mobile">
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
                <td>25.2</td>
                <td>5.6</td>
                <td>0.1</td>
                <td>3.2</td>
                <td>4.2</td>
                <td>7.9</td>
                <td>4</td>
                <td>9</td>
                <td>6.3</td>
                <td>65.5</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>17.5</td>
                <td>3.5</td>
                <td>0.6</td>
                <td>4.4</td>
                <td>4.4</td>
                <td>3.3</td>
                <td>4.5</td>
                <td>3.3</td>
                <td>6.7</td>
                <td>48.3</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>0.2</td>
                <td>0.9</td>
                <td>0.6</td>
                <td>0.6</td>
                <td>0.7</td>
                <td>0.1</td>
                <td>0.7</td>
                <td>0.4</td>
                <td>0.5</td>
                <td>4.7</td>
              </tr>
              <tr class="bold-row">
                <td>Total</td>
                <td>42.9</td>
                <td>10.1</td>
                <td>1.3</td>
                <td>8.2</td>
                <td>9.3</td>
                <td>11.3</td>
                <td>9.3</td>
                <td>12.7</td>
                <td>13.5</td>
                <td>118.5</td>
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
  	name: 'rule-of-law',
  	layout: 'sectors',
  	data() {
  		return {
  			title: 'Rule of Law',
  			subTitle: 'All values in millions US$',
  			ruleOfLawData: [
  				['Government', 4884026],
  				['Military', 4525200],
  				['Mix of implementers - involving government', 4123420],
  				['Mix of implementers - no government', 4717214],
  				['NGOs', 8419492],
  				['Private Sector', 6182000],
  				['UN', 79498786],
  				['Unclear / TBD', 6186113],
  			],
  			ruleOfLawChart: [
  				['2016', formatMillion(65544693)],
  				['2017', formatMillion(48282515)],
  				['2018', formatMillion(4709043)],
  			],
  			ruleOfLawDataPie: [
  				{
  					x: 'UN',
  					value: formatMillion(79498786),
  					normal: { fill: this.$store.state.color.blue },
  				},
  				{
  					x: 'NGOs',
  					value: formatMillion(8419492),
  					normal: { fill: this.$store.state.color.green },
  				},
  				{
  					x: 'Unclear/TBD',
  					value: formatMillion(6186133),
  					normal: { fill: this.$store.state.color.yellow },
  				},
  				{
  					x: 'Private Sector',
  					value: formatMillion(6182000),
  					normal: { fill: this.$store.state.color.tan },
  				},
  				{
  					x: 'Government',
  					value: formatMillion(4884026),
  					normal: { fill: this.$store.state.color.violet },
  				},
  				{
  					x: 'Mix of implementers - no government',
  					value: formatMillion(4717214),
  					normal: { fill: this.$store.state.color.brown },
  				},
  				{
  					x: 'Military',
  					value: formatMillion(4525200),
  					normal: { fill: this.$store.state.color.pink },
  				},
  				{
  					x: 'Mix of implementers - government',
  					value: formatMillion(4123420),
  					normal: { fill: this.$store.state.color.lightblue },
  				},
  			],
  			ruleOfLawLocationStack: [
  				['FGS', 0.2, 17.5, 25.2],
  				['Benadir', 0.9, 3.5, 5.6],
  				['Galmudug', 0.6, 0.6, 0.1],
  				['Hiirshabelle', 0.6, 4.4, 3.2],
  				['Jubaland', 0.7, 4.4, 4.2],
  				['Puntland', 0.1, 3.3, 7.8],
  				['South West', 0.7, 4.5, 4.0],
  				['Somaliland', 0.4, 3.3, 9.0],
  				['Unattributed', 0.5, 6.7, 6.3],
  			],
  		};
  	},
  	methods: {
  		renderChart() {
  			const chart = anychart.cartesian();
  			const dataSet = anychart.data.set(this.ruleOfLawChart);

  			const seriesData = dataSet.mapAs({ x: 0, value: 1 });

  			const column = chart.column(seriesData);
  			column
  				.fill(this.$store.state.color.blue)
  				.stroke(null)
  				.labels()
  				.enabled(true)
  				.format('${%Value}{groupsSeparator:\\,} mln');

  			chart.animation(true);

  			chart.title('Rule of Law: Project Disbursements');

  			chart.yScale().minimum(0);

  			chart.tooltip().format('${%Value}{groupsSeparator:\\,} mln');

  			chart.interactivity().hoverMode('by-x');

  			chart
  				.yAxis()
  				.labels()
  				.format('${%Value}{groupsSeparator:\\,} mln');

  			chart.xAxis(true);

  			chart.container('bar-chart');

  			chart.draw();
  		},
  		renderPie() {
  			const chart = anychart.pie(this.ruleOfLawDataPie);

  			chart.title('Rule of Law: Key Implementers');
  			chart.container('pie-chart');
  			chart.animation(true);
  			chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,} mln');

  			chart.draw();
  		},
  		renderCountryStack() {
  			var chart = anychart.column();

  			const dataSet = anychart.data.set(this.ruleOfLawLocationStack);

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
  				.stroke(null)
  				.name('2018')
  				.tooltip()
  				.format('2018: ${%Value} mln');

  			chart
  				.column(seriesData_2)
  				.color(this.$store.state.color.green)
  				.stroke(null)
  				.name('2017')
  				.tooltip()
  				.format('2017: ${%Value} mln');

  			chart
  				.column(seriesData_3)
  				.color(this.$store.state.color.yellow)
  				.stroke(null)
  				.name('2016')
  				.tooltip()
  				.format('2016: ${%Value} mln');

  			// set the chart title
  			chart.title('Rule of Law: Project Disbursements by Location');

  			// set the container id
  			chart.container('country-stack');

  			chart
  				.xAxis()
  				.labels()
  				.rotation(-70)
  				.fontSize(10);

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
  #country-stack {
  	height: 370px;
  }
  table {
  	overflow: auto;
  }
  .bold-row {
  	font-weight: bold;
  }
</style>
