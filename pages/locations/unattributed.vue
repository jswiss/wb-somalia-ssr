<template>
  <div id="unattributed">
    <locations-menu></locations-menu>
    unattributed
  </div>
</template>

<script>
  import LocationsMenu from '~/components/LocationsMenu';
  export default {
  	components: {
  		LocationsMenu,
  	},
  };
</script>

<style scoped>
  #unattributed {
  	margin-top: 5%;
  }
</style>
