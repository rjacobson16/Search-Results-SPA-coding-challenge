const apiKey = '2jbxm6t599emuaxenmunpqbk';

export const fetchSearchProducts = query => (
  axios.get(`http://api.walmartlabs.com/v1/search?apiKey=${apiKey}&query=${query}`)
    .then(response => (
      response.items
    ))
    .catch(err =>(
      console.log(err)
    ))
);
