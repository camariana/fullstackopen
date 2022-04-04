import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '5a422a851b54a676234d17f7',
  title: 'React patterns',
  author: 'Michael Chan',
  url: 'https://reactpatterns.com/',
  likes: 7,
}

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs (state, action) {
      return action.payload
    }
  }
})

export const { setBlogs } = blogsSlice.actions

export default blogsSlice.reducer