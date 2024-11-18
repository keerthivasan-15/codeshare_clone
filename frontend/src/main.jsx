import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SocketContextProvider } from "./context/socketContext.jsx";
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <SocketContextProvider>
  <App />
  </SocketContextProvider>
  </BrowserRouter>
  </StrictMode>,
)
