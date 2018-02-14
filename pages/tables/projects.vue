	<template>
    <div id="projects">
      <table-tabs></table-tabs>
      <div id="table">
      </div>
    </div>
  </template>

  <script>
  import TableTabs from '~/components/TableTabs';

  export default {
  	name: 'projects',
  	components: {
  		TableTabs,
  	},
  };
</script>

<style scoped>
  #projects {
  	margin-top: 5%;
  }
</style>
