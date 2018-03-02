<template>
  <div id="oda"></div>
</template>

<script>
  export default {
  	name: 'OdaChart',
  	data() {
  		return {
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
  			series1.normal().fill('#4587EA', 1);
  			series1.hovered().fill('#4587EA', 0.1);
  			series1.selected().fill('#4587EA', 0.5);
  			series1.normal().stroke('#eaa845', 1, '10 5', 'round');
  			series1.hovered().stroke('#eaa845', 2, '10 5', 'round');
  			series1.selected().stroke('#eaa845', 4, '10 5', 'round');

  			const series2 = chart.area(seriesData_2);

  			series2.name('Humanitarian');
  			series2.normal().fill('#81D8C2', 1);
  			series2.hovered().fill('#81D8C2', 0.1);
  			series2.selected().fill('#81D8C2', 0.5);
  			series2.normal().hatchFill('forward-diagonal', '#f2fbf8', 1, 15);
  			series2.hovered().hatchFill('forward-diagonal', '#f2fbf8', 1, 15);
  			series2.selected().hatchFill('forward-diagonal', '#f2fbf8', 1, 15);
  			series2.normal().stroke('#d88197');
  			series2.hovered().stroke('#d88197', 2);
  			series2.selected().stroke('#d88197', 4);

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
  		this.odaChart();
  	},
  };
</script>

<style scoped>
  #oda {
    height: 350px;
  }
</style>
