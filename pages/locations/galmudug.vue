<template lang="html">
  <div id="layouts" class="container is-fluid">
    Galmudug
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
      galmudugDisbursementClusterData: [
        ["Peace, Inclusive Politics, Security & Rule of Law", 8.7, 3.5, 1.8],
        ["Effective, Efficient Institutions", 7.7, 6.5, 2.6],
        ["Economic Growth", 2.5, 1.8, 1.1],
        ["Infrastructure", 0.4, 1.1, 1.7],
        ["Social & Human Development", 14.3, 22.1, 7.3],
        ["Reslience", 18.5, 54.1, 37.6]
      ],
      galmudugPeacePoliticsSecurityClusterData: [
        ["2016", 8.3, 2.1, 0.4],
        ["2017", 0.1, 0.6, 0.6],
        ["2018", 0.3, 0.8, 0.8]
      ],
      galmudugInstititionsClusterData: [
        ["Civil Service Reform/Public Administration", 0.3, 0.3, 0.2],
        ["Planning, M & E and Statistics", 0.2, 0.2, 0.1],
        ["Public Financial Management", 1.2, 0.8, 1.5],
        ["State and Local Governance", 6, 5.1, 0.8]
      ],
      galmudugEconomicClusterData: [
        ["Private Sector Development", 2.2, 1.6, 1.0],
        ["Productive Sectors (Agriculture, Fisheries, Livestock)", 0.3, 0.1, 0.1]
      ],
      galmudugInfrastructureClusterData: [
        ["Energy and ICT", 0.1, 0.2, 0.2],
        ["Mixed Infrastructure", 0.2, 0.4, 0.5],
        ["Transport: Roads, Ports, Airports", 0, 0, 0],
        ["Water and Sanitation (Urban)", 0.1, 0.5, 1]
      ],
      galmudugSocialHumanDevClusterData: [
        ["Education", 2.6, 4.9, 1.5],
        ["Health", 11.6, 14.9, 5.8]
      ],
      galmudugResilienceClusterData: [
        ["Migration, Displayment, Refugees and Durable Solutions", 2.6, 7.9, 2.2],
        ["Natural Resources Management", 4.9, 3.4, 0.6],
        ["Social Protection", 0, 0, 0],
        ["Food Security", 6.1, 25.3, 30.7],
        ["Lifesaving humanitarian - cross-cutting", 3.9, 14.6, 2.6]
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
    this.renderClusterChart(this.galmudugDisbursementClusterData, "Galmudug: Project Disbursements by Pillar, 2016-18", 'project-disbursements');

    this.renderClusterChart(this.galmudugPeacePoliticsSecurityClusterData, "Galmudug: Peace, Inclusive Politics, Security and Rule of Law", 'peace-security');

    this.renderClusterChart(this.galmudugInstititionsClusterData, "Galmudug: Effective, Efficient Institutions", 'institutions');

    this.renderClusterChart(this.galmudugEconomicClusterData, "Galmudug: Economic Growth", 'economic-growth');

    this.renderClusterChart(this.galmudugInfrastructureClusterData, "Galmudug: Infrastructure", 'infrastructure');

    this.renderClusterChart(this.galmudugSocialHumanDevClusterData, "Galmudug: Social & Human Development", 'social-human');

    this.renderClusterChart(this.galmudugResilienceClusterData, "Galmudug: Resilience", 'reslience');

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
