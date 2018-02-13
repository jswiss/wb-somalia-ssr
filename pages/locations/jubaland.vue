<template>
  <div id="jubaland">
    <locations-menu></locations-menu>
    <div class="columns">
      <div class="column">
        Jubaland
      </div>
    </div>
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
