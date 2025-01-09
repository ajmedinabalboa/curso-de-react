import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './Components/Home/Logo.jsx'
import Body from './Components/Home/Body.jsx'
import Footer from './Components/Home/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
