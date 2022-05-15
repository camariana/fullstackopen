import React from 'react'
import { useState } from 'react'
import { useQuery } from '@apollo/client'

import { FIND_PERSON } from '../queries'

/* 
  1.  One possibility for this kind of situations is the hook function useLazyQuery that would make it possible to define a 
      query which is executed when the user wants to see the detailed information of a person.
      However, in our case we can stick to useQuery and use the option skip, which makes it possible to do the query only if a set condition is true.
*/

const Person = ({ person, onClose }) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <div>
        {person.address.street} {person.address.city}
      </div>
      <div>{person.phone}</div>
      <button onClick={onClose}>close</button>
    </div>
  )
}

const Persons = ({ persons }) => {

  const [nameToSearch, setNameToSearch] = useState(null)

  const result = useQuery(FIND_PERSON, {
    variables: { nameToSearch },
    skip: !nameToSearch // 1
  })

  if (nameToSearch && result.data) {
    return (
      <Person person={result.data.findPerson} onClose={() => setNameToSearch(null)} />
    )
  }


  return (
    <div>
      <h2>Persons</h2>
      {persons.map(p =>
        <div key={p.name}>
          {p.name} {p.phone}
          <button onClick={() => setNameToSearch(p.name)}>
            Show address
          </button>
        </div>  
      )}
    </div>
  )
}

export default Persons
