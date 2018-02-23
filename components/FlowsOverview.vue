<template>
  <div id="overview">
    <div class="columns">
      <div class="column is-1"></div>
      <h1 class="column title">Overview of Flows</h1>
    </div>
    <div class="columns">
      <div class="column is-5">
        <div id="gdp"></div>
      </div>
      <div class="column is-1"></div>
      <div class="column is-5">
        <div id="oda"></div>
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
  			odaData: [
  				['2006', 123, 274],
  				['2007', 147, 247],
  				['2008', 217, 549],
  				['2009', 202, 460],
  				['2010', 258, 248],
  				['2011', 302, 797],
  				['2012', 445, 545],
  				['2013', 528, 527],
  				['2014', 607, 672],
  				['2015', 611, 588],
  				['2016', 681, 563],
  				['2017', 742, 1011],
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
  		odaChart() {
  			const chart = anychart.area();

  			const dataSet = anychart.data.set(this.odaData);
  			const seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			const seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });

  			chart.animation(true);

  			const crosshair = chart.crosshair();
  			crosshair
  				.enabled(true)
  				.yStroke(null)
  				.xStroke('#fff')
  				.zIndex(39);
  			crosshair.yLabel().enabled(false);

  			chart.yScale().stackMode('value');

  			chart.title('ODA Trends in Somalia, 2006-17');

  			const series1 = chart.area(seriesData_1);

  			series1.name('Development');
  			series1.normal().fill('#4587EA', 0.3);
  			series1.hovered().fill('#4587EA', 0.1);
  			series1.selected().fill('#4587EA', 0.5);
  			series1.normal().stroke('#4587EA', 1, '10 5', 'round');
  			series1.hovered().stroke('#4587EA', 2, '10 5', 'round');
  			series1.selected().stroke('#4587EA', 4, '10 5', 'round');

  			const series2 = chart.area(seriesData_2);
  			series2.normal().fill('#81D8C2', 0.3);
  			series2.hovered().fill('#81D8C2', 0.1);
  			series2.selected().fill('#81D8C2', 0.5);
  			series2.normal().hatchFill('forward-diagonal', '#81D8C2', 1, 15);
  			series2.hovered().hatchFill('forward-diagonal', '#81D8C2', 1, 15);
  			series2.selected().hatchFill('forward-diagonal', '#81D8C2', 1, 15);
  			series2.normal().stroke('#81D8C2');
  			series2.hovered().stroke('#81D8C2', 2);
  			series2.selected().stroke('#81D8C2', 4);

  			chart
  				.legend()
  				.enabled(true)
  				.fontSize(13)
  				.padding([0, 0, 20, 0]);

  			chart.xAxis().title(false);
  			chart.yAxis().title('Assistance (in millions USD)');

  			chart.interactivity().hoverMode('by-x');
  			chart
  				.tooltip()
  				.valuePrefix('$')
  				.valuePostfix(' mln.')
  				.displayMode('union');

  			chart.container('oda');

  			chart.draw();
  		},
  	},
  	mounted() {
  		this.gdpChart();
  		this.odaChart();
  	},
  };
</script>

<style scoped>
  #gdp,
  #oda {
  	width: auto;
  	height: 150%;
  }
  #overview {
  	margin-top: 3%;
  }
</style>

