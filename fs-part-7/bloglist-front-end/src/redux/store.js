import { configureStore } from '@reduxjs/toolkit'

import blogReducer from './reducers/blogs/blogsSlice'

const store = configureStore({
  reducer: {
    blogs: blogReducer
  }
})

export default store
