import axios from 'axios';

const URL_API = 'http://127.0.0.1:8000/api/';

const medicamentoApi = axios.create({
  baseURL: URL_API,
});

const headers = {
  'Content-Type': 'application/json',
}

export const getMedicamentos = async () => {
  const response = await medicamentoApi.get('/medicamento/');
  return response.data;
};

export const getMedicamento = async ({ id }) => {
  const response = await medicamentoApi.get(`/medicamento/${id}`);
  return response.data;
};

export const createMedicamento = (medicamento) => {
  
  return medicamentoApi.post('/medicamento/', medicamento, headers);
};
export const updateMedicamento = async (medicamento) => {
  return medicamentoApi.put(`/medicamento/${medicamento.id}`, medicamento, headers);
};
export const deleteMedicamento = async ({ id }) => {
  return medicamentoApi.delete(`/medicamento/${id}`);
};

export default medicamentoApi;