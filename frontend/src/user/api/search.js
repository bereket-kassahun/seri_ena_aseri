import { BACKEND_HOST } from '../../config'
const search = async (query, callback) => {
  await fetch(BACKEND_HOST + '/services/search?word=' + query.word+'&page='+query.page+'&limit='+query.limit, {
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
  search
}