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
  getProjectData(state, masters) {
    state.projectsTable = masters;
  },
  getEnvelopeData(state, envs) {
    state.envelopeTable = envs;
  },
};

export const actions = {};
