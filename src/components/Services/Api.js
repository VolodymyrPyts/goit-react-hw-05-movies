import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/';
const key = 'f70abac86533d424df79b342ee8b9ff4';

export const GetMovies = async () => {
   
   const {data} = axios.get( `/trending/movie/day?api_key=${key}&language=uk&page=1`).then(resp => { console.log(params) }).catch(error => {console.log(error.message)})
}