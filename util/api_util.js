

const gbooksApiKey = 'AIzaSyBxaRTX5hvsZ-bv0mKF1AcfqwFoE-E08JE';


export const fetchSearchBooks = query => (
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=f${query}&key=${gbooksApiKey}`)
    .then(response => (
      response.data
    ))
    .catch(err =>(
      console.log(err)
    ))
);
