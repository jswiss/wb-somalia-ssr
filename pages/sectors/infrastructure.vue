<template lang="html">
  <div id="sectors" class="container is-fluid">
    Infrastructure
    <div id="container"></div>
    <div id="stack-chart"></div>
    <div id="pie-chart"></div>
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
    };
  },
  methods: {
    renderChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.infrastructureData);

      const seriesData = dataSet.mapAs({x: 0, value: 1});

      const column = chart.column(seriesData);
      column
      .labels()
      .enabled(true)
      .format('${%Value}');

      chart.animation(true);

      chart.title("Infrastructure, 2016-2018 spend ($) ");

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

      const dataSet = anychart.data.set(this.infrastructureDataStack);

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
      stackChart.title("Infrastructure: Project Disbursements by Sector");

      // set the container id
      stackChart.container("stack-chart");

      // initiate drawing the chart
      stackChart.draw();
    },

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
</style>
