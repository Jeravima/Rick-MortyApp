import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RickApp } from './RickApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RickApp/>
  </StrictMode>,
)
