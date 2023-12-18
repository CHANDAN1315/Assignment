import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wraping the app with the BrowserRouter which enable us to use the router functionality */}
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
)
