<template lang="html">
  <div id="sectors" class="container is-fluid">
    Effective, Efficient Institutions
    <div class="columns is-multiline">


      <div class="column is-half">
        <div id="pie-chart" class="column"></div>
      </div>

      <div class="column is-half">
        <div id="stack-chart" class="column"></div>
      </div>

    </div>

    <div id="container"></div>
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
          <td>Civil Service Reform / Public Administration</td>
          <td>19.9</td>
          <td>2.6</td>
          <td>0.8</td>
          <td>0.7</td>
          <td>1.3</td>
          <td>5.2</td>
          <td>6.8</td>
          <td>5.9</td>
          <td>5.7</td>
          <td>48.9</td>
        </tr>
        <tr>
          <td>Planning, M and E and Statistics</td>
          <td>9.8</td>
          <td>3.0</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>5.4</td>
          <td>1.2</td>
          <td>3.1</td>
          <td>1.5</td>
          <td>12.1</td>
          <td>37.2</td>
        </tr>
        <tr>
          <td>Public Financial Management</td>
          <td>146.1</td>
          <td>0.0</td>
          <td>3.6</td>
          <td>3.5</td>
          <td>7.9</td>
          <td>15.9</td>
          <td>4.9</td>
          <td>12.8</td>
          <td>8.3</td>
          <td>202.8</td>
        </tr>
        <tr>
          <td>State and Local Governance</td>
          <td>10.5</td>
          <td>3.5</td>
          <td>11.9</td>
          <td>2.9</td>
          <td>14.7</td>
          <td>17.5</td>
          <td>21.1</td>
          <td>18.3</td>
          <td>9.4</td>
          <td>109.8</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>186.4</td>
          <td>9.2</td>
          <td>16.7</td>
          <td>7.6</td>
          <td>29.3</td>
          <td>39.8</td>
          <td>36.0</td>
          <td>38.5</td>
          <td>35.4</td>
          <td>398.8</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { formatMillion } from '../helpers'

export default {
  name: 'institutions',
  layout: 'sectors',
  data() {
    return {
      institutionsData: [
        ["Academic / Research Institutions", formatMillion(420722)],
        ["Donor Agency", formatMillion(4920635)],
        ["Government", formatMillion(171206377)],
        ["IFI", formatMillion(12862328)],
        ["Mix of implementers - involving government", formatMillion(3036189)],
        ["NGOs", formatMillion(19830111)],
        ["Other", formatMillion(1222222)],
        ["Private Sector", formatMillion(104214427)],
        ["UN", formatMillion(79737620)],
        ["Unclear / TBD", formatMillion(1353615)]
      ],
      institutionsDataStack: [
        ["2016", 63.5, 63.9, 9.9, 17.9],
        ["2017", 45.2, 86.8, 14.1, 20.7],
        ["2018", 1.1, 52.1, 13.2, 10.4]
      ],
      institutionsDataPie: [
        {x: "UN", value: formatMillion(79498786),
        normal: {fill: this.$store.state.color.blue}},
        {x: "NGOs", value: formatMillion(8419492),
        normal: {fill: this.$store.state.color.green}},
        {x: "Unclear/TBD", value: formatMillion(6186133),
        normal: {fill: this.$store.state.color.yellow}},
        {x: "Private Sector", value: formatMillion(6182000),
        normal: {fill: this.$store.state.color.tan}},
        {x: "Government", value: formatMillion(4884026),
        normal: {fill: this.$store.state.color.violet}},
        {x: "Mix of implementers - no government", value: formatMillion(4717214),
        normal: {fill: this.$store.state.color.brown}},
        {x: "Military", value: formatMillion(4525200),
        normal: {fill: this.$store.state.color.pink}},
        {x: "Mix of implementers - government", value: formatMillion(4123420),
        normal: {fill: this.$store.state.color.lightblue}}
      ],
      institutionsLocationStack: [
        ["FGS", 10.5, 146.1, 9.8, 19.9],
        ["Benadir", 3.5, 0.0, 3.0, 2.6],
        ["Galmudug", 11.9, 3.6, 0.5, 0.8],
        ["Hiirshabelle", 2.9, 3.5, 0.5, 0.7],
        ["Jubaland", 14.7, 7.9, 5.4, 1.3],
        ["Puntland", 17.5, 15.9, 1.2, 5.2],
        ["South West", 21.1, 4.9, 3.1, 6.8],
        ["Somaliland", 18.3, 12.8, 1.5, 5.9],
        ["Unattributed", 9.4, 8.3, 12.1, 5.7]
      ]
    };
  },
  methods: {
    renderChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.institutionsData);

      const seriesData = dataSet.mapAs({x: 0, value: 1});

      const column = chart.column(seriesData);
      column
      .fill(this.$store.state.color.blue)
      .stroke(null)
      .labels()
      .enabled(true)
      .format('${%Value}{groupsSeparator:\\,} mln');

      chart.animation(true);

      chart.title("Effective, Efficient Institutions, 2016-2018 spend ($) ");

      chart.yScale().minimum(0);

      chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,} mln');

      chart.interactivity().hoverMode('by-x');

      chart
      .yAxis()
      .labels()
      .format('${%Value}{groupsSeparator:\\,} mln');

      chart.xAxis(true);

      chart.container('container');

      chart.draw();
    },
    renderStack() {

      var chart = anychart.column();

      const dataSet = anychart.data.set(this.institutionsDataStack);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});
      var seriesData_4 = dataSet.mapAs({x: 0, value: 4});

      /* enable the value stacking mode
      on the default primary value scale*/
      chart.yScale().stackMode("value");

      // create column series

      chart.legend(true)

      chart.
      column(seriesData_1)
      .color(this.$store.state.color.blue)
      .stroke(null)
      .name("State and Local Governance")
      .tooltip()
      .format('State and Local Governance: ${%Value} mln');

      chart
      .column(seriesData_2)
      .color(this.$store.state.color.green)
      .stroke(null)
      .name("Public Financial Management")
      .tooltip()
      .format('Public Financial Management: ${%Value} mln');

      chart
      .column(seriesData_3)
      .color(this.$store.state.color.yellow)
      .stroke(null)
      .name("Planning, M&E and Statistics")
      .tooltip()
      .format('Planning, M&E and Statistics: ${%Value} mln');

      chart
      .column(seriesData_4)
      .color(this.$store.state.color.tan)
      .stroke(null)
      .name("Civil Service Reform/Public Administration")
      .tooltip()
      .format('Civil Service Reform/Public Administration: ${%Value} mln');


      // set the chart title
      chart.title("Effective, Efficient Institutions: Project Disbursements by Sector");

      // set the container id
      chart.container("stack-chart");

      var labels = chart.xAxis().labels();
      labels.enabled(true);

      chart.yAxis().labels().format("${%value} mln");

      // initiate drawing the chart
      chart.draw();
    },
    renderPie() {
      const chart = anychart.pie(this.institutionsDataPie);

      chart.title("Key Implementers of Effective, Efficient Institutions Projects");
      chart.container("pie-chart");
      chart.animation(true);
      chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,} mln');

      chart.draw();
    },
    renderCountryStack() {

      var chart = anychart.column();

      const dataSet = anychart.data.set(this.institutionsLocationStack);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});
      var seriesData_4 = dataSet.mapAs({x: 0, value: 3});

      // create a chart
      var chart = anychart.column();

      /* enable the value stacking mode
      on the default primary value scale*/
      chart.yScale().stackMode("value");

      chart.legend(true);
      // create column series
      chart.
      column(seriesData_1)
      .color(this.$store.state.color.blue)
      .stroke(null)
      .name("State and Local Governance")
      .tooltip()
      .format('State and Local Governance: ${%Value} mln');

      chart
      .column(seriesData_2)
      .color(this.$store.state.color.green)
      .stroke(null)
      .name("Public Financial Management")
      .tooltip()
      .format('Public Financial Management: ${%Value} mln');

      chart
      .column(seriesData_3)
      .color(this.$store.state.color.yellow)
      .stroke(null)
      .name("Planning, M&E and Statistics")
      .tooltip()
      .format('Planning, M&E and Statistics: ${%Value} mln');

      chart
      .column(seriesData_4)
      .color(this.$store.state.color.tan)
      .stroke(null)
      .name("Civil Service Reform/Public Administration")
      .tooltip()
      .format('Civil Service Reform/Public Administration: ${%Value} mln');
      // set the chart title
      chart.title("Effective, Efficient Institutions: Project Disbursements by Location");

      // set the container id
      chart.container('country-stack');

      var labels = chart.xAxis().labels();
      labels.enabled(true);

      chart.yAxis().labels().format("${%value} mln");


      // initiate drawing the chart
      chart.draw();
    },


  },
  mounted() {
    this.renderChart();
    this.renderStack();
    this.renderPie();
    this.renderCountryStack();
  }
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

#pie-chart, #stack-chart, #container, #country-stack {
  height: 370px;
}

</style>
