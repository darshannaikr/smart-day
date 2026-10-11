import apiClient from '../api/apiClient';

export async function getBackendHealth() {
  const response = await apiClient.get('/api/v1/health');
  return response.data;
}
