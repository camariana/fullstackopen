import axios from 'axios'

const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const config = {
    headers:  { Authorization: token }
  }

  const response = await axios.post(baseUrl, content, config)
  return response.data
}

const update = async (id, content) => {
  const response = await axios.put(`${baseUrl}/${id}`, content)
  return response.data
}


const remove = async id => {
  const config = {
    headers:  { Authorization: token }
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

const blogService = { 
  getAll,
  createNew,
  update,
  remove,
  setToken
}

export default blogService