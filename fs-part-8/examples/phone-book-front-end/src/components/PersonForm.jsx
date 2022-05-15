import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_PERSONS, CREATE_PERSON } from '../queries'


/* 
  1.  Updating the cache
      Another easy way to keep the cache in sync is to use the 
      useMutation hook's refetchQueries parameter to define that the
      query fetching all persons is done again whenever a new person is created. 
*/

const PersonForm = ({ setError }) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  //const [ createPerson ] = useMutation(CREATE_PERSON)

  const [ createPerson ] = useMutation(CREATE_PERSON, {
    refetchQueries: [ { query: ALL_PERSONS } ],
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    }  // 1
  })

  

  const submit = (event) => {
    event.preventDefault()

    createPerson({
      variables: {
        name,
        phone,
        street,
        city
      }
    })

    // Reset the fields
    setName('')
    setPhone('')
    setStreet('')
    setCity('')
  }


  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={submit}>
        <div>
          name <input value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          phone <input value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div>
          street <input value={street}
            onChange={({ target }) => setStreet(target.value)}
          />
        </div>
        <div>
          city <input value={city}
            onChange={({ target }) => setCity(target.value)}
          />
        </div>
        <button type='submit'>add!</button>
      </form>
    </div>
  )
}

export default PersonForm
