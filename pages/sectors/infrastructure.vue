<template lang="html">
  <div id="sectors" class="container is-fluid">
    Infrastructure
  </div>
</template>

<script>
  export default {
  	name: 'infrastructure',
  	layout: 'sectors',
  };
</script>

<style scoped>
  /* make sure div#id has a size defined, otherwise nothing will render */

  #container {
  	width: 100%;
  	height: 100%;
  	margin: 0;
  	padding: 0;
  }
</style>
