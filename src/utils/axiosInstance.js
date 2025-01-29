import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem("access")
  ? JSON.parse(localStorage.getItem("access"))
  : "";

const refresh_token = localStorage.getItem("refresh")
  ? JSON.parse(localStorage.getItem("refresh"))
  : "";

const baseURL = "ccobasi.pythonanywhere.com/user";
const axiosInstance = axios.create({
  baseURL: baseURL,
  "Content-type": "application/json",
  headers: {
    Authorization: localStorage.getItem("access") ? `Bearer ${token}` : null,
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    const user = jwtDecode(token);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (!isExpired) {
      return req;
    } else {
      const res = await axios.post(`${baseURL}/token/refresh/`, {
        refresh: refresh_token,
      });
      console.log(res.data);
      if (res.status === 200) {
        localStorage.setItem("access", JSON.stringify(res.data.access));
        req.headers.Authorization = `Bearer ${res.data.access}`;
        return req;
      } else {
        const res = await axios.post(`${baseURL}/logout/`, {
          refresh_token: refresh_token,
        });
        if (res.status === 200) {
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          localStorage.removeItem("user");
        }
      }
    }
  }
  return req;
});

export default axiosInstance;
// axiosInstance.js
// import axios from "axios";
// import dayjs from "dayjs";
// import { jwtDecode } from "jwt-decode";

// // Safely retrieve and parse tokens from localStorage
// const getTokenFromStorage = (key) => {
//   const token = localStorage.getItem(key);
//   try {
//     return token ? JSON.parse(token) : null;
//   } catch (error) {
//     console.error(`Failed to parse ${key} token:`, error);
//     localStorage.removeItem(key); // Remove the corrupted token
//     return null;
//   }
// };

// const token = getTokenFromStorage("access");
// const refresh_token = getTokenFromStorage("refresh");

// const baseURL = "https://ccobasi.pythonanywhere.com/user"; // Added https for security
// const axiosInstance = axios.create({
//   baseURL: baseURL,
//   headers: {
//     'Content-Type': 'application/json', // Correct header format
//     Authorization: token ? `Bearer ${token}` : null,
//   },
// });

// axiosInstance.interceptors.request.use(async (req) => {
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//     try {
//       const user = jwtDecode(token);
//       const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
//       if (!isExpired) {
//         return req;
//       } else {
//         try {
//           const response = await axios.post(`${baseURL}/token/refresh/`, {
//             refresh: refresh_token,
//           });
//           console.log(response.data);
//           if (response.status === 200) {
//             localStorage.setItem("access", JSON.stringify(response.data.access));
//             req.headers.Authorization = `Bearer ${response.data.access}`;
//             return req;
//           } else {
//             throw new Error('Failed to refresh token');
//           }
//         } catch (refreshError) {
//           console.error('Token refresh error:', refreshError);
//           try {
//             const logoutResponse = await axios.post(`${baseURL}/logout/`, {
//               refresh_token: refresh_token,
//             });
//             if (logoutResponse.status === 200) {
//               localStorage.removeItem("access");
//               localStorage.removeItem("refresh");
//               localStorage.removeItem("user");
//             }
//           } catch (logoutError) {
//             console.error('Logout error:', logoutError);
//           }
//           // You might want to redirect to login or show an error message here
//           throw refreshError;
//         }
//       }
//     } catch (decodeError) {
//       console.error('JWT decode error:', decodeError);
//       // If there's an error decoding the token, we should probably log out or handle it
//       localStorage.removeItem("access");
//       throw decodeError;
//     }
//   }
//   return req;
// });

// export default axiosInstance;