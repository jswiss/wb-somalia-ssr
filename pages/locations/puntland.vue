<template lang="html">
  <div id="section" class="section">
    <div id="sectors" class="container is-fluid">
      <h1 class="title is-1">{{ title }}</h1>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10 is-mobile">
          <div id="project-disbursements"></div>
        </div>
        <div class="column is-1">
          <a href="https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+Puntland+Excerpt+.pdf"  target="_blank" class="button is-link">{{title}} Report</a>
        </div>

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
  			title: 'Puntland',
  			puntlandDisbursementClusterData: [
  				[
  					'Peace, Inclusive \nPolitics, Security &\n Rule of Law',
  					15.3,
  					8.5,
  					3.2,
  				],
  				['Effective, Efficient\n Institutions', 15.9, 16.6, 7.3],
  				['Economic Growth', 8.7, 5.8, 5.2],
  				['Infrastructure', 7.9, 8.3, 4.2],
  				['Social & Human\n Development', 26.1, 42.8, 10.7],
  				['Reslience', 16.9, 62.2, 60.9],
  			],
  			puntlandPeacePoliticsSecurityClusterData: [
  				['2016', 6.7, 4, 1.8],
  				['2017', 7.9, 3.3, 0.1],
  				['2018', 0.7, 1.2, 1.3],
  			],
  			puntlandInstititionsClusterData: [
  				['Civil Service Reform/\nPublic Administration', 1.3, 2.4, 1.4],
  				['Planning, M & E\n and Statistics', 0.2, 0.4, 0.6],
  				['Public Financial\n Management', 5, 5.6, 5.3],
  				['State and \nLocal Governance', 9.4, 8.1, 0],
  			],
  			puntlandEconomicClusterData: [
  				['Private Sector\n Development', 6.7, 4.87, 3.9],
  				[
  					'Productive Sectors\n (Agriculture, \nFisheries, Livestock)',
  					2.0,
  					1.1,
  					1.3,
  				],
  			],
  			puntlandInfrastructureClusterData: [
  				['Energy and ICT', 0.2, 0.5, 0.5],
  				['Mixed Infrastructure', 5.2, 2.1, 0.8],
  				['Transport: Roads,\n Ports, Airports', 1.4, 4.2, 0.9],
  				['Water and \nSanitation (Urban)', 1.1, 1.6, 2.0],
  			],
  			puntlandSocialHumanDevClusterData: [
  				['Education', 6.4, 7.4, 1.5],
  				['Health', 19.3, 30, 9.1],
  			],
  			puntlandResilienceClusterData: [
  				[
  					'Migration, \nDisplayment, \nRefugees and \nDurable Solutions',
  					2.4,
  					8.9,
  					3,
  				],
  				['Natural Resources\n Management', 3.4, 9.6, 8.1],
  				['Social Protection', 0.1, 0.4, 0],
  				['Food Security', 9.8, 41.6, 49.1],
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
  			this.puntlandDisbursementClusterData,
  			`${this.title}: Project Disbursements by Pillar, 2016-18`,
  			'project-disbursements'
  		);

  		this.renderClusterChart(
  			this.puntlandPeacePoliticsSecurityClusterData,
  			`${this.title}: Peace, Inclusive Politics, Security and Rule of Law`,
  			'peace-security'
  		);

  		this.renderClusterChart(
  			this.puntlandInstititionsClusterData,
  			`${this.title}: Effective, Efficient Institutions`,
  			'institutions'
  		);

  		this.renderClusterChart(
  			this.puntlandEconomicClusterData,
  			`${this.title}: Economic Growth`,
  			'economic-growth'
  		);

  		this.renderClusterChart(
  			this.puntlandInfrastructureClusterData,
  			`${this.title}: Infrastructure`,
  			'infrastructure'
  		);

  		this.renderClusterChart(
  			this.puntlandSocialHumanDevClusterData,
  			`${this.title}: Social & Human Development`,
  			'social-human'
  		);

  		this.renderClusterChart(
  			this.puntlandResilienceClusterData,
  			`${this.title}: Resilience`,
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
