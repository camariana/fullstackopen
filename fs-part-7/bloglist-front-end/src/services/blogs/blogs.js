import axios from 'axios'

const baseUrl = '/api/blogs'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const response = await axios.post(baseUrl, content)
  return response.data
}

const update = async (id, content) => {
  const response = await axios.put(`${baseUrl}/${id}`, content)
  return response.data
}


const remove = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const blogService = { 
  getAll,
  createNew,
  update,
  remove
}

export default blogService