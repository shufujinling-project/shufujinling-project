// import axios from 'axios'

// export const readTextFile = (fileName) =>
//   axios.get('http://localhost:3000/api/files/text', { params: { file: fileName } })

import axios from 'axios'

export const readTextFile = (fileName) =>
  axios.get(`/data/${fileName}`)
    .then(res => ({
      data: { content: JSON.stringify(res.data) }
    }))