import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser (state, action) {
      return action.payload
    }
  }
})


export const { setUser } = userSlice.actions

export default userSlice.reducer

//Selector
export const selectUser = state => state.user

// Action 
export const getUser = (user) => {
  return dispatch => {
    dispatch(setUser(user))
  }
}

