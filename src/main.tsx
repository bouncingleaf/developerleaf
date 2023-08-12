import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import About from './About/About.tsx'
import Blog from './Blog/Blog.tsx'
import Home from './Home/Home.tsx'
import './index.css'
import Resources from './Resources/Resources.tsx'
import Root from './Root.tsx'
import Tech from './Tech/Tech.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "resources",
        element: <Resources />
      },
      {
        path: "tech",
        element: <Tech />,
        // loader: teamLoader,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
