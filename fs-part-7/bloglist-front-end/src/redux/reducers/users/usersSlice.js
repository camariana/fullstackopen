import { createSlice } from "@reduxjs/toolkit";

import usersService from "../../../services/users/users";

const initialState = {
  users: [],
  user: null,
  status: 'idle',
  error: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers (state, action) {
      state.users = action.payload
    },

    setUser (state, action) {
      state.user = action.payload
    }
  }
})


// Actions generated from the slice
export const { setUsers, setUser } = usersSlice.actions

// Selectors
export const selectAllUsers = state => state.users

export default usersSlice.reducer



// Thunks
export const getUsers = () => {
  return async dispatch => {
    const users = await usersService.getAll()
    dispatch(setUsers(users))
  }
}

export const initialUser = user => {
  return dispatch => {
    dispatch(setUser(user))
  }
}

