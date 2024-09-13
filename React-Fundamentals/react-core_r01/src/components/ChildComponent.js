import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <h3>ChildComponent</h3>
        <button onClick={()=>props.greetHandler('Child')}>Greet Parent from child</button>
    </div>
  )
}

export default ChildComponent