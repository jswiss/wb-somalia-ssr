<template>
  <div id="overview">
    <div class="columns">
      <div class="column is-1"></div>
      <h1 class="column title is-3">Overview of Flows</h1>
    </div>
    <div id="charts-section" class="columns">
      <div class="column is-10 is-mobile">
        <h4 class="subtitle is-5">Select a chart: </h4>
        <div class="field">
          <p class="control" id="chart-radios">
            <label class="radio">
              <input type="radio" name="question" value="oda" @click="flowsDisplayed = !flowsDisplayed">
              ODA Trends
            </label>
            <label class="radio">
              <input type="radio" name="question" value="flow" @click="flowsDisplayed = true" checked>
              Flows as % of GDP
            </label>
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-1 is-mobile"></div>
      <div  id="charts" class="column is-8 is-mobile">
        <oda-chart v-if="!flowsDisplayed"></oda-chart>
        <gdp-chart v-if="flowsDisplayed"></gdp-chart>
      </div>
      <div class="column is-1 is-mobile"></div>
    </div>
    <div id="tables-section" class="columns">
      <div class="column is-8 is-mobile">
        <h4 class="subtitle is-5">Select a table: </h4>
        <div class="field">
          <p class="control" id="table-radios">
            <label class="radio">
              <input type="radio" name="question" value="oda" @click="devDisplayed = !devDisplayed">
              Humanitarian Table
            </label>
            <label class="radio">
              <input type="radio" name="question" value="flow" @click="devDisplayed = true">
              Development Table
            </label>
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-1 is-mobile"></div>
      <div class="column is-8 is-mobile">
        <no-ssr placeholder="Loading...">
          <humanitarian-table v-if="!devDisplayed"></humanitarian-table>
        </no-ssr>
        <no-ssr placeholder="Loading...">
          <development-table v-if="devDisplayed"></development-table>
        </no-ssr>
      </div>
      <div class="column is-1 is-mobile"></div>
    <div class="columns"></div>
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
  	data() {
  		return {
  			flowsDisplayed: true,
  			devDisplayed: true,
  		};
  	},
  	components: {
  		HumanitarianTable,
  		DevelopmentTable,
  		GdpChart,
  		OdaChart,
  	},
  };
</script>

<style scoped>
  #charts-section,
  #tables-section {
  	margin-top: 2%;
  }
  #charts {
  	height: 400px;
  }
  #overview {
  	margin-top: 3%;
  }
  #tables {
  	margin-top: 6%;
  }

  .subtitle {
  	font-weight: bold;
  }

  label.radio,
  h4 {
  	margin-left: 15%;
  }
  input[type='radio'] {
  	margin-right: 10px;
  }
</style>

