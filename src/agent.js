import axios from "axios";
const API_ROOT = "https://conduit.productionready.io/api";

// const responseBody = res => res.body;
// const requests = {
//   get: url =>
//     superagent.get(`${API_ROOT}${url}`).then(responseBody)
//

export function getArticles() {
  return axios
    .get(`${API_ROOT}/articles?limit=10`)
    .then(response => {
      return response.data.articles;
    })
    .catch(error => {
      console.error(error);

      return [];
    });
}
