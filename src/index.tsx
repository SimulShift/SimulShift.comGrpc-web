import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import LoginContextProvider from './auth/LoginContext'
import ThemeRegistry from './Theme/ThemeRegistry'
import MainNav from './navbar/MainNav'

export const metadata = {
  title: 'SimulShift',
  description:
    'SimulShift is a streamer who is building a chatbot for twitch and eventually other platforms such as Discord.',
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNav />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <ThemeRegistry>
        <RouterProvider router={router}></RouterProvider>
      </ThemeRegistry>
    </LoginContextProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
