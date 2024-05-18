import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './assets/Test'


function App() {
  
  const [count, setCount] = useState(0)
  function counter() {
    setCount((count)=>count+1)
  }
  
  return (
    <>
      <div className="card">
        <button onClick={counter}>
         {count}
        </button>
      </div>
      <Test />
    </>
  )
}

export default App
