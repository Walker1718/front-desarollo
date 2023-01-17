import axios from 'axios';

const URL_API = 'http://127.0.0.1:8000/api/';

const farmaciaApi = axios.create({
  baseURL: URL_API,
});

const headers = {
  'Content-Type': 'application/json',
}

export const getFarmacias = async () => {
  const response = await farmaciaApi.get('/farmacia/');
  return response.data;
};

export const getFarmacia = async ({ id }) => {
  const response = await farmaciaApi.get(`/farmacia/${id}`);
  return response.data;
};

export const createFarmacia = (farmacia) => {
  
  return farmaciaApi.post('/farmacia/', farmacia, headers);
};
export const updateFarmacia = async (farmacia) => {
  return farmaciaApi.put(`/farmacia/${farmacia.id}`, farmacia, headers);
};
export const deleteFarmacia = async ({ id }) => {
  return farmaciaApi.delete(`/farmacia/${id}`);
};

export default farmaciaApi;