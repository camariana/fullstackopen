import { createSlice } from "@reduxjs/toolkit";

import usersService from "../../../services/users/users";

const initialState = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers (state, action) {
      return action.payload
    }
  }
})


// Actions generated from the slice
export const { setUsers } = usersSlice.actions

export default usersSlice.reducer

// Selector
export const selectUsers = state => state.users

export const selectUserById = (state, userId) => 
state.users.find((user) => {
  return user.id === userId
})


// Thunks
export const getUsers = () => {
  return async dispatch => {
    const users = await usersService.getAll()
    dispatch(setUsers(users))
  }
}