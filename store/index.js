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
  projectLocationTable: [],
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
    state.pooledTable = data.map(k => {
      return {
        Agency: k.Agency,
        'Contributions to MDTFs':
          k['Contributions to Multi Donor Trust Funds (MDTFs)'],
        Category: k.Category,
        '2015': k['2015, US$'],
        '2016': k['2016, US$'],
        '2017': k['2017, US$'],
        '2018': k['2018, US$'],
      };
    });
  },
  SET_MASTER(state, data) {
    state.projectsTable = data.map(k => {
      return {
        id: k.id,
        'Project Title': k['Project title'],
        Objective: k['Project objectives'],
        '2016 Disbursements': k['2016 Disbursements (USD)'],
        '2017 Disbursements': k['2017 Disbursements (USD)'],
        '2018 Disbursements': k['2018 Disbursements (USD)'],
        'Total Project Value':
          k['2016 Disbursements (USD)'] +
          k['2017 Disbursements (USD)'] +
          k['2018 Disbursements (USD)'],
        'Start Date':
          k['Start Date'] !== null
            ? moment(excelToJsDate(k['Start Date'])).format('YYYY-MM')
            : null,
        'End Date':
          k['End Date'] !== null
            ? moment(excelToJsDate(k['End Date'])).format('YYYY-MM')
            : null,
      };
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
  SET_2016(state, data) {
    let arr = [];
    state.treeMap2016 = data.reduce(function(r, o) {
      Object.keys(o).forEach(function(k) {
        if (['Project Title', 'NDP Pillar', 'Sector'].includes(k) || !o[k]) {
          return;
        }
        r.push({
          Location: k,
          Value: o[k],
          'Project Title': o['Project Title'],
          'NDP Pillar': o['NDP Pillar'],
          Sector: o.Sector,
          Year: 2016,
        });
      });

      arr.push(r);
      return r;
    }, []);
  },
  SET_2017(state, data) {
    let arr = [];
    state.treeMap2017 = data.reduce(function(r, o) {
      Object.keys(o).forEach(function(k) {
        if (['Project Title', 'NDP Pillar', 'Sector'].includes(k) || !o[k]) {
          return;
        }
        r.push({
          Location: k,
          Value: o[k],
          'Project Title': o['Project Title'],
          'NDP Pillar': o['NDP Pillar'],
          Sector: o.Sector,
          Year: 2017,
        });
      });

      arr.push(r);
      return r;
    }, []);
  },
  SET_2018(state, data) {
    let arr = [];
    state.treeMap2018 = data.reduce(function(r, o) {
      Object.keys(o).forEach(function(k) {
        if (['Project Title', 'NDP Pillar', 'Sector'].includes(k) || !o[k]) {
          return;
        }
        r.push({
          Location: k,
          Value: o[k],
          'Project Title': o['Project Title'],
          'NDP Pillar': o['NDP Pillar'],
          Sector: o.Sector,
          Year: 2018,
        });
      });

      arr.push(r);
      return r;
    }, []);
  },
  SET_PROJECT_LOCATION(state) {
    let i = state.treeMap2016.length;
    let j = state.treeMap2017.length;
    let k = state.treeMap2018.length;
    while (i--) {
      state.projectLocationTable.push(state.treeMap2016[i]);
    }
    while (j--) {
      state.projectLocationTable.push(state.treeMap2017[j]);
    }
    while (k--) {
      state.projectLocationTable.push(state.treeMap2018[k]);
    }
  },
  SET_PROJECT(state, data) {
    state.project = data;
  },
};
