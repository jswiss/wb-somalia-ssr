<template lang="html">
  <div id="sectors" class="container is-fluid">
    Economic Growth
    <div id="container"></div>
    <div id="stack-chart"></div>
    <div id="pie-chart"></div>
    <div id="country-chart"></div>
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
        {x: "Private Sector", value: 56512142},
        {x: "UN", value: 40336126},
        {x: "NGOs", value: 38335938},
        {x: "Mix of implementers - no government", value: 19444243},
        {x: "Donor Agencies", value: 8391376},
        {x: "Government", value: 8228265},
        {x: "Other", value: 4524727}
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

      var stackChart = anychart.column();

      const dataSet = anychart.data.set(this.economicGrowthDataStack);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});

      // create a chart
      var stackChart = anychart.column();

      /* enable the value stacking mode
      on the default primary value scale*/
      stackChart.yScale().stackMode("value");

      // create column series
      stackChart.column(seriesData_1);
      stackChart.column(seriesData_2);

      // set the chart title
      stackChart.title("Economic Growth: Project Disbursements by Sector");

      // set the container id
      stackChart.container("stack-chart");

      // initiate drawing the chart
      stackChart.draw();
    },
    renderPie() {
      const pieChart = anychart.pie(this.economicGrowthDataStack);

      pieChart.title("Inclusive Politics: Key Implementers");
      pieChart.container("pie-chart");
      pieChart.draw();
    },
    renderLocationStack() {

      var locationStackChart = anychart.column();

      const dataSet = anychart.data.set(this.economicLocationStack);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});

      // create a chart
      var locationStackChart = anychart.column();

      /* enable the value stacking mode
      on the default primary value scale*/
      locationStackChart.yScale().stackMode("value");

      // create column series
      locationStackChart.column(seriesData_1);
      locationStackChart.column(seriesData_2);
      locationStackChart.column(seriesData_3);

      // set the chart title
      locationStackChart.title("Economic Growth: Project Disbursements by Location");

      // set the container id
      locationStackChart.container("country-chart");

      // initiate drawing the chart
      locationStackChart.draw();
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
