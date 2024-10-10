import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'




const queryclient = new QueryClient()

createRoot(document.getElementById('root')).render(


  <StrictMode>

    <BrowserRouter>

      <QueryClientProvider client={queryclient}>


        <App />


      </QueryClientProvider>

    </BrowserRouter>


  </StrictMode>,



)
