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
        <div class="column is-5">
          <div id="economic-growth"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="resilience"></div>
        </div>
        <div class="column is-1"></div>
        <div class="column is-5">
          <div id="infrastructure"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <div id="social-human"></div>
        </div>
        <div class="column is-1"></div>
        <div class="column is-5">
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
  			title: 'Federal Government of Somalia',
  			fgsDisbursementClusterData: [
  				[
  					'Peace, Inclusive\n Politics, Security &\n Rule of Law',
  					63,
  					41.5,
  					4.7,
  				],
  				['Effective, \nEfficient Institutions', 64.7, 86.3, 35.4],
  				['Economic Growth', 4.4, 5.7, 3.8],
  				['Infrastructure', 3.6, 4.8, 4.2],
  				['Social & \nHuman Development', 7.3, 10.3, 2.1],
  				['Reslience', 3.3, 15.1, 10.5],
  			],
  			fgsPeacePoliticsSecurityClusterData: [
  				['2016', 17.6, 12.8, 4],
  				['2017', 25.2, 17.5, 0.2],
  				['2018', 20.2, 11.1, 0.5],
  			],
  			fgsInstititionsClusterData: [
  				['Civil Service Reform/\nPublic Administration', 7.1, 9, 3.8],
  				['Planning, M & E\n and Statistics', 2.5, 4.3, 3],
  				['Public Financial\n Management', 50.1, 67.5, 28.4],
  				['State and \nLocal Governance', 5, 5.3, 0.2],
  			],
  			fgsEconomicClusterData: [
  				['Private Sector\n Development', 1.8, 3, 3.7],
  				[
  					'Productive Sectors\n (Agriculture, Fisheries, Livestock)',
  					2.7,
  					2.7,
  					0.1,
  				],
  			],
  			fgsInfrastructureClusterData: [
  				['Energy and ICT', 1.2, 2.2, 2.1],
  				['Mixed Infrastructure', 2.3, 2.2, 1.5],
  				['Transport: Roads, \nPorts, Airports', 0.1, 0.2, 0.2],
  				['Water and Sanitation\n (Urban)', 0, 0.2, 0.5],
  			],
  			fgsSocialHumanDevClusterData: [
  				['Education', 4.8, 4, 0.4],
  				['Health', 2.4, 6.3, 1.6],
  			],
  			fgsResilienceClusterData: [
  				[
  					'Migration, \nDisplayment, \nRefugees and Durable Solutions',
  					1.1,
  					2.5,
  					0.7,
  				],
  				['Natural Resources\n Management', 0, 0.1, 0],
  				['Social Protection', 0, 1.1, 0],
  				['Food Security', 1.4, 10.4, 9.9],
  				['Lifesaving humanitarian\n - cross-cutting', 0.7, 1, 0],
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

  			chart.tooltip().format('{%x}: ${%Value}');

  			chart.container(container);

  			chart.draw();
  		},
  	},
  	mounted() {
  		this.renderClusterChart(
  			this.fgsDisbursementClusterData,
  			'FGS: Project Disbursements by Pillar, 2016-18',
  			'project-disbursements'
  		);

  		this.renderClusterChart(
  			this.fgsPeacePoliticsSecurityClusterData,
  			'FGS: Peace, Inclusive Politics, Security and Rule of Law',
  			'peace-security'
  		);

  		this.renderClusterChart(
  			this.fgsInstititionsClusterData,
  			'FGS: Effective, Efficient Institutions',
  			'institutions'
  		);

  		this.renderClusterChart(
  			this.fgsEconomicClusterData,
  			'FGS: Economic Growth',
  			'economic-growth'
  		);

  		this.renderClusterChart(
  			this.fgsInfrastructureClusterData,
  			'FGS: Infrastructure',
  			'infrastructure'
  		);

  		this.renderClusterChart(
  			this.fgsSocialHumanDevClusterData,
  			'FGS: Social & Human Development',
  			'social-human'
  		);

  		this.renderClusterChart(
  			this.fgsResilienceClusterData,
  			'Project Disbursements for FGS: Resilience',
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
