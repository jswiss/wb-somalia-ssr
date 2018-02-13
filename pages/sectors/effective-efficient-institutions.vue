<template lang="html">
  <div id="sectors" class="container is-fluid">
    Effective, Efficient Institutions
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: 'institutions',
  layout: 'sectors',
  data() {
    return {
      institutionsData: [
        ["Academic / Research Institutions", 420722 ],
        ["Donor Agency", 4920635 ],
        ["Government", 171206377 ],
        ["IFI", 12862328 ],
        ["Mix of implementers - involving government", 3036189 ],
        ["NGOs", 19830111 ],
        ["Other", 1222222],
        ["Private Sector", 104214427],
        ["UN", 79737620 ],
        ["Unclear / TBD", 1353615]
      ],
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
