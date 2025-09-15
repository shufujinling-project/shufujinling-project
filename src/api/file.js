import axios from 'axios'

export const readTextFile = (fileName) =>
  axios.get('http://localhost:3000/api/files/text', { params: { file: fileName } })