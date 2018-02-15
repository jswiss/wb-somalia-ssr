<template lang="html">
  <div id="sectors" class="container is-fluid">
    Economic Growth
    <div id="container"></div>
    <div id="stack-chart"></div>
    <div id="pie-chart"></div>
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

      //sd_1 = "Private Sector Development"
      //sd_2 = "Productive Sectors (Agriculture, Fisheries, Livestock)"

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
    }

  },
  mounted() {
    this.renderChart();
    this.renderStack();
    this.renderPie();
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
