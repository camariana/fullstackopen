import axios from "axios"

const baseUrl = '/api/comments'



const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (id, content) => {
  const response = await axios.post(`${baseUrl}/${id}`, content)
  return response.data
}

const commentService = {
  getAll,
  create
}

export default commentService