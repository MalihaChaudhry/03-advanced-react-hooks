// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import {useReducer} from 'react'

function Counter({initialCount = 0, step = 1}) {
  // const countReducer = (state, newState) => {
  //   return {
  //     ...state,
  //     ...(typeof newState === 'function' ? newState() : newState),
  //   }
  // }

  function countReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT': {
        return {count: state.count + action.step}
      }
      default: {
        break
      }
    }
  }

  const [state, dispatch] = useReducer(countReducer, {count: initialCount})
  const {count} = state

  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
