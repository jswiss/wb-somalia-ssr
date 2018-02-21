<template lang="html">
  <div id="layouts" class="container is-fluid">
    Benadir
    <div id="container"></div>
    <div id="project-disbursements"></div>
    <div id="peace-security"></div>
    <div id="institutions"></div>
    <div id="economic-growth"></div>
    <div id="infrastructure"></div>
    <div id="social-human"></div>
    <div id="resiliance"></div>
  </div>
</template>

<script>
export default {
  layout: 'locations',
  data() {
    return {
      benadirDisbursementClusterData: [
        ["Peace, Inclusive Politics, Security & Rule of Law", 11.9, 7.2, 2.1],
        ["Effective, Efficient Institutions", 4.6, 2.9, 1.7],
        ["Economic Growth", 7.1, 2.3, 2.1],
        ["Infrastructure", 1.5, 3.1, 0.8],
        ["Social & Human Development", 20.9, 31.5, 11.2],
        ["Reslience", 21.6, 48.8, 33.4]
      ],
      benadirPeacePoliticsSecurityClusterData: [
        ["2016", 6.2, 3.3, 1],
        ["2017", 5.6, 3.5, 0.6],
        ["2018", 0.1, 0.4, 0.1]
      ],
      benadirInstititionsClusterData: [
        ["Civil Service Reform/Public Administration", 1.2, 0.7, 0.8],
        ["Planning, M & E and Statistics", 1.1, 1, 0.8],
        ["Public Financial Management", 0, 0, 0],
        ["State and Local Governance", 2.3, 1.2, 0]
      ],
      benadirEconomicClusterData: [
        ["Private Sector Development", 6.8, 2.2, 2],
        ["Productive Sectors (Agriculture, Fisheries, Livestock)", 0.3, 0.1, 0.1]
      ],
      benadirInfrastructureClusterData: [
        ["Energy and ICT", 0.1, 0.2, 0.2],
        ["Mixed Infrastructure", 0.3, 1, 0],
        ["Transport: Roads, Ports, Airports", 0.9, 1.8, 0.5],
        ["Water and Sanitation (Urban)", 0.1, 0.1, 0.1]
      ],
      benadirSocialHumanDevClusterData: [
        ["Education", 1.3, 4.1, 0],
        ["Health", 19.2, 22.7, 11.1]
      ],
      benadirResilienceClusterData: [
        ["Migration, Displayment, Refugees and Durable Solutions", 3.4, 9, 7.2],
        ["Natural Resources Management", 5, 4.4, 2.4],
        ["Social Protection", 0, 0.4, 0],
        ["Food Security", 4.6, 16.7, 21.2],
        ["Lifesaving humanitarian - cross-cutting", 4, 14.7, 2.6]
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

      var tooltip1 = series1.tooltip();
      var tooltip2 = series2.tooltip();
      var tooltip3 = series3.tooltip();

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

      chart.yAxis().labels().format("${%value} mln");

      chart.draw();
    },
  },
  mounted() {
    this.renderClusterChart(this.benadirDisbursementClusterData, "Benadir: Project Disbursements by Pillar, 2016-18", 'project-disbursements');

    this.renderClusterChart(this.benadirPeacePoliticsSecurityClusterData, "Benadir: Peace, Inclusive Politics, Security and Rule of Law", 'peace-security');

    this.renderClusterChart(this.benadirInstititionsClusterData, "Benadir: Effective, Efficient Institutions", 'institutions');

    this.renderClusterChart(this.benadirEconomicClusterData, "Benadir: Economic Growth", 'economic-growth');

    this.renderClusterChart(this.benadirInfrastructureClusterData, "Benadir: Infrastructure", 'infrastructure');

    this.renderClusterChart(this.benadirSocialHumanDevClusterData, "Benadir: Social & Human Development", 'social-human');

    this.renderClusterChart(this.benadirResilienceClusterData, "Benadir: Resilience", 'resilience');

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
