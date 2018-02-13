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
  location2016Table: [],
  location2017Table: [],
  location2018Table: [],
  locationsTableColumns: ['location', 'total', 'count'],
});

export const mutations = {
  SET_POOLED_TABLE(state, data) {
    state.pooledTable = data;
  },
  getProjectData(state, data) {
    state.projectsTable = data;
  },
  SET_ENV_TABLE(state, data) {
    state.envelopeTable = data;
  },
  SET_2016_LOCATION_TABLE(state, data) {
    state.location2016Table = data;
  },
  SET_2017_LOCATION_TABLE(state, data) {
    state.location2017Table = data;
  },
  SET_2018_LOCATION_TABLE(state, data) {
    state.location2018Table = data;
  },
  SET_2016_LOC_TREE(state, data) {
    state.locationTree2016 = data;
  },
  SET_2017_LOC_TREE(state, data) {
    state.locationTree2017 = data;
  },
  SET_2018_LOC_TREE(state, data) {
    state.locationTree2018 = data;
  },
};

export const actions = {};
