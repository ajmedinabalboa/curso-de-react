import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './screens/Home.jsx'
import Counter from './Components/Counter/Counter.jsx'
import Product from './screens/Product.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product/>  
    </>
  )
}

export default App
