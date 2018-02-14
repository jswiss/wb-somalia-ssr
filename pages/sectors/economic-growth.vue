<template lang="html">
  <div id="sectors" class="container is-fluid">
    Economic Growth
    <div id="container"></div>
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
    }
  },
  mounted() {
    this.renderChart();
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
