<template lang="html">
  <div class="section">
    <div id="topmost" class="container">
      <!--<div class="block">
        <a href="#" class="button is-primary" @click="printPage">Print Page</a>
      </div>-->
        <div id="print-area">
          <div id="title">
            <h1 id="project-title" class="title is-1 is-mobile"> {{ project['Project Title'] }}</h1>
          </div>
          <div class="info-box">
            <div class="info-title">
              <h3 class="title is-3 is-mobile">Basic Information</h3>
            </div>
            <div id="basic-info" class="info-box">
              <div id="dates" class="columns is-mobile">
                <div class="column is-4 is-mobile" id="start-date">
                  <h4 class="title is-4 is-bold">Start Date:</h4>
                  <p class="date-text">{{ project['Start Date'] || 'n/a' }}</p>
                </div>
                <div class="column is-4"></div>
                <div class="column is-4 is-mobile" id="end-date">
                  <h4 class="title is-4">End Date:</h4>
                  <p class="date-text">{{ project['End Date'] }}</p>
                </div>
              </div>
              <div id="pillars" class="columns is-mobile">
                <div class="column is-3 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="ndp">NDP Pillar:</span></h4>
                  <p class="pillar">{{ project['NDP Pillar'] }}</p>
                </div>
                <div class="column is-5 is-mobile" id="description">
                  <h4 class="title is-4 is-bold">Description:</h4>
                  <p class="desc-text">{{ project.Objective || 'n/a' }}</p>
                </div>
                <div class="column is-4 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="ndp">Related Sectors:</span></h4>
                  <p class="pillar">{{ project['Links to other Sector'] || 'n/a' }}</p>
                </div>
              </div>
              <div id="desc" class="columns is-mobile">
                <div class="column is-4 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="ndp">Primary Sector:</span></h4>
                  <p class="pillar">{{ project['Primary Sector'] }}</p>
                </div>
                <div class="column is-4"></div>
                <div class="column is-4 is-mobile" id="project-website">
                  <h4 class="title is-4">Project Website:</h4>
                  <a v-bind:href="project['Links to project webpages or documents']"><p class="url">{{ project.Links || 'n/a'}}</p></a>
                </div>
              </div>
            </div>
            <div class="info-title">
              <h3 class="title is-3">Financial Information</h3>
            </div>
            <div id="financial-info" class="info-box">
              <div id="value" class="columns is-mobile">
                <div class="column is-3 is-mobile" id="project-value">
                  <h4 class="title is-4 is-bold">Total Project Value (2016-18):</h4>
                  <p id="total-value" class="desc-text">${{ project['Total Project Value']  | currency }}</p>
                </div>
                <div class="column is-3 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="disb">2016 Disbursement:</span></h4>
                  <p class="year-disb">${{ project['2016 Disbursements'] | currency }}</p>
                </div>
                <div class="column is-3 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="disb">2017 Disbursement:</span></h4>
                  <p class="year-disb">${{ project['2017 Disbursements'] | currency }}</p>
                </div>
                <div class="column is-3 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="disb">2018 Disbursement:</span></h4>
                  <p class="year-disb">${{ project['2018 Disbursements'] | currency }}</p>
                </div>
              </div>
              <div id="table-allocation" class="columns">
                <div class="column is-1"></div>
                <div class="column is-10 is-mobile">
                    <h3 class="title is-4 is-bold">Project Disbursements by Year & Location</h3>
                    <table class="table is-bordered is-striped is-narrow">
                    <thead>
                      <tr>
                        <th><abbr title=""></abbr></th>
                        <th><abbr title="Federal Government of Somalia">FGS</abbr></th>
                        <th><abbr title="Benadir">Benadir</abbr></th>
                        <th><abbr title="Galmudug">Galmudug</abbr></th>
                        <th><abbr title="Hiirshabelle">Hiirshabelle</abbr></th>
                        <th><abbr title="Jubaland">Jubaland</abbr></th>
                        <th><abbr title="Puntland">Puntland</abbr></th>
                        <th><abbr title="Somaliland">Somaliland</abbr></th>
                        <th><abbr title="South West">South West</abbr></th>
                        <th><abbr title="Unattributed">Unattributed</abbr></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="year-row">2016</td>
                        <td>${{ project['2016 - FGS'] || 0 | currency }}</td>
                        <td>${{ project['2016 - Benadir'] || 0 | currency }}</td>
                        <td>${{ project['2016 - Galmudug'] || 0 | currency }}</td>
                        <td>${{ project['2016 - Hiirshabelle'] || 0 | currency }}</td>
                        <td>${{ project['2016 - Jubaland'] || 0 | currency }}</td>
                        <td>${{ project['2016 - Puntland'] || 0 | currency }}</td>
                        <td>${{ project['2016 - Somaliland'] || 0 | currency }}</td>
                        <td>${{ project['2016 - South West'] || 0 | currency }}</td>
                        <td>${{ project['2016 - Unattributed'] || 0 | currency }}</td>
                      </tr>
                      <tr>
                        <td class="year-row">2017</td>
                        <td>${{ project['2017 - FGS'] || 0 | currency }}</td>
                        <td>${{ project['2017 - Benadir'] || 0 | currency }}</td>
                        <td>${{ project['2017 - Galmudug'] || 0 | currency }}</td>
                        <td>${{ project['2017 - Hiirshabelle'] || 0 | currency }}</td>
                        <td>${{ project['2017 - Jubaland'] || 0 | currency }}</td>
                        <td>${{ project['2017 - Puntland'] || 0 | currency }}</td>
                        <td>${{ project['2017 - Somaliland'] || 0 | currency }}</td>
                        <td>${{ project['2017 - South West'] || 0 | currency }}</td>
                        <td>${{ project['2017 - Unattributed'] || 0 | currency }}</td>
                      </tr>
                      <tr>
                        <td class="year-row">2018</td>
                        <td>${{ project['2018 - FGS'] || 0 | currency }}</td>
                        <td>${{ project['2018 - Benadir'] || 0 | currency }}</td>
                        <td>${{ project['2018 - Galmudug'] || 0 | currency }}</td>
                        <td>${{ project['2018 - Hiirshabelle'] || 0 | currency }}</td>
                        <td>${{ project['2018 - Jubaland'] || 0 | currency }}</td>
                        <td>${{ project['2018 - Puntland'] || 0 | currency }}</td>
                        <td>${{ project['2018 - Somaliland'] || 0 | currency }}</td>
                        <td>${{ project['2018 - South West'] || 0 | currency }}</td>
                        <td>${{ project['2018 - Unattributed'] || 0 | currency }}</td>
                      </tr>
                      <tr>
                        <td class="trend-row"><b>Trend</b></td>
                        <td><trend :data="[project['2016 - FGS'], project['2017 - FGS'], project['2018 - FGS']]" auto-draw smooth  ></trend></td>
                        <td><trend :data="[project['2016 - Benadir'], project['2017 - Benadir'], project['2018 - Benadir']]" auto-draw smooth ></trend></td>
                        <td><trend :data="[project['2016 - Galmudug'], project['2017 - Galmudug'], project['2018 - Galmudug']]" auto-draw smooth ></trend></td>
                        <td><trend :data="[project['2016 - Hiirshabelle'], project['2017 - Hiirshabelle'], project['2018 - Hiirshabelle']]" auto-draw smooth ></trend></td>
                        <td><trend :data="[project['2016 - Jubaland'], project['2017 - Jubaland'], project['2018 - Jubaland']]" auto-draw smooth ></trend></td>
                        <td><trend :data="[project['2016 - Puntland'], project['2017 - Puntland'], project['2018 - Puntland']]" auto-draw smooth ></trend></td>
                        <td><trend :data="[project['2016 - Somaliland'], project['2017 - Somaliland'], project['2018 - Somaliland']]" auto-draw smooth ></trend></td>
                        <td><trend :data="[project['2016 - South West'], project['2017 - South West'], project['2018 - South West']]" auto-draw smooth ></trend></td>
                        <td><trend :data="[project['2016 - Unattributed'], project['2017 - Unattributed'], project['2018 - Unattributed']]" auto-draw smooth ></trend></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="column is-2"></div>
              </div>
            </div>
            <div class="info-title">
              <h3 class="title is-3">Funders and Implementers</h3>
            </div>
            <div id="basic-info" class="info-box">
              <div id="funder" class="columns is-mobile">
                <div class="column is-5 is-mobile is-mobile">
                  <h4 class="title is-4 is-bold"><span class="donor">Reporting Agency:</span></h4>
                  <p class="funder">{{ project['Reporting Agency'] || 'n/a' }}</p>
                </div>
                <div class="column is-2"></div>
                <div class="column is-5 is-mobile is-mobile">
                  <h4 class="title is-4 is-bold"><span class="imp">Implementer(s):</span></h4>
                  <p class="implementer" id="implementer">{{ project['Implementers'] || 'n/a' }}</p>
                </div>
              </div>
              <div id="implementer" class="columns is-mobile">
                <div class="column is-5 is-mobile is-mobile">
                  <h4 class="title is-4 is-bold"><span class="donor">Funder(s):</span></h4>
                  <p class="funder">{{ project['Funders'] || 'n/a' }}</p>
                </div>
                <div class="column is-2"></div>
                <div class="column is-5 is-mobile is-mobile">
                  <h4 class="title is-4 is-bold"><span class="imp">Implementer Category:</span></h4>
                  <p class="implementer" id="imp-category">{{ project['Implementer Category'] || 'n/a' }}</p>
                </div>
              </div>
            </div>
            <div class="info-title">
              <h3 class="title is-3">Project Thematic Focuses</h3>
            </div>
            <div id="basic-info" class="info-box">
              <div id="focuses" class="columns is-mobile">
                <div class="column is-4 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="focus">Gender:</span></h4>
                  <p class="proj-focus">{{ project.Gender || 'n/a' }}</p>
                </div>
                <div class="column is-4 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="focus">Capacity Building:</span></h4>
                  <p class="proj-focus">{{ project.Capacity || 'n/a' }}</p>
                </div>
                <div class="column is-4 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="focus">Stabilization:</span></h4>
                  <p class="proj-focus">{{ project.Stabilization || 'n/a' }}</p>
                </div>
              </div>
              <div id="focuses" class="columns is-mobile">
                <div class="column is-4 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="focus">Durable Solutions:</span></h4>
                  <p class="proj-focus">{{ project.Durable || 'n/a' }}</p>
                </div>
                <div class="column is-4 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="focus">Youth:</span></h4>
                  <p class="proj-focus">{{ project.Youth || 'n/a' }}</p>
                </div>
                <div class="column is-4 is-mobile">
                  <h4 class="title is-4 is-bold"><span class="focus">Conflict Sensitivity Analysis:</span></h4>
                  <p class="proj-focus">{{ project.Conflict || 'n/a' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { mapState } from 'vuex';

  export default {
  	name: 'Project',
  	async fetch({ store, params }) {
  		const projectId = params.id * 1;
  		const item = await store.state.projectsTable.filter(
  			project => project.id == projectId
  		);
  		store.commit('SET_PROJECT', item[0]);
  	},
  	computed: {
  		...mapState({
  			project: state => state.project,
  		}),
  	},
  	methods: {
  		printPage(el) {
  			window.print();
  		},
  	},
  };
</script>

<style scoped>
  #print-area {
  	margin-top: 6%;
  }

  #title {
  	margin-top: 20px;
  }
  #pillars {
  	margin-top: 1%;
  }
  .title {
  	margin-bottom: 2px;
  }
  .year-row {
  	font-weight: bold;
  }
  #table-allocation {
  	margin-top: 2%;
  }
  .info-box {
  	border: 1px solid #8d8d8d;
  	margin: 2%;
  	padding: 0% 2% 1% 2%;
  	box-shadow: 1px 1px 3px #c6c6c6;
  }
  .info-title {
  	margin-top: 2%;
  }
  #total-value {
  	font-weight: bold;
  }
  #value {
  	margin-top: 1%;
  }
  #funder {
  	margin-top: 1%;
  }
  #focuses {
  	margin-top: 1%;
  }
  #dates {
  	margin-top: 1%;
  }
  @media print {
  	#pillars {
  		margin-top: 1%;
  	}
  	.title {
  		margin-bottom: 2px;
  	}
  	.year-row,
  	.trend-row {
  		font-weight: bold;
  	}
  	#table-allocation {
  		margin-top: 2%;
  	}
  	.info-box {
  		border: 1px solid #8d8d8d;
  		margin: 2%;
  		padding: 0% 2% 1% 2%;
  		box-shadow: 1px 1px 3px #c6c6c6;
  	}
  	.info-title {
  		margin-top: 2%;
  	}
  	#total-value {
  		font-weight: bold;
  	}
  	#value {
  		margin-top: 1%;
  	}
  	#funder {
  		margin-top: 1%;
  	}
  	#focuses {
  		margin-top: 1%;
  	}
  }
  template {
  	margin: 70px;
  }
  #topmost {
  	margin-top: 50px;
  }
  #title-link {
  	color: black;
  	text-decoration: none;
  }
  .desc-text {
  	text-align: justify;
  }
  abbr[title] {
  	text-decoration: underline solid;
  }
  .table {
  	overflow: auto;
  }
</style>


