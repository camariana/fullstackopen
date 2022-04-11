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
      const changedBlog = action.payload
      return state.map(blog => blog.id !== changedBlog.id ? blog : changedBlog)
    },

    deleteAdded (state, action) {
      // here the deletedBlog is only the id that is coming from the payload
      const deletedBlog = action.payload
      console.log(deletedBlog);
      return state.filter((blog) => blog.id !== deletedBlog )
    }

  }

})

// Actions generated from the slice
export const { setBlogs,  appendBlog, likeAdded, deleteAdded } = blogsSlice.actions

// The reducer
export default blogsSlice.reducer





// Asynchronous actions and redux thunk
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

export const likeBlog = content => {
  return async dispatch => {
    const changedBlog = {
      ...content,
      likes: content.likes + 1
    }
    
    const blog = await blogService.update(changedBlog.id, changedBlog)
    dispatch(likeAdded(blog))
  }
}

export const deleteBlog = content => {
  return async dispatch => {
    // The delete those not return data as response, so we just await and pass in content.id
    await blogService.remove(content.id)
    dispatch(deleteAdded(content.id))
  }
}

