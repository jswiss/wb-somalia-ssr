import axios from 'axios';
import moment from 'moment';
import { excelToJsDate, capitalizeString } from '../pages/helpers';
const d3 = Object.assign({}, require('d3-array'), require('d3-collection'));

export const state = () => ({
  project: null,
  envelopeTable: [],
  pooledTable: [],
  projectsTable: [],
  locationTable: [],
  clean2016: [],
  clean2017: [],
  clean2018: [],
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
        'NDP Pillar': k['NDP Pillar'],
        'Primary Sector': k['Primary Sector'],
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
        Gender: k.Gender,
        Capacity: k['Capacity building'],
        Stabilization: k.Stabilization,
        Durable: k['Durable Solutions'],
        Youth: k.Youth,
        Conflict: k['Conflict Sensitivity Analysis'],
        'Reporting Agency': k['Reporting Agency'],
        Implementers: k.Implementers,
        Funders: k.Funders,
        Locations: k.locations,
        'Implementer Category': k['Implementer Category'],
        Links: k['Links to project webpages or documents'],
        'Links to other Sector': k['Links to other Sector'],
        '2016 - FGS': k['2016 - FGS'],
        '2016 - Benadir': k['2016 - Benadir'],
        '2016 - Galmudug': k['2016 - Galmudug'],
        '2016 - Hiirshabelle': k['2016 - Hiirshabelle'],
        '2016 - Jubaland': k['2016 - Jubaland'],
        '2016 - Puntland': k['2016 - Puntland'],
        '2016 - Somaliland': k['2016 - Somaliland'],
        '2016 - South West': k['2016 - South West'],
        '2016 - Unattributed': k['2016 - Unattributed'],
        '2017 - FGS': k['2017 - FGS'],
        '2017 - Benadir': k['2017 - Benadir'],
        '2017 - Galmudug': k['2017 - Galmudug'],
        '2017 - Hiirshabelle': k['2017 - Hiirshabelle'],
        '2017 - Jubaland': k['2017 - Jubaland'],
        '2017 - Puntland': k['2017 - Puntland'],
        '2017 - Somaliland': k['2017 - Somaliland'],
        '2017 - South West': k['2017 - South West'],
        '2017 - Unattributed': k['2017 - Unattributed'],
        '2018 - FGS': k['2018 - FGS'],
        '2018 - Benadir': k['2018 - Benadir'],
        '2018 - Galmudug': k['2018 - Galmudug'],
        '2018 - Hiirshabelle': k['2018 - Hiirshabelle'],
        '2018 - Jubaland': k['2018 - Jubaland'],
        '2018 - Puntland': k['2018 - Puntland'],
        '2018 - Somaliland': k['2018 - Somaliland'],
        '2018 - South West': k['2018 - South West'],
        '2018 - Unattributed': k['2018 - Unattributed'],
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
  CLEAN_2016(state, data) {
    let arr = [];
    state.clean2016 = data.reduce(function(r, o) {
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
  SET_2016(state) {
    const reducedTree = state.clean2016;
    const d3Tree = { values: {} };
    d3Tree.values = d3
      .nest()
      .key(d => d.Location)
      .key(d => d['NDP Pillar'])
      .key(d => d.Sector)
      .key(d => d['Project Title'])
      .rollup(d => d3.sum(d, d => d.Value))
      .entries(reducedTree);

    state.treeMap2016 = [
      {
        name: 2016,
        children: d3Tree.values.map(location => {
          return {
            name: location.key,
            children: location.values.map(pillar => {
              return {
                name: pillar.key,
                children: pillar.values.map(sector => {
                  return {
                    name: sector.key,
                    children: sector.values.map(project => {
                      return {
                        name: project.key,
                        value: project.value,
                        url: `https://somaliaaidflows.so/tables/projects/${
                          project.key
                        }`,
                      };
                    }),
                  };
                }),
              };
            }),
          };
        }),
      },
    ];
  },
  CLEAN_2017(state, data) {
    let arr = [];
    state.clean2017 = data.reduce(function(r, o) {
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
  SET_2017(state) {
    const reducedTree = state.clean2017;
    const d3Tree = { values: {} };
    d3Tree.values = d3
      .nest()
      .key(d => d.Location)
      .key(d => d['NDP Pillar'])
      .key(d => d.Sector)
      .key(d => d['Project Title'])
      .rollup(d => d3.sum(d, d => d.Value))
      .entries(reducedTree);

    state.treeMap2017 = [
      {
        name: 2017,
        children: d3Tree.values.map(location => {
          return {
            name: location.key,
            children: location.values.map(pillar => {
              return {
                name: pillar.key,
                children: pillar.values.map(sector => {
                  return {
                    name: sector.key,
                    children: sector.values.map(project => {
                      return {
                        name: project.key,
                        value: project.value,
                        url: `https://somaliaaidflows.so/tables/projects/${
                          project.key
                        }`,
                      };
                    }),
                  };
                }),
              };
            }),
          };
        }),
      },
    ];
  },
  CLEAN_2018(state, data) {
    let arr = [];
    state.clean2018 = data.reduce(function(r, o) {
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
  SET_2018(state) {
    const reducedTree = state.clean2018;
    const d3Tree = { values: {} };
    d3Tree.values = d3
      .nest()
      .key(d => d.Location)
      .key(d => d['NDP Pillar'])
      .key(d => d.Sector)
      .key(d => d['Project Title'])
      .rollup(d => d3.sum(d, d => d.Value))
      .entries(reducedTree);

    state.treeMap2018 = [
      {
        name: 2018,
        children: d3Tree.values.map(location => {
          return {
            name: location.key,
            children: location.values.map(pillar => {
              return {
                name: pillar.key,
                children: pillar.values.map(sector => {
                  return {
                    name: sector.key,
                    children: sector.values.map(project => {
                      return {
                        name: project.key,
                        value: project.value,
                        url: `https://somaliaaidflows.so/tables/projects/${
                          project.key
                        }`,
                      };
                    }),
                  };
                }),
              };
            }),
          };
        }),
      },
    ];
  },
};
