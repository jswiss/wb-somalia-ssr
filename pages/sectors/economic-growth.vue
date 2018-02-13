<template lang="html">
  <div id="sectors" class="container is-fluid">
    Economic Growth
    <div id="container"></div>
  </div>
</template>

Donor Agency	 8,391,376
Government	 8,228,265
IFI	 3,013,949
Mix of implementers - involving government	 19,444,243
Mix of implementers - no government	 433,000
NGOs	 38,335,938
Private Sector	 56,512,142
Regional Actors	 1,077,778
UN	 40,336,126
Unclear / TBD	 -

<script>
export default {
  name: 'economic-growth',
  layout: 'sectors',
  data() {
    return {
      economicGrowthData: [
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
          this.points[1].value
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
