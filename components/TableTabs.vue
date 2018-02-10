<!-- table tabs-->
<template lang="html">
  <div id="tables" class="container is-fluid">
    <div class="tabs is-centered">
      <ul>
        <li>
          <nuxt-link class="nav-item is-tab" to="/tables/projects">
            Projects
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-item is-tab" to="/tables/envelopes">
            Envelopes
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-item is-tab" to="/tables/locations">
            Locations
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-item is-tab" to="/tables/pooled-funds">
            Pooled Funds
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
  	name: 'TableTabs',
  };
</script>

<style scoped>
  .nav-item {
  	margin: 6px 30px 6px 30px;
  }
</style>
