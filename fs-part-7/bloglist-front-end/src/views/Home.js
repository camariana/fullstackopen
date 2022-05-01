import React from 'react'
import { Link } from 'react-router-dom'
import NewBlogButton from '../components/Buttons/NewBlogButton'

import Masthead from '../components/Masthead/Masthead'

const Home = () => {
  return (
    <>
      <Masthead />
      <main>
        <section className='sec'>
          <div className='contain'>
            <header className='sec__header'>
              <h2>
                Latest Bloglist
              </h2>
              <div>
              <Link className='button button--secondary' to={'/blogs'}>
                See all Blogs
              </Link>
              </div>
            </header>
          </div>
        </section>
      </main>
      <NewBlogButton />
    </>
  )
}

export default Home
