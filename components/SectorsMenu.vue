<template>
  <div id="sectors-menu">
    <div class="columns">
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/inclusive-politics" >
          <div id="chart-selector-1" class="column is-mobile">
            <span>
              <img src="../static/icons/inclusive-politics.svg" alt="Inclusive Politics" class="sector-icon">
            </span>
            <h4 class="sidebar-title">
              Inclusive Politics
            </h4>
          </div>
        </nuxt-link>
      </div>
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/rule-of-law" >
          <div id="chart-selector-2" class="column is-mobile">
            <img src="../static/icons/rule-of-law.svg" alt="Rule of Law" class="sector-icon">
            <h4 class="sidebar-title">
              Rule of
              <br>
              Law
            </h4>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="columns">
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/effective-efficient-institutions" >
          <div id="chart-selector-3" class="column is-mobile">
            <img src="../static/icons/institutions.svg" alt="Effective, Efficient Institutions" class="sector-icon">
            <h4 class="sidebar-title">
              Effective,
              <br>
              Efficient
              <br>
              Institutions
            </h4>
          </div>
        </nuxt-link>
      </div>
        <div class="outline">
          <nuxt-link class="nav-item" to="/sectors/economic-growth">
            <div id="chart-selector-4" class="column is-mobile">
              <img src="../static/icons/economic-growth.svg" alt="Economic Growth" class="sector-icon">
              <h4 class="sidebar-title">
                Economic
                <br>
                Growth
              </h4>
            </div>
          </nuxt-link>
        </div>
    </div>
    <div class="columns">
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/infrastructure" >
          <div id="chart-selector-5" class="column is-mobile">
            <img src="../static/icons/infrastructure.svg" alt="Infrastructure" class="sector-icon">
            <h4 class="sidebar-title">
              Infrastructure
            </h4>
          </div>
        </nuxt-link>
      </div>
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/social-and-human-development" >
          <div id="chart-selector-6" class="column is-mobile">
            <img src="../static/icons/social-development.svg" alt="Social and Human Development" class="sector-icon">
            <h4 class="sidebar-title">
              Social & Human
              <br>
               Development
            </h4>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="columns">
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/resilience" >
          <div id="chart-selector-7" class="column is-mobile">
            <img src="../static/icons/resilience.svg" alt="Resilience" class="sector-icon">
            <h4 class="sidebar-title">
              Resilience
            </h4>
          </div>
        </nuxt-link>
      </div>
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/gender-and-human-rights" >
          <div id="chart-selector-8" class="column is-mobile">
            <img src="../static/icons/gender-rights.svg" alt="Gender and Human Rights" class="sector-icon">
            <h4 class="sidebar-title">
              Gender &
              <br>
              Human Rights
            </h4>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .outline {
  	border: 1px solid #0f0f0f;
  	margin: 1px;
  	width: 100%;
  }

  .sidebar-title {
  	font-size: 12px;
  }

  #sectors-menu {
  	margin: 6% 0 0 1%;
  }

  .sector-icon {
  	width: 60%;
  	height: 60%;
  	margin-left: auto;
  	margin-right: auto;
  	display: block;
  }

  h4 {
  	color: #0a0a0a;
  	text-decoration: none;
  	text-align: center;
  }
</style>

