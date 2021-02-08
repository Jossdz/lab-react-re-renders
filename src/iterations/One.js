import React from 'react'

function One() {
  const [counter, setCounter] = React.useState(0)

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <ExpensiveComponent />
    </div>
  )
}

function ExpensiveComponent() {
  const elements = new Array(7e4).fill(`Don't render this again 🙏`)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  )
}

export default One
