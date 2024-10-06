import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function Logo() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
function WelcomePage() {
  return (
    <>
      <Logo></Logo>
      <Counter></Counter>
    </>
  )
}




function App() {
  return (
    <>
      <WelcomePage></WelcomePage>
      <WelcomePage></WelcomePage>
      <WelcomePage></WelcomePage>
    </>

  )
}

export default App
