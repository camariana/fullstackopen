import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getComments, selectComments, selectBlogComments } from '../../redux/reducers/comments/commentsSlice'

const Comments = () => {
  const id = useParams().id
  const dispatch = useDispatch()

  const comments = useSelector(state => selectBlogComments(state, id))

  useEffect(() => {
    dispatch(getComments())
  }, [dispatch])

  
  if (comments.length < 1) {
    return (
      <p>
        This blog has no comment
      </p>
    )
  }

  return (
    <ul>
      {
        comments.map((comment) => 
        <li key={comment.id}>
          { comment.comment }
        </li>
        )
      }
    </ul>
  )
}

export default Comments