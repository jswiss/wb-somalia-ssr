	<template>
    <div id="pools">
      <table-tabs></table-tabs>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-4 is-mobile">
          <div id="pie-chart"></div>
        </div>
        <!-- <div class="column is-1"></div> -->
        <div id="table" class="column is-6">
          <h1 class="title is-4">{{ title }}</h1>
          <no-ssr placeholder="loading">
            <v-client-table
              :data="pools"
              :columns="columns"
              :options="options"
            >
              <template slot="2015" slot-scope="props">
                <div>
                  ${{ props.row['2015'] | currency }}
                </div>
              </template>
              <template slot="2016" slot-scope="props">
                <div>
                  ${{ props.row['2016'] | currency }}
                </div>
              </template>
              <template slot="2017" slot-scope="props">
                <div>
                 ${{ props.row['2017'] | currency }}
                </div>
              </template>
              <template slot="2018" slot-scope="props">
                <div>
                  ${{ props.row['2018'] | currency }}
                </div>
              </template>
              <template slot="Trends" slot-scope="props">
                <div>
                  <trend :data="[props.row['2015'], props.row['2016'], props.row['2017'], props.row['2018'] ]" auto-draw smooth></trend>
                </div>
              </template>
            </v-client-table>
          </no-ssr>
        </div>
        <div class="column is-2"></div>
      </div>
    </div>
  </template>

  <script>
  import { mapState } from 'vuex';
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'envelopes',
  	data() {
  		return {
  			pieData: [
  				{
  					x: 'WB MPF',
  					value: 197.0,
  					normal: { fill: this.$store.state.color.green },
  				},
  				{
  					x: 'UN MPTF',
  					value: 183.7,
  					normal: { fill: this.$store.state.color.yellow },
  				},
  				{
  					x: 'AfDB SIF',
  					value: 20.2,
  					normal: { fill: this.$store.state.color.tan },
  				},
  				{
  					x: 'Aid channeled\n outside of\n SDRF Funds',
  					value: 1531.2,
  					normal: { fill: this.$store.state.color.blue },
  				},
  			],
  			title: 'Filter by agency, contributions to MDTFs, or Category',
  			columns: [
  				'Agency',
  				'Contributions to MDTFs',
  				'Category',
  				'2015',
  				'2016',
  				'2017',
  				'2018',
  				'Trends',
  			],
  			options: {
  				options: {
  					highlightMatches: true,
  					filterByColumn: true,
  					filterable: ['Agency', 'Contributions to MDTFs', 'Category'],
  					storage: 'local',
  				},
  			},
  		};
  	},
  	methods: {
  		renderPie() {
  			const chart = anychart.pie(this.pieData);
  			chart.title(
  				'Share of Development Aid Channeled through SDRF Funds, 2015-17'
  			);
  			chart.animation(true);

  			chart
  				.labels()
  				.format('{%x}\n${%Value} mln')
  				.position('outside');

  			chart.tooltip().format('{%x}: ${%Value}{groupsSeparator:\\,}');
  			chart.container('pie-chart');
  			chart.draw();
  		},
  	},
  	mounted() {
  		this.renderPie();
  	},
  	components: {
  		TableTabs,
  	},
  	computed: {
  		...mapState({
  			pools: state => state.pooledTable,
  		}),
  	},
  };
</script>

<style scoped>
  #table {
  	overflow: auto;
  }
  .title,
  #pie-chart {
  	margin-top: 2%;
  }

  #pie-chart {
  	height: 800px;
  	width: 100%;
  }
</style>
