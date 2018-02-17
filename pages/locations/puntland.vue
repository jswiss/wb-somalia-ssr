<template lang="html">
  <div id="layouts" class="container is-fluid">
    Puntland
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
      puntlandDisbursementClusterData: [
        ["Peace, Inclusive Politics, Security & Rule of Law", 15.3, 8.5, 3.2]
        ["Effective, Efficient Institutions", 15.9, 16.6, 7.3],
        ["Economic Growth", 8.7, 5.8, 5.2],
        ["Infrastructure", 7.9, 8.3, 4.2],
        ["Social & Human Development", 26.1, 42.8, 10.7],
        ["Reslience", 16.9, 62.2, 60.9]
      ],
      puntlandPeacePoliticsSecurityClusterData: [
        ["2016", 6.7, 4, 1.8],
        ["2017", 7.9, 3.3, 0.1],
        ["2018", 0.7, 1.2, 1.3]
      ],
      puntlandInstititionsClusterData: [
        ["Civil Service Reform/Public Administration", 1.3, 2.4, 1.4],
        ["Planning, M & E and Statistics", 0.2, 0.4, 0.6],
        ["Public Financial Management", 5, 5.6, 5.3],
        ["State and Local Governance", 9.4, 8.1, 0]
      ],
      puntlandEconomicClusterData: [
        ["Private Sector Development", 6.7, 4.87, 3.9],
        ["Productive Sectors (Agriculture, Fisheries, Livestock)", 2.0, 1.1, 1.3]
      ],
      puntlandInfrastructureClusterData: [
        ["Energy and ICT", 0.2, 0.5, 0.5],
        ["Mixed Infrastructure", 5.2, 2.1, 0.8],
        ["Transport: Roads, Ports, Airports", 1.4, 4.2, 0.9],
        ["Water and Sanitation (Urban)", 1.1, 1.6, 2.0]
      ],
      puntlandSocialHumanDevClusterData: [
        ["Education", 6.4, 7.4, 1.5],
        ["Health", 19.3, 30, 9.1]
      ],
      puntlandResilienceClusterData: [
        ["Migration, Displayment, Refugees and Durable Solutions", 2.4, 8.9, 3],
        ["Natural Resources Management", 3.4, 9.6, 8.1],
        ["Social Protection", 0.1, 0.4, 0],
        ["Food Security", 9.8, 41.6, 49.1],
        ["Lifesaving humanitarian - cross-cutting", 0, 0, 0]
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

      var series1 = chart.column(seriesData_1);
      var series2 = chart.column(seriesData_2);
      var series3 = chart.column(seriesData_3);

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
    this.renderClusterChart(this.puntlandDisbursementClusterData, "Puntland: Project Disbursements by Pillar, 2016-18", 'project-disbursements');

    this.renderClusterChart(this.puntlandPeacePoliticsSecurityClusterData, "Puntland: Peace, Inclusive Politics, Security and Rule of Law", 'peace-security');

    this.renderClusterChart(this.puntlandInstititionsClusterData, "Puntland: Effective, Efficient Institutions", 'institutions');

    this.renderClusterChart(this.puntlandEconomicClusterData, "Puntland: Economic Growth", 'economic-growth');

    this.renderClusterChart(this.puntlandInfrastructureClusterData, "Puntland: Infrastructure", 'infrastructure');

    this.renderClusterChart(this.puntlandSocialHumanDevClusterData, "Puntland: Social & Human Development", 'social-human');

    this.renderClusterChart(this.puntlandResilienceClusterData, "Puntland: Resilience", 'reslience');

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
