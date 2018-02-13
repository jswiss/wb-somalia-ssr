import axios from 'axios';

export const state = () => ({
  locationsTable: [],
  locationYear: '',
  envelopeTable: [],
  pooledTable: [],
  projectsTable: [],
  locationTree2016: [],
  locationTree2017: [],
  locationTree2018: [],
  locationsTableColumns: ['location', 'total', 'count'],
});

export const mutations = {
  SET_POOLED_TABLE(state, pools) {
    state.pooledTable = pools;
  },
  getProjectData(state, projects) {
    state.projectsTable = projects;
  },
  SET_ENV_TABLE(state, envs) {
    state.envelopeTable = envs;
  },
  SET_2016_LOC_TREE(state, locs) {
    state.locationTree2016 = locs;
  },
  SET_2017_LOC_TREE(state, locs) {
    state.locationTree2017 = locs;
  },
  SET_2018_LOC_TREE(state, locs) {
    state.locationTree2018 = locs;
  },
};

export const actions = {};