import axios from 'axios';

export const state = () => ({
  locationsTable: [],
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
    state.locationsTable = locs;
  },
};

export const actions = {};
