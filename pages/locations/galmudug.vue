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
  			title: 'Galmudug',
  			galmudugDisbursementClusterData: [
  				[
  					'Peace, Inclusive\n Politics, Security &\n Rule of Law',
  					8.7,
  					3.5,
  					1.8,
  				],
  				['Effective, \nEfficient Institutions', 7.7, 6.5, 2.6],
  				['Economic Growth', 2.5, 1.8, 1.1],
  				['Infrastructure', 0.4, 1.1, 1.7],
  				['Social & \nHuman Development', 14.3, 22.1, 7.3],
  				['Reslience', 18.5, 54.1, 37.6],
  			],
  			galmudugPeacePoliticsSecurityClusterData: [
  				['2016', 8.3, 2.1, 0.4],
  				['2017', 0.1, 0.6, 0.6],
  				['2018', 0.3, 0.8, 0.8],
  			],
  			galmudugInstititionsClusterData: [
  				['Civil Service Reform/\nPublic Administration', 0.3, 0.3, 0.2],
  				['Planning, M & E\n and Statistics', 0.2, 0.2, 0.1],
  				['Public Financial\n Management', 1.2, 0.8, 1.5],
  				['State and \nLocal Governance', 6, 5.1, 0.8],
  			],
  			galmudugEconomicClusterData: [
  				['Private Sector Development', 2.2, 1.6, 1.0],
  				[
  					'Productive Sectors \n(Agriculture, Fisheries, Livestock)',
  					0.3,
  					0.1,
  					0.1,
  				],
  			],
  			galmudugInfrastructureClusterData: [
  				['Energy and ICT', 0.1, 0.2, 0.2],
  				['Mixed Infrastructure', 0.2, 0.4, 0.5],
  				['Transport: Roads,\n Ports, Airports', 0, 0, 0],
  				['Water and Sanitation\n (Urban)', 0.1, 0.5, 1],
  			],
  			galmudugSocialHumanDevClusterData: [
  				['Education', 2.6, 4.9, 1.5],
  				['Health', 11.6, 14.9, 5.8],
  			],
  			galmudugResilienceClusterData: [
  				[
  					'Migration, \nDisplayment, \nRefugees and Durable Solutions',
  					2.6,
  					7.9,
  					2.2,
  				],
  				['Natural Resources\n Management', 4.9, 3.4, 0.6],
  				['Social Protection', 0, 0, 0],
  				['Food Security', 6.1, 25.3, 30.7],
  				['Lifesaving humanitarian\n - cross-cutting', 3.9, 14.6, 2.6],
  			],
  		};
  	},

  	methods: {
  		renderClusterChart(chartData, chartTitle, container) {
  			const chart = anychart.cartesian();
  			const dataSet = anychart.data.set(chartData);

  			var seriesData_1 = dataSet.mapAs({ x: 0, value: 1, name: 2016 });
  			var seriesData_2 = dataSet.mapAs({ x: 0, value: 2, name: 2017 });
  			var seriesData_3 = dataSet.mapAs({ x: 0, value: 3, name: 2018 });

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

  			chart.legend(true);

  			var tooltip1 = series1.tooltip();
  			var tooltip2 = series2.tooltip();
  			var tooltip3 = series3.tooltip();

  			// set the padding between columns
  			chart.barsPadding(0);

  			// set the padding between column groups
  			chart.barGroupsPadding(2);

  			// const column = chart.column(seriesData);
  			// column
  			// .labels()
  			// .enabled(true)
  			// .format('${%Value}');

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
  			this.galmudugDisbursementClusterData,
  			'Galmudug: Project Disbursements by Pillar, 2016-18',
  			'project-disbursements'
  		);

  		this.renderClusterChart(
  			this.galmudugPeacePoliticsSecurityClusterData,
  			'Galmudug: Peace, Inclusive Politics, Security and Rule of Law',
  			'peace-security'
  		);

  		this.renderClusterChart(
  			this.galmudugInstititionsClusterData,
  			'Galmudug: Effective, Efficient Institutions',
  			'institutions'
  		);

  		this.renderClusterChart(
  			this.galmudugEconomicClusterData,
  			'Galmudug: Economic Growth',
  			'economic-growth'
  		);

  		this.renderClusterChart(
  			this.galmudugInfrastructureClusterData,
  			'Galmudug: Infrastructure',
  			'infrastructure'
  		);

  		this.renderClusterChart(
  			this.galmudugSocialHumanDevClusterData,
  			'Galmudug: Social & Human Development',
  			'social-human'
  		);

  		this.renderClusterChart(
  			this.galmudugResilienceClusterData,
  			'Galmudug: Resilience',
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
