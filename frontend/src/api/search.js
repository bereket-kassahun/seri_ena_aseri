import {BACKEND_HOST} from './config'
export const search = async (word, callback) => {
    fetch(BACKEND_HOST+'/search?word'+word)
  .then((response) => response.json())
  .then((data) => callback(data));
}