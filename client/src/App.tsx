import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import ResumeCard from './components/ResumeCard'
import PDFGenerator from './components/PDFGenerator'

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (width <= 1200) {
    return (
      <div className="layout notfound">
        <h1>Disply is not represent at less width 1200 px and not support mobile. Thank !</h1>
      </div>
    )
  }


  return (

      <Wrapper>
        <ResumeCard />
      </Wrapper>
  )
}

export default App
