import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greetings'
import img1 from './assets/react.svg'
import Navbar from './components/TributePage/Navbar'
import Header from './components/TributePage/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h3>Learnig React</h3>
      <Greeting girl='Samantha' />
      <Greeting girl='Alia Bhat' />
      <Greeting girl='Shraddha Kapoor' />
      <Greeting girl="Sidhart's Secret" />
      <img src={img1} alt="image not shown" /> */}
      <Navbar />
      <Header />

    </> 
  )
}

export default App
