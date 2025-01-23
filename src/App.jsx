import { useState } from 'react'
import './App.css'

import Navigator from "./Components/Navigation/Navigator.jsx";
import Router from "./Components/Navigation/Router.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigator/>
      <Router/>
    </>
    
  )
}

export default App
