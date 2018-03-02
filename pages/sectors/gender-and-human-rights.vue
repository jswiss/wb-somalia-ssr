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
          <div id="year-stack"></div>
        </div>
        <div class="column is-1"></div>
        <div class="column is-5">
          <div id="stack-chart"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column is-8 is-mobile">
          <h4 class="title is-4">{{ title }}: Disbursement of Funds by Year & Location</h4>
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
                <td>2016</td>
                <td>0.7</td>
                <td>5</td>
                <td>0.2</td>
                <td>0.2</td>
                <td>0.3</td>
                <td>2.2</td>
                <td>1.8</td>
                <td>3.9</td>
                <td>1.7</td>
                <td>16</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>0.1</td>
                <td>4.5</td>
                <td>0.3</td>
                <td>0.3</td>
                <td>0.5</td>
                <td>2.5</td>
                <td>1.6</td>
                <td>2.9</td>
                <td>0.3</td>
                <td>13</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>0.1</td>
                <td>3.7</td>
                <td>0.1</td>
                <td>0.1</td>
                <td>0.2</td>
                <td>0.9</td>
                <td>0.7</td>
                <td>1.1</td>
                <td>0.2</td>
                <td>7.1</td>
              </tr>
              <tr class="bold-row">
                <td>Total:</td>
                <td>0.8</td>
                <td>13.1</td>
                <td>0.6</td>
                <td>0.6</td>
                <td>1</td>
                <td>5.7</td>
                <td>4.1</td>
                <td>7.9</td>
                <td>2.1</td>
                <td>36.1</td>
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
import { formatMillion } from '../helpers'

export default {
  name: 'gender-and-human-rights',
  layout: 'sectors',
  data() {
    return {
      genderHumanRightsData: [
        ["Government", formatMillion(172342)],
        ["Mix of implementers - involving government", formatMillion(3700000)],
        ["NGOs", formatMillion(31539718)],
        ["Private Sector", formatMillion(695274)]
      ],
      genderHumanRightsDataChart: [
        ["2016", 16.0],
        ["2017", 13.0],
        ["2018", 7.1]
      ],
      genderYearStackData: [
        ["FGS", 0.1, 0.1, 0.7],
        ["Benadir", 3.7, 4.5, 5],
        ["Galmudug", 0.1, 0.3, 0.2],
        ["Hiirshabelle", 0.1, 0.3, 0.2],
        ["Jubaland", 0.2, 0.5, 0.3],
        ["Puntland", 0.9, 2.5, 2.2],
        ["South West", 0.7, 1.6, 1.8],
        ["Somaliland", 1.1, 2.9, 3.9],
        ["Unattributed", 0.2, 0.3, 1.7]
      ],
      genderDataPie: [
        {x: "NGOs", value: formatMillion(31539718),
        normal: {fill: this.$store.state.color.blue}},
        {x: "Mix of implementers - involving government", value: formatMillion(3700000),
        normal: {fill: this.$store.state.color.green}},
        {x: "Private Sector", value: formatMillion(695274),
        normal: {fill: this.$store.state.color.yellow}},
        {x: "Government", value: formatMillion(172342),
        normal: {fill: this.$store.state.color.tan}},
      ],
    };
  },
  methods: {
    renderChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.genderHumanRightsData);

      const seriesData = dataSet.mapAs({x: 0, value: 1});

      const column = chart.column(seriesData);
      column
      .fill(this.$store.state.color.blue)
      .stroke(null)
      .labels()
      .enabled(true)
      .format('${%Value}{groupsSeparator:\\,} mln');

      chart.animation(true);

      chart.title("Gender & Human Rights, 2016-2018 spend ($) ");

      chart.yScale().minimum(0);

      chart.tooltip().format('${%Value}{groupsSeparator:\\,} mln');

      chart.interactivity().hoverMode('by-x');

      chart
      .yAxis()
      .labels()
      .format('${%Value}{groupsSeparator:\\,} mln');

      chart.xAxis(true);

      chart.container('container');

      chart.draw();
    },
    renderYearChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.genderHumanRightsDataChart);

      const seriesData = dataSet.mapAs({x: 0, value: 1});

      const column = chart.column(seriesData);
      column
      .fill(this.$store.state.color.blue)
      .stroke(null)
      .labels()
      .enabled(true)
      .format('${%Value}{groupsSeparator:\\,} mln');

      chart.animation(true);

      chart.title("Gender & Human Rights: Project Disbursements ");

      chart.yScale().minimum(0);

      chart.tooltip().format('${%Value}{groupsSeparator:\\,} mln');

      chart.interactivity().hoverMode('by-x');

      chart
      .yAxis()
      .labels()
      .format('${%Value}{groupsSeparator:\\,} mln');

      chart.xAxis(true);

      chart.container('stack-chart');

      chart.draw();
    },

    renderYearStack() {

      var chart = anychart.column();

      const dataSet = anychart.data.set(this.genderYearStackData);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});

      /* enable the value stacking mode
      on the default primary value scale*/
      chart.yScale().stackMode("value");

      chart.legend(true);
      // create column series
      chart
      .column(seriesData_1)
      .color(this.$store.state.color.blue)
      .stroke(null)
      .name("2018")
      .tooltip()
      .format('2018: ${%Value} mln');

      chart
      .column(seriesData_2)
      .color(this.$store.state.color.green)
      .stroke(null)
      .name("2017")
      .tooltip()
      .format('2017: ${%Value} mln');

      chart
      .column(seriesData_3)
      .color(this.$store.state.color.yellow)
      .stroke(null)
      .name("2016")
      .tooltip()
      .format('2016: ${%Value} mln');

  			chart.animation(true);

  			// set the chart title
  			chart.title('Gender & Human Rights: Project Disbursements by Location');

  			// set the container id
  			chart.container('year-stack');

  			var labels = chart.xAxis().labels();
  			labels.enabled(true);

  			chart
  				.yAxis()
  				.labels()
  				.format('${%value} mln');

      chart.title("Key Implementers of Gender & Human Rights Projects");
      chart.container("pie-chart");
      chart.animation(true);
      chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,} mln');

  			chart.title('Key Implementers of Gender & Human Rights Projects');
  			chart.container('pie-chart');
  			chart.animation(true);
  			chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,}');

  			chart.draw();
  		},
  	},
  	mounted() {
  		this.renderChart();
  		this.renderYearChart();
  		this.renderYearStack();
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
  #year-stack {
  	height: 370px;
  }
  .bold-row {
  	font-weight: bold;
  }
  table {
  	overflow: auto;
  }
</style>
