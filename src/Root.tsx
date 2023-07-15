import Nav from './Nav/Nav'
import Footer from './Footer/Footer';
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
      <Footer />
    </>
  )
}

export default Root
