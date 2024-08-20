import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Layout } from './layout'
import { QrCodeGenerator } from './qrGenerator'
import { QrCodeScanner } from './qrScanner'
import { Navigation } from './navigation'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />
  },
  {
    path: "/generate",
    element: <  QrCodeGenerator />
  },
  {
    path: "/scan",
    element: < QrCodeScanner />
  }
])

createRoot(document.getElementById('root')).render(
  // <Layout />
  <RouterProvider router={router} />
)
