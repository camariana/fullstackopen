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
    },

    likeAdded (state, action) {
      const id = action.payload.id
      const blogToLike = state.find(blog => blog.id === id)

      console.log(blogToLike);

      const changedBlog = {
        ...blogToLike,
        likes: blogToLike.likes + 1
      }

      return state.map(blog => blog.id !== id ? blog : changedBlog)
      
    }

  }

})

// Actions generated from the slice
export const { setBlogs,  appendBlog, likeAdded } = blogsSlice.actions

// The reducer
export default blogsSlice.reducer





// Asynchronous action and redux thunk

export const initialBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlog = content => {
  return async dispatch => {
    const blog = await blogService.createNew(content)
    dispatch(appendBlog(blog))
  }
}

export const likeBlog = (content) => {
  return async dispatch => {
    const blog = await blogService.update(content.id, content)
    dispatch(likeAdded(blog))
  }
}

