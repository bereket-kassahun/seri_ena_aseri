import { BACKEND_HOST } from '../config'
const category = async (query, callback) => {
  await fetch(BACKEND_HOST + '/services/category?category=' + query.category+'&page='+query.page+'&limit='+query.limit, {
    credentials: 'include',
})
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      callback(data)
    }
    );
}

export {
    category
}