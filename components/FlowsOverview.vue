<template>
  <div id="overview">
    <div class="columns">
      <div class="column is-1"></div>
      <h1 class="column title is-3">Overview of Flows</h1>
    </div>
    <div class="columns">
      <div class="column is-5">
        <gdp-chart></gdp-chart>
      </div>
      <div class="column is-1"></div>
      <div class="column is-5">
        <oda-chart></oda-chart>
      </div>
    <div class="columns"></div>
    </div>
    <div class="columns" id="tables">
      <div class="column is-1"></div>
      <no-ssr placeholder="Loading...">
        <humanitarian-table/>
      </no-ssr>
      <no-ssr>
        <development-table/>
      </no-ssr>
    </div>
  </div>
</template>

<script>
  import HumanitarianTable from '~/components/HumanitarianTable';
  import DevelopmentTable from '~/components/DevelopmentTable';
  import GdpChart from '~/components/GdpChart';
  import OdaChart from '~/components/OdaChart';

  export default {
  	name: 'FlowsOverview',
  	components: {
  		HumanitarianTable,
  		DevelopmentTable,
  		GdpChart,
  		OdaChart,
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

