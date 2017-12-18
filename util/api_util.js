const gbooksApiKey = 'AIzaSyBxaRTX5hvsZ-bv0mKF1AcfqwFoE-E08JE';


export const buildQuery = options => {
  let url = URI("https://www.googleapis.com/books/v1/volumes?");

  if (options.searchTerm.length > 0) {
    url.addSearch({q: options.searchTerm.split(' ').join('+')});
  }

  if (options.startIndex.length > 0) {
    url.addSearch({startIndex: options.startIndex});
  }

  url.addSearch({key: gbooksApiKey});

  return URI.decodeQuery(url);
};

export const fetchSearchBooks = query => (
  axios.get(query)
    .then(response => (
      response.data
    ))
    .catch(err =>(
      console.log(err)
    ))
);
