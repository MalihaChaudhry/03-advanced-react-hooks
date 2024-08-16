// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import {createContext, useContext, useState} from 'react'

const CountContext = createContext()

function useCount(context) {
  const data = useContext(context)

  if (data === undefined) {
    throw new Error('You cannot use useCount outside a child of CountProvider')
  }

  return data
}
/**
 *
 *   LOCKER CONTEXT START : if a component is not a child of CONTEXTPROVIDER,
 *   then that component does not have access to CONTEXT's VALUE,
 *   which is set in CONTEXT.PROVIDER
 *
 */
// const Locker = createContext()
// function useLocker() {
//   const lockerContents = useContext(Locker)
//   if (lockerContents === undefined) {
//     throw new Error("You can't get into this locker.")
//   }

//   return lockerContents
// }

// function LockerCode(props) {
//   const lockerContents = {
//     snack: 'gummies',
//     book: 'textbooks',
//     backups: 'pencils',
//     money: 20,
//     isClean: true,
//     textbooks: ['history', 'math', 'science'],
//   }

//   return <Locker.Provider value={lockerContents} {...props} />
// }
// function Ish() {
//   const lockerContents = useLocker()

//   return <div>I have ${lockerContents.money} in my locker.</div>
// }
/**
 *
 *   LOCKER CONTEXT END
 *
 */

function CountProvider({children, ...restProps}) {
  const [count, setCount] = useState(0)
  const value = [count, setCount]

  return (
    <CountContext.Provider value={value} {...restProps}>
      {children}
    </CountContext.Provider>
  )
}

function CountDisplay() {
  const [count] = useCount(CountContext)
  console.log(count)

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount(CountContext)

  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
