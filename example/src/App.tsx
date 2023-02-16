import { useState } from 'react'
import { useInterval, useTitle, useSetState } from "@vinsurs/react-hooks"
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [state, setState] = useSetState({
    count: 0
  })
  useTitle(state.count + " ship is running")
  useInterval(() => {
    console.log("the value is ", state.count)
  }, 1000)
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setState(({count}) => ({count: count + 1}))}>
          count is {state.count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
