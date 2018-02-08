<template>
  <div id="fgs">
    <locations-menu></locations-menu>
    FGS
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
  #fgs {
  	margin-top: 5%;
  }
</style>
