<template>
  <div>
    <nav-bar class="nav"/>
    <nuxt/>
    <footer-menu/>
  </div>
</template>

<script>
  import NavBar from '~/components/NavBar';
  import FooterMenu from '~/components/FooterMenu';
  export default {
  	components: {
  		NavBar,
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
  .nav {
  	margin-bottom: 5%;
  }
</style>
