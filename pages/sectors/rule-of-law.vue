<template lang="html">
  <div id="sectors" class="container is-fluid">
    Rule of Law
  </div>
</template>

<script>
  export default {
  	name: 'rule-of-law',
  	layout: 'sectors',
    data() {
      return {
        ruleOfLawData: [

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

        chart.animation(true)
        chart.title("Rule of Law, 2016-2018 spend ($) ")
      }
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
