<template>
<nav class="navbar has-shadow is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <nuxt-link class="navbar-item" to="/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Somalia.svg/50px-Coat_of_arms_of_Somalia.svg" alt="Somalia Aid Flows">
    </nuxt-link>
    <nuxt-link class="navbar-item is-brand" to="/">
      Somalia Aid Flows
    </nuxt-link>

    <button class="button navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  <div class="navbar-menu">
    <nuxt-link class="navbar-item is-tab" to="/locations">
      <!-- <i class="icon"><img src="https://icon.now.sh/map" alt=""></i>Locations -->
      <i class="icon"><img src="../static/icons/somalia-outline-black.svg" alt=""></i>Locations
    </nuxt-link>
    <nuxt-link class="navbar-item is-tab" to="/sectors">
      <i class="icon"><img class="image-icon"  src="https://icon.now.sh/developer_board" alt=""></i>Sectors
    </nuxt-link>
    <nuxt-link class="navbar-item is-tab" to="/tables">
      <i class="icon"><img class="image-icon"  src="https://icon.now.sh/grid_on" alt=""></i>Tables
    </nuxt-link>
    <nuxt-link class="navbar-item is-tab" to="/documents">
      <i class="icon"><img class="image-icon"  src="https://icon.now.sh/library_books" alt=""></i>Documents
    </nuxt-link>
    <nuxt-link class="navbar-item is-tab" to="/about">
      <i class="icon"><img  class="image-icon" src="https://icon.now.sh/info_outline" alt=""></i>About
    </nuxt-link>
  </div>
  </div>
</nav>

</template>
<script type="text/javascript">
  export default {
  	name: 'NavBar',
  };
</script>

<style scoped>
  .image-icon {
  	width: auto;
  	height: 103%;
  	margin-right: 20%;
  }
  .is-tab {
  	text-indent: 10px;
  }

  .is-brand {
  	font-weight: bold;
  	text-indent: -10px;
  }

  .nav {
  	position: fixed !important;
  	top: 0;
  	left: 0;
  	right: 0;
  	z-index: 1030;
  	margin-bottom: 40px;
  }

  .report {
  	font-weight: bold;
  }
</style>
