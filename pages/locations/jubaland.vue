<template lang="html">
  <div id="layouts" class="container is-fluid">
    Jubaland
    <div id="container"></div>
    <div id="project-disbursements"></div>
    <div id="peace-security"></div>
    <div id="institutions"></div>
    <div id="economic-growth"></div>
    <div id="infrastructure"></div>
    <div id="social-human"></div>
    <div id="reslience"></div>
  </div>
</template>

<script>
export default {
  layout: 'locations',
  data() {
    return {
      jubalandDisbursementClusterData: [
        ["Peace, Inclusive Politics, Security & Rule of Law", 21.5, 21.1, 7.8],
        ["Effective, Efficient Institutions", 12.6, 11.7, 5.0],
        ["Economic Growth", 7.6, 7.7, 2.9],
        ["Infrastructure", 0.6, 2.7, 2.5],
        ["Social & Human Development", 15.8, 23.9, 12.7],
        ["Reslience", 34.2, 65.3, 21.6]
      ],
      jubalandPeacePoliticsSecurityClusterData: [
        ["2016", 15.9, 9.4, 4.6],
        ["2017", 4.2, 4.4, 0.7],
        ["2018", 1.4, 7.2, 2.6]
      ],
      jubalandInstititionsClusterData: [
        ["Civil Service Reform/Public Administration", 0.5, 0.7, 0.2],
        ["Planning, M & E and Statistics", 1.9, 1.8, 1.7],
        ["Public Financial Management", 2.5, 2.4, 3],
        ["State and Local Governance", 7.7, 6.8, 0.2]
      ],
      jubalandEconomicClusterData: [
        ["Private Sector Development", 6.7, 4.8, 2.3],
        ["Productive Sectors (Agriculture, Fisheries, Livestock)", 0.9, 2.9, 0.6]
      ],
      jubalandInfrastructureClusterData: [
        ["Energy and ICT", 0.1, 0.2, 0.2],
        ["Mixed Infrastructure", 0.3, 1.7, 0.6],
        ["Transport: Roads, Ports, Airports", 0, 0.3, 0.8],
        ["Water and Sanitation (Urban)", 0.1, 0.5, 1.0]
      ],
      jubalandSocialHumanDevClusterData: [
        ["Education", 2.0, 6.3, 1.4],
        ["Health", 13.6, 15.2, 11.3]
      ],
      jubalandResilienceClusterData: [
        ["Migration, Displayment, Refugees and Durable Solutions", 5.2, 15.7, 3.5],
        ["Natural Resources Management", 5, 3.9, 0.5],
        ["Social Protection", 5.3, 2.3, 2.3],
        ["Food Security", 2.7, 11.5, 10.1],
        ["Lifesaving humanitarian - cross-cutting", 5.6, 21.5, 3.9]
      ]
    };
  },

  methods: {
    renderClusterChart(chartData, chartTitle, container) {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(chartData);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});

      var series1 = chart.column(seriesData_1).color(this.$store.state.color.blue);
      series1.name("2016");
      var series2 = chart.column(seriesData_2).color(this.$store.state.color.green);
      series2.name("2017");
      var series3 = chart.column(seriesData_3).color(this.$store.state.color.yellow);
      series3.name("2018");

      chart.legend(true);
      
      // set the padding between columns
      chart.barsPadding(0);

      // set the padding between column groups
      chart.barGroupsPadding(2);

      // const column = chart.column(seriesData);
      // column
      // .labels()
      // .enabled(true)
      // .format('${%Value}');

      chart.animation(true);

      chart.title(chartTitle);

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

      chart.container(container);

      chart.draw();
    },
  },
  mounted() {
    this.renderClusterChart(this.jubalandDisbursementClusterData, "Jubaland: Project Disbursements by Pillar, 2016-18", 'project-disbursements');

    this.renderClusterChart(this.jubalandPeacePoliticsSecurityClusterData, "Jubaland: Peace, Inclusive Politics, Security and Rule of Law", 'peace-security');

    this.renderClusterChart(this.jubalandInstititionsClusterData, "Jubaland: Effective, Efficient Institutions", 'institutions');

    this.renderClusterChart(this.jubalandEconomicClusterData, "Jubaland: Economic Growth", 'economic-growth');

    this.renderClusterChart(this.jubalandInfrastructureClusterData, "Jubaland: Infrastructure", 'infrastructure');

    this.renderClusterChart(this.jubalandSocialHumanDevClusterData, "Jubaland: Social & Human Development", 'social-human');

    this.renderClusterChart(this.jubalandResilienceClusterData, "Jubaland: Resilience", 'reslience');

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
