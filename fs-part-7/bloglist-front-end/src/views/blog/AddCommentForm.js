import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectBlogById, selectBlogs } from '../../redux/reducers/blogs/blogsSlice'
import { createComment } from '../../redux/reducers/comments/commentsSlice'
import { createNotification } from '../../redux/reducers/notification/notificationSlice'


const NewComment = () => {

  const dispatch = useDispatch()
  const id = useParams().id
  
  const blog = useSelector(state => selectBlogById(state, id))

  const addComment = async (event) => {
    event.preventDefault()

    const content = {
      comment: event.target.comment.value,
      id: blog.id
    }

    event.target.comment.value = ''
    
    dispatch(createComment(content))
    dispatch(createNotification(`Comment ${content.comment} added`, 5))
  }

  return (
    <div>
      <h3>Add a New Comment</h3>
      <form onSubmit={addComment} className='form form--comment'>
      <div className='form__group'>
          <label htmlFor="title">Comment</label>
          <input
            id="comment"
            type="text"
            //value={title}
            name="comment"
            //onChange={handleChange}
          />
        </div>
        <div className='form__group form__group--submit'>
          <button 
            className='button button--primary' 
            type="submit">
              Add Comment
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewComment
