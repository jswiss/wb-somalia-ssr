<template>
  <div>
    <nav-bar class="nav"/>
    <div class="columns">
      <div class="column is-2 is-mobile">
        <sectors-menu/>
      </div>
      <div class="column is-10 is-mobile">
        <nuxt/>
      </div>
    </div>
    <footer-menu/>
  </div>
</template>

<script>
  import NavBar from '~/components/NavBar';
  import SectorsMenu from '~/components/SectorsMenu';
  import FooterMenu from '~/components/FooterMenu';
  export default {
  	name: 'sectors',
  	components: {
  		NavBar,
  		SectorsMenu,
  		FooterMenu,
  	},
  };
</script>

<style scoped>
  html {
  	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  		Roboto, 'Helvetica Neue', Arial, sans-serif;
  	font-size: 16px;
  	word-spacing: 1px;
  	-ms-text-size-adjust: 100%;
  	-webkit-text-size-adjust: 100%;
  	-moz-osx-font-smoothing: grayscale;
  	-webkit-font-smoothing: antialiased;
  	box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
  	box-sizing: border-box;
  	margin: 0;
  }
  .columns {
  	margin: 3% 0 0 0;
  }
</style>
