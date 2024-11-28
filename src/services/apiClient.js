import httpClient from "./httpClient";

const apiClient = {
  get: (url, params = {}) => httpClient.get(url, { params }),
  post: (url, data) => httpClient.post(url, data),
  put: (url, data) => httpClient.put(url, data),
  delete: (url) => httpClient.delete(url),
};

export default apiClient;
