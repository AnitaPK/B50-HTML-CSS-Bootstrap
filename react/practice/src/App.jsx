import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Greetings from './components/Greetings'
import hederImge from './assets/headerImage.jpg'
import Counter from './components/Counter'
import ProjectDetail from './components/ProjectDetail'
import LoginPage from './components/LoginPage'

function App() {

  return (
  <>
  <LoginPage />
  <Counter />
  <ProjectDetail />
      <h1> Batch 50</h1>
      <p>fgh dfghj cvbn gthj vbn hjk</p>
      <button style={{color:"red"}}>Click me Element</button>
      <Button btnName='Click Me' /><br />
      <Button btnName='Register'/><br />
      <Button btnName='Login' /><br />
      <Button btnName='Submit'/><br />
      <Greetings user={{fname:'Rohit',lName:'Saraf'}}/>
      <Greetings user={{fname:'Siddharth', lName:'Malhotra'}} />
      <Greetings user={{fname:'Vijay', lName:'South'}} />
      <Greetings user={{fname:'Arjun', lName:'Das'}} />
      <Greetings user={{fname:'Kalyani', lName:'PriyDarshni'}} />
<img src={hederImge} alt='image not shown' />

  </>

  )
}

export default App
