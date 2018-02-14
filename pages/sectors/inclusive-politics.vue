<template lang="html">
  <div id="sectors" class="container is-fluid">
    Inclusive Politics
    <div class="columns is-multiline">

      <div class="column is-half">
        <div id="pie-chart" class="column"></div>
        <div class="column">

          <table id="table" class="table">
            <tr>
              <th>Name</th>
              <th>Thing</th>
              <th>Other thing</th>
            </tr>
            <tr>
              <td>James</td>
              <td>Sectors</td>
              <td>Test1</td>
            </tr>
            <tr>
              <td>Josh</td>
              <td>Everything else</td>
              <td>Test2</td>
            </tr>
          </table>

        </div>
      </div>

      <div class="column is-half">
        <div id="container" class="column"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'inclusive-politics',
  layout: 'sectors',
  data() {
    return {
      inclusivePoliticsData: [
        ["Academic / Research Institutions",  1969387 ],
        ["Government",  1861751],
        ["IFI",  2749769 ],
        ["Mix of implementers - involving government",  329659 ],
        ["Mix of implementers - no government",  3589589 ],
        ["NGOs", 81895424  ],
        ["Private Sector", 36028311],
        ["Regional Actors", 944444],
        ["UN", 57038475],
        ["Unclear / TBD", 3787340]
      ],
      inclusivePoliticsChart: [
        ["2016", 96124800],
        ["2017", 65736375],
        ["2018", 28332975]
      ],
      inclusivePoliticsPie: [
        {x: "NGOs", value: 81895424},
        {x: "UN", value: 57038475},
        {x: "NGOs", value: 36028311},
        {x: "NGOs", value: 15231941},
      ]
    };
  },
  methods: {
    renderChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.inclusivePoliticsChart);

      const seriesData = dataSet.mapAs({ x: 0, value: 1 });

      const column = chart.column(seriesData);
      column
      .labels()
      .enabled(true)
      .format('${%Value} ');

      chart.animation(true);

      chart.title("Inclusive Politics: Project Disbursements Reported in 2017");

      chart.yScale().minimum(0);

      chart
      .tooltip()
      .displayMode('union')
      .positionMode('point')
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
    renderPie() {
      const pieChart = anychart.pie(this.inclusivePoliticsPie);

      pieChart.title("Inclusive Politics: Key Implementers");

      pieChart.container("pie-chart");

      pieChart.draw();
    }
  },
  mounted() {
    this.renderChart();
    this.renderPie();
  }
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#pie-chart {
  width: 100%;
  height: 370px;
  margin: 0;
  padding: 0;
}

#table {
  margin-top: 50px;
}
</style>
