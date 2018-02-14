import axios from 'axios';

export async function getPooledData({ store, redirect, client }) {
  if (client) return;

  try {
    const res = await axios.get(
      'https://somalia-aid-flows.herokuapp.com/pooled'
    );
    store.commit('getPooledData', res.data);
  } catch (err) {
    // store.commit('init', []);
    // error({ statusCode: 500, message: 'Oops! Try again!' });
    redirect('/err');
  }
}

export async function getProjectData({ store, redirect, client }) {
  if (client) return;

  try {
    const res = await axios.get(
      'https://somalia-aid-flows.herokuapp.com/project-table'
    );
    store.commit('getProjectData', res.data);
  } catch (err) {
    // store.commit('init', []);
    // error({ statusCode: 500, message: 'Oops! Try again!' });
    redirect('/err');
  }
}

export async function getEnvelopeData({ store, redirect, client }) {
  if (client) return;

  try {
    const res = await axios.get(
      'https://somalia-aid-flows.herokuapp.com/envelopes'
    );
    store.commit('getEnvelopeData', res.data);
  } catch (err) {
    // store.commit('init', []);
    // error({ statusCode: 500, message: 'Oops! Try again!' });
    // redirect('/err');
    console.log(err);
  }
}

export async function getLocationData({ store, redirect, client }) {
  if (client) return;

  try {
    const res = await axios.get(
      'https://somalia-aid-flows.herokuapp.com/location/2016'
    );
    store.commit('getLocationData', res.data);
  } catch (err) {
    // store.commit('init', []);
    // error({ statusCode: 500, message: 'Oops! Try again!' });
    // redirect('/err');
    console.log(err);
  }
}

export async function getAllProjects({ store, client }) {
  if (client) return;

  try {
    const res = await axios.get(
      'http://somalia-aid-flows.herokuapp.com/master'
    );
    store.commit('SET_MASTER', res.data);
  } catch (err) {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  }
}
