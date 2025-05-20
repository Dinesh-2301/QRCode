import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './styles/QrCode.css'

import App from './App.jsx'
import { QrCode } from './Components/QrCode.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <QrCode/> 
)
