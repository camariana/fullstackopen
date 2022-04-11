import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload
    }
  }
})

export const { setNotification } = notificationSlice.actions

export default notificationSlice.reducer


// Thunk
let timeoutId = null

export const createNotification = (notification, time) => {
  return dispatch => {
    dispatch(setNotification(notification))

    if(timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      dispatch(setNotification(null))
    }, time * 1000)
  }
}