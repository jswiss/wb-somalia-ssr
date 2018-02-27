<template>
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
</template>

<script>
  export default {
  	name: 'DevelopmentTable',
  	data() {
  		return {
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
  };
</script>

<style scoped>
  .table {
  	overflow: auto;
  }
</style>

