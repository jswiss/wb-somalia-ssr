<template lang="html">
  <div id="sectors" class="container is-fluid">
    Infrastructure
    <div class="columns is-multiline">

      <div class="column is-half">
        <div id="pie-chart" class="column"></div>
        <div class="column"></div>
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
        <tr>
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
</template>





<script>
export default {
  name: 'infrastructure',
  layout: 'sectors',
  data() {
    return {
      infrastructureData: [
        ["Donor Agency", 6138444],
        ["Government", 26602499],
        ["IFI", 889142],
        ["Mix of implementers - involving government", 18076515],
        ["Mix of implementers - no government", 0],
        ["NGOs", 12502249],
        ["Private Sector", 16468854],
        ["UN", 31369634],
        ["Unclear / TBD", 2944444]
      ],
      infrastructureDataStack: [
        ["2016", 11.1, 9.7, 13.0, 5.3],
        ["2017", 12.7, 14.0, 13.6, 10.7],
        ["2018", 8.1, 3.5, 5.7, 7.7]
      ],
      infrastructureDataPie: [
        {x: "UN", value: 31369634,
        normal: {fill: this.$store.state.color.blue}},
        {x: "Government", value: 26602499,
        normal: {fill: this.$store.state.color.green}},
        {x: "Mix of implementers - involving government", value: 18076515,
        normal: {fill: this.$store.state.color.yellow}},
        {x: "Private Sector", value: 16468854,
        normal: {fill: this.$store.state.color.tan}},
        {x: "NGOs", value: 12502249,
        normal: {fill: this.$store.state.color.violet}},
        {x: "Donor Agencies", value: 6138444,
        normal: {fill: this.$store.state.color.brown}},
        {x: "Other", value: 3833586,
        normal: {fill: this.$store.state.color.pink}}
      ],
      infrastructureLocationStack: [
        ["FGS", 5.4, 5.9, 0.5, 0.7],
        ["Benadir", 0.4, 1.4, 3.2, 0.4],
        ["Galmudug", 0.5, 1.1, 0, 1.7],
        ["Hiirshabelle", 1.4, 1.6, 0, 1],
        ["Jubaland", 0.5, 2.6, 1.1, 1.7],
        ["Puntland", 1.2, 8.1, 6.4, 4.6],
        ["South West", 0.5, 6.1, 0, 1.7],
        ["Somaliland", 11, 5.5, 15.7, 20.2],
        ["Unattributed", 2.8, 0, 0.2, 0]
      ]
    };
  },
  methods: {
    renderChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.infrastructureData);

      const seriesData = dataSet.mapAs({x: 0, value: 1});

      const column = chart.column(seriesData);
      column
      .fill(this.$store.state.color.blue)
      .labels()
      .enabled(true)
      .format('${%Value}{groupsSeparator:\\,}');

      chart.animation(true);

      chart.title("Infrastructure, 2016-2018 spend ($) ");

      chart.yScale().minimum(0);

      chart.tooltip().format('${%Value}{groupsSeparator:\\,}');

      chart.interactivity().hoverMode('by-x');

      chart
      .yAxis()
      .labels()
      .format('${%Value}{groupsSeparator:\\,}');

      chart.xAxis(true);

      chart.container('container');

      chart.draw();
    },
    renderStack() {

      var chart = anychart.column();

      const dataSet = anychart.data.set(this.infrastructureDataStack);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});
      var seriesData_4 = dataSet.mapAs({x: 0, value: 4});

      // create a chart
      var chart = anychart.column();

      /* enable the value stacking mode
      on the default primary value scale*/
      chart.yScale().stackMode("value");

      chart.legend(true);
      // create column series
      chart
      .column(seriesData_1)
      .color(this.$store.state.color.blue)
      .name("Water and Sanitation")
      .tooltip()
      .format('Water and Sanitation: ${%Value} mln');

      chart
      .column(seriesData_2)
      .color(this.$store.state.color.green)
      .name("Transport: Roads, Ports and Airports")
      .tooltip()
      .format('Transport: Roads, Ports and Airports: ${%Value} mln');

      chart
      .column(seriesData_3)
      .color(this.$store.state.color.yellow)
      .name("Mixed Infrastructure")
      .tooltip()
      .format('Mixed Infrastructure: ${%Value} mln');

      chart
      .column(seriesData_4)
      .color(this.$store.state.color.tan)
      .name("Energy and ICT")
      .tooltip()
      .format('Energy and ICT: ${%Value} mln');

      // set the chart title
      chart.title("Infrastructure: Project Disbursements by Sector");

      // set the container id
      chart.container("stack-chart");

      var labels = chart.xAxis().labels();
      labels.enabled(true);

      chart.yAxis().labels().format("${%value} mln");

      // initiate drawing the chart
      chart.draw();
    },
    renderPie() {
      const chart = anychart.pie(this.infrastructureDataPie);

      chart.title("Key Implementers of Infrastructure Projects");
      chart.container("pie-chart");
      chart.animation(true);
      chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,}');

      chart.draw();
    },
    renderCountryStack() {

      var chart = anychart.column();

      const dataSet = anychart.data.set(this.infrastructureLocationStack);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});
      var seriesData_4 = dataSet.mapAs({x: 0, value: 3});

      /* enable the value stacking mode
      on the default primary value scale*/
      chart.yScale().stackMode("value");

      chart.legend(true);
      // create column series
      chart
      .column(seriesData_1)
      .color(this.$store.state.color.blue)
      .name("Water and Sanitation")
      .tooltip()
      .format('Water and Sanitation: ${%Value} mln');

      chart
      .column(seriesData_2)
      .color(this.$store.state.color.green)
      .name("Transport: Roads, Ports and Airports")
      .tooltip()
      .format('Transport: Roads, Ports and Airports: ${%Value} mln');

      chart
      .column(seriesData_3)
      .color(this.$store.state.color.yellow)
      .name("Mixed Infrastructure")
      .tooltip()
      .format('Mixed Infrastructure: ${%Value} mln');

      chart
      .column(seriesData_4)
      .color(this.$store.state.color.tan)
      .name("Energy and ICT")
      .tooltip()
      .format('Energy and ICT: ${%Value} mln');
      // set the chart title
      chart.title("Infrastructure: Project Disbursements by Location");

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
