<template>
  <div id="jubaland">
    <locations-menu></locations-menu>
    jubaland
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
  #jubaland {
  	margin-top: 5%;
  }
</style>
