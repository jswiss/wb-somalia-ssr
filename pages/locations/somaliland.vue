<template lang="html">
  <div id="section" class="section">
    <div id="sectors" class="container is-fluid">
      <h1 class="title is-1">{{ title }}</h1>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-9 is-mobile">
          <div id="project-disbursements"></div>
        </div>
        <div class="column is-2">
          <a href="https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+Somaliland+Excerpt.pdf"  target="_blank" class="button is-link">{{title}} Report</a>
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
				title: 'Somaliland',
				somalilandDisbursementClusterData: [
					[
						'Peace, Inclusive\n Politics, Security &\n Rule of Law',
						12.3,
						21.2,
						7.7,
					],
					['Effective, Efficient\n Institutions', 19.8, 12.7, 3.5],
					['Economic Growth', 6.9, 5.8, 3.4],
					['Infrastructure', 1, 4.6, 2.7],
					['Social & \nHuman Development', 14.2, 20.2, 10.3],
					['Reslience', 21.7, 50.7, 36.6],
				],
				somalilandPeacePoliticsSecurityClusterData: [
					['2016', 7, 9.7, 4.7],
					['2017', 4, 4.5, 0.7],
					['2018', 1.3, 7, 2.3],
				],
				somalilandInstititionsClusterData: [
					['Civil Service Reform/\nPublic Administration', 3.1, 3.5, 0.2],
					['Planning, M & E\n and Statistics', 0.9, 1, 1.3],
					['Public Financial\n Management', 1.6, 1.3, 2],
					['State and Local\n Governance', 14.2, 6.9],
				],
				somalilandEconomicClusterData: [
					['Private Sector\n Development', 4.2, 3, 3.3],
					[
						'Productive Sectors\n (Agriculture, \nFisheries, Livestock)',
						2.8,
						2.8,
						0.1,
					],
				],
				somalilandInfrastructureClusterData: [
					['Energy and ICT', 0.1, 0.2, 0.2],
					['Mixed Infrastructure', 0.8, 3.8, 1.5],
					['Transport: Roads,\n Ports, Airports', 0, 0, 0],
					['Water and \nSanitation (Urban)', 0.1, 0.5, 1],
				],
				somalilandSocialHumanDevClusterData: [
					['Education', 2.6, 4.5, 2.1],
					['Health', 11.4, 13.4, 8.1],
				],
				somalilandResilienceClusterData: [
					[
						'Migration, \nDisplayment, \nRefugees and \nDurable Solutions',
						2.9,
						10.9,
						2.7,
					],
					['Natural Resources\n Management', 5, 4.5, 0.4],
					['Social Protection', 0, 0, 0],
					['Food Security', 5.1, 26.0, 28.2],
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

				chart.tooltip().format('${%Value} mln');

				chart.container(container);

				chart.draw();
			},
		},
		mounted() {
			this.renderClusterChart(
				this.somalilandDisbursementClusterData,
				'Somaliland: Project Disbursements by Pillar, 2016-18',
				'project-disbursements'
			);

			this.renderClusterChart(
				this.somalilandPeacePoliticsSecurityClusterData,
				'Somaliland: Peace, Inclusive Politics, Security and Rule of Law',
				'peace-security'
			);

			this.renderClusterChart(
				this.somalilandInstititionsClusterData,
				'Somaliland: Effective, Efficient Institutions',
				'institutions'
			);

			this.renderClusterChart(
				this.somalilandEconomicClusterData,
				'Somaliland: Economic Growth',
				'economic-growth'
			);

			this.renderClusterChart(
				this.somalilandInfrastructureClusterData,
				'Somaliland: Infrastructure',
				'infrastructure'
			);

			this.renderClusterChart(
				this.somalilandSocialHumanDevClusterData,
				'Somaliland: Social & Human Development',
				'social-human'
			);

			this.renderClusterChart(
				this.somalilandResilienceClusterData,
				'Somaliland: Resilience',
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
