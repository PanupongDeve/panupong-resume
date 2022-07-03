import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import  ResumeCard from './components/ResumeCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="layout">
      <Navbar />
      <Wrapper>
        <ResumeCard />
      </Wrapper>
    </div>
  )
}

export default App
