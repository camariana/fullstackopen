import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialBlogs } from '../redux/reducers/blogs/blogsSlice'

const App = () => {
  const dispatch = useDispatch()
  const blogs = useSelector( state => state.blogs )

  useEffect(() => {
    dispatch(initialBlogs)
  }, [dispatch])

  return (
    <ul>
       {
        blogs.map((blog, index) => 
        <li key={index}>
          {blog.title}
        </li>
        )
       }
    </ul>
  )
}

export default App