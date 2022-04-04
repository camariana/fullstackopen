import React from 'react'
import { useDispatch } from 'react-redux'

import { createBlog } from '../../redux/reducers/blogs/blogsSlice'


const NewBlog = () => {

  const dispatch = useDispatch

  // const handleChange = (event) => {
  //   const { name, value } = event.target
  // }

  const addBlog = async (event) => {
    event.preventDefault()

    const content = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value,
      likes: 0
    }

    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''
    
    dispatch(createBlog(content))
  }

  return (
    <div>
      <h2>Create a New Blog</h2>
      <form onSubmit={addBlog}>
      <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            //value={title}
            name="title"
            //onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            //value={author}
            name="author"
            //onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="url">Url</label>
          <input
            id="url"
            type="text"
            //value={url}
            name="url"
            //onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default NewBlog
