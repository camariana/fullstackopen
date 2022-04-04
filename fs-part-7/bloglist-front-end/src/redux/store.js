import { configureStore } from '@reduxjs/toolkit'

import blogReducer from './reducers/blogs/blogsSlice'
import userReducer from './reducers/users/userSlice'
import usersReducer from './reducers/users/usersSlice'

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    users: usersReducer,
    user: userReducer
  }
})

export default store
