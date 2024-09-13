import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count])
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter