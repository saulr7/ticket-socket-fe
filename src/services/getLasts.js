import { apiURL } from '../constants';

const getLasts = async () => {
  const resp = await fetch(`${apiURL}tickets`);
  const data = await resp.json();
  return data;
};

export default getLasts;
