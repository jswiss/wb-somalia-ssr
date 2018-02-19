import axios from 'axios';

export async function getAllProjects({ store, client }) {
  if (client) return;

  try {
    const res = await axios.get('https://somalia-aid.herokuapp.com/master');
    store.commit('SET_MASTER', res.data);
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
