<template>
  <div id="tree"></div>
</template>

<script>
	const d3 = Object.assign({}, require('d3-array'), require('d3-collection'));
	import { capitalizeString } from '../pages/helpers';

	export default {
		name: 'TreeMap2016',
		computed: {
			tree() {
				const data = this.$store.state.treeMap2016;

				const tree = { values: {} };
				tree.values = d3
					.nest()
					.key(d => d.Location)
					.key(d => d['NDP Pillar'])
					.key(d => d.Sector)
					.key(d => d['Project title'])
					.rollup(d => d3.sum(d, d => d.Value))
					.entries(data);
				console.log('====================================');
				console.log(tree);
				console.log('====================================');

				const tree2016 = [
					{
						name: 2016,
						children: tree.values.map(location => {
							return {
								name: location.key,
								children: location.values.map(pillar => {
									return {
										name: pillar.key,
										children: pillar.values.map(sector => {
											return {
												name: sector.key,
												children: sector.values.map(project => {
													return {
														name: project.key,
														value: project.value,
														url: `https://somaliaaidflows.so/tables/projects/${
															project.key
														}`,
													};
												}),
											};
										}),
									};
								}),
							};
						}),
					},
				];

				return tree2016;
			},
		},
		methods: {
			treeChart() {
				const treeData = this.tree;
				const chart = anychart.treeMap(treeData);

				chart
					.headers()
					.format('{%name} :: Disbursements: ${%value}{groupsSeparator:\\,}');
				chart.headers().fontSize(15);
				chart.headers().fontWeight('bold');
				chart.labels().format('{%name}');
				// chart.labels().textWrap('byWord');
				chart.labels().fontSize(11);
				chart.labels().fontWeight(900);
				chart.labels().fontColor('White');
				chart.tooltip().titleFormat('{%name}');
				chart.tooltip().format('${%Value}{groupsSeparator:\\,}');
				chart.hintOpacity(0.7);
				chart.listen('pointClick', e => {
					// eslint-disable-next-line
					console.log(e.point.get('name'));
					const newValue = e.point.get('url');
					if (newValue) {
						window.open(newValue, '_self');
					}
				});
				chart.maxDepth(1);
				chart.colorRange(true);

				chart.container('tree');
				chart.draw();
			},
		},
		mounted() {
			this.treeChart();
		},
	};
</script>

<style scoped>
	#tree {
		width: auto;
		height: 450px;
	}
</style>

