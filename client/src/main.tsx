import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import App from './App'
import './index.css'
import './normalize.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Resume />} />
        <Route path='/portfolio' element={ <Portfolio />} />
        <Route path='*' element={ <Resume />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
