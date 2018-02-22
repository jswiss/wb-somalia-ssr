<template>
  <div id="location-menu">
      <div class="columns is-mobile">
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/FGS" >
            <div id="chart-selector-1" class="column">
              <span>
                <img src="../static/icons/somalia-outline-black.svg" alt="" class="location-icon">
              </span>
              <h4 class="sidebar-title">
                FGS
              </h4>
            </div>
          </nuxt-link>
        </div>
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Benadir" >
            <div id="chart-selector-2" class="column">
              <img src="../static/icons/Benadir.svg" alt="" class="location-icon">
              <h4 class="sidebar-title">
                Benadir
              </h4>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="columns">
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Galmudug" >
            <div id="chart-selector-3" class="column">
              <img src="../static/icons/Galmudug.svg" alt="" class="location-icon">
              <h4 class="sidebar-title">
                Galmudug
              </h4>
            </div>
          </nuxt-link>
        </div>
          <div class="outline">
            <nuxt-link class="nav-item" to="/locations/Hiirshabelle">
              <div id="chart-selector-4" class="column">
                <img src="../static/icons/Hiirshabelle.svg" alt="" class="location-icon">
                <h4 class="sidebar-title">
                  Hiirshabelle
                </h4>
              </div>
            </nuxt-link>
          </div>
      </div>
      <div class="columns">
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Jubaland">
            <div id="chart-selector-5" class="column">
              <img src="../static/icons/Jubaland.svg" alt="" class="location-icon">
              <h4 class="sidebar-title">
                Jubaland
              </h4>
            </div>
          </nuxt-link>
        </div>
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Puntland" >
            <div id="chart-selector-6" class="column">
              <img src="../static/icons/Puntland.svg" alt="" class="location-icon">
              <h4 class="sidebar-title">
                Puntland
              </h4>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="columns">
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Somaliland" >
            <div id="chart-selector-7" class="column">
              <img src="../static/icons/Somaliland.svg" alt="" class="location-icon">
              <h4 class="sidebar-title">
                Somaliland
              </h4>
            </div>
          </nuxt-link>
        </div>
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Southwest" >
            <div id="chart-selector-8" class="column">
              <img src="../static/icons/SouthWest.svg" alt="" class="location-icon">
              <h4 class="sidebar-title">
                South West
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
  }

  .sidebar-title {
  	font-size: 14px;
  }

  #location-menu {
  	margin: 1% 0 0 1%;
  }

  .location-icon {
  	width: 80px;
  	height: 80px;
  }

  h4 {
  	color: #0a0a0a;
  	text-decoration: none;
  }

  div.outline.is-active {
  	border: 1px solid #db1414;
  	margin: 1px;
  }
</style>

