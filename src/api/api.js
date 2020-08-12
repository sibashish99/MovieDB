import axios from 'axios';

export function searchMovies(searchTerm, pageNumber) {
  if(searchTerm) {
    let url = `https://www.omdbapi.com/?s=${searchTerm}&page=${pageNumber}&apikey=${process.env.REACT_APP_API_KEY}`
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(response => {
        return resolve({
          search: response.data.Search || response.data.Error,
          response: response.data.Response,
          totalResults: response.data.totalResults
        });
      })
       .catch(error => {
         console.log(error)
        return reject(error);
      });
    })  
  }
};


export function getMovie(title, year) {
  let url = `https://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=${process.env.REACT_APP_API_KEY}`
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(response => {
      return resolve(response.data)
    })
    .catch(error => {
      return reject(console.log(error));
    })
  })
};


