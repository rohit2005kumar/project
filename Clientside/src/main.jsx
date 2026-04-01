import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { EcommerceProvider } from './context/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <EcommerceProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </EcommerceProvider>
  </BrowserRouter>
)
