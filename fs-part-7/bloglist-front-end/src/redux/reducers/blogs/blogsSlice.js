import { createSlice } from '@reduxjs/toolkit'

import blogService from '../../../services/blogs/blogs'

const initialState = [
  {
    id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
  }
]

const blogsSlice = createSlice({

  name: 'blogs',
  initialState,
  reducers: {

    appendBlog (state, action) {
      state.push(action.payload)
    },

    setBlogs (state, action) {
      return action.payload
    }

  }

})

export const {
  setBlogs,
  appendBlog
} = blogsSlice.actions

export const initialBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlog = content => {

  console.log();
  return async dispatch => {
    const blog = await blogService.createNew(content)
    dispatch(appendBlog(blog))
  }
}

export default blogsSlice.reducer