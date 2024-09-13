import React from 'react'

function Person({person , key}) {

    console.log(key)

  return (
    <div>
        <h2>{key}---{person.id} I am {person.name} yrs old . I know {person.skill}</h2>
    </div>
  )
}

export default Person