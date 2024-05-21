import axios from 'axios';

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
});

const registerToken = (setUserinfo, token) => {
  if (token) {
    localStorage.setItem('token', token);
    authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    authInstance
      // .get(`${import.meta.env.VITE_API_SERVER}/member/userinfo`)
      .get('http://localhost:5173/dummy/userInfo.json')
      .then(response => {
        setUserinfo(response.data.body);
        localStorage.setItem('id', response.data.body.id);
        localStorage.setItem('email', response.data.body.email);
        localStorage.setItem('username', response.data.body.username);
      });
  }
};

authInstance.registerToken = registerToken;

export default authInstance;
