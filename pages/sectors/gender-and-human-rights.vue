<template lang="html">
  <div id="sectors" class="container is-fluid">
    Gender and Human Rights
    <div id="container"></div>
    <div id="stack-chart"></div>
    <div id="pie-chart">Figure 32, wrong Pie is shown</div>
    <div id="year-stack"></div>
    <table class="table is-striped is-hoverable is-bordered">
      <thead>
        <tr>
          <th></th>
          <th>FGS</th>
          <th>Benadir</th>
          <th>Galmudug</th>
          <th>Hiirshabelle</th>
          <th>Jubaland</th>
          <th>Puntland</th>
          <th>South West</th>
          <th>Somaliland</th>
          <th>Unattributed</th>
          <th>Pillar Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2016</td>
          <td>0.7</td>
          <td>5</td>
          <td>0.2</td>
          <td>0.2</td>
          <td>0.3</td>
          <td>2.2</td>
          <td>1.8</td>
          <td>3.9</td>
          <td>1.7</td>
          <td>16</td>
        </tr>
        <tr>
          <td>2017</td>
          <td>0.1</td>
          <td>4.5</td>
          <td>0.3</td>
          <td>0.3</td>
          <td>0.5</td>
          <td>2.5</td>
          <td>1.6</td>
          <td>2.9</td>
          <td>0.3</td>
          <td>13</td>
        </tr>
        <tr>
          <td>2018</td>
          <td>0.1</td>
          <td>3.7</td>
          <td>0.1</td>
          <td>0.1</td>
          <td>0.2</td>
          <td>0.9</td>
          <td>0.7</td>
          <td>1.1</td>
          <td>0.2</td>
          <td>7.1</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>0.8</td>
          <td>13.1</td>
          <td>0.6</td>
          <td>0.6</td>
          <td>1</td>
          <td>5.7</td>
          <td>4.1</td>
          <td>7.9</td>
          <td>2.1</td>
          <td>36.1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: 'gender-and-human-rights',
  layout: 'sectors',
  data() {
    return {
      genderHumanRightsData: [
        ["Government", 172342],
        ["Mix of implementers - involving government", 3700000],
        ["NGOs", 31539718],
        ["Private Sector", 695274]
      ],
      genderHumanRightsDataChart: [
        ["2016", 16.0],
        ["2017", 13.0],
        ["2018", 7.1]
      ],
      genderYearStackData: [
        ["FGS", 0.1, 0.1, 0.7],
        ["Benadir", 3.7, 4.5, 5],
        ["Galmudug", 0.1, 0.3, 0.2],
        ["Hiirshabelle", 0.1, 0.3, 0.2],
        ["Jubaland", 0.2, 0.5, 0.3],
        ["Puntland", 0.9, 2.5, 2.2],
        ["South West", 0.7, 1.6, 1.8],
        ["Somaliland", 1.1, 2.9, 3.9],
        ["Unattributed", 0.2, 0.3, 1.7]
      ]
    };
  },
  methods: {
    renderChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.genderHumanRightsData);

      const seriesData = dataSet.mapAs({x: 0, value: 1});

      const column = chart.column(seriesData);
      column
      .labels()
      .enabled(true)
      .format('${%Value}');

      chart.animation(true);

      chart.title("Gender & Human Rights, 2016-2018 spend ($) ");

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
    },
    renderYearChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.genderHumanRightsDataChart);

      const seriesData = dataSet.mapAs({x: 0, value: 1});

      const column = chart.column(seriesData);
      column
      .labels()
      .enabled(true)
      .format('${%Value}');

      chart.animation(true);

      chart.title("Gender & Human Rights: Project Disbursements ");

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

      chart.container('stack-chart');

      chart.draw();
    },

    renderYearStack() {

      var stackChart = anychart.column();

      const dataSet = anychart.data.set(this.genderYearStackData);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});

      /* enable the value stacking mode
      on the default primary value scale*/
      stackChart.yScale().stackMode("value");

      // create column series
      stackChart.column(seriesData_1);
      stackChart.column(seriesData_2);
      stackChart.column(seriesData_3);

      // set the chart title
      stackChart.title("Gender & Human Rights: Project Disbursements by Location");

      // set the container id
      stackChart.container('year-stack');

      // initiate drawing the chart
      stackChart.draw();
    },

  },
  mounted() {
    this.renderChart();
    this.renderYearChart();
    this.renderYearStack();
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
