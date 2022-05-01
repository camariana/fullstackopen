import { createSlice } from "@reduxjs/toolkit"

import commentService from "../../../services/comments/comments"

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {

    addComment (state, action) {
      state.push(action.payload)
    },

    setComments (state, action) {
      return action.payload
    },
  }
})

// Actions generated for the slice
export const { setComments, addComment } = commentsSlice.actions

// The reducer
export default commentsSlice.reducer


// Selectors
export const selectComments = state => state.comments

export const selectCommentById = (state, commentId) =>
state.comments.find((comment) => {
  return comment.id === commentId
})

export const selectBlogComments = (state, blogId) =>
state.comments.filter((comment) => {
  return comment.blog === blogId
})


// Asynchronous actions and redux thunk
export const getComments = () => {
  return async dispatch => {
    const comments = await commentService.getAll()
    dispatch(setComments(comments))
  }
}

export const createComment = content => {
  
  return async dispatch => {

    const newComment = {
      comment: content.comment
    }

    const comment = await commentService.create(content.id, newComment)
    dispatch(addComment(comment))
  }
}