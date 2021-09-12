// useContext: simple Counter
// http://localhost:3000/isolated/final/03.js

import * as React from 'react'

const CountContext = React.createContext()

function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useCount must be used inside a CountProvider')
  } else {
    console.log(context)
  }
  return context
}

function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  // could also do it like this:
  // const value = React.useState(0)
  return <CountContext.Provider value={value} {...props} />
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountDisplay />
      <Counter />
    </div>
  )
}

export default App
