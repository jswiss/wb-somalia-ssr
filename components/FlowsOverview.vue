<template>
  <div id="overview">
    <div class="columns">
      <div class="column is-1"></div>
      <h1 class="column title is-3">Overview of Flows</h1>
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
    <div class="columns" id="tables">
      <div class="column is-1"></div>
      <div class="column is-5 buffer">
        <h3 class="title is-4">Reported Humanitarian Aid By Partner</h3>
        <h6 class="subtitle is-6">US$ Millions, listed in order of magnitude of total aid reported for 2016-18</h6>
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>Partner</th>
              <th>2016</th>
              <th>2017</th>
              <th>2018</th>
              <th>Total, 2016-18</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody v-for="row in humanitarianAid" :key="row.partner">
            <td>{{ row.partner }}</td>
            <td>{{ row['2016'] }}</td>
            <td>{{ row['2017'] }}</td>
            <td>{{ row['2018'] === 0 ? '' : row['2018']  }}</td>
            <td>{{ row.total }}</td>
            <td><trend :data="[row['2016'], row['2017'], row['2018']]" auto-draw smooth></trend></td>
          </tbody>
          <tfoot>
            <tr>
              <th>TOTAL</th>
              <th>563.0</th>
              <th>1010.7</th>
              <th>93.3</th>
              <th>1,666.9</th>
              <th><trend :data="[563.0, 1010.7, 93.3]" auto-draw smooth></trend></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="column is-5 buffer">
        <h3 class="title is-4">Reported Development Aid By Partner</h3>
        <h6 class="subtitle is-6">US$ Millions, listed in order of magnitude of total aid reported for 2016-18</h6>
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>Partner</th>
              <th>2016</th>
              <th>2017</th>
              <th>2018</th>
              <th>Total, 2016-18</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody v-for="row in developmentAid" :key="row.partner">
            <td>{{ row.partner }}</td>
            <td>{{ row['2016'] === 0 ? '' : row['2016'] }}</td>
            <td>{{ row['2017'] === 0 ? '' : row['2017'] }}</td>
            <td>{{ row['2018'] === 0 ? '' : row['2018']  }}</td>
            <td>{{ Math.round((row['2016'] + row['2017'] + row['2018']) * 10) / 10 }}</td>
            <td><trend :data="[row['2016'], row['2017'], row['2018']]" auto-draw smooth></trend></td>
          </tbody>
          <tfoot>
            <tr>
              <th>TOTAL</th>
              <th>681.2</th>
              <th>742.1</th>
              <th>326.0</th>
              <th>1,749.4</th>
              <th><trend :data="[681.2, 742.1, 326.0]" auto-draw smooth></trend></th>
            </tr>
          </tfoot>
        </table>
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
  			humanitarianAid: [
  				{
  					partner: 'United States of America',
  					'2016': 131.0,
  					'2017': 388.0,
  					'2018': 0,
  					total: 519.0,
  				},
  				{
  					partner: 'United Kingdom',
  					'2016': 126.4,
  					'2017': 181.6,
  					'2018': 52.6,
  					total: 360.6,
  				},
  				{
  					partner: 'European Commission',
  					'2016': 53.3,
  					'2017': 132.7,
  					'2018': 0,
  					total: 186.0,
  				},
  				{
  					partner: 'Germany',
  					'2016': 84.1,
  					'2017': 24.0,
  					'2018': 2.8,
  					total: 110.9,
  				},
  				{
  					partner: 'Denmark',
  					'2016': 16.6,
  					'2017': 22.7,
  					'2018': 19.4,
  					total: 58.6,
  				},
  				{
  					partner: 'Canada',
  					'2016': 20.8,
  					'2017': 30.2,
  					'2018': 0,
  					total: 51.0,
  				},
  				{
  					partner: 'Japan',
  					'2016': 25.4,
  					'2017': 23.2,
  					'2018': 0,
  					total: 48.6,
  				},
  				{
  					partner: 'CERF',
  					'2016': 12.9,
  					'2017': 33.0,
  					'2018': 0,
  					total: 45.9,
  				},
  				{
  					partner: 'Sweden',
  					'2016': 22.2,
  					'2017': 22.4,
  					'2018': 0,
  					total: 44.7,
  				},
  				{
  					partner: 'Switzerland',
  					'2016': 11.5,
  					'2017': 14.3,
  					'2018': 14.0,
  					total: 39.8,
  				},
  				{
  					partner: 'Saudi Arabia',
  					'2016': 17.4,
  					'2017': 10.6,
  					'2018': 0,
  					total: 28.1,
  				},
  				{
  					partner: 'Australia',
  					'2016': 5.4,
  					'2017': 20.6,
  					'2018': 0,
  					total: 26.0,
  				},
  				{
  					partner: 'Norway',
  					'2016': 4.8,
  					'2017': 17.0,
  					'2018': 0,
  					total: 21.8,
  				},
  				{
  					partner: 'Italy',
  					'2016': 3.9,
  					'2017': 7.6,
  					'2018': 4.4,
  					total: 12.2,
  				},
  				{
  					partner: 'Netherlands',
  					'2016': 3.9,
  					'2017': 11.3,
  					'2018': 0,
  					total: 15.2,
  				},
  				{
  					partner: 'Ireland',
  					'2016': 7.3,
  					'2017': 6.2,
  					'2018': 0,
  					total: 13.5,
  				},
  				{
  					partner: 'Finland',
  					'2016': 6.5,
  					'2017': 6.6,
  					'2018': 0,
  					total: 13.1,
  				},
  				{
  					partner: 'China',
  					'2016': 2.0,
  					'2017': 11.0,
  					'2018': 0,
  					total: 13.0,
  				},
  				{
  					partner: 'Private, individuals & organisations',
  					'2016': 0.7,
  					'2017': 8.0,
  					'2018': 0,
  					total: 8.7,
  				},
  				{
  					partner: 'Other',
  					'2016': 7.0,
  					'2017': 39.7,
  					'2018': 0,
  					total: 46.7,
  				},
  			],
  			developmentAid: [
  				{
  					partner: 'European Commission',
  					'2016': 153.4,
  					'2017': 155.9,
  					'2018': 0,
  				},
  				{
  					partner: 'United Kingdom',
  					'2016': 88.7,
  					'2017': 76.3,
  					'2018': 102.0,
  				},
  				{ partner: 'United States', '2016': 97.2, '2017': 45.5, '2018': 63.3 },
  				{ partner: 'Germany', '2016': 48.4, '2017': 114.9, '2018': 0 },
  				{ partner: 'Sweden', '2016': 41.5, '2017': 41.4, '2018': 50.0 },
  				{ partner: 'Global Fund', '2016': 56.1, '2017': 46.3, '2018': 13.6 },
  				{ partner: 'Denmark', '2016': 29.4, '2017': 26.9, '2018': 18.5 },
  				{ partner: 'Norway', '2016': 34.0, '2017': 35.8, '2018': 0 },
  				{ partner: 'Italy', '2016': 19.1, '2017': 20.6, '2018': 23.2 },
  				{
  					partner: 'African Development Bank',
  					'2016': 22.1,
  					'2017': 15.6,
  					'2018': 20.8,
  				},
  				{ partner: 'World Bank', '2016': 0, '2017': 54.8, '2018': 0 },
  				{ partner: 'Saudi Arabia', '2016': 20.0, '2017': 30.0, '2018': 0 },
  				{ partner: 'Netherlands', '2016': 17.4, '2017': 15.5, '2018': 10.5 },
  				{ partner: 'Turkey', '2016': 10.0, '2017': 29.8, '2018': 0 },
  				{ partner: 'Finland', '2016': 14.2, '2017': 10.4, '2018': 9.1 },
  				{ partner: 'Switzerland', '2016': 11.2, '2017': 6.6, '2018': 14.0 },
  				{ partner: 'UN PBF', '2016': 13.4, '2017': 0, '2018': 0 },
  				{ partner: 'Japan', '2016': 0, '2017': 5.3, '2018': 0 },
  				{ partner: 'Australia', '2016': 1.9, '2017': 2.7, '2018': 0 },
  				{ partner: 'Other', '2016': 3.1, '2017': 7.6, '2018': 1.0 },
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
  			series1.normal().fill('#4587EA', 1);
  			series1.hovered().fill('#4587EA', 0.1);
  			series1.selected().fill('#4587EA', 0.5);
  			series1.normal().stroke('#4587EA', 1, '10 5', 'round');
  			series1.hovered().stroke('#4587EA', 2, '10 5', 'round');
  			series1.selected().stroke('#4587EA', 4, '10 5', 'round');

  			const series2 = chart.area(seriesData_2);

  			series2.name('Humanitarian');
  			series2.normal().fill('#81D8C2', 1);
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
  #tables {
  	margin-top: 6%;
  }
</style>

