import { configureStore } from '@reduxjs/toolkit'

import blogReducer from './reducers/blogs/blogsSlice'
import userReducer from './reducers/users/userSlice'

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    user: userReducer
  }
})

export default store
