import Nav from './Nav'
import {
  Outlet,
} from "react-router-dom";

import './App.css'

function Root() {

  return (
    <>
      <Nav />
      <h1>Hi! I'm Leaf.</h1>
      <Outlet />
    </>
  )
}

export default Root
