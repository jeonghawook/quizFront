import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import jwt_decode from 'jwt-decode';



const baseURL = 'https://pocom.shop';

const instance = axios.create({
  baseURL,
  timeout: 20000,
});

const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  const decodedToken = jwt_decode(token);
  const currentTime = Date.now() / 1000;
console.log("checking expiration date")
  return decodedToken.exp <= currentTime;
};

// Request interceptor
instance.interceptors.request.use(async (config) => {

  const accessToken =await AsyncStorage.getItem('accessToken');
  const refreshToken =await AsyncStorage.getItem('refreshToken');
  console.log("intercepting")
  
  if (!accessToken && !refreshToken) {

    return config;
  }
  if (!isTokenExpired(accessToken)) {
    console.log("not expired")
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
    
  } else {
    try {
      console.log("trying")
    
      const response = await axios.post(`${baseURL}/users/refresh`,
        {}, {
        headers: {
          authorization: `Bearer ${refreshToken}`,
        },
      });

     
      const newAccessToken = response.data.accessToken;


      AsyncStorage.setItem('accessToken', newAccessToken);

      // const decodedToken = jwt_decode(newAccessToken);
      // const { email, userId, isAdmin } = decodedToken;

      config.headers.Authorization = `Bearer ${newAccessToken}`;


      return config;
    } catch (error) {
     console.log(error.response.data)
      if(error.response.data.code === "333"){  //나중에 벡에서 333 으로 바꾸기
      console.log("check0")
       await AsyncStorage.removeItem("refreshToken")
       await AsyncStorage.removeItem("accessToken")
        
      }
      

 
      console.log("check")

    }
  }
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default instance;
