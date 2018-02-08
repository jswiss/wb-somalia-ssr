<template>
  <div id="benadir">
    <locations-menu></locations-menu>
    benadir
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
  #benadir {
  	margin-top: 5%;
  }
</style>
