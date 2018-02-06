 <!--home page-->
<template>
  <div id="topmost" class="columns is-gapless is-mobile">  
    <div class="column is-3">
      <home-text></home-text>
    </div>
    <div class="column">
      <div>
        <p id="support">Developed with the support of the World Bank and United Nations.</p>
      </div>
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
.disclaimer-text {
  margin-left: 2%;
  font-style: italic;
  font-size: 12px;
  color: gray;
}
#topmost {
  margin-top: 25px;
}
.control {
  margin-left: 20px;
}
.field {
  margin: 1%;
}
#support {
  text-align: center;
  margin: 2%;
  font-size: 11px;
  color: gray;
}
</style>
