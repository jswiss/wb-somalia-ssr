<template lang="html">
  <div id="sectors" class="container is-fluid">
    Rule of Law
    <div id="container"></div>
  </div>
</template>


<script>
export default {
  name: 'rule-of-law',
  layout: 'sectors',
  data() {
    return {
      ruleOfLawData: [
        ["Government", 4884026],
        ["Military", 4525200],
        ["Mix of implementers - involving government", 4123420],
        ["Mix of implementers - no government", 4717214],
        ["NGOs", 8419492],
        ["Private Sector", 6182000],
        ["UN", 79498786],
        ["Unclear / TBD", 6186113]
      ],
    };
  },
  methods: {
    renderChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.ruleOfLawData);

      const seriesData = dataSet.mapAs({x: 0, value: 1});

      const column = chart.column(seriesData);
      column
      .labels()
      .enabled(true)
      .format('${%Value}');

      chart.animation(true);

      chart.title("Rule of Law, 2016-2018 spend ($) ");

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
