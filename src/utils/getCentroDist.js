import axios from 'axios';

const URL_API = 'http://127.0.0.1:8000/api/';

const centrodisApi = axios.create({
  baseURL: URL_API,
});

const headers = {
  'Content-Type': 'application/json',
}

export const getCentroDists = async () => {
  const response = await centrodisApi.get('/centro_distribucion/');
  return response.data;
};

export const getCentroDist = async ({ id }) => {
  const response = await centrodisApi.get(`/centro_distribucion/${id}`);
  return response.data;
};

export const createCentroDist = (centro_distribucion) => {
  
  return centrodisApi.post('/centro_distribucion/', centro_distribucion, headers);
};
export const updateCentroDist = async (centro_distribucion) => {
  return centrodisApi.put(`/centro_distribucion/${centro_distribucion.id}`, centro_distribucion, headers);
};
export const deleteCentroDist = async ({ id }) => {
  return centrodisApi.delete(`/centro_distribucion/${id}`);
};

export default centrodisApi;