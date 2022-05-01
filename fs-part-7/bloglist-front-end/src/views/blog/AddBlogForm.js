import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { createBlog } from '../../redux/reducers/blogs/blogsSlice'
import { createNotification } from '../../redux/reducers/notification/notificationSlice'


const NewBlog = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addBlog = async (event) => {
    event.preventDefault()

    const content = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value,
      likes: 0,
    }

    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''
    
    dispatch(createBlog(content))
    dispatch(createNotification(`Blog ${content.title} by ${content.author} created`, 5))
    navigate('/blogs')
  }

  return (
    <>
    <section className='center-page'>
      <div className='center-page__inner'>
        <h2 className='center-page__title'>Create a New Blog</h2>
        <form onSubmit={addBlog} className="form">
      <div className='form__group'>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            //value={title}
            name="title"
            //onChange={handleChange}
            required
          />
        </div>
        <div className='form__group'>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            //value={author}
            name="author"
            //onChange={handleChange}
            required
          />
        </div>
        <div className='form__group'>
          <label htmlFor="url">Url</label>
          <input
            id="url"
            type="text"
            //value={url}
            name="url"
            //onChange={handleChange}
            required
          />
        </div>
        <div className='form__group form__group--submit'>
          <button className='button button--primary' type="submit">Create</button>
        </div>
      </form>
      </div>
    </section>
    </>
  )
}

export default NewBlog
