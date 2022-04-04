import { createSlice } from "@reduxjs/toolkit";

import usersService from "../../../services/users/users";

const initialState = [
  {
    id: 1,
    username: "mluukkai",
    name: "Matti Luukkainen",
    password: "secret"
  }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers (state, action) {
      return action.payload
    }
  }
})

export const {
  setUsers
} = usersSlice.actions

export const initialUsers = () => {
  return async dispatch => {
    const users = await usersService.getAll()
    dispatch(setUsers(users))
  }
}

export default usersSlice.reducer