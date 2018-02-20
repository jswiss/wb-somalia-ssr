<template>
  <div id="overview">
    <div class="columns">
      <div class="column is-5">
        <div id="gdp"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'FlowsOverview',
  	data() {
  		return {
  			percentGdp: [
  				{
  					x: 'ODA',
  					value: 27.0,
  					normal: { fill: '#333366', stroke: null },
  				},
  				{
  					x: 'Remittances',
  					value: 21.5,
  					normal: { fill: '#669999', stroke: null },
  				},
  				{
  					x: 'FDI',
  					value: 11.6,
  					normal: { fill: '#999999', stroke: null },
  				},
  				{
  					x: 'Domestic Revenue',
  					value: 2.2,
  					normal: { fill: '#cc9933', stroke: null },
  				},
  			],
  		};
  	},
  	methods: {
  		gdpChart() {
  			const chart = anychart.column();
  			const data = this.percentGdp;
  			const series = chart.column(data);

  			// appearance
  			series.labels(true);
  			series.selected().labels(true);
  			series.labels().format('{%Value}%');
  			series
  				.selected()
  				.labels()
  				.format('{%x}');

  			series
  				.labels()
  				.background()
  				.stroke('#663399');
  			series
  				.selected()
  				.labels()
  				.background()
  				.stroke('Green');

  			chart.tooltip().format('{%Value}%');

  			chart.title('Financial Flows as Percent of GDP, 2017');
  			chart.yAxis().title('% GDP');
  			chart.container('gdp');
  			chart.draw();
  		},
  	},
  	mounted() {
  		this.gdpChart();
  	},
  };
</script>

<style scoped>
  #gdp {
  	width: auto;
  	height: 150%;
  }
</style>

