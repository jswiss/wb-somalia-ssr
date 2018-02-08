<template>
  <div id="location">
    <locations-menu></locations-menu>
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
  #location {
  	margin-top: 5%;
  }
</style>