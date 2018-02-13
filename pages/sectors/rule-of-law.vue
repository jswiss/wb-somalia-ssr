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
