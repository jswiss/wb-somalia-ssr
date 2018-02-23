<template lang="html">
  <div id="layouts" class="container is-fluid">
    Hiirshabelle
    <div class="columns">
      <div class="column" id="project-disbursements"></div>

      <div class="column" id="peace-security"></div>
    </div>

    <div class="columns">
      <div class="column" id="institutions"></div>
      <div class="column" id="economic-growth"></div>
    </div>

    <div class="columns">
      <div class="column" id="infrastructure"></div>
      <div class="column" id="social-human"></div>
    </div>

    <div class="column" id="resilience"></div>

  </div>
</template>

<script>
export default {
  layout: 'locations',
  data() {
    return {
      hiirshabelleDisbursementClusterData: [
        ["Peace, Inclusive Politics, Security & Rule of Law", 10, 8.1, 2.6],
        ["Effective, Efficient Institutions", 2.9, 2.9, 1.8],
        ["Economic Growth", 6.3, 5.1, 3.6],
        ["Infrastructure", 1.6, 1, 1.4],
        ["Social & Human Development", 20.2, 23.6, 9],
        ["Reslience", 20.5, 40, 13.3]
      ],
      hiirshabellePeacePoliticsSecurityClusterData: [
        ["2016", 6.5, 2.8, 1.1],
        ["2017", 3.2, 4.4, 0.6],
        ["2018", 0.3, 1, 0.9]
      ],
      hiirshabelleInstititionsClusterData: [
        ["Civil Service Reform/Public Administration", 0.3, 0.3, 0.2],
        ["Planning, M & E and Statistics", 0.2, 0.2, 0.1],
        ["Public Financial Management", 1.1, 0.8, 1.5],
        ["State and Local Governance", 1.3, 1.5, 0]
      ],
      hiirshabelleEconomicClusterData: [
        ["Private Sector Development", 4.7, 3.6, 3.5],
        ["Productive Sectors (Agriculture, Fisheries, Livestock)", 1.6, 1.5, 0.1]
      ],
      hiirshabelleInfrastructureClusterData: [
        ["Energy and ICT", 1.4, 0.1, 0],
        ["Mixed Infrastructure", 0.1, 0.6, 0.8],
        ["Transport: Roads, Ports, Airports", 0, 0, 0],
        ["Water and Sanitation (Urban)", 0.1, 0.3, 0.6]
      ],
      hiirshabelleSocialHumanDevClusterData: [
        ["Education", 6.9, 4.7, 0.4],
        ["Health", 13.2, 16.7, 8.5]
      ],
      hiirshabelleResilienceClusterData: [
        ["Migration, Displayment, Refugees and Durable Solutions", 2.4, 5.7, 0.1],
        ["Natural Resources Management", 5, 3.2, 0.4],
        ["Social Protection", 0, 0, 0],
        ["Food Security", 3.1, 4.4, 7.5],
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

      chart.draw();
    },
  },
  mounted() {
    this.renderClusterChart(this.hiirshabelleDisbursementClusterData, "Hiirshabelle: Project Disbursements by Pillar, 2016-18", 'project-disbursements');

    this.renderClusterChart(this.hiirshabellePeacePoliticsSecurityClusterData, "Hiirshabelle: Peace, Inclusive Politics, Security and Rule of Law", 'peace-security');

    this.renderClusterChart(this.hiirshabelleInstititionsClusterData, "Hiirshabelle: Effective, Efficient Institutions", 'institutions');

    this.renderClusterChart(this.hiirshabelleEconomicClusterData, "Hiirshabelle: Economic Growth", 'economic-growth');

    this.renderClusterChart(this.hiirshabelleInfrastructureClusterData, "Hiirshabelle: Infrastructure", 'infrastructure');

    this.renderClusterChart(this.hiirshabelleSocialHumanDevClusterData, "Hiirshabelle: Social & Human Development", 'social-human');

    this.renderClusterChart(this.hiirshabelleResilienceClusterData, "Hiirshabelle: Resilience", 'resilience');

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

#project-disbursements, #institutions, #infrastructure, #resilience {
  height: 350px;
}

</style>
