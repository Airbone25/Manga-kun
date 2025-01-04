import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoginContextProvider } from './contexts/LoginContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </StrictMode>,
)
