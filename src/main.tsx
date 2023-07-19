import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Login from './components/moleculis/Login'
import Table from './components/atoms/Table'
import AboutMe from './Pages/AboutMe'


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  
)
