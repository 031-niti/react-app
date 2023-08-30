import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostClassComponent from './component/PostClassComponent'
import PostFunComponent from './component/PostFunComponent'
import Comments from './component/Comments'
import StateInClass from './component/StateInClass'
import StateInFunction from './component/StateInFunction'
import Card from './component/Card'




function App() {
  const [count, setCount] = useState(0)

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
      <h1>React Demo</h1>

      <StateInClass />

      <StateInFunction id ="3" name="exrth"/>

      <Card />
    </>
  )
}

export default App
