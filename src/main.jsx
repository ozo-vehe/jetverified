import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import App from './App'
import SignUp from './routes/sign-up'
import PageError  from './routes/page-error'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <PageError/>,
    children: [
      {
        path: "/",
        element: <LandingPage/>,
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      }
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
