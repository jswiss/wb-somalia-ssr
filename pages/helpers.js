import axios from 'axios';

export async function getAllProjects({ store, client }) {
  if (client) return;

  try {
    const res = await axios.get('https://api.80pco.com/master');
    store.commit('SET_MASTER', res.data);
  } catch (err) {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  }
}

export async function getProject(store, params, client) {
  if (client) return;
  try {
    const projectId = this.$route.params.id * 1;
    const item = await store.state.projectsTable.filter(
      project => project.id == projectId
    );
    store.commit('SET_PROJECT', item[0]);
  } catch (err) {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  }
}

export function excelToJsDate(excelDate) {
  if (excelDate !== null || excelDate != 11 || excelDate != 33) {
    return new Date((excelDate - (25567 + 1)) * 86400 * 1000);
  } else {
    return null;
  }
}

export function capitalizeString(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(x => x[0].toUpperCase() + x.slice(1))
    .join(' ');
}

export function formatMillion(number) {
  if (number < 1000000) {
    var num = Math.floor(number / 10000)
    return num / 100
  } else if (number < 1000000000) {
    var num = Math.floor(number / 100000)
    return num / 10
  }
}
