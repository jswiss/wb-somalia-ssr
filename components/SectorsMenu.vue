<template>
  <div id="sectors-menu">
    <div class="columns is-mobile">
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/inclusive-politics" >
          <div id="chart-selector-1" class="column">
            <span>
              <img src="../static/icons/inclusive-politics.svg" alt="" class="location-icon">
            </span>
            <h4 class="sidebar-title">
              Inclusive Politics
            </h4>
          </div>
        </nuxt-link>
      </div>
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/rule-of-law" >
          <div id="chart-selector-2" class="column">
            <img src="../static/icons/rule-of-law.svg" alt="" class="location-icon">
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
          <div id="chart-selector-3" class="column">
            <img src="../static/icons/institutions.svg" alt="" class="location-icon">
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
            <div id="chart-selector-4" class="column">
              <img src="../static/icons/economic-growth.svg" alt="" class="location-icon">
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
          <div id="chart-selector-5" class="column">
            <img src="../static/icons/infrastructure.svg" alt="" class="location-icon">
            <h4 class="sidebar-title">
              Infrastructure
            </h4>
          </div>
        </nuxt-link>
      </div>
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/social-and-human-development" >
          <div id="chart-selector-6" class="column">
            <img src="../static/icons/social-development.svg" alt="" class="location-icon">
            <h4 class="sidebar-title">
              Social and
              <br>
              Human
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
          <div id="chart-selector-7" class="column">
            <img src="../static/icons/resilience.svg" alt="" class="location-icon">
            <h4 class="sidebar-title">
              Resilience
            </h4>
          </div>
        </nuxt-link>
      </div>
      <div class="outline">
        <nuxt-link class="nav-item" to="/sectors/gender-and-human-rights" >
          <div id="chart-selector-8" class="column">
            <img src="../static/icons/gender-rights.svg" alt="" class="location-icon">
            <h4 class="sidebar-title">
              Gender and
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
  .outline-white {
  	border: 1px solid #fff;
  	margin: 1px;
  }

  .sidebar-title {
  	font-size: 12px;
  }

  #sectors-menu {
  	margin: 1% 0 0 1%;
  }

  .location-icon {
  	width: 80px;
  	height: 80px;
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

