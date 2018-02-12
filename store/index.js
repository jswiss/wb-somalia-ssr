import axios from 'axios';

export const state = () => ({
  locationsTable: [],
  locationYear: '',
  envelopeTable: [],
  pooledTable: [],
  projectsTable: [],
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
  getLocationData(state, locs) {
    state.locationsTable = locs;
  },
};

export const actions = {};
