<template>
  <div class="section is-fluid">
    <div class="container is-mobile">
      <h1 class="title is-3">{{ title }}</h1>
      <h1 class="subtitle is-6">Choose from the menu at the left for specific sectoral aid information.</h1>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10 is-mobile">
          <div id="aid-by-pillar"></div>
        </div>
        <div class="column is-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'sectors',
  	layout: 'sectors',
  	data() {
  		return {
  			title: 'Sector Breakdown',
  			aidByPillar: [
  				['Inclusive Politics', 96124800, 65736375, 28332975],
  				['Security', 30968514, 37248143, 12322953],
  				['Rule of Law', 65544693, 48282515, 4709043],
  				['Effective, \nEfficient Institutions', 155177182, 166740791, 76886272],
  				['Infrastructure', 39056624, 50907956, 25027202],
  				['Social & \nHuman Development', 195661512, 253541264, 93983703],
  				['Resilience', 164779895, 639260917, 372570478],
  				['Gender & \nHuman Rights', 16004410, 12984289, 7118635],
  				['Other', 11177928, 4220236, 145000],
  			],
  		};
  	},
  	methods: {
  		renderBar() {
  			const data = anychart.data.set(this.aidByPillar);

  			const seriesData_1 = data.mapAs({
  				x: 0,
  				value: 1,
  			});
  			const seriesData_2 = data.mapAs({
  				x: 0,
  				value: 2,
  			});
  			const seriesData_3 = data.mapAs({
  				x: 0,
  				value: 3,
  			});

  			const chart = anychart.bar();

  			chart.animation(true);
  			chart.title('Aid by National Development Plan (NDP) Pillar, 2016-18');

  			chart.yScale().minimum(0);

  			chart
  				.xAxis()
  				.labels()
  				.padding([0, 0, 20, 0]);

  			chart
  				.yAxis()
  				.labels()
  				.format('{%Value}{groupsSeparator:\\,}');

  			// set titles for Y-axis
  			chart.yAxis().title('Aid in USD');

  			// helper function to setup settings for series
  			const setupSeries = function(series, name) {
  				series.name(name);
  				series.hovered().labels(false);

  				series
  					.tooltip()
  					.position('right')
  					.anchor('left-center')
  					.offsetX(5)
  					.offsetY(0)
  					.titleFormat('{%X}')
  					.format('{%SeriesName} : ${%Value}{groupsSeparator:\\,}');
  			};

  			// temp variable to store series instance
  			let series;

  			// create first series with mapped data
  			const series1 = chart.bar(seriesData_1);
  			setupSeries(series1, '2016');
  			series1.fill(this.$store.state.color.blue, 0.8);
  			series1.normal().stroke(this.$store.state.color.blue, 0.8);

  			// create second series with mapped data
  			const series2 = chart.bar(seriesData_2);
  			setupSeries(series2, '2017');
  			series2.fill(this.$store.state.color.green, 0.8);
  			series2.normal().stroke(this.$store.state.color.green, 0.8);

  			// create third series with mapped data
  			const series3 = chart.bar(seriesData_3);
  			setupSeries(series3, '2018');
  			series3.fill(this.$store.state.color.brown, 0.8);
  			series3.normal().stroke(this.$store.state.color.brown, 0.8);

  			// turn on legend
  			chart
  				.legend()
  				.enabled(true)
  				.fontSize(13);
  			// .padding([0, 0, 20, 0]);

  			chart.interactivity().hoverMode('single');
  			chart.tooltip().positionMode('point');

  			// set container id for the chart
  			chart.container('aid-by-pillar');
  			// initiate chart drawing
  			chart.draw();
  		},
  	},
  	mounted() {
  		this.renderBar();
  	},
  };
</script>

<style scoped>
  /* make sure div#id has a size defined, otherwise nothing will render */



  #aid-by-pillar {
  	height: 800px;
  	width: 90%;
  }
</style>
