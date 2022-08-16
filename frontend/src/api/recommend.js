import { BACKEND_HOST } from './config'
const recommend = async (word, callback) => {
  await fetch(BACKEND_HOST + '/services/recommend?word=' + word)
    .then((response) => response.json())
    .then((data) => {
      callback(data)
    }
    );
}

export {
    recommend
}