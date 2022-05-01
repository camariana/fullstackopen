import React from 'react'

const Masthead = () => {
  return (
    <div className='masthead' role='banner'>
      <div className='masthead__contain'>

        <div className="masthead__avatar">
          <span>AC</span>
        </div>

        <div className="masthead__text">
          <h1 className='masthead__title'>Peace, I'm A Camariana</h1>
          <p className='masthead__subtitle'>
            This is where I blog about interesting things on the web and my experience learning Full Stack Open (React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go!). 
          </p>

          <figure className="quote">
            <blockquote>
              <p>
                You are always going to be wrong in someone's opinion
              </p>
            </blockquote>
            <figcaption className="quote__citation">
                  —
                  <span> Matti Luukkainen</span>        
                  <span>University lecturer and software developer</span>        
            </figcaption>
          </figure>

        </div>
      </div>
    </div>
  )
}

export default Masthead