import { configureStore } from '@reduxjs/toolkit'

import blogReducer from './reducers/blogs/blogsSlice'
import userReducer from './reducers/users/userSlice'
import usersReducer from './reducers/users/usersSlice'
import notificationReducer from './reducers/notification/notificationSlice'
import commentsReducer from './reducers/comments/commentsSlice'


const store = configureStore({
  reducer: {
    blogs: blogReducer,
    users: usersReducer,
    user: userReducer,
    notification: notificationReducer,
    comments: commentsReducer
  }
})

export default store
