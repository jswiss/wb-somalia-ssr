<template lang="html">
  <div id="sectors" class="container is-fluid">
    Rule of Law
    <div id="container"></div>
    <div id="pie-chart"></div>
    <div id="country-stack"></div>

    <table class="table is-striped is-hoverable is-bordered">
      <thead>
        <tr>
          <th>
          </th>
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
          <td>25.2</td>
          <td>5.6</td>
          <td>0.1</td>
          <td>3.2</td>
          <td>4.2</td>
          <td>7.9</td>
          <td>4</td>
          <td>9</td>
          <td>6.3</td>
          <td>65.5</td>
        </tr>
        <tr>
          <td>2017</td>
          <td>17.5</td>
          <td>3.5</td>
          <td>0.6</td>
          <td>4.4</td>
          <td>4.4</td>
          <td>3.3</td>
          <td>4.5</td>
          <td>3.3</td>
          <td>6.7</td>
          <td>48.3</td>
        </tr>
        <tr>
          <td>2018</td>
          <td>0.2</td>
          <td>0.9</td>
          <td>0.6</td>
          <td>0.6</td>
          <td>0.7</td>
          <td>0.1</td>
          <td>0.7</td>
          <td>0.4</td>
          <td>0.5</td>
          <td>4.7</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>42.9</td>
          <td>10.1</td>
          <td>1.3</td>
          <td>8.2</td>
          <td>9.3</td>
          <td>11.3</td>
          <td>9.3</td>
          <td>12.7</td>
          <td>13.5</td>
          <td>118.5</td>
        </tr>
      </tbody>
    </table>
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
      ruleOfLawChart: [
        ["2016", 65544693],
        ["2017", 48282515],
        ["2018", 4709043]
      ],
      ruleOfLawDataPie: [
        {x: "UN", value: 79498786},
        {x: "NGOs", value: 8419492},
        {x: "Unclear/TBD", value: 6186133},
        {x: "Private Sector", value: 6182000},
        {x: "Government", value: 4884026},
        {x: "Mix of implementers - no government", value: 4717214},
        {x: "Military", value: 4525200},
        {x: "Mix of implementers - government", value: 4123420}
      ],
      ruleOfLawLocationStack: [
        ["FGS", 0.2, 17.5, 25.2],
        ["Benadir", 0.9, 3.5, 5.6],
        ["Galmudug", 0.6, 0.6, 0.1],
        ["Hiirshabelle", 0.6, 4.4, 3.2],
        ["Jubaland", 0.7, 4.4, 4.2],
        ["Puntland", 0.1, 3.3, 7.8],
        ["South West", 0.7, 4.5, 4.0],
        ["Somaliland", 0.4, 3.3, 9.0],
        ["Unattributed", 0.5, 6.7, 6.3]
      ]
    }
  },
  methods: {
    renderChart() {
      const chart = anychart.cartesian();
      const dataSet = anychart.data.set(this.ruleOfLawChart);

      const seriesData = dataSet.mapAs({x: 0, value: 1});

      const column = chart.column(seriesData);
      column
      .labels()
      .enabled(true)
      .format('${%Value}');

      chart.animation(true);

      chart.title("Rule of Law: Project Disbursements");

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
    renderPie() {
      const pieChart = anychart.pie(this.ruleOfLawDataPie);

      pieChart.title("Rule of Law: Key Implementers");
      pieChart.container("pie-chart");
      pieChart.draw();
    },
    renderCountryStack() {

      var stackChart = anychart.column();

      const dataSet = anychart.data.set(this.ruleOfLawLocationStack);

      var seriesData_1 = dataSet.mapAs({x: 0, value: 1});
      var seriesData_2 = dataSet.mapAs({x: 0, value: 2});
      var seriesData_3 = dataSet.mapAs({x: 0, value: 3});

      // create a chart
      var stackChart = anychart.column();

      /* enable the value stacking mode
      on the default primary value scale*/
      stackChart.yScale().stackMode("value");

      // create column series
      stackChart.column(seriesData_1);
      stackChart.column(seriesData_2);
      stackChart.column(seriesData_3);

      // set the chart title
      stackChart.title("Rule of Law: Project Disbursements by Location");

      // set the container id
      stackChart.container('country-stack');

      // initiate drawing the chart
      stackChart.draw();
    },


  },
  mounted() {
    this.renderChart();
    this.renderPie();
    this.renderCountryStack();
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
