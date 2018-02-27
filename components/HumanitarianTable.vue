<template>
  <div class="column is-5 buffer is-mobile">
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
</template>

<script>
  export default {
  	name: 'HumanitarianTable',
  	data() {
  		return {
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
  		};
  	},
  };
</script>

<style scoped>
  .table {
  	overflow: auto;
  }
</style>
