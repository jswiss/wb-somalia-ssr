<template lang="html">
  <div id="sectors" class="container is-fluid">
    Effective, Efficient Institutions
    <div id="container"></div>
    <div id="stack-chart"></div>
  </div>
</template>

<script>
export default {
  name: 'institutions',
  layout: 'sectors',
  data() {
    return {
      institutionsData: [
        ["Academic / Research Institutions", 420722],
        ["Donor Agency", 4920635],
        ["Government", 171206377],
        ["IFI", 12862328],
        ["Mix of implementers - involving government", 3036189],
        ["NGOs", 19830111],
        ["Other", 1222222],
        ["Private Sector", 104214427],
        ["UN", 79737620],
        ["Unclear / TBD", 1353615]
      ],
      institutionsDataStack: [
        ["2016", 63.5, 63.9, 9.9, 17.9],
        ["2017", 45.2, 86.8, 14.1, 20.7],
        ["2018", 1.1, 52.1, 13.2, 10.4]
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
      .labels()
      .enabled(true)
      .format('${%Value}');

      chart.animation(true);

      chart.title("Effective, Efficient Institutions, 2016-2018 spend ($) ");

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

      const dataSet = anychart.data.set(this.institutionsDataStack);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});
      var seriesData_4 = dataSet.mapAs({x: 0, value: 4});

      // create a chart
      var stackChart = anychart.column();

      /* enable the value stacking mode
      on the default primary value scale*/
      stackChart.yScale().stackMode("value");

      // create column series
      stackChart.column(seriesData_1);
      stackChart.column(seriesData_2);
      stackChart.column(seriesData_3);
      stackChart.column(seriesData_4);

      // set the chart title
      stackChart.title("Effective & Efficient Institutions spend ($)");

      // set the container id
      stackChart.container("stack-chart");

      // initiate drawing the chart
      stackChart.draw();
    }
  },
  mounted() {
    this.renderChart();
    this.renderStack();
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

#stack-chart {
  width: 50%;
  height: 400px;
  margin: 0;
  padding: 0;
}
</style>
