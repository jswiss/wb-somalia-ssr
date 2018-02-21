<template lang="html">
  <div id="sectors" class="container is-fluid">
    Economic Growth
    <div id="container"></div>
    <div id="stack-chart"></div>
    <div id="pie-chart"></div>
    <div id="country-chart"></div>

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
          <td>Private Sector Development</td>
          <td>8.5</td>
          <td>10.9</td>
          <td>4.8</td>
          <td>11.8</td>
          <td>13.9</td>
          <td>15.4</td>
          <td>10.5</td>
          <td>42.6</td>
          <td>8.4</td>
          <td>126.8</td>
        </tr>
        <tr>
          <td>Productive Sectors </td>
          <td>5.4</td>
          <td>0.6</td>
          <td>0.6</td>
          <td>3.1</td>
          <td>4.3</td>
          <td>4.3</td>
          <td>5.6</td>
          <td>16.9</td>
          <td>8.1</td>
          <td>49</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>13.9</td>
          <td>11.5</td>
          <td>5.4</td>
          <td>14.9</td>
          <td>18.2</td>
          <td>19.7</td>
          <td>16.2</td>
          <td>59.5</td>
          <td>16.5</td>
          <td>175.8</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: 'economic-growth',
  layout: 'sectors',
  data() {
    return {
      economicGrowthData: [
        ["Donor Agency", 8391376],
        ["Government", 8228265],
        ["IFI", 3013949],
        ["Mix of implementers - involving government", 19444243],
        ["Mix of implementers - no government", 433000],
        ["NGOs", 38335938],
        ["Private Sector", 56512142],
        ["Regional Actors", 1077778],
        ["UN", 40336126],
        ["Unclear / TBD", 0]
      ],
      economicGrowthDataStack: [
        ["2016", 18.0, 57.0],
        ["2017", 22.7, 41.7],
        ["2018", 8.3, 28.1]
      ],
      economicGrowthDataPie: [
        {x: "Private Sector", value: 56512142,
        normal: {fill: this.$store.state.color.blue}},
        {x: "UN", value: 40336126,
        normal: {fill: this.$store.state.color.green}},
        {x: "NGOs", value: 38335938,
        normal: {fill: this.$store.state.color.yellow}},
        {x: "Mix of implementers - no government", value: 19444243,
        normal: {fill: this.$store.state.color.tan}},
        {x: "Donor Agencies", value: 8391376,
        normal: {fill: this.$store.state.color.violet}},
        {x: "Government", value: 8228265,
        normal: {fill: this.$store.state.color.brown}},
        {x: "Other", value: 4524727,
        normal: {fill: this.$store.state.color.pink}}
      ],
      economicLocationStack: [
        ["FGS", 8.5, 5.4, 13.9],
        ["Benadir", 10.9, 0.6, 11.5],
        ["Galmudug", 4.8, 0.6, 5.4],
        ["Hiirshabelle", 11.8, 3.1, 14.9],
        ["Jubaland", 13.9, 4.3, 18.2],
        ["Puntland", 15.4, 4.3, 19.7],
        ["South West", 10.5, 5.6, 16.2],
        ["Somaliland", 42.6, 16.9, 59.5],
        ["Unattributed", 8.4, 8.1, 16.5]
      ]
    };
  },


  methods: {
    renderChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.economicGrowthData);

      const seriesData = dataSet.mapAs({x: 0, value: 1});

      const column = chart.column(seriesData);
      column
      .fill(this.$store.state.color.blue)
      .labels()
      .enabled(true)
      .format('${%Value}');

      chart.animation(true);

      chart.title("Economic Growth, 2016-2018 spend ($) ");

      chart.yScale().minimum(0);

      chart
      .tooltip()
      .displayMode('union')
      .position('point')
      .unionFormat(function(){
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

      var chart = anychart.column();

      const dataSet = anychart.data.set(this.economicGrowthDataStack);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});

      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});

      // create a chart
      var chart = anychart.column();

      chart.legend(true);

      /* enable the value stacking mode
      on the default primary value scale*/
      chart.yScale().stackMode("value");

      // create column series
      chart
      .column(seriesData_1)
      .color(this.$store.state.color.blue)
      .name("Productive Sectors (Agriculture, Fisheries, Livestock)")
      .tooltip()
      .format('Productive Sectors (Agriculture, Fisheries, Livestock): ${%Value} mln');


      chart
      .column(seriesData_2)
      .color(this.$store.state.color.green)
      .name("Private Sector Development")
      .tooltip()
      .format('Private Sector Development: ${%Value} mln');      

      // set the chart title
      chart.title("Economic Growth: Project Disbursements by Sector");

      // chart.xAxis(true);
      var labels = chart.xAxis().labels();
      labels.enabled(true);

      // set the container id
      chart.container("stack-chart");

      var labels = chart.xAxis().labels();
      labels.enabled(true);

      chart.yAxis().labels().format("${%value} mln");

      // initiate drawing the chart
      chart.draw();
    },
    renderPie() {
      const pieChart = anychart.pie(this.economicGrowthDataPie);

      pieChart.title("Economic Growth: Key Implementers");
      pieChart.container("pie-chart");
      pieChart.draw();
    },
    renderLocationStack() {

      var chart = anychart.column();

      const dataSet = anychart.data.set(this.economicLocationStack);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});

      // create a chart
      var chart = anychart.column();

      /* enable the value stacking mode
      on the default primary value scale*/
      chart.yScale().stackMode("value");

      // create column series
      chart
      .column(seriesData_1)
      .color(this.$store.state.color.blue)
      .tooltip()
      .format('2018: ${%Value} mln');

      chart
      .column(seriesData_2)
      .color(this.$store.state.color.green)
      .tooltip()
      .format('2017: ${%Value} mln');

      chart
      .column(seriesData_3)
      .color(this.$store.state.color.yellow)
      .tooltip()
      .format('2016: ${%Value} mln');


      // set the chart title
      chart.title("Economic Growth: Project Disbursements by Location");

      // set the container id
      chart.container("country-chart");

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
    this.renderLocationStack();
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
</style>
