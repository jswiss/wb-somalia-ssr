 <!--home page-->
<template>
  <div id="topmost" class="columns is-gapless is-mobile">  
    <div class="column is-3">
      <home-text></home-text>
    </div>
    <div class="column">
    </div>
  </div>
</template>

<script type="text/javascript">
  import HomeText from '~/components/HomeText';

  export default {
  	name: 'home',
  	components: {
  		HomeText,
  	},
  };
</script>

<style scoped>
  #topmost {
  	margin-top: 25px;
  }
  .control {
  	margin-left: 20px;
  }
  .field {
  	margin: 1%;
  }
</style>
