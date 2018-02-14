 <!--home page-->
<template>
  <div id="topmost" class="columns is-gapless is-mobile">
    <div class="column is-3">
      <home-text></home-text>
    </div>
    <div class="column">
      {{ projects }}
    </div>
  </div>
</template>

<script type="text/javascript">
  import { mapState } from 'vuex';
  import HomeText from '~/components/HomeText';
  import { getAllProjects } from './helpers';

  export default {
  	name: 'home',
  	components: {
  		HomeText,
  	},
  	fetch: getAllProjects,
  	computed: {
  		...mapState({
  			projects: state => state.projectsTable,
  		}),
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
