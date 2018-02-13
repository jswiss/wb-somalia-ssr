<template lang="html">
  <div id="sectors" class="container is-fluid">
    Infrastructure
    <div id="container"></div>
  </div>
</template>

<script>
  export default {
  	name: 'infrastructure',
  	layout: 'sectors',
  	data() {
  		return {
  			infrastructureData: [
  				['Donor Agency', 6138444],
  				['Government', 26602499],
  				['IFI', 889142],
  				['Mix of implementers - involving government', 18076515],
  				['Mix of implementers - no government', 0],
  				['NGOs', 12502249],
  				['Private Sector', 16468854],
  				['UN', 31369634],
  				['Unclear / TBD', 2944444],
  			],
  		};
  	},
  	methods: {
  		renderChart() {
  			const chart = anychart.cartesian();
  			const dataSet = anychart.data.set(this.infrastructureData);

  			const seriesData = dataSet.mapAs({ x: 0, value: 1 });

  			const column = chart.column(seriesData);
  			column
  				.labels()
  				.enabled(true)
  				.format('${%Value}');

  			chart.animation(true);

  			chart.title('Infrastructure, 2016-2018 spend ($) ');

  			chart.yScale().minimum(0);

  			chart
  				.tooltip()
  				.displayMode('union')
  				.position('point')
  				.unionFormat(function() {
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
  		},
  	},
  	mounted() {
  		this.renderChart();
  	},
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
