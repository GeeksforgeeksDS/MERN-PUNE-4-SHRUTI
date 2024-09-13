import React from 'react'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  function clickHandler() {
    console.log('Button clicked')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
