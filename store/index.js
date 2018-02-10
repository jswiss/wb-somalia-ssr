import axios from 'axios';

export const state = () => ({
  locationTable: [],
  locationYear: '',
  envelopeTable: [],
  pooledTable: [],
  projectsTable: [],
});

export const mutations = {
  getPooledData(state, pools) {
    state.pooledTable = pools;
  },
  getProjectData(state, projects) {
    state.projectsTable = projects;
  },
  getEnvelopeData(state, envs) {
    state.envelopeTable = envs;
  },
  getLocationData(state, locs) {
    state.locationTable = locs;
  },
};

export const actions = {};
