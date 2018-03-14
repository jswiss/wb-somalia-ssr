 <!--home page-->
<template lang="html">
  <div id="side" class="section">
    <div class="title columns">
      <div class="column">
        <p class="text" id="top">
          Aid to Somalia reached a record high in 2017 totaling US$ 1.75 billion. The increase in ODA was primarily driven by the surge in humanitarian support provided in response to the drought. Find out how this financing was delivered in the <a href="https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+2018FINAL.pdf" target="_blank">latest aid flow report</a>, which provides detailed breakdowns of flows by sector and location.
        </p>
        <p class="text">
          This site provides tools for exploring the underlying data of this report. The 2017 aid mapping exercise was led by the Ministry of Planning, Investment and Economic Development (MoPIED), with the support of the World Bank and United Nations.
        </p>
      </div>
    </div>
    <div id="report columns">
      <div class="column">
        <h1 class="title is-4">Download the Latest Report</h1>
        <br>
        <a href="https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+2018FINAL.pdf"><img src="https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/2018AidFlowsCover.png"/></a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
  	name: 'HomeText',
  };
</script>

<style scoped>
  .title {
  	display: inline-block;
  }
  #top {
  	margin-top: 10%;
  }
  .text {
  	font-size: 16px;
  	text-align: justify;
  	line-height: 1.5;
  	margin: 3%;
  	font-weight: 400;
  }
  #report {
  	margin-top: 2%;
  	text-align: center;
  }
</style>
