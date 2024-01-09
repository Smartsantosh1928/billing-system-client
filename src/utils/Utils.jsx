// api.js
import axios from 'axios';



export const getAccessToken = () => {
    const refreshToken = localStorage.getItem("RefreshToken")
    fetch("http://localhost:3000/auth/getAccessToken",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({refreshToken})
    }).then(res => res.json())
    .then(data => {
        if(data.success){
            console.log("Access Token refreshed");
            localStorage.setItem("AccessToken",data.accessToken)
        }
    }).catch(err => {
        console.log("Error in refreshing Access Token: ",err);
    })
}



const api = axios.create({
  baseURL: 'http://localhost:3000', // replace with your backend API URL
  timeout: 5000, // adjust as needed
});

// Add a request interceptor to attach the access token to each request
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('AccessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('RefreshToken');
        const response = await api.post('/getAccessToken', { refreshToken });
        const newAccessToken = response.data.accessToken;
        localStorage.setItem("AccessToken",newAccessToken)

        // Update the original request with the new access token
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        // Handle refresh error (e.g., redirect to login)
        console.error('Token refresh failed', refreshError);
        // You may want to redirect to the login page or handle the error in another way
      }
    }

    return Promise.reject(error);
  }
);

export default api;

