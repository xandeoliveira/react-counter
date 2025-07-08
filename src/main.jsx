import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './style.css'
import Home from './pages/Home'
import Credits from './pages/Credits'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/creditos",
    element: <Credits />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
