import axios from "axios";

const API_ROOT = "https://conduit.productionready.io/api";
const resData = res => res.data;
if (localStorage.getItem("token")) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Token ${localStorage.getItem("token")}`;
}
const client = {
  get: path => axios.get(`${API_ROOT}${path}`).then(resData),
  post: (path, payload) =>
    axios.post(`${API_ROOT}${path}`, payload).then(resData),
  put: (path, payload) =>
    axios.put(`${API_ROOT}${path}`, payload).then(resData),
  del: path => axios.del(`${API_ROOT}${path}`).then(resData),
};

const Articles = {
  getAll: () => client.get(`/articles?limit=10`),
  getSlug: slug => client.get(`/articles/${slug}`),
  byTag: tag => client.get(`/articles?limit=10&tag=${tag}`),
  favorite: slug => client.post(`/articles/${slug}/favorite`),
  unfavorite: slug => client.del(`/articles/${slug}/favorite`),
};

const Auth = {
  login: (email, password) => {
    const payload = { user: { email, password } };
    return client.post(`/users/login`, payload);
  },
  signup: (username, email, password) => {
    const payload = { user: { username, email, password } };
    return client.post(`user`, payload);
  },
  getUser: () => client.get(`/user`),
};

const Tags = {
  getAll: () => client.get("/tags"),
};

export default {
  Articles,
  Auth,
  Tags,
};
