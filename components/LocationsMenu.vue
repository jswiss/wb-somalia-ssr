<template>
  <div id="location-menu">
      <div class="columns is-mobile">
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/FGS" >
            <div id="chart-selector-1" class="column">
              <span>
                <img src="../static/icons/institutions.svg" alt="FGS" class="location-icon">
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
              <img src="../static/icons/Benadir.svg" alt="Benadir" class="location-icon">
              <h4 class="sidebar-title">
                Benadir
              </h4>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Galmudug" >
            <div id="chart-selector-3" class="column">
              <img src="../static/icons/Galmudug.svg" alt="Galmudug" class="location-icon">
              <h4 class="sidebar-title">
                Galmudug
              </h4>
            </div>
          </nuxt-link>
        </div>
          <div class="outline">
            <nuxt-link class="nav-item" to="/locations/Hiirshabelle">
              <div id="chart-selector-4" class="column">
                <img src="../static/icons/Hiirshabelle.svg" alt="Hiirshabelle" class="location-icon">
                <h4 class="sidebar-title">
                  Hiirshabelle
                </h4>
              </div>
            </nuxt-link>
          </div>
      </div>
      <div class="columns is-mobile">
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Jubaland">
            <div id="chart-selector-5" class="column">
              <img src="../static/icons/Jubaland.svg" alt="Jubaland" class="location-icon">
              <h4 class="sidebar-title">
                Jubaland
              </h4>
            </div>
          </nuxt-link>
        </div>
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Puntland" >
            <div id="chart-selector-6" class="column">
              <img src="../static/icons/Puntland.svg" alt="Puntland" class="location-icon">
              <h4 class="sidebar-title">
                Puntland
              </h4>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Somaliland" >
            <div id="chart-selector-7" class="column">
              <img src="../static/icons/Somaliland.svg" alt="Somaliland" class="location-icon">
              <h4 class="sidebar-title">
                Somaliland
              </h4>
            </div>
          </nuxt-link>
        </div>
        <div class="outline">
          <nuxt-link class="nav-item" to="/locations/Southwest" >
            <div id="chart-selector-8" class="column">
              <img src="../static/icons/SouthWest.svg" alt="South West" class="location-icon">
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
  	width: 100%;
  }

  .sidebar-title {
  	font-size: 12px;
  }

  #location-menu {
  	margin: 6% 0 0 1%;
  }

  .location-icon {
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

