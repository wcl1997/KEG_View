// import axios from './axios.js'
// axios = require('./axios')


axios.defaults.baseURL = "http://localhost:8081";

// 前置拦截
axios.interceptors.request.use(config => {
  return config
});

axios.interceptors.response.use(response => {
    let res = response.data;

    // console.log("=================");
    // console.log(res);
    // console.log("=================");

    if (res.code === 200) {
      return response
    } else {
      return Promise.reject(response.data.msg);
    }
  },
  error => {
    console.log(error);
    if(error.response.data) {
      error.message = error.response.data.msg;
    }

    if(error.response.status === 401) {
        //login
        window.location.href="login.html";
    }
    return Promise.reject(error);
  }
);

// module.exports = axios;