<template lang="html">
  <div id="section" class="section">
    <div id="sectors" class="container is-fluid">
      <h1 class="title is-1">{{ title }}</h1>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10 is-mobile">
          <div id="project-disbursements"></div>
        </div>
        <div class="column is-1"></div>

      </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="institutions"></div>
        </div>
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="economic-growth"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="resilience"></div>
        </div>
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="infrastructure"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="social-human"></div>
        </div>
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="peace-security"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  	layout: 'locations',
  	data() {
  		return {
  			title: 'South West',
  			southWestDisbursementClusterData: [
  				[
  					'Peace, Inclusive \nPolitics, Security &\n Rule of Law',
  					27.3,
  					13.3,
  					4.7,
  				],
  				['Effective, Efficient\n Institutions', 14.8, 16, 7.7],
  				['Economic Growth', 25.8, 23.4, 10.4],
  				['Infrastructure', 22.5, 22.3, 7.6],
  				['Social & \nHuman Development', 37.2, 47.5, 10.1],
  				['Reslience', 21.7, 66.5, 54.1],
  			],
  			southWestPeacePoliticsSecurityClusterData: [
  				['2016', 18, 9.7, 4],
  				['2017', 9, 3.3, 0.4],
  				['2018', 0.3, 0.3, 0.4],
  			],
  			southWestInstititionsClusterData: [
  				['Civil Service Reform/\nPublic Administration', 1.2, 2.3, 2.5],
  				['Planning, M & E\n and Statistics', 0.4, 0.6, 0.4],
  				['Public Financial\n Management', 2.3, 5.6, 4.9],
  				['State and Local\n Governance', 10.9, 7.5, 0],
  			],
  			southWestEconomicClusterData: [
  				['Private Sector\n Development', 19.4, 15.5, 7.7],
  				[
  					'Productive Sectors\n (Agriculture, \nFisheries, Livestock)',
  					6.4,
  					7.9,
  					2.7,
  				],
  			],
  			southWestInfrastructureClusterData: [
  				['Energy and ICT', 2.0, 4.4, 4.5],
  				['Mixed Infrastructure', 3.8, 1.7, 0],
  				['Transport: Roads,\n Ports, Airports', 7.3, 7.3, 1.2],
  				['Water and \nSanitation (Urban)', 9.4, 8.9, 2],
  			],
  			southWestSocialHumanDevClusterData: [
  				['Education', 12.3, 11.2, 0.6],
  				['Health', 24.5, 31.7, 9.5],
  			],
  			southWestResilienceClusterData: [
  				[
  					'Migration, \nDisplayment, \nRefugees and \nDurable Solutions',
  					0.2,
  					4.7,
  					0.2,
  				],
  				['Natural Resources\n Management', 9.5, 19.1, 7.7],
  				['Social Protection', 0.1, 0.3, 0],
  				['Food Security', 8.5, 30, 42.1],
  				['Lifesaving humanitarian\n - cross-cutting', 0, 0, 0],
  			],
  		};
  	},

  	methods: {
  		renderClusterChart(chartData, chartTitle, container) {
  			const chart = anychart.cartesian();
  			const dataSet = anychart.data.set(chartData);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3 });

  			var series1 = chart
  				.column(seriesData_1)
  				.color(this.$store.state.color.blue);
  			series1.name('2016');
  			var series2 = chart
  				.column(seriesData_2)
  				.color(this.$store.state.color.green);
  			series2.name('2017');
  			var series3 = chart
  				.column(seriesData_3)
  				.color(this.$store.state.color.yellow);
  			series3.name('2018');

  			var tooltip = chart.tooltip();
  			tooltip.positionMode('point');

  			var tooltip1 = series1.tooltip();
  			var tooltip2 = series2.tooltip();
  			var tooltip3 = series3.tooltip();

  			chart.legend(true);

  			// set the padding between columns
  			chart.barsPadding(0);

  			// set the padding between column groups
  			chart.barGroupsPadding(2);

  			chart.animation(true);

  			chart.title(chartTitle);

  			chart.yScale().minimum(0);

  			chart.interactivity().hoverMode('by-x');

  			chart
  				.yAxis()
  				.labels()
  				.format('${%Value} mln');

  			chart
  				.xAxis()
  				.labels()
  				.rotation(-70)
  				.fontSize(10);

  			chart.tooltip().format('${%Value} mln');

  			chart.container(container);

  			chart.draw();
  		},
  	},
  	mounted() {
  		this.renderClusterChart(
  			this.southWestDisbursementClusterData,
  			'South West: Project Disbursements by Pillar, 2016-18',
  			'project-disbursements'
  		);

  		this.renderClusterChart(
  			this.southWestPeacePoliticsSecurityClusterData,
  			'South West: Peace, Inclusive Politics, Security and Rule of Law',
  			'peace-security'
  		);

  		this.renderClusterChart(
  			this.southWestInstititionsClusterData,
  			'South West: Effective, Efficient Institutions',
  			'institutions'
  		);

  		this.renderClusterChart(
  			this.southWestEconomicClusterData,
  			'South West: Economic Growth',
  			'economic-growth'
  		);

  		this.renderClusterChart(
  			this.southWestInfrastructureClusterData,
  			'South West: Infrastructure',
  			'infrastructure'
  		);

  		this.renderClusterChart(
  			this.southWestSocialHumanDevClusterData,
  			'South West: Social & Human Development',
  			'social-human'
  		);

  		this.renderClusterChart(
  			this.southWestResilienceClusterData,
  			'South West: Resilience',
  			'resilience'
  		);
  	},
  };
</script>

<style scoped>
  /* make sure div#id has a size defined, otherwise nothing will render */

  #project-disbursements,
  #institutions,
  #infrastructure,
  #resilience,
  #peace-security,
  #social-human,
  #economic-growth {
  	width: 100%;
  	height: 100%;
  	margin: 0;
  	padding: 0;
  }

  #project-disbursements,
  #institutions,
  #infrastructure,
  #resilience,
  #peace-security,
  #social-human,
  #economic-growth {
  	height: 350px;
  }
</style>
