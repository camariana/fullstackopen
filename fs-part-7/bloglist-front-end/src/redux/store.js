import { configureStore } from '@reduxjs/toolkit'

import blogReducer from './reducers/blogs/blogsSlice'
import userReducer from './reducers/users/userSlice'
import usersReducer from './reducers/users/usersSlice'
import notificationReducer from './reducers/notification/notificationSlice'



const store = configureStore({
  reducer: {
    blogs: blogReducer,
    users: usersReducer,
    user: userReducer,
    notification: notificationReducer
  }
})

export default store
