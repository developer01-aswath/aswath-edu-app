import axios from "axios";
import store from "../redux/store"; // Import Redux store
import { logout } from "../redux/reducers/authSlice"; // Import logout action
import { persistor } from "../redux/store"; // For purging persisted state
import { httpClientHost } from "../utils/constants";

const httpClient = axios.create({
  baseURL: httpClientHost, // Replace with your API base URL
  timeout: 10000, // Set timeout (in ms)
});

// Create a global reference for the navigate function
let globalNavigate = null;

// Set the global navigate function (this will be called in NavigationContext)
export const setGlobalNavigate = (navigate) => {
  globalNavigate = navigate;
};

// Add a request interceptor
httpClient.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token; // Assuming token is stored in auth slice
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // Handle Unauthorized (401) - Logout the user
      store.dispatch(logout());
      await persistor.purge(); // Clear persisted state
      if (globalNavigate) {
        globalNavigate("/login"); // Redirect to login page
      }
    }
    return Promise.reject(error);
  }
);

export default httpClient;
