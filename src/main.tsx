import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './Home/Home.tsx'
// import Work from './Work/Work.tsx'
import './index.css'
import Root from './Root.tsx'


const router = createBrowserRouter([
  // I pulled out the router stuff because I was getting permissions errors
  // and troubleshooting that sounded boring
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />
      },
      // {
      //   path: "work",
      //   element: <Work />,
      //   // loader: teamLoader,
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
