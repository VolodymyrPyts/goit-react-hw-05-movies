import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/';
const key = 'f70abac86533d424df79b342ee8b9ff4';

export const GetTrendMovies = async () => {
  axios
    .get(`/trending/movie/day?api_key=${key}&language=uk&page=1`)
    .then(resp => {
      resp.data.results.map(({ title, id }) => ({ title, id }));
    })
    .catch(error => {
      console.log(error.message);
    });
};

export const GetSearchMovies = async query => {
  axios
    .get(`search/movie/day?api_key=${key}&language=uk&page=1&query=${query}`)
    .then(resp => {
      resp.data.results.map(({ title, id }) => ({ title, id }));
    })
    .catch(error => {
      console.log(error.message);
    });
};
