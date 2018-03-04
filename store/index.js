import axios from 'axios';
import moment from 'moment';
import { excelToJsDate, capitalizeString } from '../pages/helpers';

export const state = () => ({
  project: null,
  locationYear: '',
  envelopeTable: [],
  pooledTable: [],
  projectsTable: [],
  locationTable: [],
  treeMap2016: [],
  treeMap2017: [],
  treeMap2018: [],
  color: {
    blue: '#4587EA',
    green: '#81D8C2',
    yellow: '#F6EB32',
    tan: '#716558',
    violet: '#262261',
    brown: '#594A41',
    pink: '#EA4587',
    lightblue: '#45DAEA',
  },
});

export const mutations = {
  SET_POOLED_TABLE(state, data) {
    state.pooledTable = data;
    state.pooledTable.forEach(k => {
      k['Contributions to MDTFs'] =
        k['Contributions to Multi Donor Trust Funds (MDTFs)'];
      k['2015'] = k['2015, US$'];
      k['2016'] = k['2016, US$'];
      k['2017'] = k['2017, US$'];
      k['2018'] = k['2018, US$'];
    });
  },
  SET_MASTER(state, data) {
    state.projectsTable = data;
    state.projectsTable.forEach(k => {
      k.id = k.id;
      k['Project Title'] = k['Project title'];
      k['Objective'] = k['Project objectives'];
      k['2016 Disbursements'] = k['2016 Disbursements (USD)'];
      k['2017 Disbursements'] = k['2017 Disbursements (USD)'];
      k['2018 Disbursements'] = k['2018 Disbursements (USD)'];
      k['Total Project Value'] =
        k['2016 Disbursements (USD)'] +
        k['2017 Disbursements (USD)'] +
        k['2018 Disbursements (USD)'];
      k['Start Date'] =
        k['Start Date'] !== null
          ? moment(excelToJsDate(k['Start Date'])).format('YYYY-MM')
          : null;
      k['End Date'] =
        k['End Date'] !== null
          ? moment(excelToJsDate(k['End Date'])).format('YYYY-MM')
          : null;
    });
  },
  SET_ENV_TABLE(state, data) {
    state.envelopeTable = data.map(k => {
      return {
        Agency: k['Agency'],
        'Agency Category': k['Agency Category'],
        'Aid Flow Category': k['Aid Flow Category'],
        '2016': k['2016, USD'],
        '2017': k['2017, USD'],
        '2018': k['2018, USD'],
        '2019': k['2019, USD'],
        '2020': k['2020, USD'],
        'Total 2016-18': k['Total, 2016-18 (USD)'],
        Trends: k['Agency'],
      };
    });
  },
  SET_LOCATION_TABLE(state, data) {
    state.locationTable = data.map(k => {
      return {
        Location: k.location,
        '2016 Count of Projects': k.count2016,
        '2017 Count of Projects': k.count2017,
        '2018 Count of Projects': k.count2018,
        '2016 Total Disbursements': k.total2016,
        '2017 Total Disbursements': k.total2017,
        '2018 Total Disbursements': k.total2018,
      };
    });
  },
  SET_TREE_2016(state, data) {
    state.treeMap2016 = data;
  },
  SET_TREE_2017(state, data) {
    state.treeMap2017 = data;
  },
  SET_TREE_2018(state, data) {
    state.treeMap2018 = data;
  },
  SET_PROJECT(state, data) {
    state.project = data;
  },
};
