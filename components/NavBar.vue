<template>
<nav class="navbar has-shadow is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <nuxt-link class="navbar-item" to="/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Somalia.svg/200px-Coat_of_arms_of_Somalia.svg.png" alt="Somalia Aid Flows">
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
      <i class="icon"><img src="https://icon.now.sh/map" alt=""></i>Locations
    </nuxt-link>
    <nuxt-link class="navbar-item is-tab" to="/sectors">
      <i class="icon"><img src="https://icon.now.sh/developer_board" alt=""></i>Sectors
    </nuxt-link>
    <nuxt-link class="navbar-item is-tab" to="/documents">
      <i class="icon"><img src="https://icon.now.sh/library_books" alt=""></i>Documents
    </nuxt-link>
    <nuxt-link class="navbar-item is-tab" to="/about">
      <i class="icon"><img src="https://icon.now.sh/info_outline" alt=""></i>About
    </nuxt-link>
  </div>
  </div>
</nav>
  <!-- <nav class="nav has-shadow" >
    <div class="nav-left">
      <nuxt-link class="nav-item" to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Somalia.svg/200px-Coat_of_arms_of_Somalia.svg.png" alt="FGS Emblem">
      </nuxt-link>
      <nuxt-link class="nav-item is-brand" to="/">
        Somalia Aid Flows
      </nuxt-link>
      <nuxt-link class="nav-item is-tab" to="/locations">
        <i class="fa fa-dashboard"></i>Locations
      </nuxt-link>
      <nuxt-link class="nav-item is-tab" to="/sectors">
        <i class="fa fa-list-alt"></i>Sectors
      </nuxt-link>
      <nuxt-link class="nav-item is-tab" to="/documents">
        <i class="fa fa-info-circle"></i>Documents
      </nuxt-link>
      <nuxt-link class="nav-item is-tab" to="/about">
        <i class="fa fa-info-circle"></i>About
      </nuxt-link>
    </div>
    <div class="nav-right">
      <a class="nav-item is-tab report" href="https://s3.eu-west-2.amazonaws.com/somaliaaidflows.so/assets/Aid+Flows+Booklet+FINAL.pdf">Download the Report</a>
    </div>
  </nav> -->
</template>
<script type="text/javascript">
  export default {
  	name: 'NavBar',
  };
</script>

<style scoped>
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
