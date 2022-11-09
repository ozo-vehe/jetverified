import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/login'
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
        path: "jetverify/",
        element: <LandingPage/>,
      },
      {
        path: "jetverify/signup",
        element: <SignUp/>
      },
      {
        path: "jetverify/login",
        element: <Login />
      },
      {
        path: "jetverify/dashboard",
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
