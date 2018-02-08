import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

export const store = {
  state: () => ({
    locationTable: [],
    locationYear: '',
    envelopeTable: [],
    fundsTable: [],
    projectsTable: [],
  }),
  getters: getters,
  actions: actions,
  mutations: mutations,
};
