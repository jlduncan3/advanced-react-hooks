// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


function Counter({initialCount = 0, step = 1}) {


const countReducer = (state,action) => {
  if (action.type === INCREMENT)
    {
      return {count: state.count + step}
    }

}

  const INCREMENT = 'increment'
const DECREMENT = 'decrement'

  const [state, dispatch] = React.useReducer(countReducer,{count: initialCount})
  const {count} = state;
  const increment = () => dispatch({type: INCREMENT,step})
  
  
  return <div>  
<button onClick={increment}>{count}</button>
    </div>
}

function App() {
  return <Counter />
}

export default App
